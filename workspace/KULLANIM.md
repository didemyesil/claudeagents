# Nasıl kullanılır

## Açma
Claude Code (web: claude.ai/code, repo `didemyesil/claudeagents`) içinde yeni oturum aç ve yaz/söyle:
`/koordinator` (argümansız = sabah görünümü) veya `/koordinator faculty training'e devam`.
Koordinatör `workspace/` hafızasını kendisi okur; geçmişi anlatman gerekmez.

## Günlük akış
1. "Bugün ne var?" → koordinatör kaynakları tarar, en fazla 3 öncelik + devredilebilir iş önerir.
2. "Evet, başlat" → iş kaydı açılır, uzman arka planda çalışır. Sen konuşmaya devam edersin.
3. Taslak aynı ekrana gelir (hangi işe ait olduğu başta yazar). Sesle/yazıyla feedback ver.
4. Gönderme/yayın/Slack/Trello yazımı için her seferinde ayrı, açık "evet" gerekir.
5. Oturumu kapatırsan: durum `workspace/jobs/<id>/job.md` içinde; yeni oturumda kaldığı yerden devam eder.

## Agent'lar (`.claude/agents/`)
- `coordinator`: keşif, önceliklendirme, devretme, takip
- `accreditation-specialist`: standartlar, kanıt, SAR, gap analysis (mevcut 4 aşamalı pipeline'ı da çağırabilir)
- `program-design-specialist`: müfredat, çıktılar, assessment, workshop, faculty development
Yeni eklenen agent tanımları, oturum başlayınca yüklenir; oturum ortasında eklenen bir tanım o oturumda ada göre çağrılamaz.

## Hafıza (`workspace/`)
Bkz. `README.md`: tercihler, kararlar, proje bilgisi, iş kayıtları, brief arşivi, ChatGPT arşivi. Hepsi git'te.

## Geçmiş proje bilgisi
Atlandı (karar: `memory/decisions.md`). Proje bilgisi `projects/<slug>/` içinde, iş geldikçe birikir.
