{
	// 1.
	interface Person {
		name: string;
		age: number;
	}
	const kisu: Person = {
		name: "kisu",
		age: 20,
	};
}

{
	// 2.
	interface Car {
		brand: string;
		model: string;
		start(): void;
	}
	const car: Car = {
		brand: "Benz",
		model: "E-Class",
		start() {
			console.log("This is a car");
		},
	};
}

{
	// 3.
	interface Employee {
		name: string;
		position: string;
		department?: string;
	}
	const employee: Employee = {
		name: "kisu",
		position: "CEO",
	};
}

{
	// 4.
	interface Team {
		name: string;
		members: string[];
	}
	const team: Team = {
		name: "Team5",
		members: ["wonil", "kisu", "rena"],
	};
}

{
	// 5.
	interface Animal {
		name: string;
		age: number;
	}
	interface Dog extends Animal {
		breed: string;
	}
	const dog: Dog = {
		name: "영웅",
		age: 5,
		breed: "호걸",
	};
}

{
	// 6.
	interface Person {
		name: string;
		age: number;
		greet(): void;
	}
	const person: Person = {
		name: "kisu",
		age: 30,
		greet() {
			return `Hello, my name is ${this.name}`;
		},
	};
	console.log(person.greet());
}

{
	// 7.
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
}

{
	// 8.
	interface Person {
		name: string;
		age: number;
	}
	interface Address {
		street: string;
		city: string;
		zipcode: number;
	}
	interface ContactInterface extends Person, Address {}
	const Contact: ContactInterface = {
		name: "kisu",
		age: 30,
		street: "종로",
		city: "서울",
		zipcode: 1,
	};
}

{
	// 9.
	interface Dictionary {
		string: string;
	}
	const dictionary: Dictionary = {
		string: "apple",
	};
}

{
	// 10. ☑️☑️☑️
	interface Operation {
		(num1: number, num2: number): number;
	}
	const add: Operation = function (n1, n2) {
		return n1 + n2;
	};
	const subtract: Operation = function (n1, n2) {
		return n1 - n2;
	};
}
