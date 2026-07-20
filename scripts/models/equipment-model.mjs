import { WFRPItemModel } from "./item-model.mjs";

const fields = foundry.data.fields;

export class EquipmentModel extends WFRPItemModel {
	static defineSchema() {
		return foundry.utils.mergeObject(
			super.defineSchema(),

			{
				encumbrance: new fields.NumberField({
					initial: 0,
				}),

				weight: new fields.NumberField({
					initial: 0,
				}),

				equipped: new fields.BooleanField({
					initial: false,
				}),
			},
		);
	}
}
