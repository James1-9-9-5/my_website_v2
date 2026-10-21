# 10 - AI Assistant Workflow

(The reference repo calls this "codex-workflow". Renamed because this project may use Claude Code, Codex, or both. Shared rules live in `AGENTS.md`.)

## How I'll work with an AI coding assistant
1. Read `AGENTS.md` and the relevant docs before starting.
2. Plan first: ask the assistant for a short plan against one milestone in doc 09.
3. Build in small steps; one task per branch or commit.
4. Run lint, tests and build after each task.
5. Review the diff myself before merging.
6. Record any decision that changes scope or approach in doc 11.

## Prompt template
```
Read AGENTS.md and docs/[relevant doc].
Task: [one task from docs/09-build-plan.md]
Constraints: follow docs/04-design-system.md; do not add dependencies without asking.
Done when: [acceptance criteria]; lint, tests and build pass.
```

## Guardrails
- Never commit secrets, client data, or unreleased community data.
- Do not publish content marked "Permission: no" in doc 08.
- Ask before adding a dependency or changing the stack.
