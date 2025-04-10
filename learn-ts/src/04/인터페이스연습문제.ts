{
  //1. **간단한 객체 타입 정의**
  // **문제:**`Person`이라는 인터페이스를 정의하여, `name`과 `age` 프로퍼티를 가진 객체를 생성하세요.

  interface Person {
    name: string;
    age: number;
  }
}
{
  //2. **문제:** `Car`라는 인터페이스를 정의하여, 자동차의 `brand`, `model`, `start()` 메소드를 포함하는 객체를 생성하세요.

  interface Car {
    brand: string;
    model: string;
    start: (value: Car) => string;
  }

  const myCar: Car = {
    brand: "maserati",
    model: "Levante",
    start,
  };

  function start(value: Car): string {
    return `${value.brand}, ${value.model}`;
  }
  start(myCar);
  console.log(start(myCar));
}
{
  //### 3. **선택적 속성 사용**
  // **문제:** `Employee`라는 인터페이스를 정의하여, `name`과 `position`을 기본 속성으로 하고, `department`는 선택적인 속성으로 추가하세요.

  interface Employee {
    name: string;
    position: string;
    department?: string;
  }
}
{
  //4### 4. **배열을 포함한 인터페이스**
  //**문제:** `Team`이라는 인터페이스를 정의하여, `name`과 `members` 속성을 포함합니다.
  interface Team {
    name: string;
    members: string[];
  }
  const team: Team = {
    name: "김보민",
    members: ["박상윤", "정지유", "최연서", "이준호"],
  };
}
{
  // 5. **상속을 이용한 인터페이스 확장**
  // **문제:**`Animal`이라는 인터페이스를 정의하고, `Dog`라는 인터페이스가 `Animal`을 상속받도록 하세요.

  interface Animal {
    name: string;
    age: number;
  }

  interface Dog extends Animal {
    bark(): void;
  }

  const dog: Dog = {
    name: "시루",
    age: 8,
    bark() {
      console.log("앙앙");
    },
  };

  dog.bark();
}
{
  //### 6. **인터페이스에서 메소드 정의**
  //**문제:** `Person`이라는 인터페이스를 정의하여, `name`과 `age` 프로퍼티를 포함하고, `greet()` 메소드를 정의하세요.
  // `greet()`는 `"Hello, my name is {name}"`을 반환하는 메소드입니다.
  interface Person {
    name: string;
    age: number;
    greet(): void;
  }

  const person: Person = {
    name: "bomin",
    age: 18,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
  person.greet();
}
{
  //7 ### 7. **다형성을 가진 인터페이스**
  // **문제:** `Shape`라는 인터페이스를 정의하고, `Circle`과 `Rectangle`이라는 인터페이스가 `Shape`를 상속받도록 하세요.
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
  //### 8. **다중 인터페이스를 사용하는 객체**  
  //**문제:** `Person`과 `Address`라는 두 개의 인터페이스가 있을 때, 이 두 인터페이스를 합친 객체 `Contact`를 만들어 보세요.

  interface Person {
    name: string,
    age: number,
  }
  interface Address {
    street: string,
    city: string,
    zipCode: number,
  }
  const Contact: {
    Person & Address
  } = {

  }
}
