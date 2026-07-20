import { WFRPItemModel } from "./item-model.mjs";

const fields = foundry.data.fields;

export class CareerModel extends WFRPItemModel {
	static defineSchema() {
		return foundry.utils.mergeObject(super.defineSchema(), {
			skillIds: new fields.ArrayField(new fields.StringField()),
			talentIds: new fields.ArrayField(new fields.StringField()),
			careerAdvances: new fields.SchemaField({
				ws: new fields.NumberField({ initial: 0 }),
				bs: new fields.NumberField({ initial: 0 }),
				s: new fields.NumberField({ initial: 0 }),
				t: new fields.NumberField({ initial: 0 }),
				w: new fields.NumberField({ initial: 0 }),
				a: new fields.NumberField({ initial: 0 }),
				ag: new fields.NumberField({ initial: 0 }),
				int: new fields.NumberField({ initial: 0 }),
				wp: new fields.NumberField({ initial: 0 }),
				fel: new fields.NumberField({ initial: 0 }),
			}),
		});
	}
}
