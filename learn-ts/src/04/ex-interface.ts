// 연습문제
// 01
{
  interface Person {
    name: string;
    age: number;
  }

  const user: Person = {
    name: 'qq',
    age: 12,
  };
  console.log(user);
}

// 02
{
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }

  const car: Car = {
    brand: 'qq',
    model: 'ww',
    start() {
      console.log('start');
    },
  };
  car.start();
}

// 03
{
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }

  const em: Employee = {
    name: 'qq',
    position: 'tt',
  };
  console.log(em);
}

// 04
{
  interface Team {
    name: string;
    members: string[];
  }

  const team: Team = {
    name: 'ty',
    members: ['qq', 'ww', 'ee'],
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
    bread(): void;
  }
}

// 06
{
  interface Person {
    name: string;
    age: number;
    greet(): string;
  }

  const ps: Person = {
    name: '11',
    age: 11,
    greet() {
      return `Hello, my name is ${this.name}`;
    },
  };
  console.log(ps.greet());
}

// 07
{
  interface Shape {
    area(): number;
  }

  interface Circle extends Shape {
    radius: number;
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

  const Contact: Person & Address = {
    name: '22',
    age: 12,
    street: 'mk',
    city: 'ci',
    zipcode: 11111,
  };
  console.log(Contact);
}

// 09
{
  interface Dicitionary {
    [key: string]: string;
  }
}

// 10
{
  interface Operation {
    (n1: number, n2: number): number;
  }

  const add: Operation = (n1, n2) => {
    return n1 + n2;
  };
  const subtract: Operation = (n1, n2) => {
    return n1 - n2;
  };
  console.log(add(1, 2));
  console.log(add(4, 2));
}
