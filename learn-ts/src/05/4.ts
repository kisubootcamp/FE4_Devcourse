{
	// 제네릭 타입 제약
	// extends
	// length라는 속성이 있을 거라고 보장할 수 있는가?
	// <T extends { length: number }> : number 형식의 length라는 속성이 있는 것만 허용
	function getLength<T extends { length: number }>(value: T): number {
		return value.length;
	}

	getLength([1, 2, 3]); // ok
	getLength("abcdefg"); // ok, 래퍼 객체
	// getLength(10); // not ok
}

{
	type Person = {
		name: string;
		age: number;
		gender: string;
	};

	type PersonOfKeys = keyof Person;
	const key: PersonOfKeys = "gender";
}

{
	function returnTuple<T, U>(a: U, b: T): [U, T] {
		return [a, b];
	}
	const r1 = console.log(returnTuple(1, 2));
	const r2 = console.log(returnTuple(100, "A"));
}
