import { CharacteristicService } from "../services/characteristic-service.mjs";
import { CombatService } from "../services/combat-service.mjs";
import { SkillService } from "../services/skill-service.mjs";

export class WFRPActor extends Actor {
	/* -------------------------------------------------------------------------
	 * Lifecycle
	 * ---------------------------------------------------------------------- */

	prepareBaseData() {
		super.prepareBaseData();
	}

	prepareEmbeddedDocuments() {
		super.prepareEmbeddedDocuments();
	}

	prepareDerivedData() {
		super.prepareDerivedData();

		if (this.type !== "character") {
			return;
		}

		this.system.derived ??= {};

		CharacteristicService.prepare(this);
		CombatService.prepare(this);
		SkillService.prepare(this);
	}

	/* -------------------------------------------------------------------------
	 * Type Helpers
	 * ---------------------------------------------------------------------- */

	get isCharacter() {
		return this.type === "character";
	}

	get isNpc() {
		return this.type === "npc";
	}

	/* -------------------------------------------------------------------------
	 * Characteristic Helpers
	 * ---------------------------------------------------------------------- */

	getCharacteristic(id) {
		return this.system.derived?.characteristics?.[id] ?? null;
	}

	getCharacteristicValue(id) {
		return this.getCharacteristic(id)?.current ?? 0;
	}

	/* -------------------------------------------------------------------------
	 * Combat Helpers
	 * ---------------------------------------------------------------------- */

	getCurrentWounds() {
		return CombatService.getCurrentWounds(this);
	}

	getMaximumWounds() {
		return CombatService.getMaximumWounds(this);
	}

	getAvailableAttacks() {
		return CombatService.getAvailableAttacks(this);
	}

	getMaximumAttacks() {
		return CombatService.getMaximumAttacks(this);
	}

	isAlive() {
		return CombatService.isAlive(this);
	}

	/* -------------------------------------------------------------------------
	 * Skill Helpers
	 * ---------------------------------------------------------------------- */

	getSkills() {
		return SkillService.getSkills(this);
	}

	getSkill(identifier) {
		return SkillService.getSkill(this, identifier);
	}
}
