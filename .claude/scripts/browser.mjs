// Ortamdaki hazir Chromium'u bulur. Playwright'in kendi indirdigi surum
// olmayabilir; PLAYWRIGHT_BROWSERS_PATH altindaki build'i tarayip kullanir.
import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

export function chromiumPath() {
  if (process.env.CHROMIUM_PATH && existsSync(process.env.CHROMIUM_PATH)) {
    return process.env.CHROMIUM_PATH;
  }
  const kok = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  if (!existsSync(kok)) return undefined;   // playwright kendi bulsun
  const adaylar = readdirSync(kok)
    .filter(d => d.startsWith('chromium'))
    .sort()
    .reverse()
    .flatMap(d => [
      join(kok, d, 'chrome-linux', 'chrome'),
      join(kok, d, 'chrome-linux', 'headless_shell'),
    ]);
  return adaylar.find(existsSync);
}
