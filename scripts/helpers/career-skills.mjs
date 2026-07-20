export async function prepareCareerSkills(actor, career) {
	const result = [];

	for (const uuid of career.system.skillIds) {
		const skill = await fromUuid(uuid);

		if (!skill) continue;

		const owned = actor.items.find((item) => item.system.sourceId === uuid);

		result.push({
			uuid,

			name: skill.name,

			owned: !!owned,

			boughtAdvances: owned?.system.boughtAdvances ?? 0,

			maxAdvances: skill.system.maxAdvances,
		});
	}

	return result;
}
