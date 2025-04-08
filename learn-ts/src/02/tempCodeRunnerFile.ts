	let mixedItems: {
		id: number;
		type: string;
		name: string;
		size: string;
	}[] = [
		{ id: 1, type: "food", name: "Pizza", size: "Large" },
		{ id: 2, type: "drink", name: "Coke", size: "Medium" },
		{ id: 3, type: "food", name: "Burger", size: "Small" },
	];
	console.log(mixedItems[2].name);