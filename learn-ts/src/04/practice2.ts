// 타입별칭 연습문제
// 연습문제
{
	//   ### 1. 타입 별칭  - 연습문제 -
	// **문제**: 사람을 나타내는 `Person` 타입을 정의하세요. 이 타입은 `name` (문자열), `age` (숫자) 속성을 가집니다. 그리고 이를 사용하는 `getPersonInfo` 함수를 작성하여 `Person` 객체를 출력하세요.
	type Person = {
		name: string;
		age: number;
	};

	function getPersonInfo(value: Person): void {
		console.log(value);
	}

	getPersonInfo({ name: "yeonseo", age: 25 });
}
{
	//   2. 타입 별칭  - 연습문제 -
	// 문제: Config 타입을 정의하여 host (문자열), port (숫자), ssl (불린값)을 갖는 객체 타입입니다. createConfig 함수는 Config 타입을 반환하도록 하세요.

	type Config = {
		host: string;
		port: number;
		ssl: boolean;
	};

	function createConfig(val1: string, val2: number, val3: boolean): Config {
		return { host: val1, port: val2, ssl: val3 };
	}

	const config = createConfig("localhost", 8080, true);
	console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}
{
	//   ### 3. 타입 별칭  - 연습문제 -
	// **문제**: `Rectangle` 타입을 정의하여 `width` (숫자)와 `height` (숫자) 속성을 가지게 하세요. `calculateArea` 함수를 작성하여 `Rectangle` 객체의 면적을 계산하세요.
	type Rectangle = {
		width: number;
		height: number;
	};

	function calculateArea(value: Rectangle): number {
		return value.width * value.height;
	}

	console.log(calculateArea({ width: 4, height: 6 }));
}
{
	//   ### 4. 타입 별칭  - 연습문제 -
	// **문제**: `Student` 타입을 정의하여 `name` (문자열), `age` (숫자), `grades` (숫자 배열) 속성을 포함하게 하세요. `calculateAverageGrade` 함수를 작성하여 평균 성적을 계산하세요.
	type Student = {
		name: string;
		age: number;
		grades: number[];
	};

	function calculateAverageGrade(value: Student): void {
		const sum: number = value.grades.reduce((acc, cur) => acc + cur, 0);
		console.log(sum / value.grades.length);
	}

	calculateAverageGrade({ name: "ys", age: 25, grades: [100, 90, 50] });
}
{
	//   5. 타입 별칭  - 연습문제 -
	// 문제: Response 타입을 작성하여 status (문자열), data (문자열), message (문자열) 속성을 포함하게 하세요. createResponse 함수를 작성하여 이 타입의 객체를 반환하세요.

	type Response1 = {
		status: string;
		data: string;
		message: string;
	};

	function createResponse(val1: string, val2: string, val3: string): Response1 {
		return { status: val1, data: val2, message: val3 };
	}

	console.log(createResponse("success", "John", "fetch success")); // { status: 'success', data: 'John', message: 'fetch success'
}
{
	//   6. 타입 별칭  - 연습문제 -
	// 문제: Employee 타입을 작성하여 id (문자열), name (문자열), position (문자열) 속성을 가집니다. getEmployeeInfo 함수에서 이 정보를 반환하도록 하세요.

	type Employee = {
		id: string;
		name: string;
		position: string;
	};

	function getEmployeeInfo(value: Employee): Employee {
		return value;
	}

	console.log(getEmployeeInfo({ id: "1", name: "james", position: "developer" })); // "james works as a developer with ID: 1."
}

{
	//   7. 타입 별칭  - 연습문제 -
	// 문제: Circle 타입을 작성하여 radius (숫자) 속성을 가지게 하세요. calculateCircumference 함수에서 원의 둘레를 계산하는 기능을 작성하세요.
	//code

	type Circle = {
		radius: number;
	};

	const calculateCircumference: (val: Circle) => number = (val) => {
		return 2 * val.radius * Math.PI;
	};

	console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}
{
	//   8. 타입 별칭  - 연습문제 -
	// 문제: Product 타입을 작성하여 name (문자열), price (숫자), inStock (불린값) 속성을 가지게 하세요. getDiscountedPrice 함수에서 주어진 할인을 적용한 가격을 계산하세요.
	//code
	type Product = {
		name: string;
		price: number;
		inStock: boolean;
	};

	const getDiscountedPrice: (val: Product, num: number) => number = (val, num) => {
		return val.price * ((100 - num) / 100);
	};

	console.log(getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10)); // 900
}
{
	//   9. 타입 별칭  - 연습문제 -
	// 문제: Book 타입을 작성하여 title (문자열), author (문자열), publishedYear (숫자) 속성을 포함하도록 하세요. getBookSummary 함수에서 책에 대한 간단한 요약을 반환하도록 하세요.
	//code..

	type Book = {
		title: string;
		author: string;
		publishedYear: number;
	};

	const getBookSummary: (value: Book) => string = (value) => {
		return `${value.title} by ${value.author}, published in ${value.publishedYear}`;
	};

	console.log(getBookSummary({ title: "river", author: "james", publishedYear: 2020 })); // "river by james, published in 2020."
}
{
	//   ### 10. 타입 별칭  - 연습문제 -
	// **문제**: `Transaction` 타입을 작성하여 `id` (문자열), `amount` (숫자), `timestamp` (문자열) 속성을 가지게 하세요. `isValidTransaction` 함수에서 amount가 0보다 큰지 비교해서 결과를 반환하는 로직을 작성해주세요.(참/거짓 반환)
	type Transaction = {
		id: string;
		amount: number;
		timestamp: string;
	};

	const isValidTransaction: (value: Transaction) => boolean = (value) => {
		if (value.amount > 0) {
			return true;
		} else {
			return false;
		}
	};

	console.log(isValidTransaction({ id: "id", amount: 10, timestamp: "2025-04-17" }));
	console.log(isValidTransaction({ id: "id", amount: -3, timestamp: "2025-04-17" }));
}

