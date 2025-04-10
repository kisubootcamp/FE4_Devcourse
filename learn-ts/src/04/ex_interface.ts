{
  //1 간단한 객체 타입 정의

  interface Person {
    name: string;
    age: number;
  }

  const person: Person = {
    name: "sucoding",
    age: 20,
  };
}

{
  //2 메소드가 포함된 인터페이스
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }
  const car: Car = {
    brand: "toyota",
    model: "bz4x",
    start() {
      console.log("engine on");
    },
  };
}

{
  //3 선택적 속성 사용
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }

  const employee: Employee = {
    name: "Peter",
    position: "intern",
  };
}

{
  //4 배열을 포함한 인터페이스
  interface Team {
    name: string;
    members: string[];
  }

  const team: Team = {
    name: "team2",
    members: ["Peter", "Amily", "Sujan"],
  };
}

{
  //5 상속을 이용한 인터페이스 확장
  interface Animal {
    name: string;
    age: number;
  }

  interface Dog extends Animal {
    breed: string;
  }

  const dog: Dog = {
    name: "Ppoppy",
    age: 5,
    breed: "puppy food",
  };
}

{
  //6 인터페이스에서 메소드 정의
  interface Person {
    name: string;
    age: number;
    greet(): string;
  }

  const person: Person = {
    name: "Peter",
    age: 20,
    greet() {
      return `Hello, my name is ${this.name}`;
    },
  };
}

{
  //7 다형성을 가진 인터페이스
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

  const circle: Circle = {
    radius: 5,
    area() {
      return Math.PI * Math.pow(this.radius, 2);
    },
  };

  const rectangle: Rectangle = {
    width: 10,
    height: 10,
    area() {
      return this.width * this.height;
    },
  };
  console.log(circle.area());
  console.log(rectangle.area());
}

{
  //8 다중 인터페이스를 사용하는 객체
  interface Person {
    name: string;
    age: number;
  }

  interface Address {
    street: string;
    city: string;
    zipcode: number;
  }

  interface Contact {
    person: Person;
    address: Address;
  }
}

{
  //9 인터페이스에 인덱스 시그니처 사용
  interface Dictionary {
    [key: string]: string;
  }
}

{
  //10 인터페이스를 사용한 함수 타입 정의
  interface Operation {
    (a: number, b: number): number;
  }

  const add: Operation = (a, b) => {
    return a + b;
  };

  const subtract: Operation = (a, b) => {
    return a - b;
  };

  console.log(add(1, 2));
  console.log(subtract(10, 5));
}
