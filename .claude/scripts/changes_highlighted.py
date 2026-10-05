#!/usr/bin/env python3
"""Build a changes-highlighted review copy of a revised document.

Usage:
    changes_highlighted.py ORIGINAL.md REVISED.md OUT.html [--same "Old=>New" ...] [--clean OUT_CLEAN.html]

What it does
    Compares REVISED against ORIGINAL and writes a single HTML page in which only
    the text that was changed or added is bold + yellow-highlighted. Everything
    else is plain. Headings are rendered as headings (never as bold), and the
    original's own inline bold is dropped, so bold always means "changed".

    --same "Old=>New"   a global rename applied to the ORIGINAL before comparing,
                        so it is not highlighted everywhere (e.g. "Team Academy=>Schoolvision").
                        Repeatable. Say in the hand-off message that the rename was not highlighted.
    --clean OUT         also write the same document with no highlighting
                        (the version that goes out after review).
    --show-deleted      also show text that was removed, in red strikethrough, so a
                        pure deletion (e.g. "master's degree") is visible to the reviewer.

Why HTML: the reader may have no Word. Open the page in a browser, select all,
copy, paste into a Google Doc — bold, highlight, headings and lists survive.
"""
import difflib
import html
import re
import sys

SHOW_DELETED = False
INLINE = re.compile(r"(\*\*\*.+?\*\*\*|\*\*.+?\*\*|\*.+?\*)")


def strip_marks(text):
    """Plain text with markdown emphasis markers removed (used for comparing)."""
    return re.sub(r"\*+", "", text)


def blocks(md):
    """Split markdown into (kind, level, raw_text) blocks, skipping blanks and rules."""
    out = []
    for line in md.split("\n"):
        s = line.strip()
        if not s or s == "---":
            continue
        m = re.fullmatch(r"\*\*(.+)\*\*", s)          # whole-line bold  -> heading
        if m:
            h = m.group(1)
            if h.startswith("ESG") or re.match(r"(Standard|Section|Article)\b", h):
                lvl = 2
            elif re.match(r"\d+\.\d+(\.\d+)?\.? ", h):
                lvl = 3
            else:
                lvl = 4
            out.append(("h", lvl, h))
            continue
        m = re.match(r"(#{1,4}) (.*)", s)             # '#' headings
        if m:
            out.append(("h", len(m.group(1)), strip_marks(m.group(2))))
            continue
        if s.startswith("- "):
            out.append(("li", 0, s[2:]))
            continue
        out.append(("p", 0, s))
    # the first heading is the document title
    for i, b in enumerate(out):
        if b[0] == "h":
            out[i] = ("h", 1, b[2])
            break
    return out


def render_inline(text):
    """Italics only; original bold is dropped on purpose."""
    parts = []
    for part in INLINE.split(text):
        if not part:
            continue
        if part.startswith("***") and part.endswith("***") and len(part) > 6:
            parts.append(html.escape(part[3:-3]))
        elif part.startswith("**") and part.endswith("**") and len(part) > 4:
            parts.append(html.escape(part[2:-2]))
        elif part.startswith("*") and part.endswith("*") and len(part) > 2:
            parts.append("<i>" + html.escape(part[1:-1]) + "</i>")
        else:
            parts.append(html.escape(part))
    return "".join(parts)


def mark(s):
    return "<mark><b>" + s + "</b></mark>"


def word_diff_html(old, new):
    """Revised text with only the changed/added words marked."""
    ow, nw = strip_marks(old).split(" "), strip_marks(new).split(" ")
    sm = difflib.SequenceMatcher(None, ow, nw, autojunk=False)
    out = []
    for op, _i1, _i2, j1, j2 in sm.get_opcodes():
        chunk = html.escape(" ".join(nw[j1:j2]))
        if op == "equal":
            out.append(chunk)
        else:
            if SHOW_DELETED and op in ("replace", "delete"):
                out.append("<del>" + html.escape(" ".join(ow[_i1:_i2])) + "</del>")
            if op in ("replace", "insert"):
                out.append(mark(chunk))
    return " ".join(x for x in out if x)


