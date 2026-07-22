/**
 * ============================================================================
 * WFRP1e Foundry VTT System
 * Base Item Document
 * ============================================================================
 *
 * Base document shared by every WFRP item.
 *
 * Responsibilities:
 *  - Foundry lifecycle
 *  - Common helper getters
 *  - Type identification
 *
 * This class intentionally contains NO game mechanics.
 * Item-specific behaviour belongs in specialised Item Documents.
 * ============================================================================
 */

export class WFRPItem extends Item {
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
	}

	/* -------------------------------------------------------------------------
	 * Type Helpers
	 * ---------------------------------------------------------------------- */

	get isWeapon() {
		return this.type === "weapon";
	}

	get isArmour() {
		return this.type === "armour";
	}

	get isSpell() {
		return this.type === "spell";
	}

	get isSkill() {
		return this.type === "skill";
	}

	get isTalent() {
		return this.type === "talent";
	}

	get isCareer() {
		return this.type === "career";
	}

	get isDisease() {
		return this.type === "disease";
	}

	get isMutation() {
		return this.type === "mutation";
	}

	get isCriticalWound() {
		return this.type === "criticalWound";
	}

	get isTrapping() {
		return this.type === "trapping";
	}

	/* -------------------------------------------------------------------------
	 * Common Data Helpers
	 * ---------------------------------------------------------------------- */

	get description() {
		return this.system.description;
	}

	get notes() {
		return this.system.notes;
	}

	get source() {
		return this.system.source;
	}

	get quantity() {
		return this.system.quantity ?? 1;
	}

	get weight() {
		return this.system.weight ?? 0;
	}

	get value() {
		return this.system.value ?? 0;
	}

	get availability() {
		return this.system.availability;
	}

	get equipped() {
		return this.system.equipped === true;
	}

	get carried() {
		return this.system.carried !== false;
	}

	get identified() {
		return this.system.identified !== false;
	}

	get magical() {
		return this.system.magical === true;
	}

	/* -------------------------------------------------------------------------
	 * Convenience
	 * ---------------------------------------------------------------------- */

	get displayName() {
		return this.name;
	}

	get uuidReference() {
		return this.uuid;
	}
}
