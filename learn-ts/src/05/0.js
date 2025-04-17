{
	// ~ ES5 (옛날옛적 문법)
	// function Person(name, age) {
	// 	this.name = name;
	// 	this.age = age;
	// }

	// const person = new Person("sucoding", 20);
	// console.log(person);

	// ES6 ~ (요즘 문법, 클래스)
	class Person {
		constructor(name, age) {
			this.name = name;
			this.age = age;
		}

		greet() {
			// prototype이라는 공간에 존재함?
			console.log(`Hello! ${this.name}, ${this.age}`);
		}
	}

	const person = new Person("kisu", 20);
	console.log(person);
}