// 연습문제 +
{
	// 1.
	type Action = {
		type: string;
		payload: unknown;
	};

	// code
	function createAction(value1: string, value2: unknown): Action {
		return { type: value1, payload: value2 };
	}

	// 함수 호출 예시
	const action1 = createAction("ADD_ITEM", { id: 1, name: "item" });
	const action2 = createAction("UPDATE_ITEM", 42);
	const action3 = createAction("SET_STATUS", "success");

	console.log(action1); // { type: 'ADD_ITEM', payload: { id: 1, name: 'item' } }
	console.log(action2); // { type: 'UPDATE_ITEM', payload: 42 }
	console.log(action3); // { type: 'SET_STATUS', payload: 'success' }
}

{
	// 2.
	type NumberOrString = number | string;

	function createObject(value1: NumberOrString, value2: string): { id: NumberOrString; name: string } {
		return { id: value1, name: value2 };
	}

	const object1 = createObject(1, "Alice");
	const object2 = createObject("123", "Bob");

	console.log(object1); // { id: 1, name: 'Alice' }
	console.log(object2); // { id: '123', name: 'Bob' }
}
{
	// 3.
	type Point = { x: number; y: number };
	function calculateDistance(point1: Point, point2: Point): number {
		const result = Math.sqrt((point1.x - point1.y) ** 2 + (point2.x - point2.y) ** 2);
		return result;
	}

	console.log(calculateDistance({ x: 4, y: 1 }, { x: 5, y: 1 })); // 5
}
{
	// ❌
	// 4.
	type FetchResult = string;

	function fetchData() {}
}
{
	// ❌
	// 5.
	type NullOrUndefined = null | undefined;
	function getValue(value: unknown): boolean {
		if (value === NullOrUndefined) {
			return true;
		} else {
			return false;
		}
	}

	const check1 = getValue(null);
	const check2 = getValue(undefined);
	const check3 = getValue("Hello");

	console.log(check1); // true
	console.log(check2); // true
	console.log(check3); // false
}
{
	// ⚠️
	// 6.
	type Coordinates = number[];
	function setCoordinates(x: number, y: number): Coordinates {
		return [x, y];
	}

	const coordinates = setCoordinates(10, 20);
	console.log(coordinates); // [10, 20]
}
{
	// 7.
	type Person = {
		readonly name: string;
		readonly age: number;
	};
	function createPerson(val1: string, val2: number): Person {
		return { name: val1, age: val2 };
	}
	const person = createPerson("John", 30);
	// person 객체의 속성은 변경할 수 없도록 해야 합니다.
	// person.name = "Jane"; // 오류 발생: 읽기 전용 속성이므로 수정할 수 없음
	console.log(person); // { name: 'John', age: 30 }
}
{
	// ❌
	// 8.
	type User = {
		id?: string;
		name?: string;
		email?: string;
	};
	function updateUser(val1: User, val2: User): void {
		Object.keys(val2).forEach((e: string) => {});
	}

	const user1 = { id: "1", name: "Alice", email: "alice@example.com" };
	const updatedUser1 = updateUser(user1, { name: "Alicia" });

	console.log(updatedUser1); // { id: '1', name: 'Alicia', email: 'alice@example.com' }
}
{
	// 9. 타입 별칭  - 연습문제+ -
	// 문제: Role 타입을 정의하여 ‘admin'과 ‘user’를 유니언 타입으로 처리하고, assignRole 함수가 역할을 동적으로 할당하도록 하세요. 이때 assignRole 함수의 반환 값은 UserWithRole 타입이 될 수 있게 타입을 지정해줍니다.
	//code

	type User = {
		id: string;
		name: string;
		role: string;
	};

	const assignRole: (user: User, r: string) => User = (user, r) => {
		return {
			id: user.id,
			name: user.name,
			role: r,
		};
	};

	const user1 = { id: "1", name: "Alice", role: "user" };
	const updatedUser = assignRole(user1, "admin");

	console.log(updatedUser); // { id: '1', name: 'Alice', role: 'admin' }
}
{
	//   10. 타입 별칭  - 연습문제+ -
	// 문제: string과 number 타입을 구분하기 위한 Primitive 타입을 정의하고, string만 반환하는 함수를 작성하세요. 반환 값이 string만 포함되도록 타입을 작성하세요.
	//code
	type Primitive = string | number;

	function filterString(value: Primitive): string {
		if (typeof value === "string") {
			return value;
		} else {
			return "Error: Not a string";
		}
	}

	const stringValue = filterString("Hello");
	console.log(stringValue); // 'Hello'

	const numberValue = filterString(123);
	console.log(numberValue); // Error: Not a string
}
