export async function buySkill(actor, skillUuid) {
	const source = await fromUuid(skillUuid);

	if (!source) return false;

	const owned = actor.items.some(
		(item) => item.system.sourceId === source.uuid,
	);

	if (owned) {
		ui.notifications.warn("Skill already owned.");

		return false;
	}

	const cost = source.system.advanceCost;

	const xp = actor.system.resources.experience;

	if (xp.current < cost) {
		ui.notifications.warn("Not enough experience.");

		return false;
	}

	await actor.createEmbeddedDocuments(
		"Item",

		[
			{
				name: source.name,

				type: "skill",

				system: {
					sourceId: source.uuid,

					boughtAdvances: 1,
				},

				effects: source.effects.map((e) => e.toObject()),
			},
		],
	);

	await actor.update({
		"system.resources.experience.current": xp.current - cost,

		"system.resources.experience.spent": xp.spent + cost,
	});

	return true;
}
