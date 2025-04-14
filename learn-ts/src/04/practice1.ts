// 인터페이스 연습문제
// 연습문제
{
	//   ### 1. **간단한 객체 타입 정의**

	// **문제:**

	// `Person`이라는 인터페이스를 정의하여, `name`과 `age` 프로퍼티를 가진 객체를 생성하세요.

	// - `name`: `string`
	// - `age`: `number`

	interface Person {
		name: string;
		age: number;
	}

	const person: Person = { name: "ys", age: 25 };
	console.log(person);
}

{
	//   ### 2. **메소드가 포함된 인터페이스**

	// **문제:**

	// `Car`라는 인터페이스를 정의하여, 자동차의 `brand`, `model`, `start()` 메소드를 포함하는 객체를 생성하세요.

	// - `brand`: `string`
	// - `model`: `string`
	// - `start()`: `void` (자동차를 시작하는 메소드, 내부 구현은 자율적으로.)

	interface Car {
		brand: string;
		model: string;
		start(): void;
	}

	const car: Car = {
		brand: "포르쉐",
		model: "타이칸",
		start() {
			console.log(`${this.brand}의 ${this.model}이 부릉부릉`);
		},
	};

	car.start();
}
{
	//   ### 3. **선택적 속성 사용**
	// **문제:**
	// `Employee`라는 인터페이스를 정의하여, `name`과 `position`을 기본 속성으로 하고, `department`는 선택적인 속성으로 추가하세요.
	// - `name`: `string`
	// - `position`: `string`
	// - `department`: `string` (선택적 속성)

	interface Employee {
		name: string;
		position: string;
		department?: string;
	}

	const employee1: Employee = {
		name: "alice",
		position: "manager",
	};

	const employee2: Employee = {
		name: "bob",
		position: "seller",
		department: "sales",
	};

	console.log(employee1);
	console.log(employee2);
}
{
	//   ### 4. **배열을 포함한 인터페이스**
	// **문제:**
	// `Team`이라는 인터페이스를 정의하여, `name`과 `members` 속성을 포함합니다.
	// - `name`: `string`
	// - `members`: `string[]` (팀원들의 이름 배열, 팀원들 이름은 자율적으로)
	interface Team {
		name: string;
		memebers: string[];
	}

	const team: Team = {
		name: "dev-couse",
		memebers: ["alice", "bob"],
	};

	console.log(team);
}
{
	//   ### 5. **상속을 이용한 인터페이스 확장**
	// **문제:**
	// `Animal`이라는 인터페이스를 정의하고, `Dog`라는 인터페이스가 `Animal`을 상속받도록 하세요.
	// - `Animal`은 `name`과 `age` 속성을 포함하고,
	// - `Dog`는 `breed` 속성을 추가합니다.
	interface Animal {
		name: string;
		age: number;
	}

	interface Dog extends Animal {
		breed: string;
	}

	const dog: Dog = {
		name: "멍멍",
		age: 2,
		breed: "꼬통",
	};

	console.log(dog);
}
{
	// ### 6. **인터페이스에서 메소드 정의**

	// **문제:**

	// `Person`이라는 인터페이스를 정의하여, `name`과 `age` 프로퍼티를 포함하고, `greet()` 메소드를 정의하세요. `greet()`는 `"Hello, my name is {name}"`을 반환하는 메소드입니다.

	interface Person {
		name: string;
		age: number;
		greet(): void;
	}

	const person: Person = {
		name: "yeon seo",
		age: 25,
		greet() {
			console.log(`Hello, my name is ${this.name}`);
		},
	};

	person.greet();
}
{
	//   ### 7. **다형성을 가진 인터페이스**

	// **문제:**

	// `Shape`라는 인터페이스를 정의하고, `Circle`과 `Rectangle`이라는 인터페이스가 `Shape`를 상속받도록 하세요.

	// - `Shape`는 `area()` 메소드만 정의하고,
	// - `Circle`은 `radius` 속성을, `Rectangle`은 `width`와 `height` 속성을 추가합니다.
	interface Shape {
		area(): void;
	}

	interface Circle extends Shape {
		radius: number;
	}

	interface Rectangle extends Shape {
		width: number;
		height: number;
	}

	const circle = {
		radius: 3,
		area() {
			const temp: number = this.radius ** 2;
			console.log(`${temp}pi`);
		},
	};

	const rectangle = {
		width: 3,
		height: 5,
		area() {
			const temp: number = this.width * this.height;
			console.log(`${temp}`);
		},
	};

	circle.area();
	rectangle.area();
}
{
	//   ### 8. **다중 인터페이스를 사용하는 객체**
	// **문제:**
	// `Person`과 `Address`라는 두 개의 인터페이스가 있을 때, 이 두 인터페이스를 합친 객체 `Contact`를 만들어 보세요.
	// - `Person`은 `name`과 `age`를 포함하고,
	// - `Address`는 `street`, `city`, `zipcode`를 포함합니다.
	// - 속성에 대한 자료형은 자율적으로 지정하세요.
	interface Person {
		name: string;
		age: number;
	}

	interface Address {
		street: string;
		city: string;
		zipcode: number;
	}

	const contact: Person & Address = {
		name: "yeonseo",
		age: 25,
		street: "kangbuk",
		city: "seoul",
		zipcode: 1000,
	};

	console.log(contact);
}
{
	//   ### 9. **인터페이스에 인덱스 시그니처 사용**

	// **문제:**

	// `Dictionary`라는 인터페이스를 정의하여, 이 인터페이스는 `string` 키와 `string` 값을 가지는 객체 타입을 정의하세요.
	interface Dictionary {
		[key: string]: string;
	}

	const nameDict: Dictionary = {
		name: "yeonseo",
	};

	console.log(nameDict);
}
{
	//   ### 10. **인터페이스를 사용한 함수 타입 정의**

	// **문제:**

	// `Operation`이라는 인터페이스를 정의하여, 두 개의 `number`를 받아 `number`를 반환하는 함수를 타입으로 정의하세요. 그 후 `add`와 `subtract` 함수를 작성하여 이 인터페이스를 사용하세요.
	interface Operation {
		(n1: number, n2: number): number;
	}

	const add: Operation = (n1, n2) => n1 + n2;
	const subtract: Operation = (n1, n2) => n1 - n2;

	console.log(add(1, 4));
	console.log(subtract(1, 4));
}
