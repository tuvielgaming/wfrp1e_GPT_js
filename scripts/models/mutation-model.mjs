import { WFRPItemModel } from "./item-model.mjs";

const fields = foundry.data.fields;

export class MutationModel extends WFRPItemModel {
	static defineSchema() {
		return foundry.utils.mergeObject(
			super.defineSchema(),

			{
				severity: new fields.StringField({
					initial: "minor",
				}),

				source: new fields.StringField({
					initial: "chaos",
				}),
			},
		);
	}
}
