# Workspace

The shared, persistent memory of the coordinator and the specialist agents. Everything is in git.

```
workspace/
├─ instructions/            how to work (does not change often)
│  ├─ all-agents.md         rules for all agents and general decisions
│  ├─ accreditation/        instructions.md + guides/
│  └─ program-design/       instructions.md + guides/
├─ work/                    what the state is (changes)
│  ├─ log.md                current list of all work (generated)
│  └─ <item>/status.md      Status on top, History below
└─ scripts/work_log.py      generates work/log.md
```
How the system works and the writing rules: `instructions/all-agents.md`. Drafts are not kept in the repo; Didem's working document in Drive is the source of truth.
