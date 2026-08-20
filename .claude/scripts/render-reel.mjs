// Sahne HTML'lerini 1080x1920 MP4 reel'e cevirir (H.264, sessiz).
// Ses yok: Instagram'da trend ses/muzik uygulama sirasinda eklenir.
//
// kullanim: node render-reel.mjs <sahneler.json> <cikti.mp4>
//
// sahneler.json bicimi:
// { "sahneler": [ { "html": "sahne-1.html", "sure": 3.5 }, ... ], "gecis": 0.35 }
// Toplam sure 30 saniyeyi asarsa script hata verir (Instagram kesfet hedefi).
import { execFileSync } from 'node:child_process';
import { readFileSync, mkdtempSync, rmSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { tmpdir } from 'node:os';
import { chromium } from 'playwright';
import ffmpeg from 'ffmpeg-static';
import { chromiumPath } from './browser.mjs';

const [, , tarifYolu, ciktiYolu] = process.argv;
if (!tarifYolu || !ciktiYolu) {
  console.error('kullanim: node render-reel.mjs <sahneler.json> <cikti.mp4>');
  process.exit(1);
}

const tarif = JSON.parse(readFileSync(tarifYolu, 'utf8'));
const kok = dirname(resolve(tarifYolu));
const gecis = tarif.gecis ?? 0.35;
const sahneler = tarif.sahneler;

if (!sahneler?.length) { console.error('sahne yok'); process.exit(1); }

const toplam = sahneler.reduce((t, s) => t + s.sure, 0) - gecis * (sahneler.length - 1);
if (toplam > 30.5) {
  console.error(`Toplam sure ${toplam.toFixed(1)}s — 30 saniye sinirini asiyor. Sahne kisalt.`);
  process.exit(1);
}

const gecici = mkdtempSync(join(tmpdir(), 'reel-'));
try {
  const tarayici = await chromium.launch({ executablePath: chromiumPath() });
  const sayfa = await tarayici.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  const kareler = [];
  for (const [i, s] of sahneler.entries()) {
    await sayfa.goto('file://' + resolve(kok, s.html));
    await sayfa.evaluate(() => document.fonts.ready);
    await sayfa.waitForTimeout(250);
    const png = join(gecici, `s${i}.png`);
    await sayfa.screenshot({ path: png });
    kareler.push(png);
    console.log(`sahne ${i + 1}/${sahneler.length}: ${s.sure}s`);
  }
  await tarayici.close();

  // her sahne icin bir girdi, aralarina crossfade
  const girdiArgs = kareler.flatMap((k, i) => ['-loop', '1', '-t', String(sahneler[i].sure), '-i', k]);
  let filtre = '';
  let onceki = '0';
  let ofset = 0;
  for (let i = 1; i < kareler.length; i++) {
    ofset += sahneler[i - 1].sure - (i > 1 ? gecis : 0);
    const etiket = i === kareler.length - 1 ? 'son' : `a${i}`;
    filtre += `[${onceki}][${i}]xfade=transition=fade:duration=${gecis}:offset=${ofset.toFixed(3)}[${etiket}];`;
    onceki = etiket;
  }
  filtre += `[${kareler.length > 1 ? 'son' : '0'}]format=yuv420p[v]`;

  execFileSync(ffmpeg, [
    '-y', '-loglevel', 'error',
    ...girdiArgs,
    '-filter_complex', filtre,
    '-map', '[v]',
    '-r', '30', '-c:v', 'libx264', '-preset', 'medium', '-crf', '20',
    '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
    resolve(ciktiYolu),
  ], { stdio: 'inherit' });

  console.log(`MP4: ${resolve(ciktiYolu)} (${toplam.toFixed(1)}s, sessiz)`);
} finally {
  rmSync(gecici, { recursive: true, force: true });
}
