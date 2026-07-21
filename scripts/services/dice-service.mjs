/**
 * ============================================================================
 * WFRP1e Foundry VTT System
 * Dice Service
 * ----------------------------------------------------------------------------
 * Centralised wrapper around Foundry's Roll class.
 *
 * Every dice roll performed by the system must go through this service.
 * This class contains NO game logic.
 *
 * Responsibilities:
 *  - Roll dice
 *  - Return evaluated Roll objects
 *
 * It does NOT:
 *  - Create chat messages
 *  - Apply game rules
 *  - Know anything about actors or items
 * ============================================================================
 */

export class DiceService {
	/**
	 * Rolls any valid Foundry formula.
	 *
	 * @param {string} formula
	 * @param {object} [data={}]
	 * @returns {Promise<Roll>}
	 */
	static async roll(formula, data = {}) {
		const roll = new Roll(formula, data);

		await roll.evaluate();

		return roll;
	}

	/**
	 * Rolls a d100.
	 *
	 * @returns {Promise<Roll>}
	 */
	static async rollD100() {
		return this.roll("1d100");
	}

	/**
	 * Rolls a d10.
	 *
	 * @returns {Promise<Roll>}
	 */
	static async rollD10() {
		return this.roll("1d10");
	}

	/**
	 * Rolls a d5.
	 * (Used frequently by WFRP.)
	 *
	 * @returns {Promise<Roll>}
	 */
	static async rollD5() {
		return this.roll("1d10 / 2");
	}

	/**
	 * Rolls multiple d10.
	 *
	 * @param {number} count
	 * @returns {Promise<Roll>}
	 */
	static async rollD10s(count = 1) {
		return this.roll(`${count}d10`);
	}

	/**
	 * Rolls multiple d100.
	 *
	 * Mostly intended for random tables.
	 *
	 * @param {number} count
	 * @returns {Promise<Roll>}
	 */
	static async rollD100s(count = 1) {
		return this.roll(`${count}d100`);
	}

	/**
	 * Rolls damage dice.
	 *
	 * @param {number} dice
	 * @param {number} modifier
	 * @returns {Promise<Roll>}
	 */
	static async rollDamage(dice = 1, modifier = 0) {
		let formula = `${dice}d10`;

		if (modifier > 0) {
			formula += ` + ${modifier}`;
		}

		if (modifier < 0) {
			formula += ` - ${Math.abs(modifier)}`;
		}

		return this.roll(formula);
	}
}
