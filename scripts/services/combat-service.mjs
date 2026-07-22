/**
 * ============================================================================
 * WFRP1e Foundry VTT System
 * Combat Service
 * ----------------------------------------------------------------------------
 * Responsible for preparing derived combat data.
 *
 * This service contains no roll logic.
 * It only derives combat values from actor data.
 * ============================================================================
 */

export class CombatService {
	/**
	 * Prepare derived combat data.
	 *
	 * @param {WFRPActor} actor
	 */
	static prepare(actor) {
		const derived = actor.system.derived;
		const combat = actor.system.combat;

		const woundsCharacteristic = derived.characteristics.w.current;

		const attacksCharacteristic = derived.characteristics.a.current;

		const woundModifier = combat.wounds.modifier;

		const maximumWounds = woundsCharacteristic + woundModifier;

		const availableAttacks = Math.min(
			combat.attacks.available,
			attacksCharacteristic,
		);

		derived.combat = {
			wounds: {
				maximum: maximumWounds,

				current: combat.wounds.current,
			},

			attacks: {
				maximum: attacksCharacteristic,

				available: availableAttacks,
			},
		};
	}

	/**
	 * Returns true if the actor is alive.
	 *
	 * @param {WFRPActor} actor
	 *
	 * @returns {boolean}
	 */
	static isAlive(actor) {
		return this.getCurrentWounds(actor) > 0;
	}

	/**
	 * Returns current wounds.
	 *
	 * @param {WFRPActor} actor
	 *
	 * @returns {number}
	 */
	static getCurrentWounds(actor) {
		return Number(actor.system.derived?.combat?.wounds?.current ?? 0);
	}

	/**
	 * Returns maximum wounds.
	 *
	 * @param {WFRPActor} actor
	 *
	 * @returns {number}
	 */
	static getMaximumWounds(actor) {
		return Number(actor.system.derived?.combat?.wounds?.maximum ?? 0);
	}

	/**
	 * Returns available attacks.
	 *
	 * @param {WFRPActor} actor
	 *
	 * @returns {number}
	 */
	static getAvailableAttacks(actor) {
		return Number(actor.system.derived?.combat?.attacks?.available ?? 0);
	}

	/**
	 * Returns maximum attacks.
	 *
	 * @param {WFRPActor} actor
	 *
	 * @returns {number}
	 */
	static getMaximumAttacks(actor) {
		return Number(actor.system.derived?.combat?.attacks?.maximum ?? 0);
	}
}
