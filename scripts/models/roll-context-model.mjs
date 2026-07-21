/**
 * ============================================================================
 * WFRP1e Foundry VTT System
 * Roll Context Model
 * ----------------------------------------------------------------------------
 * Describes the runtime context of a roll.
 *
 * RollContext does NOT describe WHAT is being rolled.
 * It describes HOW the roll should be processed.
 * ============================================================================
 */

export class RollContext {
	/**
	 * Creates a new RollContext.
	 *
	 * @param {object} options
	 */
	constructor(options = {}) {
		/**
		 * Roll visibility.
		 *
		 * public
		 * gmroll
		 * blindroll
		 * selfroll
		 *
		 * @type {string}
		 */
		this.visibility = options.visibility ?? "public";

		/**
		 * Is this an opposed test?
		 *
		 * @type {boolean}
		 */
		this.opposed = Boolean(options.opposed);

		/**
		 * Target actor.
		 *
		 * Used by opposed tests.
		 *
		 * @type {Actor|null}
		 */
		this.targetActor = options.targetActor ?? null;

		/**
		 * Fortune Point reroll.
		 *
		 * @type {boolean}
		 */
		this.reroll = Boolean(options.reroll);

		/**
		 * Optional source item.
		 *
		 * Weapon
		 * Spell
		 * Prayer
		 * Skill
		 *
		 * @type {Item|null}
		 */
		this.item = options.item ?? null;

		/**
		 * Arbitrary runtime data.
		 *
		 * @type {object}
		 */
		this.data = options.data ?? {};
	}
}
