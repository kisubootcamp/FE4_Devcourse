// 인터페이스

// 연습문제
{
  // 1. 간단한 객체 타입 정의
  interface Person {
    name: string;
    age: number;
  }

  const person: Person = {
    name: "kyo",
    age: 25,
  };
  console.log(person);
}
{
  // 2. 메소드가 포함된 인터페이스
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }

  const car: Car = {
    brand: "Hyundai",
    model: "Jenesis",
    start() {
      console.log(`${this.brand} ${this.model} `);
    },
  };
  car.start();
}
{
  // 3. 선택적 속성 사용
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }

  const emp: Employee = {
    name: "kyo",
    position: "front",
    //department: "A",
  };
  console.log(emp);
}
{
  // 4. 배열을 포함한 인터페이스
  interface Team {
    name: string;
    members: string[];
  }

  const team: Team = {
    name: "Tottenham",
    members: ["Son", "van de Ven"],
  };
  console.log(team);
}
{
  // 5. 상속을 이용한 인터페이스 확장
  interface Animal {
    name: string;
    age: number;
  }

  interface Dog extends Animal {
    breed: string;
  }

  const dog: Dog = {
    name: "갱쥐",
    age: 3,
    breed: "푸들",
  };

  console.log(dog);
}
{
  // 6. 인터페이스에서 메소드 정의 *
  interface Person {
    name: string;
    age: number;
    greet(): string;
  }

  const person: Person = {
    name: "kyo",
    age: 25,
    greet() {
      return `Hello, my name is ${this.name}`;
    },
  };
  person.greet();
}
{
  // 7. 다형성을 가진 인터페이스
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
  // 8. 다중 인터페이스를 사용하는 객체
  interface Person {
    name: string;
    age: number;
  }
  interface Address {
    street: string;
    city: string;
    zipcode: string;
  }
  interface Contact extends Person, Address {}

  const contact: Contact = {
    name: "kyo",
    age: 25,
    street: "Songpa",
    city: "Seoul",
    zipcode: "1",
  };

  console.log(contact);
}
{
  // 9. 인터페이스에 인덱스 시그니처 사용
  interface Dictionary {
    [key: string]: string;
  }

  const myDictionary: Dictionary = {
    Korea: "한국",
    Japan: "일본",
  };
  console.log(myDictionary["Korea"]);
}
{
  // 10. 인터페이스를 사용한 함수 타입 정의 *
  interface Operation {
    (a: number, b: number): number;
  }

  const add: Operation = (a, b) => {
    return a + b;
  };
  const subtract: Operation = (a, b) => {
    return a - b;
  };
  console.log(add(3, 2));
  console.log(subtract(3, 2));
}
