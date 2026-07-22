import { EquipmentModel } from "./equipment-model.mjs";
import {
	textField,
	htmlField,
	flagField,
	integerField,
	enumField,
	specialRulesField,
} from "./fields.mjs";

export class TrappingModel extends EquipmentModel {
	static defineSchema() {
		return foundry.utils.mergeObject(super.defineSchema(), {
			/*
			 * Classification
			 */
			category: enumField([
				"general",
				"tool",
				"container",
				"consumable",
				"trade",
				"religious",
				"clothing",
				"food",
				"miscellaneous",
			]),

			subcategory: textField(),

			/*
			 * Usage
			 */
			consumable: flagField(false),

			uses: integerField(0, 0),

			maxUses: integerField(0, 0),

			rechargeable: flagField(false),

			/*
			 * Container support
			 */
			container: flagField(false),

			capacity: integerField(0, 0),

			/*
			 * Rules
			 */
			effect: htmlField(),

			specialRules: specialRulesField(),
		});
	}
}
