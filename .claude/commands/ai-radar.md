---
description: Haftanın AI gelişmelerini güvenilir kaynaklardan tarar ve "Bu hafta radarıma takılanlar" karuselini üretir. Diary girdisi gerektirmez.
argument-hint: [opsiyonel — odaklanılacak konu ya da bu hafta işlenmeyecek başlık]
---

Haftanın AI radar içeriğini üret. Bu akış **diary girdisine bağlı değil** — kendi başına çalışır.

## Opsiyonel yönlendirme
$ARGUMENTS

Boşsa normal tarama yap. Doluysa: bir konuya odaklan ya da belirtilen başlığı atla.

## Akış

1. **`ai-news-radar` agent'ını çalıştır.** Çıktı klasörü: `.claude/cikti/<YYYY-Wxx>/radar/`

   Agent'a hatırlat: son iki haftanın radar klasörlerine baksın, aynı gelişmeyi
   tekrar işlemesin.

2. **`content-qa` agent'ını çalıştır.** Radar içeriğinde QA'nın en kritik işi
   kaynak doğrulaması — her URL açılıyor mu, tarih doğru mu.
   Doğrulanamayan slayt çıkarılır, yerine başka haber konmaz.

   QA'ya `tarz-notlari.md` içindeki **"Kötü örnek"** bölümünü özellikle hatırlat.
   Haber içeriği o hataları en çok yapan formattır: kart içinde kart, aynı bilgiyi
   üç kez yazmak, çıkarımsız haber aktarımı.

3. **Drive'a yükle:** `AI Diary/<hafta>/radar/`
   PNG'ler + caption + kaynak listesi (URL ve tarihlerle birlikte ayrı dosya).

4. **Teslim et:**
   - Seçilen gelişmeler ve her biri için **kaynak URL + yayın tarihi**
   - Elenenler ve eleme gerekçesi
   - QA'nın çıkardığı slayt varsa neden
   - Drive linki

Kaynak listesini Didem'in gözden geçirebileceği şekilde ayrı ver. Yayınlanacak içerikte
doğrulanmamış tek bir iddia bile olmasın.
