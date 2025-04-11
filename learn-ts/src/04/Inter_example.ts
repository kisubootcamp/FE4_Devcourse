{
  // 연습문제 1번
  interface Person {
    name: string;
    age: number;
  }
}

{
  // 연습문제 2번
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }
}

{
  // 연습문제 3번
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }
}

{
  // 연습문제 4번
  interface Team {
    name: string;
    members: string[];
  }

  const teamName: Team = {
    name: "Devcourse",
    members: ["정수", "지은", "태훈", "서영", "민지"],
  };
}

{
  // 연습문제 5번
  interface Animal {
    name: string;
    age: number;
  }
  interface Dog extends Animal {
    breed: string;
  }
}

{
  // 연습문제 6번
  interface Person {
    name: string;
    age: number;
    greet(): string;
  }

  const person: Person = {
    name: "태훈",
    age: 26,
    greet() {
      return `Hello, my name is ${this.name}`;
    },
  };

  console.log(person.greet());
}

{
  // 연습문제 7번
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

{
  // 연습문제 8번
  interface Person {
    name: string;
    age: number;
  }
  interface Address {
    street: string;
    city: string;
    zipcode: string;
  }

  const contact: Person & Address = {
    name: "태훈",
    age: 26,
    street: "한밭대로 123",
    city: "대전",
    zipcode: "11111",
  };
}

{
  // 연습문제 9번
  // key 다시 공부하고 풀어보기
  interface Dictionary {
    // key:string;
  }
}

{
  // 연습문제 10번
  // 문제 이해를 못함
  interface Operation {
    num1: number;
    num2: number;
  }
  type NumOper = {
    num3: number;
    num4: number;
  };
}
