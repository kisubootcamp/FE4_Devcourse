// 유틸리티 타입
// -> 어떤 목적을 달성하기 위한 기능을 구현한 커스텀 타입
// 기존 타입을 가공하여 새로운 타입을 만듦

{
	// 1. Partial<T>
	// -> 주어진 타입 T의 모든 속성을 선택적으로 만드는 유틸리티 타입
	interface User {
		name: string;
		age: number;
	}

	const user1: User = {
		name: "sucoding",
		age: 20,
	};

	const guest1: Partial<User> = {
		name: "guest1",
	};
	const guest2: Partial<User> = {
		age: 25,
	};
}

{
	// 2. Required<T>
	// 주어진 타입 T를 모두 필수 속성으로 만드는 것
	type User = {
		name: string;
		age?: number;
		gender: string;
	};

	const normalUser: User = {
		name: "kisu",
		gender: "male",
	};

	const adultUser: Required<User> = {
		name: "KISU",
		age: 30,
		gender: "male",
	};
}

{
	// 3. Readonly<T>
	// 모든 속성을 읽기 전용으로 바꿈
	type User = {
		name: string;
		age?: number;
		gender: string;
	};

	const premiumUser: Readonly<User> = {
		name: "kisu",
		age: 35,
		gender: "male",
	};
	// premiumUser.name = "wonil"; // Readonly라서 error
}

{
	// 4. Pick<T, K>
	// 주어진 타입 T에서 선택한 속성만 추출하여 새로운 타입
	// 객체에서 사용, 여러개 뽑을 때는 | 사용
	interface User {
		name: string;
		age?: number;
		gender: string;
	}

	const nameObject: Pick<User, "name" | "gender"> = {
		name: "kisu",
		gender: "male",
	};
}

{
	// 5. Omit<T, K>
	// 주어진 타입 T에서 특정 속성 K를 제외한 나머지 속성만 추출
	interface User {
		name: string;
		age?: number;
		gender: string;
	}

	const user: Omit<User, "age" | "gender"> = {
		name: "kisu",
	};
}

{
	// 6. Record<k, T>
	// 주어진 키 K와 값 T의 타입을 가지는 객체 타입을 생성할 때 쓰는 것
	let obj: Record<string, never> = {};
	const score: Record<string, number> = {
		// const score: { math: number; english: number; science: number } = {
		math: 90,
		english: 90,
		science: 70,
	};
}

{
	// 7. Exclude
	// 객체에 존재하는 속성을 제거할 때 Omit 사용,
	// 유니언 타입에서 속성을 제거할 때 사용하는 건 Exclude
	type MyType = "a" | "b" | "c";
	const result: Exclude<MyType, "a" | "c"> = "b";
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
	type Aage = ReturnType<typeof getAge>;
	// type Aage = ReturnType<() => number>;
	type AgeFunc = typeof getAge;
	function getAge() {
		return { name: "kisu" };
	}
}
