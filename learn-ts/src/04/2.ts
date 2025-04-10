{
  // 1.인터페이스
  // 1.1 객체 타입을 지정할 때 사용합니다. (나만의 객체 타입)   //  (타입별칭 - 나만의 타입)
  // 얘는 객체만 가능하다
  // 타입 별칭과 다르게 식별자가 겹쳐도 사용 가능 => 타입 별칭과 달리 자동으로 합쳐주는 기능이 있어서

  // *
  // 단순한 객체의 구조를 정의할 때는 인터페이스
  // 유니언, 튜플, 기본 타입, 함수 -> 타입 별칭
  // API 응답 값 -> 타입 별칭
  interface User {
    name: string;
    age: number;
  }

  interface User {
    gender?: string;
  }

  const user1: User = {
    name: "alice",
    age: 20,
  };
}

{
  interface User {
    name: string;
    age: number;
    //greet: () => void;
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
    bark(): void;
  }

  const dog: Dog = {
    name: "복만이",
    bark() {
      console.log("왈왈");
    },
  };

  interface Cat extends Animal {
    bark(): void;
  }

  const cat: Cat = {
    name: "레오",
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
