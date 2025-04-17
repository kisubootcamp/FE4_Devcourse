{
	// 생성자 함수
	// 객체를 생성할 때 사용하는 함수
	// ES5
	function Person(name, age) {
		this.name = name;
		this.age = age;
	}

	const person = new Person("ys", 25);
	console.log(person);

	// ES6
	class Person2 {
		constructor(name, age) {
			this.name = name;
			this.age = age;
		}
	}

	const person2 = new Person2("ys", 25);
	console.log(person2);
}
