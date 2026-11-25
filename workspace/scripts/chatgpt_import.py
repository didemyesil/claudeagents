#!/usr/bin/env python3
"""ChatGPT export'unu çalışma arşivine çevirir. Kullanım:
  python3 workspace/scripts/chatgpt_import.py <export-klasörü-veya-zip> [--out workspace/archive/chatgpt]
Yaptığı:
  raw/            ham dosyaların birebir kopyası (değiştirilmez)
  index/conversations.md   her sohbet: tarih, başlık, proje/gizmo id, mesaj sayısı, raw kaynağı
  index/by-conversation/<id>.md  sohbetin düz metni (arama için)
  index/MANIFEST.md        neyin bulunduğu / BULUNAMADIĞI (eksik içerik açıkça)
Varsayım YAPMAZ: export'ta olmayan dosyayı (proje talimatı, yüklenen belge) "yok" diye raporlar.
Karar/açık iş ayıklaması script'in işi değil; koordinatör index üzerinden, kaynağa link vererek yapar.
"""
import json, pathlib, shutil, sys, zipfile, datetime, tempfile

def textof(msg):
    c = (msg or {}).get("content") or {}
    parts = c.get("parts") or []
    return "\n".join(p for p in parts if isinstance(p, str)).strip()

def main():
    if len(sys.argv) < 2: sys.exit(__doc__)
    src = pathlib.Path(sys.argv[1])
    out = pathlib.Path(sys.argv[sys.argv.index("--out")+1]) if "--out" in sys.argv else pathlib.Path(__file__).resolve().parent.parent/"archive"/"chatgpt"
    if src.suffix == ".zip":
        tmp = pathlib.Path(tempfile.mkdtemp()); zipfile.ZipFile(src).extractall(tmp); src = tmp
    if out.resolve() in src.resolve().parents or out.resolve()==src.resolve(): sys.exit("--out girdi klasörünün içinde olamaz")
    raw = out/"raw"; idx = out/"index"; (idx/"by-conversation").mkdir(parents=True, exist_ok=True)
    shutil.copytree(src, raw, dirs_exist_ok=True)
    files = sorted(p.relative_to(raw) for p in raw.rglob("*") if p.is_file())
    convs = []
    for f in sorted(raw.rglob("conversations*.json")):
        convs += json.loads(f.read_text(encoding="utf-8"))
    rows = []
    for c in convs:
        cid = c.get("conversation_id") or c.get("id") or "unknown"
        msgs = [m["message"] for m in (c.get("mapping") or {}).values() if m.get("message")]
        msgs = [m for m in msgs if textof(m)]
        msgs.sort(key=lambda m: m.get("create_time") or 0)
        ts = c.get("create_time")
        day = datetime.datetime.utcfromtimestamp(ts).strftime("%Y-%m-%d") if ts else "?"
        title = (c.get("title") or "(başlıksız)").replace("|", "/")
        proj = c.get("gizmo_id") or c.get("project_id") or ""
        body = [f"# {title}", f"- id: {cid}", f"- tarih: {day}", f"- proje/gizmo: {proj or 'yok (export bu alanı içermiyor olabilir)'}", f"- kaynak: raw/conversations*.json, id={cid}", ""]
        for m in msgs:
            body.append(f"**{(m.get('author') or {}).get('role','?')}**: {textof(m)}\n")
        (idx/"by-conversation"/f"{day}-{cid[:8]}.md").write_text("\n".join(body), encoding="utf-8")
        rows.append((day, title, proj, len(msgs), cid))
    rows.sort()
    (idx/"conversations.md").write_text("# Sohbet indeksi\n\n| tarih | başlık | proje/gizmo | mesaj | id |\n|---|---|---|---|---|\n" + "\n".join(f"| {d} | {t} | {p} | {n} | {i} |" for d,t,p,n,i in rows) + "\n", encoding="utf-8")
    names = {f.name for f in files}
    expected = ["conversations.json", "user.json", "message_feedback.json", "chat.html"]
    miss = [e for e in expected if e not in names and not any(n.startswith(e.split('.')[0]) for n in names)]
    (idx/"MANIFEST.md").write_text(
        f"# Manifest ({datetime.date.today()})\n\n- Sohbet sayısı: {len(rows)}\n- Raw dosya sayısı: {len(files)}\n"
        f"- Beklenen ama bulunamayan: {', '.join(miss) or 'yok'}\n"
        "- ChatGPT export'u şunları İÇERMEYEBİLİR: proje talimatları (Project instructions), proje dosyaları, Custom GPT talimatları, silinmiş sohbetler. Bunlar ayrıca elle alınmalı.\n"
        "- Canlı senkronizasyon yoktur; bu bir anlık görüntüdür.\n\n## Raw dosyalar\n" + "\n".join(f"- {f}" for f in files) + "\n", encoding="utf-8")
    print(f"{len(rows)} sohbet indekslendi -> {idx}")
main()
