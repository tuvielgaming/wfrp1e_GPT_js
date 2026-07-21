/**
 * ============================================================================
 * WFRP1e Foundry VTT System
 * Roll Engine
 * ----------------------------------------------------------------------------
 * Generic percentile roll engine.
 *
 * The engine is completely system-agnostic.
 * It does not know anything about:
 *
 * - Weapon Skill
 * - Ballistic Skill
 * - Skills
 * - Combat
 * - Magic
 * - Talents
 * - Careers
 *
 * It only executes a RollRequest and produces a RollResult.
 * ============================================================================
 */

import { DiceService } from "./dice-service.mjs";
import { ModifierService } from "./modifier-service.mjs";

import { RollResult } from "../models/roll-result-model.mjs";

export class RollEngine {
	/**
	 * Executes a roll request.
	 *
	 * @param {RollRequest} request
	 * @returns {Promise<RollResult>}
	 */
	static async roll(request) {
		if (!request) {
			throw new Error("RollEngine.roll() requires a RollRequest.");
		}

		const modifier = ModifierService.calculate(request.modifiers);

		const target = request.baseTarget + modifier;

		const roll = await DiceService.rollD100();

		const value = roll.total;

		const success = value <= target;

		const margin = target - value;

		return new RollResult({
			request,

			roll,

			value,

			target,

			success,

			failure: !success,

			critical: false,

			fumble: false,

			degrees: 0,

			margin,

			modifier,
		});
	}
}
