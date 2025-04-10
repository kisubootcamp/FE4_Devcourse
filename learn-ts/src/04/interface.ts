{
  // 1. 인터페이스
  // 1.1 객체 타입을 지정할 때 사용한다. (나만의 객체 타입) (타입 별칭 - 나만의 타입)
  // 1.2 같은 타입의 이름으로 합쳐지는것을 선언 병합 이라 한다.
  // 1.3 상속
  interface User {
    name: string;
    age: number;
  }

  interface User {
    gender?: string;
  }

  // type 와 다르게 타입 선언 한거 안보임 ;
  const user: User = {
    name: "PSY",
    age: 20,
  };
}

console.log("-------------------------------------");

{
  interface User {
    name: string;
    age: number;
    // greet: () => void, 밑과 같은 말임
    greet(): void;
  }

  const user = {
    name: "PSY",
    age: 20,
    greet() {
      console.log(`${this.name}, ${this.age}`);
    },
  };

  user.greet();
}

console.log("-------------------------------------");

{
  type SumFunc = (n1: number, n2: number) => number;

  // 인터페이스로 함수 타입 지정
  interface SumFuncInterface {
    // 함수는 일급 객체이다. 그래서 기본적으로 일부 값들이 들어있기 떄문에 함수의 타입을 사용한다면 name, arguments, length, caller, prototype 타입 선언이 가능하다.
    // 굳이 안적어도 된다.
    name: string;
    arguments: string;
    length: number;
    prototype: {};
    (n1: number, n2: number): number;
  }

  const sum: SumFuncInterface = (n1, n2) => n1 + n2;
}

console.log("-------------------------------------");

{
  // 상속
  interface Animal {
    name: string;
  }

  // 부모의 요소 상속 받아서 사용 가능 인터섹션 타입과 유사한 느낌... ?
  interface Dog extends Animal {
    bark(): void;
  }

  interface Cat extends Animal {
    bark(): void;
  }

  const dog: Dog = {
    name: "뽀삐",
    bark() {
      console.log("멍멍");
    },
  };

  const cat: Cat = {
    name: "나비",
    bark() {
      console.log("미야옹");
    },
  };
}

console.log("-------------------------------------");

{
  // 다중 상속
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
    b: 1,
    c: true,
  };
}

console.log("-------------------------------------");

{
  {
    // 다중 상속
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
      b: 1,
      c: true,
    };
  }
}
