	interface Operation {
		(n1: number, n2: number): number;
	}

	const add: Operation = (n1, n2) => n1 + n2;
	const subtract: Operation = (n1, n2) => n1 - n2;

	console.log(add(1, 4));
	console.log(subtract(1, 4));