/**
 * ============================================================================
 * WFRP1e Foundry VTT System
 * Modifier Service
 * ----------------------------------------------------------------------------
 * Responsible for processing collections of Modifier objects.
 *
 * This service does NOT know anything about Actors,
 * Skills, Combat or Magic.
 * ============================================================================
 */

export class ModifierService {
	/**
	 * Calculates the final modifier.
	 *
	 * @param {Modifier[]} modifiers
	 * @returns {number}
	 */
	static calculate(modifiers = []) {
		if (!Array.isArray(modifiers)) {
			return 0;
		}

		let total = 0;

		for (const modifier of modifiers) {
			if (!modifier) {
				continue;
			}

			if (!modifier.enabled) {
				continue;
			}

			total += Number(modifier.value) || 0;
		}

		return total;
	}

	/**
	 * Returns only enabled modifiers.
	 *
	 * @param {Modifier[]} modifiers
	 * @returns {Modifier[]}
	 */
	static enabled(modifiers = []) {
		return modifiers.filter((modifier) => modifier && modifier.enabled);
	}

	/**
	 * Groups modifiers by category.
	 *
	 * @param {Modifier[]} modifiers
	 * @returns {Object}
	 */
	static byCategory(modifiers = []) {
		const result = {};

		for (const modifier of modifiers) {
			if (!modifier || !modifier.enabled) {
				continue;
			}

			const category = modifier.category ?? "generic";

			if (!result[category]) {
				result[category] = [];
			}

			result[category].push(modifier);
		}

		return result;
	}

	/**
	 * Returns all modifiers originating
	 * from a specific source.
	 *
	 * @param {Modifier[]} modifiers
	 * @param {string} source
	 * @returns {Modifier[]}
	 */
	static bySource(modifiers = [], source = "") {
		return modifiers.filter(
			(modifier) => modifier && modifier.enabled && modifier.source === source,
		);
	}
}
