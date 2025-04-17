{
	// 유틸리티 타입 : 타입스크립트에서 미리 구현되어 있는 타입
	// -> 어떤 목적을 달성하기 위한 기능을 구현한 커스텀 타입
	// 여러개의 유틸리티 섞어서 사용할 수 있다
	// 1. Partial<T>
	// -> 주어진 타입 T의 모든 속성을 선택적으로 만드는 유틸리티 타입
	interface User {
		name: string;
		age: number;
	}

	interface GuestType1 {
		name: string;
	}

	interface GuestType2 {
		age: number;
	}

	const user1: User = {
		name: "ys",
		age: 20,
	};

	const guest1: GuestType1 = {
		name: "gest1",
	};
	const guest2: GuestType2 = {
		age: 20,
	};
}
{
	// 유지보수에도 좋다. User가 바뀌면 guest도 gender추가할 수 있게 되기 때문에
	interface User {
		name: string;
		age: number;
		gender: string;
	}

	const user1: User = {
		name: "ys",
		age: 20,
		gender: "male",
	};

	const guest1: Partial<User> = {
		name: "gest1",
	};
	const guest2: Partial<User> = {
		age: 20,
	};
}
{
	// 2. Required<T>
	// 주어진 타입 T 모두 필수 속성으로 만드는 것
	type User = {
		name: string;
		age?: number;
		gender: string;
	};

	// age 필수로 하겠다고 하나의 타입을 새로 만드는 건 비효율적이다.
	// type AdultUser = {
	//   name: string;
	//   age: number;
	//   gender: string;
	// };

	const normalUser: User = {
		name: "ys",
		gender: "male,",
	};

	const adultUser: Required<User> = {
		// 모든 속성을 필수 속성으로 만들어줘서 age가 더이상 옵셔널이 아니게 된다.
		name: "ys",
		age: 20,
		gender: "male",
	};
}
{
	// 3. Readonly<T> : 모든 속성을 읽기 전용으로 바꿔줌
	type User = {
		name: string;
		age?: number;
		gender: string;
	};

	// 비효율적이다~ 되긴 되지만
	// type PremiumUser = {
	// 	readonly name: string;
	// 	readonly age?: number;
	// 	readonly gender: string;
	// };

	const premiumUser: Readonly<User> = {
		name: "ys",
		age: 20,
		gender: "male",
	};
	// premiumUser.name = "John"; // 바꿀 수 없게 됨
}
{
	// 4. Pick<T, K>
	// 주어진 타입 T에서 선택한 속성만 추출하여 새로운 타입을 만듦
	interface User {
		name: string;
		age?: number;
		gender: string;
	}

	const nameObject: Pick<User, "name"> = {
		// User에서 name 속성만 사용
		name: "ys",
	};

	const nameObject1: Pick<User, "name" | "gender"> = {
		// User에서 name, gender 속성 사용
		name: "ys",
		gender: "male",
	};

	const nameObject2: Pick<User, "age"> = {}; // age가 옵셔널 이었기 때문에 써도 되고 안써도 되게 된다. 다른 속성 name을 적으면 에러가 나고
}

{
	// 5. Omit<T, K>
	// 주어진 타입 T에서 특정 속성 K를 제외한 나머지 속성만 추출
	interface User {
		name: string;
		age: number;
		gender: string;
	}

	const user: Omit<User, "age" | "gender"> = {
		// 인터센션 쓰면 age이면서 gender인걸 빼겠다는 거니까 유니온이 맞지
		name: "sucoding",
	};
}

{
	// 6. Record<K, T>
	// 주어진 키 K와 값 T의 타입을 가지는 객체 타입을 생성할 때 쓰는 것
	let obj: object = {};
	obj = [];

	let obj2: {} = {};
	obj2 = 10;

	let obj3: Record<string, never> = {}; // 아무것도 올 수 없는 객체를 만들겠다.
	// obj3 = [];
	// obj3 = 10;

	const score: { math: number; english: number; science: number } = {
		math: 90,
		english: 90,
		science: 70,
	};
	const score2: Record<string, number> = {
		math: 90,
		english: 90,
		science: 70,
	};
}

// 여기부터는 이런것도 있구나 생각하는 정도
{
	// 7. 객체에 존재하는 속성을 제거할 때는 Omit
	// 유니언 타입에서 속성을 제거할 때 사용하는건 Exclude
	type MyType = "a" | "b" | "c";
	const result: Exclude<MyType, "a"> = "b";
	const result1: Exclude<MyType, "a"> = "c";
	// const result2: Exclude<MyType, "a"> = "a"; // 에러
}
{
	// 8. NonNullable<T>
	// 주어진 타입에서 null과 undefined 타입을 제외하고 생성
	type MyType = string | number | undefined | null;
	type NonType = NonNullable<MyType>;
}
{
	// 9. ReturnType<T>
	// 주어진 함수 타입 T의 반환 타입을 추출
	type Age = ReturnType<typeof getAge>; // number
	// type Age = ReturnType<() => number>; // number
	type AgeFunc = typeof getAge;
	function getAge() {
		return 20;
	}

  type Age1 = ReturnType<typeof getAge1>; // {name: string;}
	function getAge1() {
		return { name: "ys" };
	}
}
