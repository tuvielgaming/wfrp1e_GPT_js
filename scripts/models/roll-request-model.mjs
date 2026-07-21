/**
 * ============================================================================
 * WFRP1e Foundry VTT System
 * Roll Request Model
 * ----------------------------------------------------------------------------
 * Represents a request to perform a roll.
 *
 * This model contains NO game logic.
 * It simply describes WHAT should be rolled.
 *
 * The RollService is responsible for executing the request.
 * ============================================================================
 */

export class RollRequest {
	/**
	 * Creates a new RollRequest.
	 *
	 * @param {object} options
	 */
	constructor(options = {}) {
		/**
		 * Actor performing the test.
		 * @type {Actor|null}
		 */
		this.actor = options.actor ?? null;

		/**
		 * Roll category.
		 *
		 * Examples:
		 * characteristic
		 * skill
		 * combat
		 * spell
		 * initiative
		 *
		 * @type {string}
		 */
		this.type = options.type ?? "";

		/**
		 * Characteristic key.
		 *
		 * Examples:
		 * ws
		 * bs
		 * s
		 * t
		 * ag
		 *
		 * @type {string|null}
		 */
		this.characteristic = options.characteristic ?? null;

		/**
		 * Base target before modifiers.
		 *
		 * Calculated by the calling test.
		 *
		 * @type {number}
		 */
		this.baseTarget = Number(options.baseTarget ?? 0);

		/**
		 * Difficulty identifier.
		 *
		 * Example:
		 * veryEasy
		 * easy
		 * average
		 * hard
		 * veryHard
		 *
		 * @type {string}
		 */
		this.difficulty = options.difficulty ?? "average";

		/**
		 * Collection of modifiers.
		 *
		 * ModifierService will evaluate them.
		 *
		 * @type {Array}
		 */
		this.modifiers = Array.isArray(options.modifiers) ? options.modifiers : [];

		/**
		 * Human readable label.
		 *
		 * @type {string}
		 */
		this.label = options.label ?? "";

		/**
		 * Additional contextual data.
		 *
		 * Allows future systems to attach
		 * arbitrary information without
		 * changing the model.
		 *
		 * @type {object}
		 */
		this.context = options.context ?? null;
	}
}
