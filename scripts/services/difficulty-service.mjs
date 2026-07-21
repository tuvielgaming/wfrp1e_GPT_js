/**
 * ============================================================================
 * WFRP1e Foundry VTT System
 * Difficulty Service
 * ----------------------------------------------------------------------------
 * Provides standard WFRP difficulty modifiers.
 *
 * This service is intentionally generic. It simply maps a difficulty identifier
 * to a numeric modifier. It does not know anything about specific tests.
 * ============================================================================
 */

export class DifficultyService {
	/**
	 * Difficulty table.
	 *
	 * @readonly
	 */
	static TABLE = Object.freeze({
		veryEasy: 30,

		easy: 20,

		average: 0,

		hard: -20,

		veryHard: -30,
	});

	/**
	 * Returns the numeric modifier for a difficulty.
	 *
	 * @param {string} difficulty
	 * @returns {number}
	 */
	static getModifier(difficulty = "average") {
		return this.TABLE[difficulty] ?? 0;
	}

	/**
	 * Returns true if the supplied difficulty exists.
	 *
	 * @param {string} difficulty
	 * @returns {boolean}
	 */
	static isValid(difficulty) {
		return Object.hasOwn(this.TABLE, difficulty);
	}

	/**
	 * Returns all supported difficulties.
	 *
	 * @returns {string[]}
	 */
	static getAll() {
		return Object.keys(this.TABLE);
	}
}