def build(orig_md, rev_md, renames):
    for pair in renames:
        a, b = pair.split("=>", 1)
        orig_md = orig_md.replace(a, b)
    ob, rb = blocks(orig_md), blocks(rev_md)
    okeys = [strip_marks(b[2]) for b in ob]
    rkeys = [strip_marks(b[2]) for b in rb]
    sm = difflib.SequenceMatcher(None, okeys, rkeys, autojunk=False)
    hi, clean = [], []          # (kind, level, html)

    def emit(b, text_hi, text_clean):
        hi.append((b[0], b[1], text_hi))
        clean.append((b[0], b[1], text_clean))

    for op, i1, i2, j1, j2 in sm.get_opcodes():
        if op == "equal":
            for b in rb[j1:j2]:
                t = render_inline(b[2]) if b[0] != "h" else html.escape(b[2])
                emit(b, t, t)
        elif op == "delete":
            if SHOW_DELETED:
                for b in ob[i1:i2]:
                    hi.append((b[0], b[1], "<del>" + html.escape(strip_marks(b[2])) + "</del>"))
            continue
        elif op == "insert":
            for b in rb[j1:j2]:
                t = render_inline(b[2]) if b[0] != "h" else html.escape(b[2])
                emit(b, mark(t), t)
        else:  # replace: pair up block by block, word-diff the pairs
            olds, news = ob[i1:i2], rb[j1:j2]
            for k, b in enumerate(news):
                t = render_inline(b[2]) if b[0] != "h" else html.escape(b[2])
                if k < len(olds) and olds[k][0] == b[0]:
                    emit(b, word_diff_html(olds[k][2], b[2]), t)
                else:
                    emit(b, mark(t), t)
    return hi, clean


PAGE = """<!doctype html><html lang="en"><head><meta charset="utf-8"><title>{title}</title>
<style>body{{font-family:Calibri,Arial,sans-serif;font-size:11pt;max-width:800px;margin:2em auto;padding:0 1em;line-height:1.45;color:#1f1f1f}}
h1,h2,h3,h4{{font-weight:normal;margin:1.2em 0 .3em}}h1{{font-size:20pt}}h2{{font-size:16pt}}h3{{font-size:13pt}}h4{{font-size:11pt}}
mark{{background:#fff176;color:#000}}del{{color:#b00020}}</style></head><body>
{body}
</body></html>"""


def to_page(items, title):
    out, inlist = [], False
    for kind, lvl, text in items:
        if kind == "li":
            if not inlist:
                out.append("<ul>")
                inlist = True
            out.append("<li>" + text + "</li>")
            continue
        if inlist:
            out.append("</ul>")
            inlist = False
        out.append(f"<h{lvl}>{text}</h{lvl}>" if kind == "h" else "<p>" + text + "</p>")
    if inlist:
        out.append("</ul>")
    return PAGE.format(title=html.escape(title), body="\n".join(out))


def main(argv):
    if len(argv) < 4:
        print(__doc__)
        return 2
    orig_p, rev_p, out_p = argv[1:4]
    renames, clean_p = [], None
    rest = argv[4:]
    while rest:
        flag = rest.pop(0)
        if flag == "--same":
            renames.append(rest.pop(0))
        elif flag == "--clean":
            clean_p = rest.pop(0)
        elif flag == "--show-deleted":
            global SHOW_DELETED
            SHOW_DELETED = True
        else:
            print("unknown option", flag)
            return 2
    orig = open(orig_p, encoding="utf-8").read()
    rev = open(rev_p, encoding="utf-8").read()
    hi, clean = build(orig, rev, renames)
    title = "Changes highlighted"
    open(out_p, "w", encoding="utf-8").write(to_page(hi, title))
    if clean_p:
        open(clean_p, "w", encoding="utf-8").write(to_page(clean, "Clean copy"))
    n = sum(t.count("<mark>") for _k, _l, t in hi)
    print(f"wrote {out_p}: {n} highlighted passages")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
