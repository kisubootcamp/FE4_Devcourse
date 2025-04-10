{
  // 1. 인터페이스
  // 1.1 객체 타입을 지정할 때 사용한다. (나만의 객체 타입) // (타입 별칭 - 나만의 타입)

  // 1.2 선언 병합 // 같은 이름으로 인터페이스를 생성하면 하나로 합쳐져 적용된다.
  // 1.2.1 이 때 같은 키에 다른 타입 값을 넣으면 오류가 난다.

  // 1.3 상속

  // *
  // 단순한 객체의 구조를 정의할 떄는 인터페이스
  // 유니언, 튜플, 기본 타입, 함수 -> 타입 별칭
  // API 응답 값 -> 타임 별칭

  // 1.2
  interface User {
    name: string;
    age: number;
  }

  interface User {
    gender?: string;
    // name: number; // 오류 발생 1.2.1
  }

  const user: User = {
    name: "alice",
    age: 20,
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
    name: "sucoding",
    age: 20,
    greet() {
      console.log(`${this.name}, ${this.age}`);
    },
  };
  user.greet();
}

{
  type SumFunc = (n1: number, n2: number) => number;

  //인터페이스로 함수
  interface SumFuncInterface {
    (n1: number, n2: number): number;
  }
  const sum: SumFuncInterface = (n1, n2) => n1 + n2;
}

{
  //1.3 상속
  interface Animal {
    name: string;
  }
  interface Dog extends Animal {
    bark(): void; //왈왈
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
    name: "냥이",
    bark() {
      console.log("냐옹");
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
    a: "A",
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
    c: false,
  };
}
