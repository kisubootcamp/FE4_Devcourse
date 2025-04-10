{
  // 1. 인터페이스
  // 1.1 객체 타입을 지정할 때 사용함. (나만의 객체 타입)
  // 타입 별칭 -> 나만의 타입, 인터페이스 -> 나만의 객체 타입
  // 인터페이스는 객체만! 만들 수 있음.
  // 타입 별칭은 변수에 할당하는 느낌이고, 인터페이스는 무언가 정의하는 느낌.
  // 타입 별칭으로 지정할 수 있는 건 객체라면 인터페이스로도 정의할 수 있음 !!
  // 인터페이스는 only 객체 타입만 지정할 수 있음 !!! (원시 타입은 정의 불가능)
  // 1.2 선언 병합
  // 1.3 상속

  // *
  // 단순한 객체의 구조를 정의할 때 -> 인터페이스 (타입 별칭으로 해도 문제는 없지만 현업에서의 분위기 때문에 인터페이스가 일반적인 흐름)
  // 그 외 튜플, 기본 타입, 함수 -> 타입 별칭
  // API 응답 값 -> 타입 별칭
  // 어떤 방식을 쓰든지 일관성 있게 사용하면 됨.
  // 개인의 규칙, 조직이나 팀의 규칙에 따라가면 됨.
  // 인터페이스만 사용하는 건 불가능하지만, 타입 별칭만 사용하는 건 가능함.
  interface User {
    name: string;
    age: number;
  }

  interface User {
    gender: string;
  }

  // name의 타입이 이미 string이라 인터페이스 합칠 때 에러가 남.
  // interface User {
  //   name: number;
  // }

  // 자동으로 User 인터페이스가 합쳐짐 -> 선언 병합
  // command 누르고 User 인터페이스를 누르면 합쳐진 인터페이스의 구조를 볼 수 있음.
  const user1: User = {
    name: "bin",
    age: 20,
    gender: "female",
  };

  type ID = string; // 이런 경우엔 객체가 아니므로 인터페이스 정의 불가능.
  let userId2: ID = "hulk";

  // 타입 별칭과 인터페이스의 차이점
  // 타입 별칭
  // 마우스를 올려보면 상세 스펙이 보임.
  // 똑같은 타입을 2개 지정할 수 없음. (User라는 타입이 이미 있으면 중복 불가능)

  // 인터페이스
  // 마우스를 올려도 상세 스펙이 안 보임.
  // 인터페이스는 중복되어도 괜찮음. (인터페이스는 똑같은 식별자를 하나로 자동으로 합쳐줌)
  // -> 합치려고 하는 인터페이스에서 겹치는 속성의 타입이 다르면 에러가 남 !
}

{
  type User = {
    name: string;
    age: number;
    greet: () => void;
  };

  interface User2 {
    name: string;
    age: number;
    // greet: () => void;
    greet(): void; // 같은 의미
  }

  const user = {
    name: "bing",
    age: 20,
    greet() {
      console.log(`${this.name}, ${this.age}`);
    },
  };
  user.greet();
}

{
  // 자바스크립트 관점에서 보면 함수는 1급 객체임.
  // 그래서 인터페이스로 정의 가능함.
  type SumFunc = (n1: number, n2: number) => number;

  // 인터페이스로 함수 타입 정의
  // (n1: number, n2?: number) 이렇게 매개변수에 옵셔널 속성을 줄 수는 있지만,
  // (n1: number, n2: number)? 이거는 불가능함.
  // 객체의 속성을 정의하는 게 아니라 함수라는 것의 타입을 정의하는 문법이기 때문.
  interface SumFuncInterface {
    (n1: number, n2: number): number;
  }

  // 에러
  interface SumFuncInterface2 {
    superman: string;
    (n1: number, n2: number): number;
  }

  // 가능
  interface SumFuncInterface3 {
    name: string;
    (n1: number, n2: number): number;
  }

  // 가능
  interface SumFuncInterface4 {
    arguments: string;
    (n1: number, n2: number): number;
  }

  // -> 함수에는 arguments, caller, length, name, prototype 이라는 속성이 있기 때문 !!!
  // -> 그래서 함수를 1급 객체라고 하는 것.
  // -> 하지만, 허용이 될 뿐, 그냥 (n1: number, n2: number): number; 이렇게만 쓸 것 !

  const sum: SumFuncInterface = (n1, n2) => n1 + n2;
}

{
  // 상속
  interface Animal {
    name: string;
  }

  interface Dog extends Animal {
    bark(): void; // 왈왈
  }

  const dog: Dog = {
    name: "퍼피",
    bark() {
      console.log("왈왈");
    },
  };

  interface Cat extends Animal {
    bark(): void; // 야옹
  }

  const cat: Cat = {
    name: "냥이",
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
    c: boolean;
  }

  const cValue: C = {
    a: "a",
    b: 10,
    c: true,
  };
}

{
  // 인터페이스에서 할 수 있는 건 타입 별칭에서 다 할 수 있음.
  // 그러나 아직까지 실무에서는 객체 타입을 지정할 때는 인터페이스, 그 외에는 타입 별칭을 사용하려고 하는 흐름이 남아있음.
  // 인터페이스는 문법적으로 더 명확하고 확장이 편하기 때문.
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
}
