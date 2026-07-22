import { WFRPItemModel } from "./item-model.mjs";
import {
	textField,
	htmlField,
	enumField,
	flagField,
	modifierField,
	stringArrayField,
} from "./fields.mjs";

export class TalentModel extends WFRPItemModel {
	static defineSchema() {
		return foundry.utils.mergeObject(super.defineSchema(), {
			/*
			 * Classification
			 */
			type: enumField(["racial", "career", "general", "special"]),

			category: textField(),

			/*
			 * Advancement
			 */
			maxRank: modifierField(1),

			stackable: flagField(false),

			/*
			 * Requirements
			 */
			prerequisites: stringArrayField(),

			/*
			 * Rules
			 */
			modifier: modifierField(),

			effects: stringArrayField(),

			specialRules: stringArrayField(),

			/*
			 * Description
			 */
			effect: htmlField(),
		});
	}
}
