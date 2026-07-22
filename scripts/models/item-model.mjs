import {
	htmlField,
	textField,
	flagField,
	integerField,
	weightField,
	valueField,
	referenceField,
} from "./fields.mjs";

export class WFRPItemModel extends foundry.abstract.TypeDataModel {
	static defineSchema() {
		return {
			/*
			 * Core identity
			 */
			description: htmlField(),

			notes: htmlField(),

			source: referenceField(),

			/*
			 * Economy
			 */
			value: valueField(),

			availability: textField(),

			/*
			 * Physical properties
			 */
			weight: weightField(),

			/*
			 * Ownership / inventory state
			 */
			quantity: integerField(1, 0),

			equipped: flagField(false),

			carried: flagField(true),

			identified: flagField(true),

			magical: flagField(false),
		};
	}
}
