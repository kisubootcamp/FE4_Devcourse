{
	// 1. 제네릭
	// 타입을 변수처럼 사용하는 문법
	function getFirstElement<T>(element: T[]): T {
		return element[0];
	}

	const r1 = getFirstElement<number>([1, 2, 3]); // 1
	const r2 = getFirstElement(["A", "B", "C"]); // "A"
	const r3 = getFirstElement([true, 1, "true", null]); // true
	console.log(r3);
}

{
	// 함수 표현식(화살표 함수)
	const getFirstElementA = <T>(element: T[]): T => {
		return element[0];
	};
	const getFirstElementB: <T>(element: T[]) => T = (element) => {
		return element[0];
	};
}

{
	// 타입 별칭 (방식 1)
	// 제네릭(타입별칭)
	type MyFunc<T> = (element: T[]) => T;
	const getFirstElement: MyFunc<unknown> = (element) => {
		return element[0];
	};

	const r1 = getFirstElement([1, 2, 3]); // 1
	const r2 = getFirstElement(["A", "B", "C"]); // "A"
	const r3 = getFirstElement([true, 1, "true", null]); // true
}

{
	// 타입 별칭 (방식 2)
	// 타입을 변수에 저장한 것에 불과함
	type MyFunc = <T>(element: T[]) => T;
	const getFirstElement: MyFunc = (element) => {
		return element[0];
	};

	const r1 = getFirstElement([1, 2, 3]); // 1
	const r2 = getFirstElement(["A", "B", "C"]); // "A"
	const r3 = getFirstElement([true, 1, "true", null]); // true
}

{
	// 인터페이스 복습 잠깐
	interface sum {
		(n1: number, n2: number): number;
	}
	const num: sum = (a, b) => a + b;
}

{
	// 인터페이스
	interface MyFunc {
		<T>(element: T[]): T; // 방식 1, 2 둘다 가능
		// MyFunc<T>일 때 제네릭 인터페이스라고 불림
	}
	const getFirstElement: MyFunc = (element) => {
		return element[0];
	};
}
