export async function getCareer(actor) {
	const id = actor.system.career.sourceId;

	if (!id) return null;

	return await fromUuid(id);
}
