{
	// 인터페이스
	interface Car<T> {
		name: string;
		options: T;
	}

	const car1: Car<{ color: string }> = {
		name: "Benz",
		options: {
			color: "red",
		},
	};
	const car2: Car<{ wheels: number }> = {
		name: "Toyota",
		options: {
			wheels: 4,
		},
	};
}

{
	interface Pair<T, U> {
		first: T;
		second: U;
	}

	const numberStringPair: Pair<string, number> = {
		first: "A",
		second: 1,
	}; // 인터페이스나 타입 별칭은 함수와는 다르게 타입 추론 안됨
	// 순서 바꾸면 오류
}

{
	type Pair<T, U> = T | U;
	const numberStringPair: Pair<string, number> = 10;
}

{
	type ID = number | string;
	type Pair<T extends ID, U> = T | U;
	const numberStringPair: Pair<string, number> = 10;
}

{
	interface Length {
		length: number;
	}

	function getLength<T extends Length>(value: T[]): number {
		return value.length;
	}
}
