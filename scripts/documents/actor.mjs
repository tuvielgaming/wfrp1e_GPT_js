import { calculateCharacteristic } from "../helpers/calculations.mjs";

export class WFRPActor extends Actor {
	prepareDerivedData() {
		super.prepareDerivedData();

		if (this.type !== "character") return;

		this.prepareCharacteristics();

		this.prepareCombat();

		this.prepareSkills();
	}

	prepareCharacteristics() {
		const characteristics = this.system.characteristics;

		const derived = {};

		for (const [key, value] of Object.entries(characteristics)) {
			derived[key] = {
				base: value.base,

				advance: this.getAdvanceDisplay(key, value.boughtAdvances),

				current: calculateCharacteristic(key, value),
			};
		}

		this.system.derived = this.system.derived ?? {};

		this.system.derived.characteristics = derived;
	}

	getAdvanceDisplay(key, advances) {
		if (advances <= 0) return "";

		const smallAdvance = ["ws", "bs", "s", "t", "w", "a"];

		const value = smallAdvance.includes(key) ? advances : advances * 10;

		return `+${value}`;
	}

	async getCareerAdvances() {
		const career = this.items.find((i) => i.type === "career");

		if (!career) return {};

		return career.system.careerAdvances;
	}

	/**
	 * Returns a characteristic definition.
	 *
	 * @param {string} id
	 * @returns {object|null}
	 */
	getCharacteristic(id) {
		return this.system.characteristics?.[id] ?? null;
	}

	/**
	 * Returns the derived value of a characteristic.
	 *
	 * @param {string} id
	 * @returns {number}
	 */
	getCharacteristicValue(id) {
		return Number(this.system.derived?.characteristics?.[id]?.current ?? 0);
	}

	/**
	 * Returns the base value of a characteristic.
	 *
	 * @param {string} id
	 * @returns {number}
	 */
	getCharacteristicBase(id) {
		return Number(this.system.characteristics?.[id]?.base ?? 0);
	}

	/**
	 * Returns the advancement value.
	 *
	 * @param {string} id
	 * @returns {number}
	 */
	getCharacteristicAdvances(id) {
		return Number(this.system.characteristics?.[id]?.boughtAdvances ?? 0);
	}

	/**
	 * Returns a skill owned by this actor.
	 *
	 * @param {string} id
	 * @returns {Item|null}
	 */
	getSkill(id) {
		return (
			this.items.find(
				(item) => item.type === "skill" && (item.id === id || item.name === id),
			) ?? null
		);
	}

	/**
	 * Returns current wounds.
	 *
	 * @returns {number}
	 */
	getCurrentWounds() {
		return Number(this.system.derived?.combat?.wounds?.current ?? 0);
	}

	/**
	 * Returns maximum wounds.
	 *
	 * @returns {number}
	 */
	getMaximumWounds() {
		return Number(this.system.derived?.combat?.wounds?.maximum ?? 0);
	}

	/**
	 * Returns true if the actor is alive.
	 *
	 * @returns {boolean}
	 */
	isAlive() {
		return this.getCurrentWounds() > 0;
	}

	prepareCombat() {
		const w = this.system.derived.characteristics.w.current;
		const attacks = this.system.derived.characteristics.a.current;

		const modifier = this.system.combat.wounds.modifier;

		this.system.derived.combat = {
			wounds: {
				maximum: w + modifier,

				current: this.system.combat.wounds.current,
			},
			attacks: {
				maximum: attacks,

				available: Math.min(this.system.combat.attacks.available, attacks),
			},
		};
	}

	prepareSkills() {
		const owned = this.items.filter((i) => i.type === "skill");

		this.system.derived.skills = owned.map((skill) => {
			return {
				id: skill.id,

				name: skill.name,

				boughtAdvances: skill.system.boughtAdvances,
			};
		});
	}
}
