// HTML dosyalarini PNG'ye cevirir.
// kullanim: node render-png.mjs <cikti-klasoru> <genislik> <yukseklik> <girdi.html...>
import { chromium } from 'playwright';
import { basename, resolve } from 'node:path';
import { mkdirSync } from 'node:fs';
import { chromiumPath } from './browser.mjs';

const [, , ciktiKlasor, gen, yuk, ...girdiler] = process.argv;
if (!girdiler.length) {
  console.error('kullanim: node render-png.mjs <cikti-klasoru> <genislik> <yukseklik> <girdi.html...>');
  process.exit(1);
}
mkdirSync(ciktiKlasor, { recursive: true });

const tarayici = await chromium.launch({ executablePath: chromiumPath() });
const sayfa = await tarayici.newPage({
  viewport: { width: +gen, height: +yuk },
  deviceScaleFactor: 1,
});

for (const girdi of girdiler) {
  const yol = resolve(girdi);
  await sayfa.goto('file://' + yol);
  await sayfa.evaluate(() => document.fonts.ready);
  await sayfa.waitForTimeout(250);
  const cikti = resolve(ciktiKlasor, basename(girdi).replace(/\.html$/, '.png'));
  await sayfa.screenshot({ path: cikti });
  console.log('PNG:', cikti);
}

await tarayici.close();
