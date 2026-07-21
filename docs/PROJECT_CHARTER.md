# PROJECT_CHARTER.md

**Version:** 2.0
**Status:** Living Document

## Project Vision
Develop a professional, modular WFRP1e system for Foundry VTT v14 using JavaScript only.

## Technology
- JavaScript only
- ES Modules
- Foundry VTT v14
- No TypeScript unless explicitly approved.

## Repository First Principle
- Repository = implementation truth.
- Project Charter = architecture/workflow truth.
- Inspect existing files before modifying them.
- Never guess existing implementations.

## Architecture Principles
- Generic Roll Engine.
- WFRP rules outside the engine.
- Single responsibility.
- Separate infrastructure, domain and UI.

## Development Workflow
1. Read PROJECT_CHARTER.md.
2. Inspect repository.
3. Generate ONE complete file.
4. List modified files.
5. Wait for 'Next'.
6. Existing files must be inspected before modification.
7. Stop for Architecture Reviews when necessary.

## Session End
Update:
- PROJECT_CHARTER.md
- PROJECT_STATUS.md
- ROADMAP.md
- ARCHITECTURE.md
- CHANGELOG.md

## Current Milestone
M2 – Core Roll Engine

## Current Sprint
RS-004 – Roll Engine Architecture Refactoring

## Current Task
Introduce WFRPActor API before gameplay implementation.

## Completed Work
- DiceService
- RollRequest
- RollResult
- Modifier
- ModifierService
- RollEngine
- RollContext
- CharacteristicTest foundation

## AI Responsibilities
- Read this charter first.
- Inspect repository.
- Never guess existing code.
- One file per step.
- Repository-aware development.
