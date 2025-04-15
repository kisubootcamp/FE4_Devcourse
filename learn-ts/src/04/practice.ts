{
  // 1.
  interface Person {
    name: string;
    age: number;
  }

  const person: Person = {
    name: 'junsu',
    age: 26,
  };

  // 2.
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }

  const car: Car = {
    brand: 'bmw',
    model: '740i',
    start() {
      console.log('부릉~');
    },
  };

  // 3.
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }
  // 4.
  interface Team {
    name: string;
    members: string[];
  }

  const team: Team = {
    name: 'junsu',
    members: ['sumin', 'minsu', 'hayoung'],
  };

  interface Animal {
    name: string;
    age: number;
  }
  interface Dog extends Animal {
    breed: string;
  }

  const dog: Dog = {
    name: '멍멍이',
    age: 10,
    breed: '말티즈',
  };

  // 6.
  interface Person1 {
    name: string;
    age: number;
    greet(): void;
  }

  const person1: Person1 = {
    name: 'junsu',
    age: 26,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
}
