/**
 * ============================================================================
 * WFRP1e Foundry VTT System
 * Difficulty Configuration
 * ============================================================================
 *
 * Central definition of supported difficulty levels.
 *
 * This module contains no business logic.
 */

export const Difficulty = Object.freeze({
	VERY_EASY: "veryEasy",

	EASY: "easy",

	AVERAGE: "average",

	HARD: "hard",

	VERY_HARD: "veryHard",
});

export const DifficultyModifier = Object.freeze({
	[Difficulty.VERY_EASY]: 30,

	[Difficulty.EASY]: 20,

	[Difficulty.AVERAGE]: 0,

	[Difficulty.HARD]: -20,

	[Difficulty.VERY_HARD]: -30,
});

/**
 * Returns the modifier for a difficulty.
 *
 * @param {string} difficulty
 * @returns {number}
 */
export function getDifficultyModifier(difficulty = Difficulty.AVERAGE) {
	return DifficultyModifier[difficulty] ?? 0;
}
