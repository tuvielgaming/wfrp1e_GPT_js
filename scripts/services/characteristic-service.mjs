/**
 * ============================================================================
 * WFRP1e Foundry VTT System
 * Characteristic Service
 * ----------------------------------------------------------------------------
 * Responsible for preparing derived characteristic data.
 *
 * This service contains business logic.
 * ============================================================================
 */

import { calculateCharacteristic } from "../helpers/calculations.mjs";

export class CharacteristicService {
	/**
	 * Prepare all derived characteristics for an actor.
	 *
	 * @param {WFRPActor} actor
	 */
	static prepare(actor) {
		const characteristics = actor.system.characteristics;
		const derived = {};

		for (const [key, value] of Object.entries(characteristics)) {
			derived[key] = {
				base: value.base,

				advance: this.getAdvanceDisplay(key, value.boughtAdvances),

				current: calculateCharacteristic(key, value),
			};
		}

		actor.system.derived ??= {};
		actor.system.derived.characteristics = derived;
	}

	/**
	 * Returns formatted advance display.
	 *
	 * @param {string} characteristic
	 * @param {number} advances
	 *
	 * @returns {string}
	 */
	static getAdvanceDisplay(characteristic, advances) {
		if (advances <= 0) {
			return "";
		}

		const smallAdvances = ["ws", "bs", "s", "t", "w", "a"];

		const value = smallAdvances.includes(characteristic)
			? advances
			: advances * 10;

		return `+${value}`;
	}
}
