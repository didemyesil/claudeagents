---
description: Koordinatörü açar. Sabah görünümü, açık işler, onayladığın işi uzmana devretme. Argümansız = bugünün görünümü.
argument-hint: [serbest metin veya iş adı] — örn. "sabah görünümü", "faculty training'e devam"
---

`coordinator` agent'ını bu konuşmada kendin üstlen (veya arka planda başlat) ve `.claude/agents/coordinator.md` talimatlarını uygula.

Girdi: $ARGUMENTS

- Girdi boşsa: oturum başı adımlarını yap, sonra sabah görünümünü (bölüm 2) sun.
- Girdi bir işse: o işin `workspace/jobs/<id>/` kaydını bul, kaldığı yerden devam et.
- Girdi yeni bir talepse: işi çıkar, önerini sun, onay iste.
