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

`folder-developer` (Stage 2) maps every checklist standard against the
evidence here. It doesn't only read this pool — when a document exists but
doesn't match the standard's required format, it adapts it in place; when no
document exists at all, it drafts a new one here from real institutional
facts. It never invents a fact to fill a document — a genuine gap becomes a
question back to Didem, not a guess.

If you review a file here and see it changed or appeared without your
knowledge, check the Stage 2 report from the run that touched it — every
adaptation and every newly created document is listed there.
