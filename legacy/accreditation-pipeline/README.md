# Eski akreditasyon hattı (arşiv, kullanılmıyor)

Önceki oturumlarda kurulmuş 4 aşamalı akreditasyon dosyası üretim sistemi. Yeni koordinatör sistemiyle ilgisi yok, onun tarafından çağrılmaz ve ajanlar buradan okumaz.
Silinmedi, yalnızca ayrıldı. Ajan ve komut dosyaları `.claude/` dışına alındığı için Claude Code bunları yüklemez; yani `/accreditation` komutu ve bu ajanlar şu an çalışmaz.

İçinde: `agents/` (standards-expert, folder-developer, coherence-auditor, 4 panel ajanı), `commands/accreditation.md`, `accreditors/` (nvao, kazakhstan-nqa, şablon), `evidence/`, `output/`.

## Yeniden etkinleştirmek için
```
git mv legacy/accreditation-pipeline/agents/*.md .claude/agents/
git mv legacy/accreditation-pipeline/commands/accreditation.md .claude/commands/
git mv legacy/accreditation-pipeline/accreditors accreditors
git mv legacy/accreditation-pipeline/evidence evidence
git mv legacy/accreditation-pipeline/output output
```
