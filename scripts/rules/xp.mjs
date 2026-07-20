export function canSpendXP(actor, amount) {
	return actor.system.resources.experience.current >= amount;
}
