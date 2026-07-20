const fields = foundry.data.fields;

export class WFRPItemModel extends foundry.abstract.TypeDataModel {
	static defineSchema() {
		return {
			description: new fields.HTMLField({
				initial: "",
			}),

			notes: new fields.HTMLField({
				initial: "",
			}),
		};
	}
}
