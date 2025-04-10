{
  // 1. 인터페이스
  // 타입 별칭과 많은 부분을 공유
  // 객체 타입을 지정할 때 사용. (나만의 객체 타입)
  // 무언가를 정의하는 느낌
  interface User {
    name: string;
    age: number;
  } // 생긴 모양이 객체. 인터페이스는 기본 타입은 불가능하고 "Only" 객체 타입만 가능하다.
  // 인터페이스는 마우스를 올려도 상세 스펙이 보이지 않는다.
  // 타입 별칭은 중복 지정이 불가능

  interface User {
    name: string;
    age: number;
    gender: string;
  }

  const user1: User = {
    name: "alice",
    age: 20,
    gender: "female",
  };
}

{
  // {  type User {
  //     name: string;
  //     age: number;
  //   }

  //   type User {
  //     name: string;
  //     age: number;
  //   }}
  // 타입 별칭은 중복 지정이 불가능

  interface User {
    // 컨트롤을 누르고 인터페이스를 클릭하면 해당 인터페이스의 부분이 보이는데, 추가된 사항이 있다면 그것을 통해서 확인해야 함
    name: string;
    age: number;
  }

  interface User {
    name: string;
    age: number;
  }
  // 인터페이스는 중복 선언이 가능하다
  // 타입스크립트가 중복되는 인터페이스를 합쳐주기 때문이다. => 선언 병합
  // 합치려는 속성이 같아야 한다.
}

{
  interface User {
    name: string;
    age: number;
    greet: () => void;
    // greet(): void; 로도 작성 가능하다
  }

  const user = {
    name: "Lee",
    age: 20,
    greet() {
      console.log(`${this.name}, ${this.age}`);
    },
  };
  user.greet();
}

{
  type SumFunc = (n1: number, n2: number) => number;

  // 인터페이스로 함수를 정의
  interface SumFuncInterface {
    (n1: number, n2: number): number;
  } // 함수 형태의 인터페이스만의 고유한 방법이라고 생각하면 됨
  // 객체가 아니라 함수의 속성을 정의하는 것이기 때문에 옵셔널은 매개변수 외에는 사용이 불가능하다.
  // 객체를 바로 추가할 수도 없다.그런데 name, arguments는 가능하다.
  // => function에 기본으로 속해있는 요소는 가능
  const sum: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;

  const sum2: SumFuncInterface = (n1, n2) => n1 + n2;
  // 매개변수에 옵셔널 지정 가능
}

{
  // 상속
  interface Animal {
    name: string;
  }
  interface Dog extends Animal {
    // extends를 사용하여 상속이 가능하다
    // 코마를 사용하여 여러번 상속도 가능하다
    bark(): void;
  }

  const dog: Dog = {
    name: "퍼피",
    bark() {
      console.log("왈왈");
    },
  };

  interface Cat extends Animal {
    bark(): void;
  }

  const cat: Cat = {
    name: "나비",
    bark() {
      console.log("야옹");
    },
  };
}

{
  interface A {
    a: string;
  }

  interface B {
    b: number;
  }

  interface C extends A, B {
    // 문법적으로 좀 더 명확하고 편리함
    c: boolean;
  }

  const cValue: C = {
    a: "a",
    b: 10,
    c: true,
  };
}

{
  type A = {
    a: string;
  };

  type B = {
    b: number;
  };

  type C = A &
    B & {
      c: boolean;
    };

  const cValue: C = {
    a: "a",
    b: 10,
    c: true,
  };
} // 타입 별칭으로 interface에서 할 수 있는 것을 다 할 수 있다.
// 그럼에도 interface를 사용하는 이유는 타입 별칭에서 지원되지 않는 기능들을 사용하기 위해. 실무에서 유용하게 동작하는 부분이 있기 때문에

// 단순한 객체의 구조를 정의할 때는 인터페이스
// 유니언, 튜플, 기본 타입, 함수 -> 타입 별칭
// API 응답 값 -> 타입 별칭

{
  const obj: {
    name: string;
    age: number;
  } = {
    name: "lee",
    age: 29,
  };

  const name = obj.name;
  name.toUpperCase();

  // 요소를 삭제헤려면 옵셔널로 선언해야 함
}

{
  // 범용적인 타입 지정 방법
  // 인덱스 시그니처
  // 정확한 타입을 알 수 없다
  // 장점: 객체의 속성을 자유롭게 지정하거나 변경이 가능하다
  // 객체라서 가능한 방법: 옵셔널 프로퍼티, readonly 프로퍼티, 인덱스 시그니처
  // 타입 별칭이나 인터페이스여서 인덱스 시그니처를 사용할 수 있는 것이 아니라 객체라서 인덱스 시그니처를 사용할 수 있는 것이다.
  const obj: {
    [key: string]: string | number;
  } = {
    name: "Lee",
    age: 20,
  };

  const name = obj.name;
  // name.toUpperCase();

  obj.gender = "male";
  delete obj.name;
}

