# Çalışma alanı (workspace)

Koordinatör ve uzman agent'ların ortak, kalıcı hafızası. Her yeni oturumda geçmişi
anlatmak yerine agent'lar buradan okur. Her şey git'te; geçmiş değişiklikler `git log` ile izlenir.

| Katman | Yer | Kim yazar | Ne zaman okunur |
|---|---|---|---|
| Çalışma tercihleri, genel kurallar | `memory/preferences.md` | Koordinatör (Didem onayıyla) | Her oturum başı |
| Önemli kararlar (genel) | `memory/decisions.md` | Koordinatör | İlgili konu açılınca |
| Proje bilgisi (talimat, karar, kaynak) | `projects/<slug>/` | Koordinatör; uzmanlar yalnızca öneri ekler | O proje işine girince |
| İş kaydı (durum, taslak, feedback, onay) | `jobs/<id>/` | Bkz. yazma kuralı | Her oturum başı yalnızca `INDEX.md` |
| Sabah görünümü arşivi | `briefs/YYYY-MM-DD.md` | Zamanlanmış koordinatör | İstenince |
| ChatGPT birikimi | `archive/chatgpt/` | Import script'i + koordinatör | İlgili proje açılınca, aranarak |

## Çakışmayı önleyen yazma kuralı
- `jobs/<id>/job.md` (durum, sonraki adım, onay kapsamı): **yalnızca koordinatör** yazar.
- `jobs/<id>/log.md`: append-only; herkes yalnızca satır ekler (`tarih | kim | ne`), asla düzenlemez.
- `jobs/<id>/drafts/vN-<uzman>.md`: her uzman kendi dosyasını yazar; üzerine yazmaz, yeni sürüm açar.
- `jobs/INDEX.md`: elle düzenlenmez; `python3 workspace/scripts/jobs_index.py` üretir.

## Bağlam disiplini
Tüm geçmiş yüklenmez. Önce `INDEX.md` + ilgili `job.md`; gerisi gerektiğinde `grep`/okuma ile bulunur.
Özet, asıl kaynağa her zaman geri bağlanır (kaynak yolu veya link).
