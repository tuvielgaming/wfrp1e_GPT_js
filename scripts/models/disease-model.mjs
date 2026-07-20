import { WFRPItemModel } from "./item-model.mjs";

const fields = foundry.data.fields;

export class DiseaseModel extends WFRPItemModel {
	static defineSchema() {
		return foundry.utils.mergeObject(
			super.defineSchema(),

			{
				severity: new fields.StringField({
					initial: "",
				}),

				incubation: new fields.StringField({
					initial: "",
				}),

				duration: new fields.StringField({
					initial: "",
				}),

				symptoms: new fields.ArrayField(new fields.StringField()),
			},
		);
	}
}
