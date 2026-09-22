// Grow with Tech — Instagram highlight kapakları (1080x1080 + 1080x1920)
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs = require('fs');

const INK = '#2E2266', PURPLE = '#6C3FE4', LAV = '#EEE8FD', LAV2 = '#D9CCFB',
      YELLOW = '#F5C542', IVORY = '#FFF4DD', GREEN = '#A9B99A', WHITE = '#FFFFFF';
const S = `stroke="${INK}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"`;

// Ortak zemin: lavanta arka plan + hafif düzensiz krem leke (daire kırpmasında ortada kalır)
const blob = `<path d="M540 250 C700 244 842 352 838 530 C834 700 716 836 536 832 C360 828 238 712 244 536 C250 372 372 256 540 250Z" fill="${IVORY}"/>`;
// Küçük el çizimi aksanlar (kısa çizgiler + noktalar), ikona değmez
const accents = (c) => `
  <g stroke="${c}" stroke-width="12" stroke-linecap="round" fill="none">
    <path d="M232 250 l-34 -30"/><path d="M262 222 l-8 -44"/><path d="M204 290 l-44 -6"/>
  </g>
  <circle cx="850" cy="820" r="12" fill="${c}"/><circle cx="890" cy="780" r="7" fill="${c}"/>`;

const icons = {
  // Laptop + canlı görüntülü görüşme ekranı
  webinar: `
    <rect x="300" y="360" width="480" height="320" rx="26" fill="${PURPLE}" ${S}/>
    <rect x="330" y="390" width="420" height="260" rx="10" fill="${WHITE}" stroke="${INK}" stroke-width="8"/>
    <circle cx="540" cy="485" r="42" fill="${YELLOW}" stroke="${INK}" stroke-width="8"/>
    <path d="M462 612 C470 552 610 552 618 612" fill="${YELLOW}" stroke="${INK}" stroke-width="8"/>
    <rect x="352" y="410" width="74" height="30" rx="15" fill="${PURPLE}"/>
    <circle cx="372" cy="425" r="7" fill="${WHITE}"/><rect x="386" y="419" width="28" height="12" rx="6" fill="${WHITE}"/>
    <rect x="652" y="566" width="80" height="62" rx="8" fill="${LAV2}" stroke="${INK}" stroke-width="6"/>
    <circle cx="692" cy="590" r="12" fill="${GREEN}"/>
    <path d="M250 690 H830 L800 736 C796 742 790 744 784 744 H296 C290 744 284 742 280 736 Z" fill="${LAV2}" ${S}/>
    <path d="M500 700 H580" stroke="${INK}" stroke-width="10" stroke-linecap="round"/>`,
  // Atölye: sehpa üstünde yazı tahtası + yapışkan notlar + kalem
  atolye: `
    <path d="M430 690 L390 800 M650 690 L690 800 M540 690 V790" ${S} fill="none"/>
    <rect x="320" y="300" width="440" height="400" rx="22" fill="${WHITE}" ${S}/>
    <rect x="515" y="276" width="50" height="34" rx="8" fill="${PURPLE}" stroke="${INK}" stroke-width="8"/>
    <rect x="360" y="350" width="140" height="130" rx="8" fill="${YELLOW}" stroke="${INK}" stroke-width="8" transform="rotate(-4 430 415)"/>
    <path d="M384 395 H470 M384 425 H452" stroke="${INK}" stroke-width="8" stroke-linecap="round" transform="rotate(-4 430 415)"/>
    <rect x="530" y="344" width="140" height="130" rx="8" fill="${LAV2}" stroke="${INK}" stroke-width="8" transform="rotate(3 600 409)"/>
    <path d="M554 389 H640 M554 419 H616" stroke="${INK}" stroke-width="8" stroke-linecap="round" transform="rotate(3 600 409)"/>
    <rect x="370" y="520" width="140" height="130" rx="8" fill="${GREEN}" stroke="${INK}" stroke-width="8" transform="rotate(2 440 585)"/>
    <path d="M394 575 l22 22 l40 -44" stroke="${INK}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none" transform="rotate(2 440 585)"/>
    <path d="M545 560 C580 530 610 600 650 570 C680 548 700 590 720 580" stroke="${PURPLE}" stroke-width="10" stroke-linecap="round" fill="none"/>
    <g transform="rotate(38 700 620)">
      <rect x="670" y="560" width="46" height="150" rx="8" fill="${PURPLE}" stroke="${INK}" stroke-width="8"/>
      <path d="M670 710 L693 752 L716 710 Z" fill="${IVORY}" stroke="${INK}" stroke-width="8" stroke-linejoin="round"/>
      <rect x="670" y="560" width="46" height="26" rx="6" fill="${YELLOW}" stroke="${INK}" stroke-width="8"/>
    </g>`,
  // Eğitim: açık kitap + mezuniyet kepi
  egitim: `
    <path d="M540 560 C470 520 380 510 290 530 V770 C380 750 470 760 540 800 Z" fill="${WHITE}" ${S}/>
    <path d="M540 560 C610 520 700 510 790 530 V770 C700 750 610 760 540 800 Z" fill="${WHITE}" ${S}/>
    <path d="M540 560 V800" ${S}/>
    <path d="M330 590 C390 578 450 582 500 604 M330 640 C390 628 450 632 500 654 M330 690 C380 680 430 682 470 698" stroke="${LAV2}" stroke-width="10" stroke-linecap="round" fill="none"/>
    <path d="M580 604 C630 582 690 578 750 590 M580 654 C630 632 690 628 750 640" stroke="${LAV2}" stroke-width="10" stroke-linecap="round" fill="none"/>
    <path d="M430 400 V470 C430 500 650 500 650 470 V400" fill="${PURPLE}" ${S}/>
    <path d="M540 300 L760 380 L540 460 L320 380 Z" fill="${PURPLE}" ${S}/>
    <path d="M540 380 L700 420 V500" stroke="${INK}" stroke-width="10" stroke-linecap="round" fill="none"/>
    <path d="M688 500 h24 l8 44 h-40 Z" fill="${YELLOW}" stroke="${INK}" stroke-width="8" stroke-linejoin="round"/>
    <circle cx="540" cy="380" r="14" fill="${YELLOW}" stroke="${INK}" stroke-width="6"/>`,
};

