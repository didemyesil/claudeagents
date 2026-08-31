# Kapak fotoğrafları

Buraya Didem'in kapaklarda kullanılacak fotoğrafları konur. Birkaç varyasyon olsun ki
her hafta aynı kapak çıkmasın:

| Dosya adı | Ne | Nerede iyi durur |
|---|---|---|
| `didem-pc.jpg` | Bilgisayar başında, çalışırken | "denedim / kurdum" tipi içerik |
| `didem-elde-pc.jpg` | Elinde dizüstü, ayakta | "anlatıyorum / gösteriyorum" |
| `didem-konusma.jpg` | Konuşurken, sunum anı | webinar, etkinlik duyurusu |
| `didem-portre.jpg` | Sakin portre, nötr zemin | düşünce içerikleri |

Her `.jpg` için bir de arka planı temizlenmiş `-kesilmis.png` (transparan, RGBA) hali var
(ör. `didem-portre-kesilmis.png`, `didem-portre-2-kesilmis.png`).

## Kurallar (brand guide'dan) — **kesin, istisnasız**

**Kapakta HER ZAMAN `-kesilmis.png` (transparan) kullanılır, düz `.jpg` asla.**
Didem bunu açıkça yasakladı: `.jpg`'nin kendi arka planı (oda, yatak vb.) göründüğünde
fotoğraf sahneye yapıştırılmış gibi durup çirkinleşiyor. Transparan kesim, markanın
kendi zemin rengiyle (mor/deniz/vb.) birleşip tek bir kompozisyon gibi görünmeli —
referans: Instagram'da gördüğümüz "31 Claude skills" kapağı, elinde eşya tutan kesilmiş
eller/objelerle aynı zemin üstünde bütünleşiyor, fotoğraf ayrı bir dikdörtgen blok değil.

- Fotoğraf layout'a **entegre** olur — köşeye yapıştırılmış profil dairesi değil,
  ayrı bir dikdörtgen blok da değil; zemin rengiyle aynı sahnenin parçası
- Doğal ten tonu korunur; yüze mor overlay, renk filtresi, ağır rötuş yok
- Gerçekçi ışık. Kurumsal stok fotoğraf havası yok
- Gerektiğinde geniş ve kendinden emin kesit kullanılabilir
- `.jpg` dosyaları sadece kesim gerekmeyen bir kullanım çıkarsa (şimdilik yok) referans
  olarak kalsın — üretimde kullanılmaz

## Teknik
- En az 1400px genişlik (1080px'lik tuvalde kırpma payı kalsın)
- JPG ya da PNG
- Yatay ya da dikey olabilir; `object-position` ile kadraj ayarlanır
