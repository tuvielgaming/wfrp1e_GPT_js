export class ArmourModel extends EquipmentModel {
	static defineSchema() {
		return foundry.utils.mergeObject(
			super.defineSchema(),

			{
				armourPoints: new fields.NumberField({
					initial: 0,
				}),

				locations: new fields.ArrayField(new fields.StringField()),
			},
		);
	}
}
