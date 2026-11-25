#!/usr/bin/env python3
"""Üretir: workspace/jobs/INDEX.md (job.md frontmatter'larından). Elle düzenlenmez."""
import pathlib, re, sys
root = pathlib.Path(__file__).resolve().parent.parent / "jobs"
rows = []
for p in sorted(root.glob("*/job.md")):
    if p.parent.name.startswith("_"):
        continue
    fm = {}
    m = re.match(r"^---\n(.*?)\n---", p.read_text(encoding="utf-8"), re.S)
    for line in (m.group(1).splitlines() if m else []):
        if ":" in line and not line.startswith(" "):
            k, v = line.split(":", 1)
            fm[k.strip()] = v.split("#")[0].strip()
    rows.append((fm.get("status", "?"), p.parent.name, fm))
done = {"done", "cancelled"}
out = ["# Jobs INDEX (otomatik üretildi: python3 workspace/scripts/jobs_index.py)", ""]
for title, pred in (("Açık", lambda s: s not in done), ("Kapalı", lambda s: s in done)):
    out += [f"## {title}", "", "| id | durum | uzman | sonraki adım | bekleniyor | güncelleme |", "|---|---|---|---|---|---|"]
    for s, name, fm in rows:
        if pred(s):
            out.append(f"| {name} | {s} | {fm.get('specialist','')} | {fm.get('next_step','')} | {fm.get('waiting_on','')} | {fm.get('updated','')} |")
    out.append("")
(root / "INDEX.md").write_text("\n".join(out), encoding="utf-8")
print(f"{len(rows)} iş indekslendi")
