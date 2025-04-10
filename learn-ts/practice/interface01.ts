// 01
{
  interface Person {
    name: string;
    age: number;
  }

  let person: Person = {
    name: "LeeJiYoon",
    age: 29,
  };

  console.log(person);
}

// 02
{
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }

  let car: Car = {
    brand: "hyundai",
    model: "Ioniq5 N",
    start() {
      console.log("빵빵");
    },
  };

  console.log(car);
}
// 03
{
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }

  let employee: Employee = {
    name: "Lee",
    position: "인턴",
  };

  let employee2: Employee = {
    name: "dave",
    position: "과장",
    department: "사업팀",
  };

  console.log(employee);
  console.log(employee2);
}

// 04
{
  interface Team {
    name: string;
    members: string[];
  }

  let team: Team = {
    name: "모각코",
    members: ["지윤", "수지", "준규", "지유", "상윤", "서영"],
  };

  console.log(team);
}

// 05
{
  interface Animal {
    name: string;
    age: number;
  }

  interface Dog extends Animal {
    breed: string;
  }

  let dog: Dog = {
    name: "담비",
    age: 4,
    breed: "스피츠",
  };

  console.log(dog);
}

// 06
{
  interface Person {
    name: string;
    age: number;
    greet(): void;
  }

  let person: Person = {
    name: "john",
    age: 20,
    greet() {
      console.log(`"Hello, my name is ${name}"`);
    },
  };

  console.log(person);
}

// 07
{
  interface Shape {
    area(): void;
  }

  interface Circle extends Shape {
    reaious: number;
  }

  interface Rectangle extends Shape {
    width: number;
    height: number;
  }
}

// 08
{
  interface Person {
    name: string;
    age: number;
  }

  interface Address {
    street: string;
    city: string;
    zipcode: number;
  }

  let Contact: Person & Address = {
    name: "david",
    age: 20,
    street: "academy street",
    city: "Incheon",
    zipcode: 13452,
  };

  console.log(Contact);
}

// 09
{
  interface Dictionary {
    [key: string]: string | number;
  }

  let dictionary: Dictionary = {
    name: "국어사전",
    price: 20000,
  };

  console.log(dictionary);
}

// 10
{
  interface Operation {
    (num1: number, num2: number): number;
  }

  const add: Operation = (num1, num2) => num1 + num2;

  const subtract: Operation = (num1, num2) => num1 - num2;

  console.log(add(1, 2));
  console.log(subtract(2, 1));
}
