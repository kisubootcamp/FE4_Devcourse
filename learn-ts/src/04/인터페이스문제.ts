{
  //1. 간단한 객체 타입 정의
  // Person이라는 인터페이스를 정의하여, name과 age 프로퍼티를 가진 객체를 생성하세요.
  interface Person {
    name: string;
    age: number;
  }
  const person: Person = {
    name: "susususpernova",
    age: 20,
  };
}

{
  //2. 메소드가 포함된 인터페이시ㅡ
  //Car라는 인터페이스를 정의하여, 자동차의 brand, model, start() 메소드를 포함하는 객체를 생성하세요.
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }
  const car: Car = {
    brand: "Hyundai",
    model: "Genesis",
    start() {
      console.log(`${this.brand}에는 ${this.model}가 있다.`);
    },
  };
}

{
  //3. 선택적 속성 사용
  //Employee라는 인터페이스를 정의하여, name과 position을 기본 속성으로 하고, department는 선택적인 속성으로 추가하세요.
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }
  const employee1: Employee = {
    name: "kuku",
    position: "developer",
    department: "developemnt",
  };
  const employee2: Employee = {
    name: "kaka",
    position: "assistant",
  };
}

{
  //4. 배열을 포함한 인터페이스
  //Team이라는 인터페이스를 정의하여, name과 members 속성을 포함합니다.
  interface Team {
    name: string;
    members: string[];
  }
  const team1: Team = {
    name: "dev team",
    members: ["kuku", "kaka"],
  };
  const team2: Team = {
    name: "course team",
    members: ["nina", "nino", "sucoding"],
  };
}

{
  //5. 상속을 이용한 인터페이스 확장
  //Animal이라는 인터페이스를 정의하고, Dog라는 인터페이스가 Animal을 상속받도록 하세요.
  interface Animal {
    name: string;
    age: number;
  }
  interface Dog extends Animal {
    breed: string;
  }
  const dog1: Dog = {
    name: "happy",
    age: 10,
    breed: "mix",
  };
}

{
  //6. 인터페이스에서 메소드 정의
  interface Person {
    name: string;
    age: number;
    greet(): void;
  }
  const person: Person = {
    name: "kuku",
    age: 20,
    greet: function () {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
  person.greet();
}

{
  //7.다형성을 가진 인터페이스
  //Shape라는 인터페이스를 정의하고, Circle과 Rectangle이라는 인터페이스가 Shape를 상속받도록 하세요.
  interface Shape {
    area(): void;
  }
  interface Circle extends Shape {
    radius: number;
  }
  interface Rectagle extends Shape {
    width: number;
    height: number;
  }
}

{
  //8. 다중 인터페이스를 사용하는 객체
  //Person과 Address라는 두 개의 인터페이스가 있을 때, 이 두 인터페이스를 합친 객체 Contact를 만들어 보세요.
  interface Person {
    name: string;
    age: number;
  }
  interface Address {
    street: string;
    city: string;
    zipcode: number;
  }

  const concat: Person & Address = {
    name: "kuku",
    age: 20,
    street: "apple apt",
    city: "biloxi",
    zipcode: 39530,
  };
}

{
  //9. 인터페이스에서 인덱스 시그니처 사용
  // Dictionary라는 인터페이스를 정의하여, 이 인터페이스는 string 키와 string 값을 가지는 객체 타입을 정의하세요.
  interface Dictionary {
    [key: string]: string;
  }
  const dictionary: Dictionary = {
    코숏: "한국 고양이",
    브숏: "영국 고양이",
  };
}

{
  //10. 인터페이스를 사용한 함수 타입 정의
  //Operation이라는 인터페이스를 정의하여, 두 개의 number를 받아 number를 반환하는 함수를 타입으로 정의하세요. 그 후 add와 subtract 함수를 작성하여 이 인터페이스를 사용하세요.

  interface Operation {
    (num1: number, num2: number): number;
  }
  const add: Operation = (num1, num2) => num1 + num2;
  const subtract: Operation = (num1, num2) => num1 - num2;
}
