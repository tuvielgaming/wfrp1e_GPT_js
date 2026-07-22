/**
 * ============================================================================
 * WFRP1e Foundry VTT System
 * Weapon Item Document
 * ============================================================================
 *
 * Document wrapper for weapon items.
 *
 * Responsibilities:
 *  - weapon-specific convenience API
 *  - lifecycle hooks
 *  - document validation
 *
 * Does NOT perform combat calculations.
 * ============================================================================
 */

import { WFRPItem } from "./item.mjs";

export class WeaponItem extends WFRPItem {
	/* -------------------------------------------------------------------------
	 * Lifecycle
	 * ---------------------------------------------------------------------- */

	prepareBaseData() {
		super.prepareBaseData();
	}

	prepareDerivedData() {
		super.prepareDerivedData();
	}

	/* -------------------------------------------------------------------------
	 * Weapon Helpers
	 * ---------------------------------------------------------------------- */

	get category() {
		return this.system.category;
	}

	get group() {
		return this.system.group;
	}

	get damage() {
		return this.system.damage;
	}

	get range() {
		return this.system.range;
	}

	get reload() {
		return this.system.reload;
	}

	get hands() {
		return this.system.hands;
	}

	get initiativeModifier() {
		return this.system.initiativeModifier;
	}

	get criticalModifier() {
		return this.system.criticalModifier;
	}

	get hitLocation() {
		return this.system.hitLocation;
	}

	/* -------------------------------------------------------------------------
	 * Ammunition
	 * ---------------------------------------------------------------------- */

	get usesAmmunition() {
		return this.system.usesAmmunition === true;
	}

	get ammunitionType() {
		return this.system.ammunitionType;
	}

	get capacity() {
		return this.system.capacity;
	}

	get loaded() {
		return this.system.loaded;
	}

	get isLoaded() {
		if (!this.usesAmmunition) {
			return true;
		}

		return this.loaded > 0;
	}

	/* -------------------------------------------------------------------------
	 * Weapon Traits
	 * ---------------------------------------------------------------------- */

	get parry() {
		return this.system.parry === true;
	}

	get requiresTwoHands() {
		return this.system.requiresTwoHands === true;
	}

	get requiresStrength() {
		return this.system.requiresStrength;
	}

	get qualities() {
		return this.system.qualities;
	}

	get flaws() {
		return this.system.flaws;
	}

	get specialRules() {
		return this.system.specialRules;
	}

	/* -------------------------------------------------------------------------
	 * State
	 * ---------------------------------------------------------------------- */

	get isBroken() {
		return this.system.broken === true;
	}

	get isDamaged() {
		return this.system.damaged === true;
	}

	get canBeUsed() {
		return !this.isBroken;
	}
}
