import { WFRPItemModel } from "./item-model.mjs";
import {
	textField,
	htmlField,
	enumField,
	flagField,
	integerField,
	stringArrayField,
	referenceField,
	modifierField,
} from "./fields.mjs";

export class MutationModel extends WFRPItemModel {
	static defineSchema() {
		return foundry.utils.mergeObject(super.defineSchema(), {
			/*
			 * Classification
			 */
			severity: enumField(["minor", "major", "chaos"]),

			source: enumField(["chaos", "divine", "magical", "other"]),

			type: textField(),

			/*
			 * Visibility
			 */
			visible: flagField(true),

			hidden: flagField(false),

			/*
			 * Mechanical effects
			 */
			insanityGain: integerField(0, 0),

			corruptionValue: integerField(0, 0),

			modifier: modifierField(),

			/*
			 * Rules
			 */
			effect: htmlField(),

			gameEffects: stringArrayField(),

			/*
			 * Story
			 */
			cause: textField(),

			cure: htmlField(),

			sourceBook: referenceField(),
		});
	}
}
