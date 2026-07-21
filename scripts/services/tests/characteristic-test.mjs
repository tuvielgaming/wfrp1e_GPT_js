/**
 * ============================================================================
 * WFRP1e Foundry VTT System
 * Characteristic Test
 * ----------------------------------------------------------------------------
 * Executes a WFRP characteristic test.
 *
 * This class contains WFRP-specific rules for characteristic tests.
 * ============================================================================
 */

import { RollEngine } from "../services/roll-engine.mjs";
import { RollRequest } from "../models/roll-request-model.mjs";
import { getDifficultyModifier, Difficulty } from "../config/difficulty.mjs";
import { Modifier } from "../models/modifier-model.mjs";

export class CharacteristicTest {
	/**
	 * Executes a characteristic test.
	 *
	 * @param {WFRPActor} actor
	 * @param {string} characteristic
	 * @param {object} options
	 *
	 * @returns {Promise<RollResult>}
	 */
	static async roll(actor, characteristic, options = {}) {
		if (!actor) {
			throw new Error("CharacteristicTest requires an actor.");
		}

		if (typeof actor.getCharacteristicValue !== "function") {
			throw new Error("CharacteristicTest requires a WFRPActor.");
		}

		const baseTarget = actor.getCharacteristicValue(characteristic);

		const difficulty = options.difficulty ?? Difficulty.AVERAGE;

		const modifiers = [...(options.modifiers ?? [])];

		const difficultyModifier = getDifficultyModifier(difficulty);

		if (difficultyModifier !== 0) {
			modifiers.push(
				new Modifier({
					label: "Difficulty",

					value: difficultyModifier,

					source: "System",

					category: "difficulty",
				}),
			);
		}

		const request = new RollRequest({
			actor,

			type: "characteristic",

			characteristic,

			baseTarget,

			difficulty,

			modifiers,

			context: options.context ?? null,
		});

		return RollEngine.roll(request);
	}
}
