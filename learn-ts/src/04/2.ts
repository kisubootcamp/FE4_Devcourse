{
	// 1. 인터페이스
	// 1.1 객체 타입을 지정할 때 사용합니다.
	// (인터페이스: 나만의 객체 타입) || (타입 별칭: 나만의 타입)
	// 인터페이스는 객체 타입에만 쓸 수 있음
	interface User {
		name: string;
		age: number;
	}

	const user1: User = {
		name: "riko",
		age: 17,
	};
}

{
	// 인터페이스는 중복되어도 괜찮음
	// 이유 : 인터페이스는 식별자가 똑같으면 자동으로 합쳐짐
	interface User {
		name: string;
		age: number;
	}
	interface User {
		// name: number // 다른 곳에 정의되어 있는데 이렇게 쓰면 error
		gender?: string;
	}
	const user1: User = {
		name: "riko",
		age: 17,
		// gender: "female",
	};
}

{
	interface User {
		name: string;
		age: number;
		greet(): void;
		// greet?(): void; // ok
	}

	const user: User = {
		name: "sucoding",
		age: 20,
		greet() {
			console.log(`${this.name}, ${this.age}`);
		},
	};
}

{
	type SumFunc = (n1: number, n2: number) => number;
	interface SumFuncInterface {
		// name: string; // 다른건 이렇게 쓰면 안되는데 name은 왜 됨?
		// 이레귤러가 있음 (브라우저 콘솔 참고)
		(n1: number, n2: number): number;
		// (n1: number, n2: number)?: number; // error
	}
	const sum: SumFuncInterface = (n1, n2) => n1 + n2;
}

{
	// 상속
	interface Animal {
		name: string;
	}
	interface Dog extends Animal {
		// Animal의 요소를 물려받음
		bark(): void; // 왈왈
	}

	const dog: Dog = {
		name: "바둑이",
		bark() {
			console.log("왈왈");
		},
	};

	interface Cat extends Animal {
		bark(): void;
	}

	const cat: Cat = {
		name: "냥이",
		bark() {
			console.log("야옹");
		},
	};
}

{
	// 단순한 객체의 구조를 정의할 때는 인터페이스 (업계 흐름인듯?)
	// 유니언, 튜플, 기본 타입, 함수 -> 타입 별칭
	// API의 응답 값 -> 타입 별칭

	interface A {
		a: string;
	}
	interface B {
		b: number;
	}
	interface C extends A, B {
		c: boolean;
	}
	const cValue: C = {
		a: "a",
		b: 10,
		c: true,
	};

	type D = {
		a: string;
	};
	type E = {
		b: number;
	};
	type F = D &
		E & {
			c: boolean;
		};
	const fValue: F = {
		a: "a",
		b: 10,
		c: true,
	};
}
