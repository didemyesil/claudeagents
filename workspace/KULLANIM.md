# Nasıl kullanılır

## Açma
Claude Code'da (claude.ai/code, repo `didemyesil/claudeagents`) yeni oturum aç ve yaz/söyle:
`/koordinator` (argümansız = sabah görünümü) veya `/koordinator faculty training'e devam`.
Koordinatör hafızasını kendisi okur; geçmişi anlatman gerekmez.

## Günlük akış
1. "Bugün ne var?" → koordinatör kaynakları tarar, en fazla 3 öncelik ve devredilebilir iş önerir.
2. "Evet, başlat" → iş dosyası açılır, uzman arka planda çalışır. Sen konuşmaya devam edersin.
3. Sonuç aynı ekrana gelir (hangi işe ait olduğu başta yazar). Sesle/yazıyla feedback ver. Çalışma belgen Drive'da kalır.
4. Gönderme, yayın, Slack ve Trello yazımı için her seferinde ayrı, açık "evet" gerekir.
5. Oturumu kapatsan da durum `workspace/work/<iş>.md` içinde kalır.

## Ajanlar (`.claude/agents/`)
`coordinator`, `accreditation-specialist`, `program-design-specialist`.

## Hafıza
Bkz. `README.md`. Kurallar: `instructions/`, durum: `work/`.
