import { WFRPItemModel } from "./item-model.mjs";
import {
	textField,
	htmlField,
	enumField,
	integerField,
	flagField,
	stringArrayField,
} from "./fields.mjs";

export class SpellModel extends WFRPItemModel {
	static defineSchema() {
		return foundry.utils.mergeObject(super.defineSchema(), {
			/*
			 * Classification
			 */
			type: enumField([
				"petty",
				"battle",
				"arcane",
				"divine",
				"druidic",
				"chaos",
			]),

			lore: textField(),

			/*
			 * Casting
			 */
			cn: integerField(0, 0),

			range: textField(),

			duration: textField(),

			target: textField(),

			ingredients: textField(),

			ritual: flagField(false),

			/*
			 * Requirements
			 */
			magicPoints: integerField(0, 0),

			/*
			 * Rules
			 */
			effect: htmlField(),

			miscast: htmlField(),

			overcast: htmlField(),

			specialRules: stringArrayField(),
		});
	}
}
