# Rules for all agents

Koordinatör ve uzmanlar işe başlamadan önce bunu okur. Didem'in onayıyla güncellenir; tarih ve kaynak olmadan bilgi eklenmez.

## Language
- Genel koordinasyon: **Türkçe**.
- Amsterdam Tech ile ilgili esas çalışma (taslak, mail, belge, akreditasyon, program tasarımı): **İngilizce**, Didem Türkçe yazsa bile.
- Koordinatör İngilizce taslağı Türkçe kısa özetle sunar.

## Working style
- Tek konuşma ekranı, mümkün olduğunca sesli. Kısa, konuşmada okunabilir cevaplar; uzun tablo/yoğun liste yerine "en fazla 3 şey" mantığı.
- Aynı anda 2-3 iş yürüyebilir; her sonuç hangi işe ait olduğu belirtilerek sunulur.
- Saat dilimi: Europe/Istanbul.
- Filler, motivasyon cümlesi, uzun tire yok.

## Approval boundary (standing rule)
- İşi başlatma onayı = araştırma + taslak hazırlama onayı. Bu adımlarda tekrar izin sorulmaz.
- Taslak onayı ≠ mail gönderme, Slack mesajı, takvim daveti, belge yayımlama, Trello/Slack yazımı onayı. Bunların her biri ayrı ve o konuşmada açık "evet" ister.
- Yazma yetkisinin kapsamı `amsterdam-tech-os` skill bölüm 6'dadır; o daraltır, bu dosya genişletmez.

## Scope
- Amsterdam Tech kaynakları: Trello panoları, IAAR Slack List, Google Calendar (didem@amsterdam.tech) + bu kurulumda eklenen Slack kanal/thread/DM, huddle notları, Gmail, belgeler.
- Grow with Tech ve kişisel işler görev olarak kapsam dışı (takvim toplantısı olarak görünür). Didem aksini söyleyene kadar.

## Existing work
- Didem'in kendi taslağı/çıktısı varsa o kaynak gerçektir. Sıfırdan üretme; incele, boşluk bul, ekle. Durum belirsizse önce sor (2026-11-25 düzeltmesi).

## How the system works
- Koordinatör işleri kaynaklardan bulur, öneri sunar. Didem onaylar, uzman arka planda çalışır, sonuç koordinatör aracılığıyla aynı ekrana gelir.
- İki klasör: `instructions/` nasıl çalışılır (değişmeyen kurallar, rehberler), `work/` ne durumda (değişen işler).
- Her iş bir klasör, içinde tek dosya: `work/<item>/status.md`. Üst bölüm "Status" yalnızca koordinatör tarafından güncellenir. Alt bölüm "History" yalnızca satır eklenir (`date | who | what`). Uzmanlar durumu değiştirmez, geçmişe satır ekler.
- `work/log.md` tüm işlerin güncel listesidir, `python3 workspace/scripts/work_log.py` ile üretilir, elle düzenlenmez.
- Taslaklar repoya yazılmaz. Didem Drive'daki kendi çalışma belgesinde çalışır; o belge esastır ve iş dosyasında `working_doc` olarak linklenir. Uzman çıktısı koordinatöre yanıt olarak döner ve sohbette sunulur.
- Drive, Slack, Gmail'e yazma yalnızca koordinatör tarafından ve Didem'in açık onayıyla yapılır. Paylaşılan klasörlere (örn. IAAR Drive) kendiliğinden yazılmaz.
- Kaynak ile kayıt çelişirse kaynak kazanır.

## Decisions
Format: `date | decision | reason`. Eski karar silinmez, "superseded" işaretlenir.

2026-11-25 | Sistem: koordinatör + akreditasyon uzmanı + program tasarımı uzmanı | kurulum
2026-11-25 | Klasörler: `instructions/` (nasıl çalışılır) ve `work/` (durum) | Didem
2026-11-25 | Her iş `work/<item>/status.md`: durum (Status) üstte, geçmiş (History) altta; dosya adı `status`, adlandırmalar İngilizce | Didem
2026-11-25 | Taslak klasörü yok; taslaklar Didem'in Drive'ında, `working_doc` ile linklenir | Didem
2026-11-25 | ChatGPT aktarımı atlandı; arşiv ve script silindi | Didem
2026-11-25 | Sabah görünümü elle (`/koordinator`) başlatılır; zamanlanmış görev konektör ve depoya erişemedi | deneme sonucu
2026-11-25 | Eski 4 aşamalı akreditasyon hattı `legacy/accreditation-pipeline/` altına ayrıldı; yeni sistem onu kullanmaz, çağırmaz | Didem
2026-11-25 | AI Diary ve Radar (karusel, reel, radar) ayrı özel depoya taşındı (didemyesil/ai-diary, geçmişiyle). Bu depoda yok, koordinatör ve uzmanlar onu kullanmaz | Didem
2026-11-25 | Faculty Training işi silindi; bu sistemin kapsamı dışında | Didem
