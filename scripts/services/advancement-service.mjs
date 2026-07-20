import { characteristicAdvanceCost } from "../rules/advancement-costs.mjs";

export async function buyCharacteristicAdvance(actor, key) {
	const cost = characteristicAdvanceCost(key);

	const xp = actor.system.resources.experience;

	if (xp.current < cost) {
		ui.notifications.warn("Not enough experience points.");

		return false;
	}

	const current = actor.system.characteristics[key].boughtAdvances;

	await actor.update({
		[`system.characteristics.${key}.boughtAdvances`]: current + 1,

		"system.resources.experience.current": xp.current - cost,

		"system.resources.experience.spent":
			actor.system.resources.experience.spent + cost,
	});

	return true;
}
