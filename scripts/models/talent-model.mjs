import { WFRPItemModel } from "./item-model.mjs";
import { textField, flagField, integerField } from "./fields.mjs";

const fields = foundry.data.fields;

export class TalentModel extends WFRPItemModel {
	static defineSchema() {
		return foundry.utils.mergeObject(super.defineSchema(), {
			/*
			 * Classification
			 */
			category: textField(),

			type: new fields.StringField({
				initial: "talent",
				choices: ["talent", "special", "racial"],
			}),

			/*
			 * Ranks
			 */
			currentRank: integerField(),

			maxRank: integerField(1, 1),

			stackable: flagField(),

			/*
			 * Requirements
			 */
			prerequisite: textField(),

			/*
			 * Rules
			 */
			testsAffected: new fields.ArrayField(textField()),

			effect: new fields.HTMLField({
				initial: "",
			}),

			passive: flagField(true),
		});
	}
}
