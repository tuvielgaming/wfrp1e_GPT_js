import { EquipmentModel } from "./equipment-model.mjs";
import {
	textField,
	integerField,
	enumField,
	bodyLocationField,
	bodyLocationsField,
	flagField,
	htmlField,
} from "./fields.mjs";

export class ArmourModel extends EquipmentModel {
	static defineSchema() {
		return foundry.utils.mergeObject(super.defineSchema(), {
			/*
			 * Armour classification
			 */
			category: enumField(["light", "medium", "heavy", "shield"]),

			type: textField(),

			/*
			 * Protection
			 */
			armourPoints: integerField(),

			locations: bodyLocationsField(),

			primaryLocation: bodyLocationField(),

			/*
			 * Shield
			 */
			shield: flagField(false),

			parryBonus: integerField(),

			/*
			 * Restrictions
			 */
			movementPenalty: integerField(),

			initiativePenalty: integerField(),

			encumbranceModifier: integerField(),

			/*
			 * Rules
			 */
			effect: htmlField(),
		});
	}
}
