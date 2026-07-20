export class WeaponModel extends EquipmentModel {
	static defineSchema() {
		return foundry.utils.mergeObject(
			super.defineSchema(),

			{
				damage: new fields.StringField({
					initial: "",
				}),

				qualities: new fields.ArrayField(new fields.StringField()),
			},
		);
	}
}
