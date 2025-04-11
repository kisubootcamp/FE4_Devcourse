{
	// 1.
	let num: number = 10;
	let str: string = "A";
	let bool: boolean = true;

	const sum = (a: number, b: number) => a + b;
	console.log(sum(10, 20));
}
/* * */
{
	// 2. 타입 별칭
	// 2.1. 가독성이 좋아짐
	// 2.2 유지보수성이 증가함 -> 타입을 재사용할 수 있기 때문

	type ID = string | number;
	let userId: ID = "hulk";
	let produceId: ID = 1;

	console.log(userId, produceId);

	type User = {
		name: string;
		readonly age?: number; // readonly는 항상 속성에만
	};

	const user: User = {
		name: "alice",
		age: 20,
	};
}

{
	// 3. 함수 타입별칭
	type SumFunc = (n1: number, n2: number) => number;
	const sum: SumFunc = function sum(n1, n2) {
		return n1 + n2;
	};
}

{
	// 4. 튜플
	type Point = [number, number];
	const point: Point = [10, 15];
}

{
	// 5. 인터섹션

	const person: Person = {
		name: "kanna",
		age: 18,
	};

	type Nameable = {
		name: string;
	};
	type Ageable = {
		age: number;
	};

	type Person = Nameable & Ageable;

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

	type PersonOfKeys = keyof Person; // "name" | "age" | "gender"
	const key: PersonOfKeys = "gender";
	// keyof를 쓰면 객체로 지정된 게 리터럴로 반환됨
}

{
	// 7. 객체 타입 선택 별칭 ☑️
	const user = {
		name: "sucoding",
		age: 20,
	};

	type User = typeof user;

	const user2: User = {
		name: "Hina",
		age: 17,
	};
}

{
	// 8. 재귀 타입 별칭 ☑️☑️☑️

	type Category1 = {
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
	type Category2 = {
		name: string;
		subCategory?: {
			name: string;
			subCategory?: {
				name: string;
			}[];
		}[];
	};
	type Category3 = {
		name: string;
		subCategory?: Category3[];
	};
	// type은 함수가 아니기 때문에 무한 확장하지는 않음
	const category: Category3 = {
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
	// 재귀타입
	type Tree1 = {
		value: string;
		children: {
			value: string;
			children: {
				value: string;
			}[];
		}[];
	};

	type Tree2 = {
		value: string;
		children?: Tree2[];
	};

	const tree: Tree2 = {
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
