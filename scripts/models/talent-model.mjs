import { WFRPItemModel } from "./item-model.mjs";

const fields = foundry.data.fields;

export class TalentModel extends WFRPItemModel {
	static defineSchema() {
		return foundry.utils.mergeObject(
			super.defineSchema(),

			{
				category: new fields.StringField({
					initial: "",
				}),
			},
		);
	}
}
