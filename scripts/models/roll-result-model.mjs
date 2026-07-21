/**
 * ============================================================================
 * WFRP1e Foundry VTT System
 * Roll Result Model
 * ----------------------------------------------------------------------------
 * Represents the result of a roll executed by RollService.
 *
 * This class contains data only.
 * It does not calculate success, criticals or modifiers.
 * ============================================================================
 */

export class RollResult {
	/**
	 * Creates a new RollResult.
	 *
	 * @param {object} options
	 */
	constructor(options = {}) {
		/**
		 * Original RollRequest.
		 *
		 * @type {object|null}
		 */
		this.request = options.request ?? null;

		/**
		 * Foundry Roll object.
		 *
		 * @type {Roll|null}
		 */
		this.roll = options.roll ?? null;

		/**
		 * Numeric value rolled.
		 *
		 * @type {number}
		 */
		this.value = Number(options.value ?? 0);

		/**
		 * Final target number.
		 *
		 * @type {number}
		 */
		this.target = Number(options.target ?? 0);

		/**
		 * Roll succeeded.
		 *
		 * @type {boolean}
		 */
		this.success = Boolean(options.success);

		/**
		 * Roll failed.
		 *
		 * @type {boolean}
		 */
		this.failure = Boolean(options.failure);

		/**
		 * Critical success.
		 *
		 * @type {boolean}
		 */
		this.critical = Boolean(options.critical);

		/**
		 * Fumble / Critical failure.
		 *
		 * @type {boolean}
		 */
		this.fumble = Boolean(options.fumble);

		/**
		 * Degrees of Success.
		 *
		 * WFRP1e currently uses simple success/failure,
		 * but we keep this field for optional rules and
		 * future extensions.
		 *
		 * @type {number}
		 */
		this.degrees = Number(options.degrees ?? 0);

		/**
		 * Difference between target and roll.
		 *
		 * Positive = success margin.
		 * Negative = failure margin.
		 *
		 * @type {number}
		 */
		this.margin = Number(options.margin ?? 0);

		/**
		 * Final applied modifier.
		 *
		 * @type {number}
		 */
		this.modifier = Number(options.modifier ?? 0);

		/**
		 * Final chat message id.
		 *
		 * Filled later by ChatService.
		 *
		 * @type {string|null}
		 */
		this.chatMessageId = options.chatMessageId ?? null;

		/**
		 * Additional metadata.
		 *
		 * @type {object}
		 */
		this.context = options.context ?? {};
	}
}
