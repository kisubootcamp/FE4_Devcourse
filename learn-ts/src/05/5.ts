{
	// 인터페이스
	interface Car {
		name: string;
		options:
			| {
					color: string;
			  }
			| { wheels: number };
		// {color?: string; wheels? : number}
	}

	const car1: Car = {
		name: "bmw",
		options: {
			color: "red",
		},
	};

	const car2: Car = {
		name: "g90",
		options: {
			wheels: 4,
		},
	};
}
{
	interface Car<T> {
		name: string;
		options: T;
	}

	const car1: Car<{ color: string }> = {
		name: "bmw",
		options: {
			color: "red",
		},
	};

	const car2: Car<{ wheels: number }> = {
		name: "g90",
		options: {
			wheels: 4,
		},
	};
}
{
	interface Pair<T, U> {
		first: T; // U
		second: U; // T 이렇게 순서를 바꾸면 에러가 난다. 함수가 아니라서 T가 string, U가 number이렇게 순서대로 들어가기 때문에.
	}

	// 인터페이스나 타입 별칭의 제너릭은 타입 추론이 되지 않는다.
	const numberStringPair: Pair<string, number> = {
		first: "a",
		second: 1,
	};
}
{
	// interface를 type으로 바꾸는법은 키워드 바꾸고 = 붙여준다.
	type Pair<T, U> = {
		first: T; // U
		second: U; // T 이렇게 순서를 바꾸면 에러가 난다. 함수가 아니라서 T가 string, U가 number이렇게 순서대로 들어가기 때문에.
	};

	// 인터페이스나 타입 별칭의 제너릭은 타입 추론이 되지 않는다.
	const numberStringPair: Pair<string, number> = {
		first: "a",
		second: 1,
	};
}
{
	type Pair<T, U> = T | U;
	const numberAndString: Pair<string, number> = 10;
	// const numberAndString1 : Pair<string, number> = true; // true는 에러.
}
{
	// 제약조건 걸었으니 이건 boolean 또는 string만 올 수 있음. U에는 number만 올 수 있음.
	type ID = boolean | string;
	type Pair<T extends ID, U extends number> = T | U;
	const numberAndString: Pair<boolean, number> = 10;
}
{
  interface Length{
    length: number;
  }

  function getLength<T extends Length>(value: T[]): number{
    return value.length;
  }
}