/* eslint-disable no-unused-vars */
{
  // 1. 인터페이스
  // 1.1 객체 타입을 지정할 때 사용 (나만의 객체 타입) // 타입 별칭 (나만의 타입)
  // 1.2 선언 병합

  // 인터페이는 먼가를 정의하는 느낌, 타입 별칭은
  // 타입별칭으로 지정할수있는건 객체도 정의할수있는건 인터페이스
  // 인터페이스: only 객체
  // 타입 별칭: 원시 타입 가능
  // 타입별칭으로 인터페이스 다 가능.
  // 근데 실무에서는 인터페이스 사용
  // -> 단순한 객체의 구조를 정의할 때는 인터페이스
  // -> 유니언, 튜플, 기본 타입, 함수, API 응답 값 -> 타입 별칭

  interface User {
    name: string;
    age: number;
  }

  // 식별자 중복 가능. 왜? 똑같은 식별자를 자동으로 하나로 합쳐줌
  interface User {
    name: string; // number는 불가능
    gender: string;
  }

  const user1: User = {
    name: "alice",
    age: 20,
    gender: "female",
  };
}

{
  interface User {
    name: string;
    age: number;
    // greet: () => void;
    greet(): void;
  }

  const user = {
    name: "kyo",
    age: 25,
    greet() {
      console.log(`${this.name}, ${this.age}`);
    },
  };
  user.greet();
}

{
  type SumFunc = (n1: number, n2: number) => number;

  // 인터페이스로 함수
  interface SumFuncInterface {
    (n1: number, n2: number): number;
  }

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

  interface Cat extends Animal {
    bark(): void; // 야옹
  }

  const dog: Dog = {
    name: "퍼피",
    bark() {
      console.log("왈왈");
    },
  };

  const cat: Dog = {
    name: "냥이",
    bark() {
      console.log("야옹");
    },
  };
}

{
  // 인터페이스
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
    b: 13,
    c: true,
  };
}

{
  // 타입 별칭
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
    b: 13,
    c: true,
  };
}
