{
	// 자바스크립트 클래스와 타입스크립트 클래스와의 차이점
	// 타입스크립트 클래스는
	// 1. 타입선언 - 변수에 타입을 지정해야 한다.
	// 2. 접근 제어자 - 속성이나 메서드에 대한 접근을 제한하는 것. public, protected, private, #(ES2022에 추가된 비교적 최근 문법)
	// 3. readonly 사용 가능
	// 4. 추상클래스 -> 클래스의 구조를 추상적으로 미리 정의해 놓은 클래스
	// 5. implements, 타입별칭이나 인터페이스
	// 6. 제네릭 사용 가능
	class Person {
		// 접근 제어자 안 적으면 디폴트가 public이다. 실무에서는 따로 접근 제어자를 쓰는게 일반적.
		// 변수에 readonly 사용 가능. readonly age: number;
		name: string; // 변수라 해도 되고 속성이라고 해도 됨
		age: number;

		constructor(name: string, age: number) {
			this.name = name;
			this.age = age;
		}

		// constructor(public name: string, public age: number) { // 따로 변수 선언안하고 싶으면 이렇게 한번에 적어도 됨.
		// 	this.name = name;
		// 	this.age = age;
		// }

		// 함수도 접근제어자 안 적으면 public이다.
		greet() {
			// 프로토타입이라는 공간에 정의되기 때문에 console.log(person)을 찍어보면 greet함수는 안 보인다.
			console.log(`Hello! ${this.name}, ${this.age}`);
		}
	}

	const person = new Person("ys", 25);
	person.greet();
	console.log(person);
	console.log(person.name);
}

{
	// private
	// 자기 자신(클래스) 내부에서만 사용 가능. 상속 받는 다른 클래스에서도 사용 못함.
	// 외부에서는 실행되거나 접근되지 않았으면 하는 속성에 private 사용.
	class Person {
		private name: string;
		private age: number;

		constructor(name: string, age: number) {
			this.name = name;
			this.age = age;
		}

		greet() {
			console.log(`Hello! ${this.name}, ${this.age}`);
		}
	}

	const person = new Person("ys", 25);
	console.log(person); // Person { name: 'ys', age: 25 } // private이어도 객체의 속성으로 포함되기는 한다. -> 이게 이상하다. 그래서 등장한게 #
	// console.log(person.age); // 에러 발생
}
{
	class Person {
		// 진정한 의미의 private이 될 수 있는 #
		#name: string;
		#age: number;

		constructor(name: string, age: number) {
			this.#name = name;
			this.#age = age;
		}

		private greet() {
			// 메서드는 어차피 겉으로 드러나지 않기 때문에 private만 써줘도 충분하다.
			console.log(`Hello! ${this.#name}, ${this.#age}`);
		}
	}

	const person = new Person("ys", 25);
	console.log(person); // Person {}. 즉, #을 쓰면 진정한 의미의 private 가능.
}
{
	// public 어디서나 접근 가능
	// protected. 클래스를 상속 받는 다른 클래스에서는 사용 가능
}
{
	// 3. readonly 사용 가능
	class Person {
		name: string;
		age: number;

		constructor(name: string, age: number) {
			this.name = name;
			this.age = age;
		}

		greet() {
			console.log(`Hello! ${this.name}, ${this.age}`);
		}
	}

	const person = new Person("ys", 25);
	person.name = "John";
	console.log(person);
	console.log(person.name);

	class Person1 {
		readonly name: string;
		age: number;

		constructor(name: string, age: number) {
			this.name = name;
			this.age = age;
		}

		greet() {
			console.log(`Hello! ${this.name}, ${this.age}`);
		}
	}

	const person1 = new Person1("ys", 25);
	// person1.name = "John"; // readonly 사용하면 에러 발생
	console.log(person1);
	console.log(person1.name);
}

{
	// 4. 추상 클래스
	abstract class Shape {
		abstract area(): number;
	}

	// 추상 클래스는 하나만 상속 받을 수 있음
	class Circle extends Shape {
		// 에러 발생함. 왜냐면 Shape에서 만들라고 한 것을 만들어야 하기 때문에.
		radius: number;
		constructor(radius: number) {
			super();
			this.radius = radius;
		}
		// 해결
		area() {
			return 10;
		}
	}
	// const shape = new Shape(); // 추상 클래스는 new라는 키워드로 객체를 만들 수 없다.
	// 그러면 어떤 용도냐?
	// 어떤 클래스라면 이런 속성이 있어야 하지 않을까? 같은걸 적어두는 용도.
}
{
	abstract class Shape {
		abstract radius: number;
		abstract area(): number;
	}

	// (1)로 해결하거나 (2)로 해결
	class Circle extends Shape {
		// constructor(radius: number) { // 해결 (2)
		constructor(public radius: number) {
			// 해결(1)
			super();
			// this.radius = radius; // 해결(2)
		}

		area() {
			return Math.PI * this.radius;
		}
	}
}

{
	// 5.
	// implements는 여러개 가능하기 때문에 실무에서는 추상 클래스보다 이걸 더 많이 쓴다.
	interface Movable {
		move(): void;
	}

	interface Stopable {
		stop(): void;
	}

	class Car implements Movable, Stopable {
		// extends는 무조건 클래스만 상속 받아야 함. 타입별칭이나 인터페이스 상속 받을 때는 implements사용.
		move() {
			console.log("run run!");
		}

		stop() {
			console.log("stop!");
		}
	}

	const car: Car = new Car();
	car.move();
	car.stop();
}
{
	type Movable = {
		move(): void;
	};
	class Car implements Movable {
		// extends는 무조건 클래스만 상속 받아야 함. 타입별칭이나 인터페이스 상속 받을 때는 implements사용.
		move() {
			console.log("run run!");
		}
	}

	const car: Car = new Car();
	car.move();
}
{
	// 6. 제네릭 사용 가능
	class Box {
		value: string | number;

		constructor(value: string | number) {
			this.value = value;
		}

		getValue() {
			return this.value;
		}
	}

	const stringBox: Box = new Box("abc");
	console.log(stringBox.getValue()); // "abc"

	const numberBox: Box = new Box(123);
	console.log(numberBox.getValue()); // 123

	class Box1<T> {
		value: T;

		constructor(value: T) {
			this.value = value;
		}

		getValue() {
			return this.value;
		}
	}

	const stringBox1 = new Box1<string>("abc"); // 실무에서는 변수에는 타입 안적는게 일반적
	console.log(stringBox1.getValue()); // "abc"

	const numberBox1: Box1<number> = new Box1<number>(123);
	console.log(numberBox1.getValue()); // 123
}
