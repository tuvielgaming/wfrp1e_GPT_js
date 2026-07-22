import { WFRPItemModel } from "./item-model.mjs";
import {
	textField,
	htmlField,
	enumField,
	flagField,
	integerField,
	stringArrayField,
} from "./fields.mjs";

export class CareerModel extends WFRPItemModel {
	static defineSchema() {
		return foundry.utils.mergeObject(super.defineSchema(), {
			/*
			 * Classification
			 */
			class: textField(),

			careerLevel: integerField(1, 1),

			status: enumField(["brass", "silver", "gold"]),

			statusLevel: integerField(0, 0),

			/*
			 * Career progression
			 */
			previousCareer: textField(),

			nextCareers: stringArrayField(),

			/*
			 * Advances
			 */
			characteristics: stringArrayField(),

			skills: stringArrayField(),

			talents: stringArrayField(),

			trappings: stringArrayField(),

			/*
			 * Career options
			 */
			exits: stringArrayField(),

			complete: flagField(false),

			/*
			 * Rules
			 */
			specialRules: stringArrayField(),

			/*
			 * Description
			 */
			effect: htmlField(),
		});
	}
}
