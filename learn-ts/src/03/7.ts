{
	type Greet = (name: string) => string;
	const greet: Greet = (name) => `Hello, ${name}`;

	type Point = [number, number, number];

	let point1: Point = [10, 20, 30]; // X좌표, Y좌표, Z좌표
	let point2: Point = [10, 20, 30]; // X좌표, Y좌표, Z좌표
	let point3: Point = [10, 20, 30]; // X좌표, Y좌표, Z좌표
	let point4: Point = [10, 20, 30]; // X좌표, Y좌표, Z좌표

	type BookItem = {
		readonly id: number;
		name: string;
		price: number;
		releaseDate?: Date;
	};

	type OrderBook = {
		orderId: string;
		items: BookItem[];
	};

	let myOrder: OrderBook = {
		orderId: "ord-123",
		items: [
			{
				id: 1,
				name: "코딩 자율학습 HTML + CSS + Javascript",
				price: 20000,
			},
			{
				id: 2,
				name: "한권으로 끝내는 프론트엔드",
				price: 30000,
			},
		],
	};
}
