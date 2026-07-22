import {
	characteristicField,
	resourceField,
	moneyField,
	integerField,
	textField
} from "./fields.mjs";

const fields = foundry.data.fields;

export class WFRPCharacterModel extends foundry.abstract.TypeDataModel {
	static defineSchema() {
		return {
			/*
			 * Character identity
			 */
			profile: new fields.SchemaField({
				name: textField(),
				race: textField(),
				career: textField(),

				sex: textField(),
				age: integerField(),

				height: textField(),
				weight: textField(),

				hair: textField(),
				eyes: textField(),

				birthplace: textField(),
				starsign: textField(),
				alignment: textField(),
			}),

			/*
			 * Primary characteristics
			 */
			characteristics: new fields.SchemaField({
				ws: characteristicField(),
				bs: characteristicField(),
				s: characteristicField(),
				t: characteristicField(),
				w: characteristicField(),
				i: characteristicField(),
				a: characteristicField(),
				dex: characteristicField(),
				ld: characteristicField(),
				int: characteristicField(),
				cl: characteristicField(),
				wp: characteristicField(),
				fel: characteristicField(),
			}),

			/*
			 * Resources
			 */
			resources: new fields.SchemaField({
				wounds: resourceField(),

				fate: resourceField(),

				fortune: resourceField(),

				movement: resourceField(4),

				experience: new fields.SchemaField({
					current: integerField(),
					spent: integerField(),
				}),

				money: moneyField(),
			}),

			/*
			 * Combat
			 */
			combat: new fields.SchemaField({
				damageBonus: integerField(),

				attacks: integerField(1, 0),

				initiativeModifier: integerField(),

				armourPoints: integerField(),
			}),

			/*
			 * Psychology
			 */
			psychology: new fields.SchemaField({
				insanityPoints: integerField(),

				corruptionPoints: integerField(),
			}),

			/*
			 * Current career reference
			 */
			career: new fields.SchemaField({
				sourceId: textField(),
				name: textField(),
			}),

			/*
			 * Biography
			 */
			biography: new fields.SchemaField({
				description: textField(),
				appearance: textField(),
				background: textField(),
				notes: textField(),
			}),
		};
	}
}