# /evidence

Outputs of the existing 6-agent analysis layer are kept here, in per-programme
subfolders:

```
/evidence/{programme}/
```

For a **cluster run** (one shared Self-Assessment Report across several
programmes — see `folder-developer`'s cluster mode, used e.g. for IAAR's
specialised accreditation), there's also:

```
/evidence/_shared/
```

`_shared/` holds institution-wide evidence — mission/strategy, quality
assurance policy, information-management systems, public-information
practices, prior external QA history — anything that genuinely applies to
the whole institution rather than one programme. Programme-specific evidence
(curriculum, teaching staff, admission details, etc.) still lives under each
programme's own `/evidence/{programme}/` folder, even in cluster mode.

**Institution-wide evidence exists once, not once per programme.** If a
document belongs in `_shared/` because the fact it describes is genuinely
institution-wide (a QA policy, an organisational structure), the correct
appendix reference is that one shared document — not a near-duplicate copy
adapted per programme. A programme folder not having its own copy of shared
evidence is not a gap; it's a sign the SAR should cite the shared original
directly. (Earlier in this project, per-programme QA policy copies were
created before this convention was settled — those stay as historical
source material, but going forward, new cluster-wide evidence is filed once
in `_shared/` and referenced from there.)

`evidence-mapper` (Stage 1.5, run between Stage 1 and Stage 2) checks this
pool against the accreditor's actual Standard text, Guidelines, and Sample
Questions — not just the checklist's summarised evidence-type line — and
produces a per-standard Appendix Requirements List distinguishing what's
already on file, what needs adapting, what looks like a gap but is really
shared evidence not yet pointed to, and what's a genuine gap needing a real
answer from Didem.

`folder-developer` (Stage 2) maps every checklist standard against the
evidence here, starting from Stage 1.5's map when one exists. It doesn't
only read this pool — when a document exists but doesn't match the
standard's required format, it adapts it in place; when no document exists
at all, it drafts a new one here from real institutional facts. It never
invents a fact to fill a document — a genuine gap becomes a question back to
Didem, asked one at a time as drafting proceeds, not a guess or a batch of
questions dumped all at once.

If you review a file here and see it changed or appeared without your
knowledge, check the Stage 2 report from the run that touched it — every
adaptation and every newly created document is listed there.
