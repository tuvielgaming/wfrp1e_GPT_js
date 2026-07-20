export function characteristicAdvanceCost(characteristic) {
	const costs = {
		ws: 100,
		bs: 100,
		s: 100,
		t: 100,
		w: 100,
		a: 100,
		ag: 100,
		int: 100,
		wp: 100,
		fel: 100,
	};

	return costs[characteristic] ?? 100;
}
