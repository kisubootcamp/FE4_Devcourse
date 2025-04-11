{
  // Q1
  interface Person {
    name: string;
    age: number;
  }

  const person: Person = {
    name: "jungyu",
    age: 20,
  };
}

{
  // Q2
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }

  const car: Car = {
    brand: "benz",
    model: "CLA250",
    start() {
      console.log(`부릉`);
    },
  };
}

{
  // Q3
  interface Employee {
    name: string;
    position: string;
    departent?: string;
  }
}

{
  // Q4
  interface Team {
    name: string;
    members: string[];
  }

  const team: Team = {
    name: "모각코",
    members: ["준규", "상윤", "지윤", "지유", "수지", "서영"],
  };
}

{
  // Q5
  interface Animal {
    name: string;
    age: number;
  }

  interface Dog extends Animal {
    breed: string;
  }
}

{
  // Q6
  interface Person {
    name: string;
    age: number;
    greet(): string;
  }

  const person: Person = {
    name: "jungyu",
    age: 20,
    greet() {
      return `Hello, my name is ${this.name}`;
    },
  };

  console.log(person.greet());
}

{
  // Q7
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
  // Q8
  interface Person {
    name: string;
    age: number;
  }

  interface Address {
    street: string;
    city: string;
    zipcode: number;
  }

  type Contact = Person & Address;

  const contact: Contact = {
    name: "jungyu",
    age: 20,
    street: "goduckro",
    city: "seoul",
    zipcode: 42302,
  };
}

{
  // Q9
  interface Dictionary {
    [key: string]: string;
  }
}

{
  // Q10
  interface Operation {
    (x: number, y: number): number;
  }

  const add: Operation = (x, y) => x + y;
  const subtract: Operation = (x, y) => x - y;
}

