{
	// 1.
	let num: number | string = 10;
	let str: string = "A";
	let bool: boolean = true;

	const sum = (a: number, b: number): number => a + b;
	sum(10, 20);
}

{
	// 2. 타입 별칭
	// 2.1. 가독성이 좋아지고,
	// 2.2. 유지보수성이 증가함. -> 타입을 재사용할 수 있기 때문

	let userId: string | number | null = "hulk";
	let productId: number | null = 1;

	type ID = string | number | null;
	let userId2: ID = "hulk"; // 여기에 들어가는게 ID와 관련된거겠구나를 알 수 있다
	let productId2: ID = 1;

	type Status = "error" | "success";
	const status: Status = "success";
}

{
	type User = {
		name: string;
		readonly age?: number; // 객체에서 쓸 수 있는 readonly와 ? 사용 가능
	};

	const user1: User = {
		// Readonly<User>를 사용하면 User라는 타입이 모두 readonly가 된다.
		name: "alice",
		age: 20,
	};

	const user2: User = {
		name: "alice",
		age: 20,
	};

	const user3: User = {
		name: "alice",
		age: 20,
	};
}

{
	// 3. 함수 : 타입 별칭은 함수도 가능하다
	function sum(n1: number, n2: number): number {
		return n1 + n2;
	} // <- 함수 선언문에서는 타입 별칭 불가

	type SumFunc = (n1: number, n2: number) => number;
	const sum1: SumFunc = function sum(n1, n2) {
		return n1 + n2;
	};
}

{
	// 4. 튜플
	const point: [number, number] = [10, 20];
	const point2: number[] = [10, 20]; // 이것보다는 위가 낫다

	type Point = [number, number];
	const point3: Point = [10, 15];
}

{
	// 5. 인터섹션
	type Nameable = {
		name: string;
	};

	type Ageable = {
		age: number;
	};

	type Person = Nameable & Ageable; // 이게 좀 더 가독성 있지
	type PersonOther = {
		name: string;
	} & {
		age: number;
	};
}

{
	// 6. 키 선택 타입 별칭
	type Person = {
		name: string;
		age: number;
		gender: string;
	};

	type PersonOfKeys = keyof Person; // keyof는 해당 대상의 key값을 추출함. "name" | "age" | "gender"
	const key: PersonOfKeys = "gender";
}

{
	// 7. 객체 선택 타입 별칭
	const user = {
		name: "ys",
		age: 25,
	};

	type User = typeof user; // 알아서 추출해서 타입으로 만들어줄 수 있다. typeof는 타입을 추출함.

	const user2: User = {
		name: "a",
		age: 30,
	};
}

{
	type User = typeof user; // 어차피 아래 코드들까지 전부 컴파일 된 후에 실행되기 때문에 맨 위로 끌어올려도 된다. 자바스크립트는 그때그때 실행하지만, 타입스크립트는 정적언어기 때문에
	// 그때그때 필요할 때마다 실행하는게 런타임 : html, javascript
	// 내가 실행할 코드 전체를 한번 쭉 브리핑하는게 컴파일. 뒤 코드 앞으로 보내고 변환도 시키고 이런것도 하는거 : typescript(컴파일 언어)

	const user = {
		name: "ys",
		age: 25,
	};

	const user2: User = {
		name: "a",
		age: 30,
	};
}

{
	// 8.
	type Category = {
		name: string;
		subCategory: (
			| {
					name: string;
					subCategory?: undefined;
			  }
			| {
					name: string;
					subCategory: {
						name: string;
					}[];
			  }
		)[];
	};

	const category: Category = {
		name: "Electronics",
		subCategory: [
			{
				name: "Phones",
			},
			{
				name: "Laptops",
				subCategory: [
					{
						name: "Gaming Laptops",
					},
				],
			},
		],
	};
}

{
	type Category = {
		name: string;
		subCategory: { name: string; subCategory?: { name: string }[] }[];
	};

	type Category4 = {
		name: string;
	};

	// 재귀 타입 별칭
	type Category3 = {
		name: string;
		subCategory?: Category3[];
	};
}

{
	type Tree = {
		value: string;
		children: {
			value: string;
			children: {
				value: string;
			}[];
		}[];
	};

	type Tree1 = {
		value: string;
		children: [{ value: string; children: [{ value: string }] }];
	};

  

  type Tree2 = {
		value: string;
		children: { value: string; children: [{ value: string }] }[];
	};

	const tree = {
		value: "root",
		children: [
			{
				value: "child1",
				children: [
					{
						value: "child2",
					},
				],
			},
		],
	};
}
