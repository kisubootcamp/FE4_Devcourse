//1
interface Person {
  name: string;
  age: number;
}

//2
interface Car {
  brand: string;
  model: string;
  start(): void;
}

//3
interface Employee {
  name: string;
  position: string;
  department?: string;
}

//4
interface Team {
  name: string;
  members: string[];
}

//5
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: boolean;
}

//6
{
  interface Person {
    name: string;
    age: number;
    greet(): void;
  }

  const user: Person = {
    name: "eunseo",
    age: 25,
    greet() {
      console.log(`Hello, my name is ${this.name} 😊`);
    },
  };

  user.greet();
}

//7
{
  interface Shape {
    area(): void;
  }

  interface Circle extends Shape {
    radius: number;
  }

  interface Ractangle extends Shape {
    width: number;
    height: number;
  }
}

//8
{
  interface Person {
    name: string;
    age: number;
  }

  interface Address {
    street: string;
    city: string;
    zipcode: string;
  }

  interface Contact extends Person, Address {
    mehtod: void;
  }
}

//9
{
  interface Dictionary {
    [key: string]: string;
  }
}

//10
{
  interface Operation {
    (a: number, b: number): number;
  }

  const add: Operation = (a, b) => a + b;
  const subtract: Operation = (a, b) => a - b;
}
