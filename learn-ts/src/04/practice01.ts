{
  // ### 1. **간단한 객체 타입 정의**
  // **문제:**
  // `Person`이라는 인터페이스를 정의하여, `name`과 `age` 프로퍼티를 가진 객체를 생성하세요.
  interface Person {
    name: string;
    age: number;
  }
  const person: Person = {
    name: "jieun",
    age: 20,
  };
  console.log(person); // { name: 'jieun', age: 20 }
}
{
  // ### 2. **메소드가 포함된 인터페이스**
  // **문제:**
  // `Car`라는 인터페이스를 정의하여,
  // 자동차의 `brand`, `model`, `start()` 메소드를 포함하는 객체를 생성하세요.
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }
  const car: Car = {
    brand: "현대",
    model: "케스퍼",
    start() {
      console.log("지나가요");
    },
  };
  console.log(car);
  car.start();
  //  { brand: '현대', model: '케스퍼', start: [Function: start] }
  // 지나가요
}

{
  // ### 3. **선택적 속성 사용**
  // **문제:**
  // `Employee`라는 인터페이스를 정의하여,
  // `name`과 `position`을 기본 속성으로 하고, `department`는 선택적인 속성으로 추가하세요.
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }
  const emp: Employee = {
    name: "ji",
    position: "eun",
  };
  console.log(emp);
  //   { name: 'ji', position: 'eun' }
}

{
  // ### 4. **배열을 포함한 인터페이스**
  // **문제:**
  // `Team`이라는 인터페이스를 정의하여, `name`과 `members` 속성을 포함합니다.
  interface Team {
    name: string;
    members: string[];
  }
  const team: Team = {
    name: "2조",
    members: ["서영님", "정수님", "태훈님", "민지님", "나"],
  };
  console.log(team.members);
}

{
  // ### 5. **상속을 이용한 인터페이스 확장**
  // **문제:**
  // `Animal`이라는 인터페이스를 정의하고, `Dog`라는 인터페이스가 `Animal`을 상속받도록 하세요
  interface Animal {
    name: string;
    age: number;
  }
  interface Dog extends Animal {
    breed: string;
  }
  const dog: Dog = {
    name: "노을이",
    age: 6,
    breed: "웰시코기",
  };
  console.log(dog);
  //   { name: '노을이', age: 6, breed: '웰시코기' }
}

{
  // ### 6. **인터페이스에서 메소드 정의**
  // **문제:**
  // `Person`이라는 인터페이스를 정의하여, `name`과 `age` 프로퍼티를 포함하고,
  // `greet()` 메소드를 정의하세요. `greet()`는 `"Hello, my name is {name}"`을 반환하는 메소드입니다.
  interface Person {
    name: string;
    age: number;
    greet(): string;
  }
  const person: Person = {
    name: "지은",
    age: 20,
    greet() {
      return `Hello, my name is ${this.name}`;
    },
  };
  console.log(person.greet());
}

{
  // ### 7. **다형성을 가진 인터페이스**
  // **문제:**
  // `Shape`라는 인터페이스를 정의하고, `Circle`과 `Rectangle`이라는 인터페이스가 `Shape`를 상속받도록 하세요.
  // - `Shape`는 `area()` 메소드만 정의하고,
  // - `Circle`은 `radius` 속성을, `Rectangle`은 `width`와 `height` 속성을 추가합니다.
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
      return Math.PI * this.radius ** 2;
    },
  };
  const rectangle: Rectangle = {
    width: 4,
    height: 6,
    area() {
      return this.width * this.height;
    },
  };
  console.log("Circle Area:", circle.area()); // Circle Area: 78.5398...
  console.log("Rectangle Area:", rectangle.area()); // Rectangle Area: 24
}

{
  // ### 8. **다중 인터페이스를 사용하는 객체**
  // **문제:**
  // `Person`과 `Address`라는 두 개의 인터페이스가 있을 때, 이 두 인터페이스를 합친 객체 `Contact`를 만들어 보세요.
  // - `Person`은 `name`과 `age`를 포함하고,
  // - `Address`는 `street`, `city`, `zipcode`를 포함합니다.
  // - 속성에 대한 자료형은 자율적으로 지정하세요.
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
    name: "지은",
    age: 20,
    street: "1",
    city: "2",
    zipcode: 3,
  };
  console.log(Contact);
  //   { name: '지은', age: 20, street: '1', city: '2', zipcode: 3 }
}

{
  //   ### 9. **인터페이스에 인덱스 시그니처 사용**
  // **문제:**
  // `Dictionary`라는 인터페이스를 정의하여, 이 인터페이스는 `string` 키와 `string` 값을 가지는 객체 타입을 정의하세요.
  interface Dictionary {
    [key: string]: string;
  }
  const dic1: Dictionary = {
    name: "개발자",
    hello: "안녕",
  };
  console.log(dic1);
  // { name: '개발자', hello: '안녕' }
}

{
  //   ### 10. **인터페이스를 사용한 함수 타입 정의**
  // **문제:**
  // `Operation`이라는 인터페이스를 정의하여, 두 개의 `number`를 받아 `number`를 반환하는 함수를 타입으로 정의하세요.
  // 그 후 `add`와 `subtract` 함수를 작성하여 이 인터페이스를 사용하세요.
  interface Operation {
    (a: number, b: number): number;
  }
  const add: Operation = (a, b) => {
    return a + b;
  };
  const subtract: Operation = (a, b) => {
    return a - b;
  };
  console.log(add(3, 5));
  console.log(subtract(10, 5));
}
