import { WFRPItemModel } from "./item-model.mjs";

const fields = foundry.data.fields;

export class SkillModel extends WFRPItemModel {
	static defineSchema() {
		return foundry.utils.mergeObject(
			super.defineSchema(),

			{
				maxAdvances: new fields.NumberField({
					initial: 1,
				}),

				advanceCost: new fields.NumberField({
					initial: 100,
				}),

				characteristic: new fields.StringField({
					initial: "",
				}),
			},
		);
	}
}
