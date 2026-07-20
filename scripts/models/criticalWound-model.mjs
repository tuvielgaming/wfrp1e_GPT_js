import { WFRPItemModel } from "./item-model.mjs";

const fields = foundry.data.fields;

export class CriticalWoundModel extends WFRPItemModel {
	static defineSchema() {
		return foundry.utils.mergeObject(
			super.defineSchema(),

			{
				location: new fields.StringField({
					initial: "",
				}),

				severity: new fields.NumberField({
					initial: 0,
				}),

				healed: new fields.BooleanField({
					initial: false,
				}),
			},
		);
	}
}
