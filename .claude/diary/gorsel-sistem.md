# Görsel sistem — içerik agent'ları için

Kurallar `social-media-brand-guide` skill'inde. Bu dosya **bu repodaki uygulamayı** anlatır:
hangi dosya nerede, hangi bileşen ne zaman kullanılır, tekdüzelik nasıl kırılır.

## Dosyalar
| Ne | Nerede |
|---|---|
| Renk, tipografi, bileşenler | `.claude/templates/brand.css` |
| Karusel şablonları | `.claude/templates/karusel-*.html` |
| Reel şablonları | `.claude/templates/reel-*.html` |
| Quicksand fontu | `.claude/assets/fonts/` |
| Render scriptleri | `.claude/scripts/` |

Font **Quicksand**, istisnasız. Başka font kullanma.

## İki ayrı düzen

**Karusel (1080×1350)** — sola hizalı. Sol kenarda tam boy renkli şerit, sağ üstte
çift çizgi + rozetli ilerleme göstergesi, altta ayırıcı çizgi üstünde marka + sayfa no.

**Reel (1080×1920)** — merkez hizalı. Sol şerit **yok**. Gradient zemin, indigo başlık,
başlık altında kısa altın çizgi, altta ortalanmış marka + @kullanıcı.

Bu ikisi karışmaz. Karusel slaydını reel'e, reel sahnesini karusele koyma.

## Renk paleti
| Değişken | Renk | Kullanım |
|---|---|---|
| `--mor` | #6C3FE4 | ana aksan, şerit, pill |
| `--indigo` | #2E2266 | reel başlıkları, koyu paneller |
| `--sari` | #F5C542 | karusel vurgu kutusu |
| `--altin` | #E0AE43 | reel aksanı, CTA, oklar, tikler |
| `--deniz` | #0E9AA7 | **dördüncü renk** — çeşitlilik için |

Zemin her zaman açık (warm white). Tek istisna `tema-koyu` blokları.

## Tekdüzeliği kırmak — bu bir kural, tercih değil

Her hafta aynı görünen içerik en büyük risk. Şu araçlar var:

**1. Tema sınıfları.** Her slayt/sahne `tema-mor`, `tema-deniz`, `tema-altin` ya da
`tema-koyu` alabilir. Aksan rengi, sol şerit, vurgular otomatik değişir.
- Bir karusel içinde en fazla **iki** farklı tema. Üç ve üzeri dağıtır.
- Kapak ve kapanış aynı temada olsun, ortası farklılaşsın.
- Bir karuselde en fazla **bir-iki** `tema-koyu` slayt — ritmi kırar, çoğalınca ağırlaşır.

**2. Şablon çeşitliliği.** Yedi karusel, beş reel şablonu var. Aynı karuselde
`karusel-icerik`i altı kez tekrarlama. Liste, karşılaştırma, koyu blok karıştır.

**2b. Kapak dönüşümlü.** Üç kapak var, her hafta aynısını kullanma:
- `karusel-kapak` — başlık + sarı vurgu kutusu + not kutusu
- `karusel-kapak-buyuk` — **ölçek kontrastı**: tek kelime devasa, önizleme kartlarıyla
- `karusel-kapak-foto` — Didem'in fotoğrafı layout'a entegre

Ölçek kontrastı kapağı durdurucu yapan şeydir: bir kelime slaytın yarısı, gerisi küçük.
Her şeyin aynı boyda olduğu kapak sakin görünür ama parmağı durdurmaz.

**2c. Fotoğraf varyasyonu.** `.claude/assets/foto/` içinde birkaç fotoğraf var
(pc başında, elinde pc, konuşurken, portre). Konuya uyanı seç, üst üste iki hafta
aynısını kullanma. Yerleşim de değişsin: `foto-sagda`, `foto-altta`, `.foto-blok`.
Fotoğraf yoksa fotoğrafsız kapaklardan birini kullan — placeholder koyma.

**3. Bileşen çeşitliliği.** `vurgu-kutu`, `not-kutu`, `pill`, `balon`, `akis`,
`koyu-panel`, `kart`, `cta`, `dev-numara`. Hepsi her seferinde kullanılmaz —
içeriğin ihtiyacına göre seç.

**4. Yeni bileşen üretmek serbest.** Şablonlar tavan değil taban. İçerik farklı bir
görsel yapı istiyorsa `brand.css` değişkenlerini kullanarak yeni bir yapı kur.
Şartlar: Quicksand, açık zemin, paletteki renkler, bol whitespace, tek fikir.

**Geçen haftaya bak.** Çıktı klasörlerinde önceki haftaların içeriği var.
Aynı şablon-tema kombinasyonunu üst üste iki hafta kullanma.

## Uydurulmayacak şeyler
- **Logo yok.** "Grow with Tech" sadece tipografi olarak yazılır. Yanına sembol,
  ikon, monogram, kıvılcım, daire koyma. Bu kural estetiğin üstündedir.
- Robot, beyin, devre, hologram, neon görselleri yok.
- Ağır gölge, 3D, parlak kart, kalın çerçeve yok.

## Render

```
cd .claude/scripts
PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers node render-png.mjs <cikti> 1080 1350 <slayt.html>...
PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers node render-reel.mjs <sahneler.json> <cikti.mp4>
```

`node_modules` yoksa önce `.claude/scripts` içinde `npm install`.

**Font yolu — brand.css'i KOPYALAMA.** CSS'teki göreli yollar CSS dosyasının bulunduğu
yere göre çözülür. `brand.css` fontu `../assets/fonts/` olarak arar ve bu yol yalnızca
dosya `.claude/templates/` içinde kaldığında doğrudur. Kopyalarsan fontlar yüklenmez.

Bunun yerine HTML'den şablon klasörüne göreli link ver. Çıktı `.claude/cikti/<hafta>/karusel/`
içindeyse:

```html
<link rel="stylesheet" href="../../../templates/brand.css">
```

Şablonlardaki `href="brand.css"` satırını çıktı klasörüne yazarken bu şekilde güncelle.

**Render sonrası PNG'ye Read tool ile bak.** Script hata vermeden de metin taşabilir.
Taşma varsa metni kısalt. Font küçültmek yasak.
