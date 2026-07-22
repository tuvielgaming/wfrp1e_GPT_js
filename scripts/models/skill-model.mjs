import { WFRPItemModel } from "./item-model.mjs";
import {
	textField,
	htmlField,
	enumField,
	flagField,
	integerField,
	modifierField,
	stringArrayField,
} from "./fields.mjs";

export class SkillModel extends WFRPItemModel {
	static defineSchema() {
		return foundry.utils.mergeObject(super.defineSchema(), {
			/*
			 * Classification
			 */
			type: enumField(["basic", "advanced"]),

			characteristic: enumField([
				"ws",
				"bs",
				"s",
				"t",
				"ag",
				"int",
				"wp",
				"fel",
			]),

			category: textField(),

			/*
			 * Progression
			 */
			advances: integerField(0, 0),

			maxAdvances: integerField(0, 0),

			career: textField(),

			/*
			 * Rules
			 */
			modifier: modifierField(),

			grouped: flagField(false),

			group: textField(),

			specialisations: stringArrayField(),

			/*
			 * Description
			 */
			effect: htmlField(),
		});
	}
}
