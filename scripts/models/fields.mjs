const fields = foundry.data.fields;

export function characteristicField() {
	return new fields.SchemaField({
		base: new fields.NumberField({
			initial: 0,
		}),

		boughtAdvances: new fields.NumberField({
			initial: 0,
		}),
	});
}
