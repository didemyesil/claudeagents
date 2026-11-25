#!/usr/bin/env python3
"""Üretir: workspace/work/log.md (work/*.md başlıklarından). Elle düzenlenmez."""
import pathlib, re, datetime
root = pathlib.Path(__file__).resolve().parent.parent / "work"
OPEN = {"active", "awaiting-feedback", "blocked"}
rows = []
for p in sorted(root.glob("*.md")):
    if p.name.startswith("_") or p.name == "log.md":
        continue
    m = re.match(r"^---\n(.*?)\n---", p.read_text(encoding="utf-8"), re.S)
    fm = {}
    for line in (m.group(1).splitlines() if m else []):
        if ":" in line and not line.startswith(" "):
            k, v = line.split(":", 1)
            fm[k.strip()] = v.strip()
    rows.append((p.stem, fm))
today = datetime.date.today()
def age(fm):
    try:
        return (today - datetime.date.fromisoformat(fm.get("updated", ""))).days
    except ValueError:
        return None
out = ["# Work log (otomatik üretildi: python3 workspace/scripts/work_log.py; elle düzenlenmez)", "",
       f"Üretim tarihi: {today}. Açık işlerde 5 günden eski güncelleme uyarı alır.", ""]
for title, pred in (("Açık", lambda s: s in OPEN), ("Kapalı", lambda s: s not in OPEN)):
    out += [f"## {title}", "", "| iş | durum | alan | sonraki adım | bekleniyor | güncelleme | gün |", "|---|---|---|---|---|---|---|"]
    for name, fm in rows:
        if pred(fm.get("status", "?")):
            a = age(fm)
            warn = " ⚠" if (a is not None and a > 5 and title == "Açık") else ""
            out.append(f"| [{name}]({name}.md) | {fm.get('status','?')} | {fm.get('domain','')} | {fm.get('next_step','')} | {fm.get('waiting_on','')} | {fm.get('updated','')} | {a if a is not None else '?'}{warn} |")
    out.append("")
(root / "log.md").write_text("\n".join(out), encoding="utf-8")
print(f"{len(rows)} iş listelendi")
