// 인터페이스 연습 문제
{
  // 1. 간단한 객체 타입 정의
  interface Person {
    name: string;
    age: number;
  }
  const human: Person = {
    name: "PSY",
    age: 20,
  };
  console.log(human);
}

console.log("-------------------------------------");

{
  // 2. 메소드가 포함된 인터페이스
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }
  const myDreamCar: Car = {
    brand: "Tesla",
    model: "Model S",
    start() {
      console.log("부릉부릉");
    },
  };
  console.log(myDreamCar.start());
}

console.log("-------------------------------------");

{
  // 3. 선택적 속성 사용
  interface Employee {
    name: string;
    position: string;
    departmemt?: string;
  }

  const employee: Employee = {
    name: "PSY",
    position: "Frontend Developer",
  };
  console.log(employee);
}

console.log("-------------------------------------");

{
  // 4. 배열을 포함한 인터페이스
  interface Team {
    name: string;
    members: string[];
  }

  const myStudyTeam: Team = {
    name: "Study",
    members: ["박상윤", "박준규", "이지윤", "정지유", "박서영", "황수지"],
  };
  console.log(myStudyTeam);
}

console.log("-------------------------------------");

{
  // 5. 상속을 이용한 인터페이스 확장
  interface Animal {
    name: string;
    age: number;
  }

  interface Dog extends Animal {
    breed: string;
  }

  const myDog: Dog = {
    name: "뽀삐",
    age: 2,
    breed: "포메라니안",
  };
  console.log(myDog);
}

console.log("-------------------------------------");

{
  // 6. 인터페이스에서 메소드 정의
  interface Person {
    name: string;
    age: number;
    greet(): string;
  }

  const myFriend: Person = {
    name: "박상윤",
    age: 20,
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`; // 사실 20살 아님 ㅎ
    },
  };

  console.log(myFriend.greet());
}

console.log("-------------------------------------");

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

  const myCircle: Circle = {
    radius: 5,
    area() {
      return Math.PI * this.radius * this.radius;
    },
  };

  const myRectangle: Rectangle = {
    width: 10,
    height: 5,
    area() {
      return this.width * this.height;
    },
  };

  console.log(myCircle.area());
  console.log(myRectangle.area());
}

console.log("-------------------------------------");

{
  // 8. 다중 인터페이스를 사용하는 객체
  interface Person {
    name: string;
    age: number;
  }

  interface Address {
    street: string;
    city: string;
    zipCode: string;
  }

  type Contact = Person & Address;

  const myFriend: Contact = {
    name: "박상윤",
    age: 20,
    street: "서울시 강남구",
    city: "서울",
    zipCode: "12345",
  };
  console.log(myFriend);
}

console.log("-------------------------------------");

{
  // 9. 인터페이스에 인덱스 시그니처 사용
  interface Dictionary {
    [key: string]: string;
  }

  const myDictionary: Dictionary = {
    apple: "사과",
    banana: "바나나",
    orange: "오렌지",
  };
  console.log(myDictionary);
}

console.log("-------------------------------------");

{
  // 10. 인터페이스를 사용한 함수 타입 정의
  interface Operation {
    (n1: number, n2: number): number;
  }

  const add: Operation = (n1, n2) => n1 + n2;
  const subtract: Operation = (n1, n2) => n1 - n2;

  console.log(add(1, 2));
  console.log(subtract(1, 2));
}
