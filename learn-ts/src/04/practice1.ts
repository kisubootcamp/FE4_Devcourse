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

// 연습문제+
{
	//   ### 1. **인터페이스 상속과 메소드 오버라이딩**
	// **문제:**
	// `Animal`이라는 기본 인터페이스를 정의하고, 이를 상속받는 `Dog`와 `Cat` 인터페이스를 만드세요.
	// - `Animal` 인터페이스는 `name`과 `speak()` 메소드를 가지고 있습니다.
	// - `Dog`는 `speak()` 메소드에서 `"Woof!"`를 반환하고,
	// - `Cat`은 `"Meow!"`를 반환합니다.
	interface Animal {
		name: string;
		speak(): void;
	}

	interface Dog extends Animal {}
	interface Cat extends Animal {}

	const dog: Dog = {
		name: "멍멍이",
		speak() {
			console.log("Woof!");
		},
	};

	const cat: Cat = {
		name: "냥냥이",
		speak() {
			console.log("Meow!");
		},
	};

	dog.speak();
	cat.speak();
}
{
	//   ### 2. **중첩된 인터페이스와 선택적 속성**
	// **문제:**
	// `Company`라는 인터페이스를 정의하고, 이 인터페이스 내에 `Employee`라는 중첩된 인터페이스를 포함시켜 보세요.
	// - `Company`는 `name`, `location`을 포함하고,
	// - `Employee`는 `name`, `age`, `position`을 포함하며, `position`은 선택적 속성입니다.
	// - 속성 값 및 속성 값 타입은 자율입니다.
	interface Employee {
		name: string;
		age: number;
		position?: string;
	}

	interface Company {
		name: string;
		location: string;
		employee: Employee;
	}

	const company: Company = {
		name: "데브코스",
		location: "Seoul",
		employee: {
			name: "yeonseo",
			age: 25,
		},
	};

	console.log(company);
}
{
	// ⁉️
	//   ### 3. **인터페이스에서 메소드 시그니처와 인덱스 시그니처 함께 사용하기**
	// **문제:**
	// `Logger`라는 인터페이스를 정의하여, `log` 메소드를 통해 문자열을 로그로 출력하고, `history` 속성을 통해 로그를 배열로 관리할 수 있는 구조로 만드세요.
	// - `log` 메소드는 `message: string`을 인자로 받아 `void`를 반환합니다.
	// - `history`는 로그 메시지들이 담긴 `string[]` 배열입니다.
	interface Logger {
		history: string[];
		log(value: string): void;
	}

	const logger: Logger = {
		history: [],

		log(value) {
			console.log(value);
			this.history.push(value);
		},
	};

	logger.log("App started");
	logger.log("User logged in");
	console.log(logger.history); // ["App started", "User logged in"]
}
{
	// ❌
	//   ### 4. **조건부 로직을 포함한 인터페이스**

	// **문제:**

	// `Response`라는 타입을 정의하고, `status`에 따라 다른 필드를 포함하는 두 가지 인터페이스 타입을 구현하세요.

	// - `status`가 `"success"`일 경우 `data`(string)를 포함하고,
	// - `status`가 `"error"`일 경우 `error`(string)를 포함합니다.

	// `handleResponse` 함수를 정의하고, 매개변수로 `Response`타입을 받도록 하세요.

	// - 매개변수의 속성 중 `status`가 `‘success’`일 경우 `“Success: ${data} “`를 반환합니다  (${data} 는 data 속성을 의미합니다)
	// - 매개 변수의 속성 중 `status`가 `‘error’`일 경우  `‘Error: ${error}’`를 반환합니다. (${error}는 error 속성을 의미합니다.)
	// - 힌트: 타입 별칭도 함께 사용하세요.
	type Response1 = "success" | "error";

	interface Success {
		data: string;
	}

	interface Error {
		error: string;
	}

	function handleResponse(value: Response1): void {
		if (value === "success") {
			const success: Success = {
				data: value,
			};
			console.log(`Success: ${success.data}`);
		} else if (value === "error") {
			const error: Error = {
				error: value,
			};
			console.log(`Error: ${error.error}`);
		}
	}

	handleResponse("success");
	handleResponse("error");
}
{
	//   ### 5. **중첩된 인터페이스와 제네릭을 혼합하기 (제네릭 사용하지 않음)**
	// **문제:**
	// `Book`이라는 인터페이스 내에 `Author`라는 중첩 인터페이스를 정의하세요. `Author`는 `name`과 `birthYear`를 포함하고, `Book`은 `title`, `author` 및 `publishedYear`를 포함해야 합니다.
	// - name: string
	// - title: string
	// - publishedYear: number
	// - birthYear: number
	interface Book {
		title: string;
		author: Author;
		publishedYear: number;
	}

	interface Author {
		name: string;
		birthYear: number;
	}
}

