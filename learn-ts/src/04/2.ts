{
  // 1. 인터페이스
  // 1-1. 객체 타입을 지정 시 사용 (나만의 객체 타입)
  // 1-2. 선언 병합
  // 1-3. 상속
  interface User {
    name: string;
    age: number;
  }
  interface User {
    gender?: string;
  }

  const user1: User = {
    name: "jaegeon",
    age: 26,
  };
}
{
  interface User {
    name: string;
    age: number;
    greet(): void;
  }
  const user1 = {
    name: "jaegeon",
    age: 26,
    greet() {
      console.log(`${this.name}, ${this.age}`);
    },
  };
  user1.greet();
}
{
  // 함수 별칭의 경우
  type SumFunc = (n1: number, n2: number) => number;

  // 인터페이스로 함수 정의
  interface SumFuncInterface {
    name: string;
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
  const dog: Dog = {
    name: "퍼피",
    bark() {
      console.log("왈왈");
    },
  };

  interface Cat extends Animal {
    bark(): void; // 냐옹
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
    a: "a",
    b: 121,
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
    b: 121,
    c: true,
  };
}
