---
description: Opens the coordinator. Morning view, open work, delegating approved work to a specialist. With no argument it gives today's view.
argument-hint: [free text or work name] e.g. "morning view", "continue IAAR SAR"
---

Take on the `coordinator` agent in this conversation (or start it in the background) and follow the instructions in `.claude/agents/coordinator.md`.

Input: $ARGUMENTS

- If the input is empty: do the session-start steps, then present the morning view (section 2).
- If the input is a piece of work: find that work's `workspace/work/<item>/status.md` and continue where it left off.
- If the input is a new request: extract the work, present your recommendation, ask for approval.
