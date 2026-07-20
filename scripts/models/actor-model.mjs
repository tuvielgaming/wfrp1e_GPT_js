import { characteristicField } from "./fields.mjs";

const fields = foundry.data.fields;

export class WFRPCharacterModel extends foundry.abstract.TypeDataModel {
	static defineSchema() {
		return {
			profile: new fields.SchemaField({
				race: new fields.StringField({
					initial: "",
				}),

				career: new fields.StringField({
					initial: "",
				}),
			}),

			characteristics: new fields.SchemaField({
				ws: characteristicField(),
				bs: characteristicField(),

				s: characteristicField(),
				t: characteristicField(),

				w: characteristicField(),
				a: characteristicField(),

				ag: characteristicField(),

				int: characteristicField(),

				wp: characteristicField(),

				fel: characteristicField(),
			}),

			combat: new fields.SchemaField({
				wounds: new fields.SchemaField({
					current: new fields.NumberField({
						initial: 0,
					}),

					modifier: new fields.NumberField({
						initial: 0,
					}),
				}),

				attacks: new fields.SchemaField({
					available: new fields.NumberField({
						initial: 0,
					}),
				}),
			}),

            career: new fields.SchemaField({
                sourceId: new fields.StringField({
                        initial:""
                    }),

                name: new fields.StringField({
                        initial:""
                    })
            })
		};
	}
}
