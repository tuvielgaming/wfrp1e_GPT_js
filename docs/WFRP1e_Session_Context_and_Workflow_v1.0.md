# WFRP1e Session Context & Workflow
**Version:** 1.0  
**Status:** Official Project Charter (Living Document)

> **Purpose**
>
> This document is the **single source of truth** for the WFRP 1e Foundry VTT project.
>
> At the **start of every session**, upload:
> 1. This file.
> 2. The latest project ZIP.
>
> ChatGPT should use this document as the authoritative project context.
>
> At the **end of every session**, ChatGPT must update this document and regenerate it for the next session.

---

# Project Vision

Develop a professional, modern, maintainable **Warhammer Fantasy Roleplay 1st Edition** system for **Foundry VTT v14**, written entirely in **JavaScript** with a clean modular architecture.

---

# Non‑Negotiable Rules

- JavaScript only (.js/.mjs).
- Never suggest TypeScript unless explicitly requested.
- Target Foundry VTT v14.
- ES Modules.
- WFRP4e may be used only as a behavioural reference.
- Prefer clean architecture over quick solutions.
- Design → Implement → Refactor.
- Avoid technical debt whenever practical.

---

# Repository Architecture

```
scripts/
├── documents/
├── models/
├── helpers/
├── rules/
└── services/
```

Business logic should progressively move into `services`.

---

# Current Milestone

**M2 – Core Roll Engine**

Current focus:
- RollService
- RollResult
- Dice utilities
- Characteristic tests
- Skill tests
- Chat cards
- Opposed tests
- Initiative

---

# Master Roadmap

- ✅ M1 – Foundation
- 🟡 M2 – Core Roll Engine
- ⏳ M3 – Combat
- ⏳ M4 – Character Sheet
- ⏳ M5 – Inventory
- ⏳ M6 – Magic
- ⏳ M7 – Content & Compendiums
- ⏳ M8 – Polish & Release Candidate

---

# Coding Standards

- JavaScript only.
- Small focused modules.
- Keep UI separate from game logic.
- Prefer services over large document classes.
- Avoid duplicated logic.
- Use descriptive names.
- Use JSDoc where useful.

---

# Session Start Procedure

After this file and the project ZIP are uploaded:

1. Read this document completely.
2. Inspect the repository.
3. Determine the current milestone.
4. Continue from the current task.
5. Preserve existing architecture.
6. Do not redesign completed work without good reason.

---

# Session End Procedure (Mandatory)

Before ending every session:

- Update project progress.
- Update current milestone if needed.
- Update current and next tasks.
- Record architectural decisions.
- Record technical debt.
- Update CHANGELOG.

Then regenerate:

- WFRP1e_Session_Context_and_Workflow.md
- PROJECT_STATUS.md
- ROADMAP.md (if changed)
- ARCHITECTURE.md (if changed)
- CHANGELOG.md

---

# Definition of Done

A feature is complete only when:

- Implemented
- Reviewed
- Refactored if necessary
- Integrated
- Documented
- Reflected in the living documents

---

# AI Instructions

Treat this document as the project's memory.

When this file is uploaded:

- Follow its instructions automatically.
- Continue the existing project.
- Never restart unless explicitly requested.
- Never suggest TypeScript.
- Keep using JavaScript.
- Update all living documents before ending the session.

---

# Version History

## v1.0
- Initial official Project Charter.
- Established workflow.
- Established documentation package.
- Established JavaScript-only policy.
