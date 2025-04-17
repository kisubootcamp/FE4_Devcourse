{
	// 1. 인터페이스
	// 1.1 객체 타입을 지정할 때 사용. (나만의 객체 타입) // (타입별칭 - 나만의 타입)
	// 1.2. 선언 병합
  // 1.3 병합

  // *
  // 단순한 객체의 구조를 정의할 때는 인터페이스
  // 유니언, 튜플, 기본타입, 함수 -> 타입 별칭
  // API 응답 값 -> 타입 별칭
	interface User {
		name: string;
		age: number;
	}

	interface User {
		gender?: string;
	}

	const user1: User = {
		name: "ys",
		age: 25,
	};
}

{
	// type User = {
	//   name: string;
	//   age: number;
	//   greet: () => void;
	// }

	interface User {
		name: string;
		age: number;
		// greet: () => void; // 아래와 똑같음
		greet(): void; // 위와 똑같음
	}

	const user = {
		name: "ys",
		age: 25,
		greet() {
			console.log(`${this.name}, ${this.age}`);
		},
	};
	user.greet();
}

{
	type SumFunc = (n1: number, n2: number) => number;

	// 인터페이스로 함수
	interface sumFuncInterface {
		// <- 객체표현만 interface로 만들 수 있는데 함수도 사실은 일급객체기 때문에 interface로 선언 가능.
		// superman: string, // 이건 말이 안되니까 타입 에러가 남
		name: string; // name, arguments는 된다.
		arguments: string;
		(n1: number, n2: number): number;
	}

	const sum: sumFuncInterface = (n1, n2) => n1 + n2;
}
{
	// 상속
	interface Animal {
		name: string;
	}
	interface Dog extends Animal {
		// name: string;
		bark(): void; // 왈왈
	}

	const dog: Dog = {
		name: "퍼피",
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
	type A1 = {
		a: string;
	};

	type B1 = {
		b: number;
	};
	type C1 = A1 &
		B1 & {
			c: boolean;
		};

	interface A {
		a: string;
	}

	interface B {
		b: number;
	}

	interface C extends A, B { // type써서 &하는 것보다 interface 쓰고 extends하는게 더 편하다
		c: boolean;
	}

	const cValue: C = {
		a: "a",
		b: 10,
		c: true,
	};
}
