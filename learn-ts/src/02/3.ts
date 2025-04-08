{
	const user: {
		// 객체를 그대로 복사해서 : 찍고 타입으로 지정해줄 수 있게 붙여넣고, 값을 타입으로 변경한다.
		name: string;
		age: number;
	} = {
		name: "ys",
		age: 20,
	};

	const userObj: {
		id: number;
		name: string;
		address: {
			zipCode: number;
			street: string;
		}; // 이 address를 그냥 object로 퉁쳐도 되지만, 권장하는 방식은 아님.
		// 이렇게 다 적었을 때 이점은, 자동완성 기능이 있음. 또한 타입이 불분명해지기 때문에.
	}[] = [
		{
			id: 1,
			name: "ys",
			address: {
				zipCode: 11111,
				street: "Gang-Nam",
			},
		},
	];
}
