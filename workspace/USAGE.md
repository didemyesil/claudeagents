# Usage

## Opening
Open a new session in Claude Code (claude.ai/code, repo `didemyesil/claudeagents`) and write or say:
`/koordinator` (no argument = morning view) or `/koordinator continue IAAR SAR`.
The coordinator reads its own memory; you do not need to retell the history. It speaks Turkish with you.

## Daily flow
1. "What is on today?" → the coordinator scans the sources and suggests at most 3 priorities and a piece of work that can be delegated.
2. "Yes, start" → the work file is opened and a specialist works in the background. You keep talking.
3. The result arrives on the same screen (the work item is named first). Give feedback by voice or text. Your working document stays in Drive.
4. Sending, publishing, and writing to Slack or Trello each need a separate, explicit "yes".
5. Even if you close the session, the state stays in `workspace/work/<item>/status.md`.

## Agents (`.claude/agents/`)
`coordinator`, `accreditation-specialist`, `program-design-specialist`.

## Memory
See `README.md`. Rules: `instructions/`, state: `work/`.
