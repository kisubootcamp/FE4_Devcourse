{
  // 인터페이스
  // 객체 타입을 지정할 때 사용한다. (나만의 객체 타입) / 타입 별칭: 나만의 타입
  // 선언 병합
  // 상속

  // 단순한 객체 구조 정의할 때 -> 인터페이스
  // 그 외 유니온, 튜플, 기본 타입, 함수 -> 타입 별칭
  // API 응답 값 -> 타입 별칭

  interface User {
    name: string;
    age: number;
  }

  const user1: User = {
    name: 'alice',
    age: 20,
  };
}

{
  // type User = {
  //   name: string;
  //   age: number;
  //   greet: () => void;
  // };

  interface User {
    name: string;
    age: number;
    greet: () => void; // greet(): void
  }

  const user = {
    name: 'su',
    age: 20,
    greet() {
      console.log(`${this.name}, ${this.name}`);
    },
  };
  console.log();
}

{
  type SumFunc = (n1: number, n2: number) => number;

  // 인터페이스로 함수 정의
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
    name: '퍼피',
    bark() {
      console.log('왈왈');
    },
  };

  interface Cat extends Animal {
    bark(): void;
  }

  const cat: Cat = {
    name: '냥이',
    bark() {
      console.log('냐옹');
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
    a: 'a',
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
    a: 'a',
    b: 10,
    c: true,
  };
}
