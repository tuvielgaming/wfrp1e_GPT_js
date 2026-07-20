export function calculateCharacteristic(key, data) {
	const smallAdvance = ["ws", "bs", "s", "t", "w", "a"];

	const modifier = smallAdvance.includes(key)
		? data.boughtAdvances
		: data.boughtAdvances * 10;

	return data.base + modifier;
}
