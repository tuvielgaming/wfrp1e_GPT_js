import { WFRPItemModel } from "./item-model.mjs";

const fields = foundry.data.fields;

export class SpellModel extends WFRPItemModel {
	static defineSchema() {
		return foundry.utils.mergeObject(
			super.defineSchema(),

			{
				castingNumber: new fields.NumberField({
					initial: 0,
				}),

				ingredients: new fields.HTMLField({
					initial: "",
				}),

				range: new fields.StringField({
					initial: "",
				}),

				duration: new fields.StringField({
					initial: "",
				}),
			},
		);
	}
}
