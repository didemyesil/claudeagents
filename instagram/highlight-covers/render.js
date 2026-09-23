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

// Eğitim alternatifleri
Object.assign(icons, {
  // A: Sertifika + rozet
  egitim_a: `
    <rect x="300" y="330" width="420" height="320" rx="18" fill="${WHITE}" ${S}/>
    <rect x="330" y="360" width="360" height="260" rx="8" fill="none" stroke="${LAV2}" stroke-width="8"/>
    <path d="M380 420 H600" stroke="${PURPLE}" stroke-width="16" stroke-linecap="round"/>
    <path d="M380 470 H560 M380 510 H520" stroke="${INK}" stroke-width="10" stroke-linecap="round"/>
    <path d="M380 570 C400 550 420 590 450 566" stroke="${INK}" stroke-width="8" stroke-linecap="round" fill="none"/>
    <path d="M640 600 L610 760 L650 734 L684 770 L700 620 Z" fill="${PURPLE}" ${S}/>
    <path d="M720 600 L750 760 L710 734 L676 770 L660 620 Z" fill="${PURPLE}" ${S}/>
    <circle cx="680" cy="580" r="86" fill="${YELLOW}" ${S}/>
    <circle cx="680" cy="580" r="52" fill="${IVORY}" stroke="${INK}" stroke-width="8"/>
    <path d="M656 580 l18 18 l32 -36" stroke="${INK}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  // B: Açık kitaptan filizlenen bitki (Grow with Tech'e gönderme)
  egitim_b: `
    <path d="M540 620 C470 580 380 570 290 590 V780 C380 760 470 770 540 810 Z" fill="${WHITE}" ${S}/>
    <path d="M540 620 C610 580 700 570 790 590 V780 C700 760 610 770 540 810 Z" fill="${WHITE}" ${S}/>
    <path d="M540 620 V810" ${S}/>
    <path d="M330 650 C390 638 450 642 500 664 M330 700 C390 688 450 692 500 714" stroke="${LAV2}" stroke-width="10" stroke-linecap="round" fill="none"/>
    <path d="M580 664 C630 642 690 638 750 650 M580 714 C630 692 690 688 750 700" stroke="${LAV2}" stroke-width="10" stroke-linecap="round" fill="none"/>
    <path d="M540 610 C540 520 546 420 540 330" ${S} fill="none"/>
    <path d="M540 470 C460 480 390 430 380 350 C460 340 530 390 540 470 Z" fill="${GREEN}" ${S}/>
    <path d="M540 410 C610 420 680 370 690 290 C610 280 548 330 540 410 Z" fill="${PURPLE}" ${S}/>
    <path d="M540 540 C600 548 650 510 660 460 C606 452 552 486 540 540 Z" fill="${YELLOW}" ${S}/>
    <path d="M540 470 C500 440 460 405 430 380 M540 410 C580 380 620 345 650 320" stroke="${INK}" stroke-width="6" stroke-linecap="round" fill="none"/>`,
  // C: Kitap yığını + ampul
  egitim_c: `
    <rect x="320" y="700" width="420" height="80" rx="12" fill="${PURPLE}" ${S}/>
    <path d="M700 716 V764" stroke="${IVORY}" stroke-width="10" stroke-linecap="round"/>
    <rect x="350" y="620" width="380" height="80" rx="12" fill="${YELLOW}" ${S}/>
    <path d="M390 636 V684" stroke="${INK}" stroke-width="10" stroke-linecap="round"/>
    <rect x="380" y="540" width="330" height="80" rx="12" fill="${GREEN}" ${S} transform="rotate(-3 545 580)"/>
    <path d="M500 540 C500 470 430 450 430 380 C430 316 480 270 545 270 C610 270 660 316 660 380 C660 450 590 470 590 540 Z" fill="${IVORY}" ${S}/>
    <path d="M500 540 H590" ${S}/>
    <path d="M512 500 C512 450 545 430 545 390 M578 500 C578 450 545 430 545 390" stroke="${PURPLE}" stroke-width="10" stroke-linecap="round" fill="none"/>
    <rect x="508" y="540" width="74" height="40" rx="10" fill="${LAV2}" ${S} transform="translate(0 -8)"/>`,
});

// Atölye alternatifleri
Object.assign(icons, {
  // A: Masa etrafında grup çalışması
  atolye_a: `
    <path d="M296 562 C296 486 330 462 380 462 C430 462 464 486 464 562 Z" fill="${YELLOW}" ${S}/>
    <circle cx="380" cy="392" r="50" fill="${YELLOW}" ${S}/>
    <path d="M616 562 C616 486 650 462 700 462 C750 462 784 486 784 562 Z" fill="${GREEN}" ${S}/>
    <circle cx="700" cy="392" r="50" fill="${GREEN}" ${S}/>
    <path d="M444 562 C444 456 488 426 540 426 C592 426 636 456 636 562 Z" fill="${PURPLE}" ${S}/>
    <circle cx="540" cy="348" r="56" fill="${LAV2}" ${S}/>
    <rect x="260" y="560" width="560" height="48" rx="14" fill="${WHITE}" ${S}/>
    <path d="M320 608 V740 M760 608 V740" ${S}/>
    <rect x="478" y="488" width="124" height="74" rx="10" fill="${WHITE}" stroke="${INK}" stroke-width="10"/>
    <circle cx="540" cy="524" r="9" fill="${PURPLE}"/>
    <rect x="322" y="530" width="84" height="32" rx="6" fill="${IVORY}" stroke="${INK}" stroke-width="8" transform="rotate(-6 364 546)"/>
    <rect x="672" y="530" width="84" height="32" rx="6" fill="${LAV2}" stroke="${INK}" stroke-width="8" transform="rotate(5 714 546)"/>`,
  // B: Alet çantası (uygulamalı çalışma)
  atolye_b: `
    <path d="M470 440 V390 C470 370 480 360 500 360 H580 C600 360 610 370 610 390 V440" fill="none" ${S}/>
    <g transform="rotate(-18 400 360)">
      <rect x="378" y="290" width="44" height="160" rx="8" fill="${LAV2}" stroke="${INK}" stroke-width="10"/>
      <path d="M378 290 L400 244 L422 290 Z" fill="${IVORY}" stroke="${INK}" stroke-width="10" stroke-linejoin="round"/>
    </g>
    <rect x="640" y="290" width="44" height="170" rx="6" fill="${YELLOW}" stroke="${INK}" stroke-width="10" transform="rotate(14 662 375)"/>
    <path d="M654 320 h20 M654 350 h14 M654 380 h20 M654 410 h14" stroke="${INK}" stroke-width="6" stroke-linecap="round" transform="rotate(14 662 375)"/>
    <rect x="300" y="440" width="480" height="300" rx="24" fill="${PURPLE}" ${S}/>
    <path d="M300 540 H780" ${S}/>
    <rect x="500" y="510" width="80" height="60" rx="10" fill="${YELLOW}" stroke="${INK}" stroke-width="10"/>
    <path d="M360 620 H460 M360 670 H430" stroke="${LAV2}" stroke-width="12" stroke-linecap="round"/>`,
  // C: Görev panosu / clipboard + kalem
  atolye_c: `
    <rect x="340" y="300" width="360" height="460" rx="24" fill="${PURPLE}" ${S}/>
    <rect x="375" y="345" width="290" height="380" rx="10" fill="${WHITE}" stroke="${INK}" stroke-width="10"/>
    <rect x="450" y="272" width="140" height="62" rx="14" fill="${YELLOW}" ${S}/>
    <rect x="405" y="400" width="44" height="44" rx="8" fill="${GREEN}" stroke="${INK}" stroke-width="8"/>
    <path d="M414 422 l10 10 l18 -20" stroke="${INK}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M472 422 H620" stroke="${INK}" stroke-width="10" stroke-linecap="round"/>
    <rect x="405" y="490" width="44" height="44" rx="8" fill="${GREEN}" stroke="${INK}" stroke-width="8"/>
    <path d="M414 512 l10 10 l18 -20" stroke="${INK}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M472 512 H600" stroke="${INK}" stroke-width="10" stroke-linecap="round"/>
    <rect x="405" y="580" width="44" height="44" rx="8" fill="${WHITE}" stroke="${INK}" stroke-width="8"/>
    <path d="M472 602 H580" stroke="${LAV2}" stroke-width="10" stroke-linecap="round"/>
    <g transform="rotate(35 700 600)">
      <rect x="678" y="480" width="44" height="170" rx="8" fill="${YELLOW}" stroke="${INK}" stroke-width="8"/>
      <path d="M678 650 L700 700 L722 650 Z" fill="${IVORY}" stroke="${INK}" stroke-width="8" stroke-linejoin="round"/>
      <rect x="678" y="480" width="44" height="28" rx="6" fill="${PURPLE}" stroke="${INK}" stroke-width="8"/>
    </g>`,
});

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
  const row = ['webinar','atolye','egitim'].map(k => `<div style="text-align:center;font:28px sans-serif;color:#222">
    <div style="width:220px;height:220px;border-radius:50%;padding:8px;border:3px solid #ddd">
    <div style="width:220px;height:220px;border-radius:50%;overflow:hidden">${svg(k,1080,1080).replace('width="1080" height="1080"','width="220" height="220"')}</div></div>
    <div style="margin-top:14px">${{webinar:'Webinar',atolye:'Atölye',egitim:'Eğitim'}[k]}</div></div>`).join('');
  await page.setViewportSize({ width: 900, height: 360 });
  await page.setContent(`<html><body style="margin:0;background:#fff;display:flex;gap:50px;padding:40px 60px">${row}</body></html>`);
  await page.screenshot({ path: 'onizleme.png' });
  const opts = [['egitim','Şu anki'],['egitim_a','A · Sertifika'],['egitim_b','B · Filizlenen kitap'],['egitim_c','C · Kitap + ampul']];
  const row2 = opts.map(([k,l]) => `<div style="text-align:center;font:26px sans-serif;color:#222">
    <div style="width:220px;height:220px;border-radius:50%;padding:8px;border:3px solid #ddd">
    <div style="width:220px;height:220px;border-radius:50%;overflow:hidden">${svg(k,1080,1080).replace('width="1080" height="1080"','width="220" height="220"')}</div></div>
    <div style="margin-top:14px">${l}</div></div>`).join('');
  await page.setViewportSize({ width: 1200, height: 360 });
  await page.setContent(`<html><body style="margin:0;background:#fff;display:flex;gap:40px;padding:40px 50px">${row2}</body></html>`);
  await page.screenshot({ path: 'egitim-secenekler.png' });
  const opts3 = [['atolye','Şu anki'],['atolye_a','A · Grup çalışması'],['atolye_b','B · Alet çantası'],['atolye_c','C · Görev panosu']];
  const row3 = opts3.map(([k,l]) => `<div style="text-align:center;font:26px sans-serif;color:#222">
    <div style="width:220px;height:220px;border-radius:50%;padding:8px;border:3px solid #ddd">
    <div style="width:220px;height:220px;border-radius:50%;overflow:hidden">${svg(k,1080,1080).replace('width="1080" height="1080"','width="220" height="220"')}</div></div>
    <div style="margin-top:14px">${l}</div></div>`).join('');
  await page.setContent(`<html><body style="margin:0;background:#fff;display:flex;gap:40px;padding:40px 50px">${row3}</body></html>`);
  await page.screenshot({ path: 'atolye-secenekler.png' });
  await browser.close();
})();
