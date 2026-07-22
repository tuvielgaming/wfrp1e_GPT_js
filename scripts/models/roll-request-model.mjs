/**
 * ============================================================================
 * WFRP1e Foundry VTT System
 * Roll Request Model
 * ----------------------------------------------------------------------------
 * Immutable description of WHAT should be rolled.
 *
 * This class contains no game logic.
 * It is consumed by RollService / RollEngine.
 * ============================================================================
 */

export class RollRequest {
	/**
	 * @param {object} options
	 */
	constructor(options = {}) {
		/**
		 * Actor performing the roll.
		 *
		 * @type {Actor|null}
		 */
		this.actor = options.actor ?? null;

		/**
		 * Source item.
		 *
		 * Weapon
		 * Skill
		 * Spell
		 * Talent
		 *
		 * @type {Item|null}
		 */
		this.item = options.item ?? null;

		/**
		 * Roll type.
		 *
		 * characteristic
		 * skill
		 * combat
		 * spell
		 * initiative
		 * damage
		 * fear
		 * terror
		 * etc.
		 *
		 * @type {string}
		 */
		this.type = options.type ?? "";

		/**
		 * Characteristic key.
		 *
		 * ws
		 * bs
		 * s
		 * t
		 * w
		 * i
		 * a
		 * dex
		 * ld
		 * int
		 * cl
		 * wp
		 * fel
		 *
		 * @type {string|null}
		 */
		this.characteristic = options.characteristic ?? null;

		/**
		 * Optional skill identifier.
		 *
		 * @type {string|null}
		 */
		this.skillId = options.skillId ?? null;

		/**
		 * Base target before modifiers.
		 *
		 * @type {number}
		 */
		this.baseTarget = Number(options.baseTarget ?? 0);

		/**
		 * Difficulty identifier.
		 *
		 * @type {string}
		 */
		this.difficulty = options.difficulty ?? "average";

		/**
		 * Roll modifiers.
		 *
		 * @type {ModifierModel[]}
		 */
		this.modifiers = Array.isArray(options.modifiers)
			? [...options.modifiers]
			: [];

		/**
		 * Human-readable label.
		 *
		 * @type {string}
		 */
		this.label = options.label ?? "";

		/**
		 * Whether this is an opposed roll.
		 *
		 * @type {boolean}
		 */
		this.opposed = Boolean(options.opposed);

		/**
		 * Whether success levels should be calculated.
		 *
		 * @type {boolean}
		 */
		this.calculateSL = options.calculateSL ?? true;

		/**
		 * Whether automatic success/failure applies.
		 *
		 * @type {boolean}
		 */
		this.autoSuccessFailure = options.autoSuccessFailure ?? true;

		/**
		 * Arbitrary runtime context.
		 *
		 * @type {object}
		 */
		this.context = foundry.utils.deepClone(options.context ?? {});

		Object.freeze(this.modifiers);
		Object.freeze(this.context);
		Object.freeze(this);
	}
}
