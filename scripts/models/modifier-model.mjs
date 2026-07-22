/**
 * ============================================================================
 * WFRP1e Foundry VTT System
 * Modifier Model
 * ----------------------------------------------------------------------------
 * Immutable description of a single roll modifier.
 *
 * This class contains no business logic.
 * It only represents modifier data consumed by the Roll Engine.
 * ============================================================================
 */

export class ModifierModel {
	/**
	 * @param {object} options
	 */
	constructor(options = {}) {
		/**
		 * Unique identifier.
		 *
		 * @type {string}
		 */
		this.id = options.id ?? foundry.utils.randomID();

		/**
		 * Human readable label.
		 *
		 * Example:
		 * Charging
		 * Darkness
		 * Bless
		 *
		 * @type {string}
		 */
		this.label = options.label ?? "";

		/**
		 * Modifier value.
		 *
		 * Positive and negative values are both allowed.
		 *
		 * @type {number}
		 */
		this.value = Number(options.value ?? 0);

		/**
		 * Source object type.
		 *
		 * Example:
		 * Talent
		 * Spell
		 * Weapon
		 * ActiveEffect
		 *
		 * @type {string}
		 */
		this.source = options.source ?? "Unknown";

		/**
		 * Category used by the Roll Engine.
		 *
		 * Supported values:
		 * generic
		 * circumstance
		 * equipment
		 * talent
		 * spell
		 * effect
		 * injury
		 * disease
		 * mutation
		 * difficulty
		 * user
		 *
		 * @type {string}
		 */
		this.category = options.category ?? "generic";

		/**
		 * Display priority.
		 *
		 * Lower values appear first.
		 *
		 * @type {number}
		 */
		this.priority = Number(options.priority ?? 100);

		/**
		 * Whether this modifier is currently enabled.
		 *
		 * @type {boolean}
		 */
		this.enabled = options.enabled ?? true;

		/**
		 * Whether identical modifiers may stack.
		 *
		 * @type {boolean}
		 */
		this.stackable = options.stackable ?? true;

		/**
		 * Whether this modifier is hidden from players.
		 *
		 * Useful for GM-only modifiers.
		 *
		 * @type {boolean}
		 */
		this.hidden = options.hidden ?? false;

		/**
		 * Whether the modifier is temporary.
		 *
		 * Temporary modifiers are typically removed after the roll.
		 *
		 * @type {boolean}
		 */
		this.temporary = options.temporary ?? false;

		/**
		 * Optional expiry information.
		 *
		 * Example:
		 * endOfTurn
		 * startOfRound
		 * duration
		 *
		 * @type {string|null}
		 */
		this.expires = options.expires ?? null;

		/**
		 * Optional arbitrary metadata.
		 *
		 * Used by specialised roll handlers.
		 *
		 * @type {object}
		 */
		this.context = foundry.utils.deepClone(options.context ?? {});

		Object.freeze(this.context);
		Object.freeze(this);
	}
}
