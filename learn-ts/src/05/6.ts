{
	// class
	// 1. 타입선언 - 변수에 타입을 지정해야 한다
	/* 2. 접근 제어자 - 속성이나, 메서드에 대한 접근을 제한하는 것,
		public, protected, private, # */
	// 3. readonly
	// 외부에서 바꾸지 못하게 함
	// 4. 추상 클래스
	// 클래스의 구조를 추상적으로 미리 정의해 놓은 클래스
	// 5. implements, 타입별칭이나 인터페이스
	// 6. 제네릭

	class Person {
		// public: 어디서든 접근할 수 있음
		name: string; // 앞에 적지 않으면 기본적으로 public
		age: number;

		// private이어도 객체의 속성으로는 포함이 됨, 그렇기 때문에 출력됨
		// 하지만 각각 출력하려 하면 안됨
		// 속성 앞에 #을 쓰면 완벽히 드러나지 않음

		constructor(name: string, age: number) {
			this.name = name;
			this.age = age;
		}

		greet() {
			// Prototype이라는 공간에 존재함?
			// Prototype -> 브라우저 콘솔 창에 코드 입력해보면 볼 수 있음
			console.log(`Hello! ${this.name}, ${this.age}`);
		}
	}

	const person = new Person("kisu", 20);
	console.log(person.name);
	console.log(person.age);
}

{
	// 추상 클래스 ☑️☑️☑️
	// 추상 클래스는 하나만 상속할 수 있음
	abstract class Shape {
		abstract radius: number;
		abstract area(): number;
	}
	class Circle extends Shape {
		constructor(public radius: number) {
			super();
		}
		area() {
			return Math.PI * this.radius * this.radius;
		}
	}

	const circleArea = new Circle(20);
	console.log(circleArea.area());
}

{
	interface Movable {
		move(): void;
	}
	interface Stopable {
		stop(): void;
	}
	type CarType = Movable & Stopable;
	class Car implements CarType {
		move() {
			console.log("Run Run!");
		}
		stop() {
			console.log("STOP!");
		}
	}
	const car: Car = new Car();
	car.move();
	car.stop();
}

{
	// 제네릭 클래스
	class Box<T> {
		value: T;
		constructor(value: T) {
			this.value = value;
		}

		getValue() {
			return this.value;
		}
	}

	const stringBox = new Box<string>("ABC");
	console.log(stringBox.getValue());

	const numberBox = new Box(123);
	console.log(numberBox.getValue());
}
