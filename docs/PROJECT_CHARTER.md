# PROJECT_CHARTER.md

**Version:** 2.3
**Status:** Living Document

---

# Project

- Modular **Warhammer Fantasy Roleplay 1st Edition** system for **Foundry VTT v14**.
- JavaScript only.
- ES Modules (.mjs).
- Long-term maintainable architecture.
- Documentation-first development.

---

# Source of Truth

## Repository

The **latest uploaded repository** is the implementation source of truth for the current development session.

Before modifying any existing file the assistant must:

1. Inspect the repository.
2. Understand the current implementation.
3. Generate the complete updated file.
4. Never guess repository contents.

## Charter

This document is the architectural and workflow source of truth.

It defines:

- development workflow
- architectural principles
- coding standards
- AI responsibilities

---

# Development Workflow

## Session Start

At the beginning of every development session:

1. Read this Charter.
2. Inspect the latest uploaded repository.
3. Determine the current implementation state.
4. Continue the current milestone unless instructed otherwise.

---

## Milestone Driven Development

Development is performed in milestones.

The assistant should complete the current milestone before beginning another unless instructed otherwise.

Current milestone order:

1. Models
2. Core Documents
3. Core Services
4. Roll Engine
5. Character Sheets
6. Combat
7. Chat Cards
8. Magic
9. Active Effects
10. Remaining specialized Documents (implemented only when required)

---

## Implementation Rules

The assistant must work on **exactly one implementation unit per response**.

Normally this is one source file.

For every implementation:

1. State the file path.
2. State whether the file is:
   - Complete replacement
   - New file
3. Mention any related files that require updates.
4. Deliver the complete production-ready file.
5. Stop.
6. Wait for the user to reply **"next"**.

Never automatically continue with another file.

---

## Repository Rules

The assistant must never invent repository contents.

If implementation depends on an existing file:

- inspect it first;
- if inspection is impossible, clearly state that instead of guessing.

Never overwrite existing code based on assumptions.

When creating a new file:

- inspect the current architecture first;
- place the file according to the existing project structure;
- avoid creating boilerplate classes that add no architectural value.

If a better architectural milestone order is discovered after repository inspection, explain the reasoning and obtain user approval before changing direction.

---

## Architecture Reviews

If an architectural problem is discovered:

1. Pause implementation.
2. Explain the issue.
3. Present the proposed solution.
4. Wait for approval.
5. Continue implementation.

---

## Session End

At the end of every development session the assistant must update every affected living document.

Normally this includes:

- PROJECT_CHARTER.md
- PROJECT_STATUS.md
- ROADMAP.md
- ARCHITECTURE.md
- CHANGELOG.md

Additional living documents should also be updated whenever affected.

---

# Architecture Principles

## General

- Single Responsibility Principle.
- Composition over duplication.
- Repository-first development.
- Documentation-first architecture.

---

## Data Layer

- DataModels describe persistent data.
- Runtime models describe temporary runtime data.
- DataModels contain no business logic.

---

## Documents

Documents are coordinators.

Documents may:

- expose convenience getters;
- coordinate lifecycle events;
- call Services.

Documents must **not** contain gameplay algorithms.

---

## Services

Services contain business logic.

Examples:

- characteristic calculations;
- combat preparation;
- skill preparation;
- encumbrance;
- careers;
- magic.

Services prepare and manipulate game state but do not execute rolls.

---

## Roll Engine

The Roll Engine is responsible for executing gameplay mechanics.

Examples:

- characteristic tests;
- skill tests;
- combat tests;
- opposed tests;
- damage;
- success levels;
- modifiers.

The Roll Engine is generic.

WFRP rules are implemented through Services and Roll Requests rather than embedded inside the engine.

Gameplay code should never directly manipulate `actor.system`.

---

## Sheets

Sheets display and edit data.

Sheets must not implement gameplay logic.

They communicate through Documents and Services.

---

# Coding Standards

- JavaScript only.
- ES Modules (.mjs).
- Foundry VTT v14 APIs.
- DataModel architecture.
- No TypeScript.
- No transpilation requirements.
- No placeholder implementations.
- No duplicated logic.
- Reuse helper modules whenever possible.
- Prefer extending existing architecture over replacing it.
- Production-ready code only.

---

# Communication Rules

Unless explicitly requested otherwise:

- Prioritize implementation over discussion.
- Keep explanations concise.
- Deliver working production-ready code.
- Ask questions only when necessary.
- Wait for **"next"** after every implementation unit.

Do not provide implementation plans when implementation has been requested.

---

# AI Responsibilities

The assistant must:

- Read this Charter before every development session.
- Inspect the latest uploaded repository before modifying existing files.
- Keep living documentation synchronized.
- Never hallucinate repository contents.
- Never refactor unrelated code.
- Preserve public APIs unless intentionally changing them.
- Explain architectural decisions before implementing breaking changes.
- Recommend architectural improvements when they significantly improve long-term maintainability.

---

# Current Architecture

```text
Models
        │
        ▼
Documents
        │
        ▼
Services
        │
        ▼
Helpers
        │
        ▼
Roll Engine
        │
        ▼
Character Sheets
Combat
Chat Cards
Magic
Effects
```

---

# Current Milestone

## Completed

- ✅ Models
- ✅ Runtime Models
- ✅ Core Documents
- ✅ Core Services

## Next

**Roll Engine**

Planned implementation begins with:

```
scripts/rolls/

roll-engine.mjs
roll-factory.mjs
test-service.mjs
modifier-service.mjs
success-level-service.mjs
opposed-test-service.mjs
damage-service.mjs
```

---

# Charter Authority

This Charter is the authoritative definition of the project's architecture and workflow.

If the workflow evolves during development, the Charter must be updated before the session ends.

Future sessions should begin by following this Charter without requiring the user to restate the workflow.

---

# Version History

## 2.3

- Added milestone-driven development workflow.
- Added current milestone tracking.
- Added explicit Document responsibilities.
- Added explicit Service responsibilities.
- Clarified Roll Engine responsibilities.
- Added Sheet responsibility boundaries.
- Added repository rules for new files.
- Added architecture diagram.
- Updated project roadmap after completion of Models, Core Documents and Core Services.
- Recorded Roll Engine as the next implementation milestone.

## 2.2

- Consolidated duplicated workflow sections.
- Clarified repository-first development.
- Added explicit repository inspection rules.
- Added anti-hallucination policy.
- Generalized session-end documentation updates.
- Added architectural responsibility boundaries.
- Expanded AI responsibilities.
- Simplified long-term maintenance rules.