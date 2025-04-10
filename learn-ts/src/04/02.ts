{
  // 1. 인터페이스
  // 1-1 객체 타입을 지정할 때 사용. (나만의 객체타입) // (타입별칭 - 나만의 타입)
  // 1-2 선언 병합
  interface User {
    name: string;
    age: number;
  }
  interface User {
    gender: string;
  }

  const user: User = {
    name: "Alice",
    age: 20,
    gender: "female",
  };

  // interface로 설정된 객체는 상세타입이 보이지 않는다.
  // interface는 식별자를 중복으로 설정할 수 있음. (똑같은 식별자를 자동으로 합쳐줌) - 속성의 타입이 같아야만 가능.
}
{
  interface User {
    name: string;
    age: number;
    greet(): void;
  }

  const user = {
    name: "siru",
    age: 20,
    greet() {
      console.log(`${this.name}, ${this.age}`);
    },
  };
  user.greet();
}
{
  type SumFunc = (n1: number, n2: number) => number;

  // 인터페이스로 함수
  interface SumFunction {
    (n1: number, n2: number): number;
  }
  const sum: SumFunction = (n1, n2) => n1 + n2;
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
    bark(): void;
  }

  const dog: Dog = {
    name: "뽀삐",
    bark() {
      console.log("왈왈");
    },
  };

  const cat: Cat = {
    name: "냥몬",
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
