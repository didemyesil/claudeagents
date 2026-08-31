# AI Diary — 2026-W36 — Karusel

## Brief

- İÇERİK: Manuel yapmayı bırakman gereken 3 iş — hangi işlerin ve nasıl scheduled task'a devredilebileceği
- FORMAT: Karusel (7 slayt)
- METODOLOJİ: Listicle-Checklist, uyarlanmış (rol-swimlane süreç diyagramı formatında, Didem'in kendi yazdığı akış)
- HEDEF KİTLE: Tekrarlayan raporlama/takip işi olan profesyonel — proje/ekip yöneticisi, ürün lideri, operasyon
- ANA MESAJ: Sık tekrarlanan, adımları net, girdi/çıktısı belirgin işler yapay zekâya devredilebilir; kontrol ve karar insanda kalır.
- TON: Otorite / Netlik
- BİRİNCİL METRİK: Save
- CTA: Tek, bağlama oturan kaydetme çağrısı (slayt 7) — jenerik "beğen/kaydet/paylaş/takip et" dizisi değil
- ÇEKİRDEK ÖĞRENME: Otomasyona uygun iş: sık tekrarlanan, benzer adımlardan geçen, girdi/çıktısı net, gerekli araçlara erişimi olan iştir. Kontrol noktası insanda kalır.
- İÇERİK ALANI: İş Devri
- DÖNÜŞÜM AŞAMASI: İş Devret
- SOMUT DAYANAK: Yok — bilinçli tercih (bkz. tarz-notlari.md)

## Slayt metinleri

1. **Kapak** — Artık manuel yapmayı bırakman gereken 3 iş
2. **Haftalık durum raporu** — Format hep aynı, veri kaynakların belli. Bunu scheduled task'a bağla, her Cuma 17:00'a tanımla.
3. **Gelen kutusunu özetlemek ve önceliklendirmek** — Claude kendi değerlendirip önceliklendirebiliyor, senin kural yazmana gerek yok.
4. **Haftalık plan** — Takvim, açık işler, geçen haftadan kalanlar; toplama ve sıralamayı scheduled task'a devret.
5. **Nasıl kurulur (ekran görüntülü)** — Scheduled kısmına gir, taslak seç ya da New Task ile kendi talimatını yaz.
6. **Otomasyona buradan başla** — Kapanış çerçevesi: işin adımlarını belirle → araçları bağla → AI'nın yapacağı kısmı tanımla → kontrol noktanı koy.
7. **Kapanış/CTA** — Bu üç işten birini bu hafta dene. Karar verirken tekrar bakmak için kaydet.

## Caption

Her hafta aynı raporu hazırlıyor, aynı listeleri güncelliyor, aynı dokümanı kontrol ediyorsan bu senin için.

Bu işlerin ortak özelliği: sık tekrarlanıyor, adımları belli, girdisi ve çıktısı net. Böyle işlerde yapay zekâ tekrar eden kısmı yürütüyor, kontrol ve son karar sende kalıyor.

Kendi işinde buna uyan bir şey var mı, uygunluk testinden geçir.

Bu üç işten birini bu hafta dene. Karar verirken tekrar bakmak için kaydet.

Grow with Tech

#YapayZeka #İşDevri #Otomasyon #Verimlilik #ProjeYönetimi #YapayZekaylaÇalışmak #GrowWithTech #DijitalDönüşüm

## QA notları

QA'nın kendi düzelttikleri:
- Tema sayısı ihlali: slayt 6 `tema-koyu`'dan `tema-deniz`'e çevrildi (kapak+kapanış mor, ortası deniz — kural: en fazla 2 tema)
- Terim tutarsızlığı: slayt 6'daki "AI" ifadeleri "yapay zekâ" ile değiştirildi
- Eksik caption dosyası oluşturuldu (yukarıdaki caption)
- `carousel-producer.md` agent tanımındaki eski "AI DIARY · İŞ DEVRİ" etiket talimatı güncel yasakla çelişiyordu, düzeltildi

Didem'in karar vermesi gereken:
- Caption QA tarafından sıfırdan yazıldı (orijinal üretici çıktısına erişimi yoktu) — onaylanmalı ya da düzeltilmeli

Director (ben) notu: Görsel olarak PNG'lere baktım, hepsi temiz — marka kimliği tutarlı, metin taşması yok, swimlane diyagramları okunaklı. Zayıf bulduğum bir nokta yok.

## Teknik not

Bu haftaki PNG'ler Drive'a base64 ile yüklenemedi (bkz. sohbet) — token maliyeti aşırı yüksek çıktı. Görseller Didem'e doğrudan chat üzerinden gönderildi.
