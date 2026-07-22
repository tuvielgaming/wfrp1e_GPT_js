import { WFRPItemModel } from "./item-model.mjs";
import {
	flagField,
	integerField,
	qualitiesField,
	flawsField,
	specialRulesField,
} from "./fields.mjs";

export class EquipmentModel extends WFRPItemModel {
	static defineSchema() {
		return foundry.utils.mergeObject(super.defineSchema(), {
			/*
			 * Durability
			 */
			durability: integerField(),

			maxDurability: integerField(),

			/*
			 * Equipment state
			 */
			damaged: flagField(false),

			broken: flagField(false),

			/*
			 * Rules
			 */
			qualities: qualitiesField(),

			flaws: flawsField(),

			specialRules: specialRulesField(),
		});
	}
}
