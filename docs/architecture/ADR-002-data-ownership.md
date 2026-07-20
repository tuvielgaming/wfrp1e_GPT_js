# ADR-002

## Decision

Actors only store player-specific state.

Compendiums are canonical.

Owned Items reference source Items using UUID.

## Motivation

Avoid duplicated data.

Simplify updates.

Improve maintainability.