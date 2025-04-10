{
  //1.인터페이스
  // 1.1 객체 타입을 지정할 때 사용합니다.(나만의 객체 타입) //(타입 별칭-나만의 타입)
  // 타입 별칭 중에서 객체타입은 인터페이스로도 가능능
  // 1.2 선언 병합
  // 1.3 상속

  // *
  // 단순한 객체의 구조를 정의할 때에는 인터페이스(타입 별칭)
  // 유니언, 튜플, 기본 타입, 함수 -> 타입 별칭
  // API 응답 값 -> 타입 별칭
  interface User {
    name: string;
    age: number;
  }
  interface User {
    gender?: string;
  } // 중복 가능=>같은 이름의 인터페이스는 하나로 합쳐줌=>name,age,gender가 포함됨됨
  // interface User{
  //     name:number;//에러; 합치려고 했더니 name속성에 다른 타입 2개 존재
  // }

  const user1: User = {
    name: "alice",
    age: 20,
  };
}

{
  type User = {
    name: string;
    age: number;
  };
  type User = {
    name: string;
    age: number;
  }; //중복불가
}

{
  interface User {
    name: string;
    age: number;
    // greet:()=>void;
    greet(): void;
  }
  const user: User = {
    name: "sucoding",
    age: 20,
    greet() {
      console.log(`${this.name}, ${this.age}`);
    },
  };
}

{
  type SumFunc = (n1: number, n2: number) => number;

  //인터페이스로 함수 정의
  interface SumFuncInterface {
    name: string; //age,address,..안됨 / name,arguments는 가능
    //콘솔로 찍어보면 안에 arguments,caller,length,name,prototype 속성이 존재함(객체처럼)

    (n1: number, n2: number): number; //매개변수에만 옵셔널 사용가능
    //n1:number,n2:number)?:number; 함수에서는 불가능 (함수값이 있을수도 없을수도?)
  }
  const sum: SumFuncInterface = (n1, n2) => n1 + n2;
}

{
  //상속 extends
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
