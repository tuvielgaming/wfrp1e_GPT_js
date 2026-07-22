import { EquipmentModel } from "./equipment-model.mjs";
import {
	textField,
	integerField,
	enumField,
	bodyLocationField,
	modifierField,
	flagField,
	htmlField,
} from "./fields.mjs";

export class WeaponModel extends EquipmentModel {
	static defineSchema() {
		return foundry.utils.mergeObject(super.defineSchema(), {
			/*
			 * Weapon classification
			 */
			category: enumField([
				"melee",
				"missile",
				"thrown",
				"firearm",
				"experimental",
			]),

			group: textField(),

			/*
			 * Combat statistics
			 */
			damage: textField(),

			range: textField(),

			reload: integerField(),

			hands: integerField(1, 1, 2),

			initiativeModifier: modifierField(),

			/*
			 * Ammunition
			 */
			usesAmmunition: flagField(false),

			ammunitionType: textField(),

			capacity: integerField(),

			loaded: integerField(),

			/*
			 * Criticals
			 */
			criticalModifier: modifierField(),

			hitLocation: bodyLocationField(),

			/*
			 * Special behaviour
			 */
			parry: flagField(false),

			requiresTwoHands: flagField(false),

			requiresStrength: integerField(),

			/*
			 * Rules text
			 */
			effect: htmlField(),
		});
	}
}
