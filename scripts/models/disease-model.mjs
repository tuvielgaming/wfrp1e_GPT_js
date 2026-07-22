import { WFRPItemModel } from "./item-model.mjs";
import {
	textField,
	htmlField,
	enumField,
	flagField,
	stringArrayField,
	referenceField,
} from "./fields.mjs";

export class DiseaseModel extends WFRPItemModel {
	static defineSchema() {
		return foundry.utils.mergeObject(super.defineSchema(), {
			/*
			 * Classification
			 */
			severity: enumField(["minor", "major", "fatal"]),

			type: textField(),

			/*
			 * Progression
			 */
			incubation: textField(),

			duration: textField(),

			/*
			 * Mechanics
			 */
			test: textField(),

			difficulty: textField(),

			damage: textField(),

			/*
			 * Symptoms
			 */
			symptoms: stringArrayField(),

			/*
			 * Recovery
			 */
			cure: htmlField(),

			immunity: flagField(false),

			/*
			 * Rules reference
			 */
			sourceBook: referenceField(),

			/*
			 * Disease effects
			 */
			effect: htmlField(),
		});
	}
}
