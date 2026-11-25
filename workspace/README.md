# Workspace

Koordinatör ve uzman ajanların ortak, kalıcı hafızası. Her şey git'te.

```
workspace/
├─ instructions/            nasıl çalışılır (değişmeyen)
│  ├─ all-agents.md         bütün ajanların ortak kuralları ve genel kararlar
│  ├─ accreditation/        instructions.md + guides/
│  └─ program-design/       instructions.md + guides/
├─ work/                    ne durumda (değişen)
│  ├─ log.md                tüm işlerin güncel listesi (otomatik)
│  └─ <item>/status.md      üstte durum (Status), altta geçmiş (History)
└─ scripts/work_log.py      work/log.md'yi üretir
```
Sistemin işleyişi ve yazma kuralları: `instructions/all-agents.md`. Taslaklar repoda tutulmaz, Didem'in Drive'ındaki çalışma belgesi esastır.
