/**
 * ============================================================================
 * WFRP1e Foundry VTT System
 * Characteristic Test
 * ----------------------------------------------------------------------------
 * Creates and executes WFRP characteristic tests.
 * ============================================================================
 */

import { RollEngine } from "../roll-service.mjs";
import { RollRequest } from "../../models/roll-request-model.mjs";

export class CharacteristicTest {
	/**
	 * Executes a characteristic test.
	 *
	 * @param {Actor} actor
	 * @param {string} characteristic
	 * @param {object} options
	 *
	 * @returns {Promise<RollResult>}
	 */
	static async roll(actor, characteristic, options = {}) {
		if (!actor) {
			throw new Error("CharacteristicTest requires an Actor.");
		}

		const baseTarget = Number(
			foundry.utils.getProperty(
				actor,
				`system.characteristics.${characteristic}.value`,
			) ?? 0,
		);

		const request = new RollRequest({
			actor,

			type: "characteristic",

			characteristic,

			baseTarget,

			difficulty: options.difficulty ?? "average",

			modifiers: options.modifiers ?? [],

			context: options.context,
		});

		return RollEngine.roll(request);
	}
}
