# PROJECT_CHARTER.md

**Version:** 2.1
**Status:** Living Document

## Project
- Modular WFRP1e system for Foundry VTT v14.
- JavaScript only.

## Repository First Principle
Repository = implementation source of truth.
Project Charter = architecture and workflow source of truth.

Before modifying an existing file:
1. Inspect repository.
2. Understand implementation.
3. Generate complete updated file.
4. Never guess existing code.

## Workflow
### Session Start
1. Read PROJECT_CHARTER.md
2. Inspect repository
3. Continue current milestone

### Every Implementation Step
- List New/Modified/Deleted files.
- Generate ONE production-ready file.
- Wait for "Next".
- Inspect existing files before modifying them.

### Architecture Reviews
Pause implementation, explain issue, get approval, then refactor.

### Session End
Update:
- PROJECT_CHARTER.md
- PROJECT_STATUS.md
- ROADMAP.md
- ARCHITECTURE.md
- CHANGELOG.md

## Architecture
- RollEngine is generic.
- WFRP rules stay outside RollEngine.
- WFRPActor is the public API.
- Gameplay code must not access actor.system directly.
- Single Responsibility Principle.

## Current Milestone
M2A – Roll Engine Infrastructure

## Current Sprint
RS-004 / M2A

## Completed
- DiceService
- RollRequest
- RollResult
- RollContext
- Modifier
- ModifierService
- RollEngine architecture
- Difficulty configuration
- CharacteristicTest architecture
- Repository-aware workflow

## Next Session
1. Inspect repository.
2. Update WFRPActor API.
3. Implement CharacteristicTest.
4. Integrate RollEngine.
5. First end-to-end Characteristic Test.
6. Chat integration.

## Lessons Learned
- Repository inspection before modifying existing files.
- One file per implementation step.
- Architecture before features.
- Documentation updated every session.

## AI Responsibilities
- Read charter first.
- Inspect repository.
- Never guess existing code.
- Keep documentation synchronized.

## Version History
### 2.1
Repository-aware workflow formalized and architecture updated.

---

# ChatGPT Session Workflow (Authoritative)

This section defines the mandatory workflow for ChatGPT during development sessions. Unless the user explicitly requests otherwise, this workflow must always be followed.

## Development Process

1. Work on **exactly one source file per response**.

2. Deliver the **complete contents of the file**, never partial snippets or diffs.

3. Before the code, always state:
   - File path.
   - Whether this is a complete replacement or a new file.
   - Any other files that require changes because of this file.

4. If another file requires modification:
   - Explain exactly what needs to be changed.
   - Do **not** implement those changes until their turn arrives.

5. After delivering the file:
   - Stop.
   - Wait for the user to reply **"next"**.

6. Never continue automatically to the next file.

7. Never skip files in the implementation order.

8. Never provide implementation plans when the user explicitly requested implementation.

9. Every delivered file must be production-ready.

10. Do not leave TODO placeholders unless explicitly requested.

---

## End of Session

At the end of every development session the assistant must update this Charter.

The update must include:

### Completed Work

- Files completed during the session.
- Architectural decisions made.
- Refactorings performed.
- New modules introduced.

### Current State

- Current implementation status.
- Remaining work.
- Known issues.
- Technical debt.

### Next Session

Exactly one recommended next file to implement.

---

## Repository Rules

The assistant should always work with the latest uploaded repository.

The uploaded repository becomes the authoritative project state for the current session.

No assumptions should be made based on older repositories if newer ones have been provided.

---

## Coding Rules

- JavaScript only.
- ES Modules (.mjs).
- Foundry VTT v14 APIs.
- Use DataModel architecture.
- No TypeScript.
- No transpilation requirements.
- No placeholder implementations.
- No duplicated logic.
- Reuse helper modules whenever possible.

---

## Communication Rules

Unless requested otherwise:

- Keep explanations short.
- Prioritize code over discussion.
- Deliver working implementations.
- Ask questions only when absolutely necessary.
- Wait for **"next"** after every completed file.

---

## Charter Authority

This Charter is the authoritative description of the project workflow.

If the workflow changes during development, the Charter must be updated before the end of the session.

Future sessions should begin by following this workflow without requiring the user to repeat it.