const svg = (key, w, h) => {
  const dy = (h - 1080) / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${LAV}"/>
  <g transform="translate(${(w-1080)/2} ${dy})"><g transform="translate(540 540) scale(1.15) translate(-540 -540)">${blob}${icons[key]}</g>${accents(YELLOW)}</g></svg>`;
};

(async () => {
  const browser = await chromium.launch({  });
  const page = await browser.newPage();
  fs.mkdirSync('png', { recursive: true });
  for (const key of Object.keys(icons)) {
    for (const [w, h, tag] of [[1080, 1080, 'kare'], [1080, 1920, 'story']]) {
      const s = svg(key, w, h);
      if (tag === 'kare') fs.writeFileSync(`${key}.svg`, s);
      await page.setViewportSize({ width: w, height: h });
      await page.setContent(`<html><body style="margin:0">${s}</body></html>`);
      await page.screenshot({ path: `png/${key}-${tag}.png` });
    }
  }
  // Önizleme: profildeki gibi daire kırpması
  const row = Object.keys(icons).map(k => `<div style="text-align:center;font:28px sans-serif;color:#222">
    <div style="width:220px;height:220px;border-radius:50%;padding:8px;border:3px solid #ddd">
    <div style="width:220px;height:220px;border-radius:50%;overflow:hidden">${svg(k,1080,1080).replace('width="1080" height="1080"','width="220" height="220"')}</div></div>
    <div style="margin-top:14px">${{webinar:'Webinar',atolye:'Atölye',egitim:'Eğitim'}[k]}</div></div>`).join('');
  await page.setViewportSize({ width: 900, height: 360 });
  await page.setContent(`<html><body style="margin:0;background:#fff;display:flex;gap:50px;padding:40px 60px">${row}</body></html>`);
  await page.screenshot({ path: 'onizleme.png' });
  await browser.close();
})();