{
  // 인덱스 시그니처와 기존 문법을 섞어서 사용
  // 타입이 확실한 값은 선언을 해 두고, 나중에 수정이 가능할 부분은 인덱스 시그니처로 둔다.
  // 인덱스 시그니처를 써야 할 때가 생길 것
  const obj: {
    name: string;
    age: number;
    [key: string]: string | number;
  } = {
    name: "lee",
    age: 29,
  };

  const name = obj.name;
  name.toUpperCase();
}

{
  interface Obj {
    [key: string]: string | number;
  }
}

{
  // 1.
  // 마이크로소프트 단위: 헝가리 출신 개발자
  // 헝가리안 표기법
  // number => nNumber type: number
  // num -> fNumber type: float
  // name -> strName type: string

  type TUser = {};
  interface IUser {}

  const user: IUser = {};
  // 타입 선언된 곳과 타입이 사용된 곳은 별개의 파일일 수 있다.
  // 지금은 사용하지 않도록 권장하는 추세
  let strName = "Lee";
  // strName = ["Lee", "ji"];
  // 수정을 통해 다른 형태의 값이 담길 수 있기 때문에 점차 사용되지 않음
  // 오늘날의 추세: 식별자의 이름을 의미있게 잘 지어주는 것이 추세
}

{
  interface User {
    name: string;
  }

  interface Car {
    speed: number;
  }

  const user: User = { name: "LEe" };
  const car: Car = { speed: 100 };

  function printValue(obj: User | Car) {
    if ("name" in obj)
      // 타입 가드
      console.log(obj.name); // Car 타입이면 name 프로퍼티가 없기 때문에 오류
    else console.log(`${obj.speed}`); // obj가 Car 타입으로 추론됨
  }
  printValue(user); // User 타입만 전달할 수 있음
  printValue(car); // 타입 에러, 유니온 타입으로 연결해서 해결
}

{
  // 구별된 유니온 타입
  interface User {
    name: string;
  }

  interface Car {
    name: string;
    speed: number;
  }

  const user: User = { name: "LEe" };
  const car: Car = { name: "BMW", speed: 100 };

  function printValue(obj: User | Car) {
    if ("speed" in obj)
      // 타입 가드, 타입 가드는 각각의 타입에서 중복되지 않는 속성을 사용한다. 타입 별칭이어도 같다
      console.log(obj.speed); // Car 타입이면 name 프로퍼티가 없기 때문에 오류
    else console.log(`${obj.name}`); // obj가 Car 타입으로 추론됨
  }
  printValue(user); // User 타입만 전달할 수 있음
  printValue(car); // 타입 에러, 유니온 타입으로 연결해서 해결
}

{
  // 구별된 유니온 타입
  interface User {
    name: string;
  }

  interface Car {
    name: string;
    speed: number;
  }

  interface Phone {
    name: string;
    speed: number;
    side: string;
  }
  const user: User = { name: "LEe" };
  const car: Car = { name: "BMW", speed: 100 };
  const phone: Phone = { name: "galaxy", speed: 50, side: "left" };

  function printValue(obj: User | Car | Phone) {
    if ("speed" in obj)
      // 타입 가드, 타입 가드는 각각의 타입에서 중복되지 않는 속성을 사용한다.
      console.log(obj.speed); // Car 타입이면 name 프로퍼티가 없기 때문에 오류
    else console.log(`${obj.name}`); // obj가 Car 타입으로 추론됨
  }
  printValue(user); // User 타입만 전달할 수 있음
  printValue(car); // 타입 에러, 유니온 타입으로 연결해서 해결
  printValue(phone);
}

{
  type Car = {
    name: string;
    speed: number;
  };

  type Vehicle = {
    name: string;
    // speed: number;
  };

  let car: Car = { name: "bmw", speed: 100 };
  let vehicle: Vehicle = { name: "hyundai" };

  // 할당하려는 대상의 속성이 할당되는 속성에 있는 속성이 없으면 할당할 수 없지만, 할당하려는 대상의 속성이 할당되는 속성에 없는 속성을 가지고 있어도 할당이 된다.
  vehicle = car; // vahicle에 할당할 수 있는 name 속성을 car도 가지고 있기 때문에 할당이 가능하다
  // 재할당 되었기 때문에 hyundai로 다시 접근 불가
  console.log(vehicle);
  console.log(vehicle.name);
  // console.log(vehicle.speed) // 콘솔에서는 스피드가 보이지만, vehicle에 speed 속성이 없기 때문에 speed를 통해 호출이 불가능하다.
  // car = vehicle; // 구조가 다르기 때문에 에러가 발생 -> speed값이 없기 때문에 할당이 불가능

  // 구조적 타이핑
  // 타입 이름으로 구분하는 것이 아닌, 타입의 구조로 구분한다.
  // 커스텀 타입은 생김새로 구분

  // function printValue(obj: Car) {
  //   console.log(`${obj.name}, ${obj.speed}`);
  // }

  // printValue(vehicle);

  // let num: number = 10;
  // let str: string = "A";

  // num = str;
  // str = num;
}
