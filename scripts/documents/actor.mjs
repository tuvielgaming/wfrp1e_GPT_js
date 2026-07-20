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
