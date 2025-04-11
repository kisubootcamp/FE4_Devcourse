{
  // 1
  interface Person {
    name: string;
    age: number;
  }
  const person: Person = {
    name: "jaegeon",
    age: 26,
  };
  console.log(person);
}
{
  // 2
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }
  const car: Car = {
    brand: "HYUNDAI",
    model: "SANTAFE",
    start() {
      console.log(`${this.brand}의 ${this.model} 시동 켬`);
    },
  };
  car.start();
}
{
  // 3
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }
  const employee: Employee = {
    name: "jaegeon",
    position: "senior",
    department: "Dev",
  };
  console.log(employee);
}
{
  // 4
  interface Team {
    name: string;
    members: string[];
  }
  const team: Team = {
    name: "Five Coders",
    members: ["jaegeon", "eunji", "eunseo", "jiyun", "wonil"],
  };
  console.log(team);
}
{
  // 5
  interface Animal {
    name: string;
    age: number;
  }
  interface Dog extends Animal {
    breed: string;
  }
  const dog: Dog = {
    name: "Corie.",
    age: 5,
    breed: "Corie. Jr.",
  };
  console.log(dog);
}
{
  // 6
  interface Person {
    name: string;
    age: number;
    greet(): void;
  }
  const person: Person = {
    name: "jaegeon",
    age: 26,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
  person.greet();
}
{
  // 7
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
  const rectangle: Rectangle = {
    width: 20,
    height: 10,
    area() {
      console.log(`넓이는 ${this.width * this.height} `);
    },
  };
  rectangle.area();
}
{
  // 8
  interface Person {
    name: string;
    age: number;
  }
  interface Address {
    street: string;
    city: string;
    zipcode: number;
  }
  interface Contact extends Person, Address {}
  const contact: Contact = {
    name: "jaegeon",
    age: 26,
    street: "hajungro",
    city: "shiheung",
    zipcode: 114,
  };
  console.log(contact);
}
{
  // 9
  interface Dictionary {
    [key: string]: string;
  }
  const dictionary: Dictionary = {
    name: "dict1",
  };
  console.log(dictionary);
}
{
  // 10
  interface Operation {
    (a: number, b: number): number;
  }
  const add: Operation = (a, b) => {
    return a + b;
  };
  const subtract: Operation = (a, b) => {
    return a - b;
  };
  console.log(add(10, 3));
  console.log(subtract(10, 3));
}
