/**
 * ============================================================================
 * WFRP1e Foundry VTT System
 * Modifier Model
 * ----------------------------------------------------------------------------
 * Represents a single modifier applied to a roll.
 *
 * This class contains no calculation logic.
 * It simply describes a modifier.
 * ============================================================================
 */

export class ModifierModel {
	/**
	 * Creates a new modifier.
	 *
	 * @param {object} options
	 */
	constructor(options = {}) {
		/**
		 * Human readable name.
		 *
		 * Example:
		 * "Charging"
		 * "Darkness"
		 * "Bless"
		 *
		 * @type {string}
		 */
		this.label = options.label ?? "";

		/**
		 * Numeric modifier.
		 *
		 * Example:
		 * +10
		 * -20
		 *
		 * @type {number}
		 */
		this.value = Number(options.value ?? 0);

		/**
		 * Source of the modifier.
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
		 * Category.
		 *
		 * Allows grouping modifiers later.
		 *
		 * Examples:
		 * circumstance
		 * equipment
		 * talent
		 * spell
		 * effect
		 *
		 * @type {string}
		 */
		this.category = options.category ?? "generic";

		/**
		 * Whether this modifier is enabled.
		 *
		 * @type {boolean}
		 */
		this.enabled = options.enabled ?? true;

		/**
		 * Whether identical modifiers can stack.
		 *
		 * @type {boolean}
		 */
		this.stackable = options.stackable ?? true;

		/**
		 * Additional custom data.
		 *
		 * @type {object}
		 */
		this.context = options.context ?? {};
	}
}
