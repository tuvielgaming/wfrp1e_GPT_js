import { WFRPItemModel } from "./item-model.mjs";
import {
	htmlField,
	textField,
	bodyLocationField,
	integerField,
	flagField,
	stringArrayField,
	modifierField,
} from "./fields.mjs";

export class CriticalWoundModel extends WFRPItemModel {
	static defineSchema() {
		return foundry.utils.mergeObject(super.defineSchema(), {
			/*
			 * Injury location
			 */
			location: bodyLocationField(),

			/*
			 * Severity
			 */
			severity: integerField(1, 1),

			permanent: flagField(false),

			healed: flagField(false),

			/*
			 * Recovery
			 */
			healingTestModifier: modifierField(),

			healingDays: integerField(0, 0),

			/*
			 * Rules
			 */
			effect: htmlField(),

			gameEffects: stringArrayField(),

			/*
			 * Story
			 */
			cause: textField(),

			notes: htmlField(),
		});
	}
}
