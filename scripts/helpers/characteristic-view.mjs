import { calculateCharacteristic } from "./calculations.mjs";

export function prepareCharacteristics(actor) {
	const career = actor.items.find((item) => item.type === "career");

	const careerAdvances = career?.system.careerAdvances ?? {};

	const result = {};

	for (const [key, value] of Object.entries(actor.system.characteristics)) {
		const max = careerAdvances[key] ?? null;

		const bought = value.boughtAdvances;

		result[key] = {
			key,

			label: key.toUpperCase(),

			base: value.base,

			max: max === null ? "" : formatCareerAdvance(key, max),

			boxes: createAdvanceBoxes(key, bought, max),

			current: calculateCharacteristic(key, value),
		};
	}

	return result;
}

function createAdvanceBoxes(key, bought, max) {
	const count = Math.max(bought, max ?? 0);

	return Array.from(
		{
			length: count,
		},

		(_, index) => index < bought,
	);
}

function formatCareerAdvance(key, value) {
	const small = ["ws", "bs", "s", "t", "w", "a"];

	const amount = small.includes(key) ? value : value * 10;

	return `+${amount}`;
}