{
	//   ### 6. **다형성을 활용한 인터페이스 정의**
	// **문제:**
	// `Employee`라는 기본 인터페이스를 정의하고, `Manager`와 `Developer`는 `Employee`를 상속받아 각각 `team`과 `language`라는 속성을 추가하세요.
	// - `Manager`는 `team` 속성을,
	// - `Developer`는 `language` 속성을 추가합니다.
	// - `team` 속성은 문자열 배열입니다. (ex. [’Bob’, ‘Charlie’, ‘David’]
	// - `language` 속성은 문자열입니다. (ex. ‘javascript’, ‘react’)
	// 최종적으로 아래의 내용을 만족하는 객체 데이터를 정의해주면 됩니다.
	// - Manager 인터페이스를 사용한 객체를 하나 작성해주세요.
	// - Developer 인터페이스를 사용한 객체를 하나 작성해주세요.
	interface Employee {
		name: string;
		age: number;
	}

	interface Manager extends Employee {
		team: string[];
	}

	interface Developer extends Employee {
		language: string;
	}

	const manager: Manager = {
		name: "Alice",
		age: 35,
		team: ["Bob", "Charlie", "David"],
	};

	const developer: Developer = {
		name: "John",
		age: 28,
		language: "JavaScript",
	};

	console.log(manager);
	console.log(developer);
}
{
	//   ### 7. **인덱스 시그니처와 배열을 포함한 복합 인터페이스**
	// **문제:**
	// `Database`라는 인터페이스를 정의하세요. 이때 인덱스 시그니처로 인터페이스 타입을 작성합니다.
	interface Database {
		[key: string]: string[];
	}

	const db: Database = {
		users: ["Alice", "Bob", "Charlie"],
		orders: ["order1", "order2"],
	};

	console.log(db.users); // ["Alice", "Bob", "Charlie"]
	console.log(db.orders); // ["order1", "order2"]
}
{
	//   8. 조건부 타입에 따른 인터페이스 필드 추가
	// 문제:
	// User라는 인터페이스가 있고, 사용자가 admin일 경우 adminCode라는 추가적인 속성을 가질 수 있도록 하세요.
	// User 인터페이스의 속성은 name(string), isAdmin(boolean), adminCode(string) 입니다.
	// isAdmin이 true일 때만 adminCode를 추가해야 합니다.
	interface User {
		name: string;
		isAdmin: boolean;
		adminCode?: string;
	}

	function createUser(name: string, isAdmin: boolean): User {
		if (isAdmin) {
			const user: User = {
				name: name,
				isAdmin: isAdmin,
				adminCode: "admin123",
			};
			return user;
		} else {
			const user: User = {
				name: name,
				isAdmin: isAdmin,
			};
			return user;
		}
	}

	const admin = createUser("Alice", true);
	const user = createUser("Bob", false);

	console.log(admin); // { name: "Alice", isAdmin: true, adminCode: "admin123" }
	console.log(user); // { name: "Bob", isAdmin: false }
}
{
	//   9. 인터페이스 상속을 이용한 다형성 적용
	// 문제:
	// Shape라는 인터페이스를 정의하고, 이를 상속받은 Circle과 Rectangle 인터페이스를 작성하세요.
	// Circle은 radius(number)를 포함하고,
	// Rectangle은 width(number)와 height(number)를 포함합니다.
	// 두 인터페이스는 모두 area() 메소드를 정의하여 면적을 계산합니다.
	// 원의 면적은 반지름 * 반지름 * 3.14
	// 사각형 면적은 가로 * 세로
	// 두 인터페이스를 사용한 객체를 정의합니다.
	interface Shape {
		area(): number;
	}

	interface Circle extends Shape {
		radius: number;
	}

	interface Rectangle extends Shape {
		width: number;
		height: number;
	}

	const circle: Circle = {
		radius: 3,
		area() {
			return this.radius * this.radius * Math.PI;
		},
	};

	const rectangle: Rectangle = {
		width: 2,
		height: 5,
		area() {
			return this.width * this.height;
		},
	};

	console.log(circle.area());
	console.log(rectangle.area());
}
{
	//   10. 다중 인터페이스 상속
	// 문제:
	// Vehicle과 Electric라는 두 인터페이스를 정의하고, 이를 상속받은 ElectricCar 인터페이스를 만들세요.
	// Vehicle은 brand(string)와 model(string)을 포함하고,
	// Electric은 batteryLife(number)를
	// 포함합니다.
	// ElectricCar는 두 인터페이스를 상속받아 charge() 메소드를 추가합니다.
	// 인터페이스를 작성하세요
	interface Vehicle {
		brand: string;
		model: string;
	}

	interface Electric {
		batteryLife: number;
	}

	interface ElectricCar extends Vehicle, Electric {
		charge(): void;
	}

	const tesla: ElectricCar = {
		brand: "포르쉐",
		model: "타이칸",
		batteryLife: 1000,
		charge() {
			console.log("Charging the car...");
		},
	};

	tesla.charge(); // "Charging the car..."
}
