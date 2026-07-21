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
