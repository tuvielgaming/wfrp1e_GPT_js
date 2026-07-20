export function canAdvanceCharacteristic(actor, key) {
	const career = actor.items.find((i) => i.type === "career");

	if (!career) return true;

	const maximum = career.system.careerAdvances[key];

	const bought = actor.system.characteristics[key].boughtAdvances;

	return maximum === undefined || bought < maximum;
}
