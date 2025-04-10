{
  // interface
  // 객체(함수)의 타입을 지정할 때 사용 (나만의 객체 타입) (타입별칭은 나만의 타입)
  interface User {
    name: string;
    age: number;
  }

  // 인터페이스는 같은 식별자로 쓸 수 있는데,
  // 타입을 합쳐줌
  // 선언 병합
  interface User {
    gender: string;
  }

  const user1: User = {
    name: "jeong",
    age: 29,
    gender: "female", // 합쳐줬으면 꼭 추가해주기
  };

  // 이건 타입별칭으로 함수타입 지정한 것
  type SunFunc = (n1: number, n2: number) => number;

  // 인터페이스로 함수타입 지정
  interface SumFuncInter {
    (n1: number, n2: number): number;
  }

  const sum: SumFuncInter = (n1, n2) => n1 + n2;
}

{
  // 상속
  // extends를 사용하면 상속 가능 -> 속성은 물려받을 수 있음
  interface Animal {
    name: string;
  }

  interface Dog extends Animal {
    //name: string;  공통된 속성은 생략가능
    bark(): void;
  }

  const dog: Dog = {
    name: "퍼피",
    bark() {
      console.log("왈왈");
    },
  };
  dog.bark();

  interface Cat {
    name: string;
    bark(): void;
  }

  const cat: Cat = {
    name: "냥이",
    bark() {
      console.log("미야오");
    },
  };
  cat.bark();
}
{
  interface A {
    a: string;
  }
  interface B {
    b: string;
  }
  interface C extends A, B {
    c: boolean;
  }

  const abc: C = {
    a: "2",
    b: "3",
    c: true,
  };

  console.log(abc);

  type AA = {
    a: string;
  };
  type BB = {
    b: string;
  };
  type CC = AA &
    BB & {
      c: boolean;
    };

  const aabbcc: CC = {
    a: "2",
    b: "3",
    c: true,
  };

  console.log(aabbcc);
}
{
  // 범용적인 타입 지정
  // 인덱스 시그니처
  const obj: {
    [key: string]: string | number;
  } = {
    name: "han",
    age: 39,
  };
  obj.gender = "male";
  delete obj.name;
  console.log(obj);
}

{
  // 객체라서 가능 한 것
  // interface
  // 옵셔널 프로퍼티 :?
  // readonly
  // 인덱스 시그니처
}

{
  // 구별된 유니온 타입
  // 타입별칭이나 인터페이스 둘 다 같음
  interface User {
    name: string;
  }
  interface Car {
    name: string;
    speed: number;
  }

  const user: User = { name: "d" };
  const car: Car = { name: "BMW", speed: 112355 };

  function printValue(obj: User | Car) {
    // 구별된 유니온 타입
    // 타입 가드를 작성할 때 각 타입에서는 중복되지 않는 타입으로
    // 타입 가드 조건을 작성해준다.
    if ("speed" in obj) console.log(obj.speed);
    else console.log(`${obj.name}`);
  }
  printValue(user);
  printValue(car);
}

{
  // 구조적 타이핑
  // 타입스크립트는 객체 타입을 비교할 때
  // 정의가 되어져있는 타입 이름으로 비교하는 것이 아니라
  // 구조를 보고 비교함. 그래서 아래 모두 가능
  //   vehicle = car
  //   car = vehicle
  type Car = {
    name: string;
    speed: number;
  };

  type Vehicle = {
    name: string;
    speed: number;
  };

  let car: Car = {
    name: "bmw",
    speed: 100,
  };

  let vehicle: Vehicle = {
    name: "bike",
    speed: 50,
  };

  function printValueCar(obj: Car) {
    console.log(`${obj.name} ${obj.speed}`);
  }
  printValueCar(vehicle);
}
