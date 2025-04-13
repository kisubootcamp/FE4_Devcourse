{
  /*
    1. 인터페이스 (Interface)
    1.1 객체 타입을 지정할 때 사용 (나만의 객체 타입) // (타입 별칭 - 나만의 타입)
        -> 객체만 만들 수 있다
    1.2 선언 병합
    1.3 상속
  */
  // 👀 타입별칭 vs 인터페이스

  // 타입 별칭
  type User1 = {
    name: string;
    age: number;
  };

  // 인터페이스
  interface User2 {
    name: string;
    age: number;
  }
  // 타입별칭으로 지정할 수 있는 건, 객체라면 인터페이스로도 정의할 수 있다 !
  const user2: User1 = {
    name: "alice",
    age: 20,
  };

  type ID = string;
  // interface ID = string {} ??? 불가능함 ! -> 인터페이스는 생긴것 부터가 객체임 이런건 불가능
  let userId: ID = "hulk";
}
{
  // 선언 병합

  /*타입 별칭 vs 인터페이스 차이점
    1. 타입에 마우스 올렸을 때, 타입의 세부적인 내용 보이지 x -> 💭 정리할 때 사진 첨부하기
    2. 타입 별칭은 똑같은 타입을 두개 지정할 수 없다, 식별자 중복 불가능하다.
       인터페이스는 중복 가능하다. 왜? 인터페이스는 식별자가 같으면 하나로 합쳐줌
  */

  // 타입 별칭
  type User1 = {
    name: string;
    age: number;
  };
  // type User1 = {  ❌ 불가능
  //   name: string;
  //   age: number;
  // };

  // 인터페이스
  interface User2 {
    name: string;
    age: number;
  }
  interface User2 {
    gender: string;
  }
  const user1: User2 = {
    name: "alice",
    age: 20,
    gender: "female", // 이거 없으면 에러남 ! 하나로 합쳐지니까, gender를 optional로 지정하면 오류 안남!
  };

  interface User3 {
    name: string;
    age: number;
  }
  // interface User3 {
  //   name: number;   ❌ 이게 달라지면 이제 오류 남.. 합칠수가 없으니까 !
  // }
}
{
  type User1 = {
    // 변수에 할당하듯이
    name: string;
    age: number;
    greet: () => void;
  };
  interface User2 {
    // 정의하듯이
    name: string;
    age: number;
    // greet: () => void;
    greet(): void; // 이렇게도 표현 가능 !
  }
  const user: User2 = {
    name: "sucoding",
    age: 20,
    greet() {
      console.log(`${this.name},${this.age}`);
    },
  };
  user.greet();
}
{
  // 함수의 타입 지정

  // 타입 별칭
  type SumFunc = (n1: number, n2: number) => number;

  // 인터페이스 (함수도 1급 "객체"라 interface로 타입 지정 가능)
  // 매개변수에는 옵셔널 프로퍼티 적용 가능하지만 (n1: number, n2?: number) ok
  // 함수 자체에는 불가능 (n1: number, n2: number)? not ok → 말이 안됨
  interface SumFuncInterface {
    (n1: number, n2: number): number;
  }

  const sum: SumFuncInterface = (n1, n2) => n1 + n2;
}
{
  // 상속
  // 인터페이스는 "상속" 이라는 기능도 지원한다.
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
  // 타입 별칭으로 한다면?
  type A = {
    a: string;
  };
  type B = {
    b: number;
  };
  type C = A & B & {c: boolean};
  const cValue: C = {
    a: "a",
    b: 10,
    c: true,
  };
  // 방식만 다를 뿐이지, 인터페이스로 할 수 있는건 타입 별칭으로도 모두 할 수 있음!
  // 근데 굳이 왜 씀 ? 인터페이스에서 타입 별칭에서 지원하지 않는 기능들을 쓸 수 있어서 (extends, 선언 병합), 인터페이스는 확장이 편해서
  // 지금 당장 완전히 쓰임을 이해하기는 어려울 것임
  // 실무에서는 객체의 타입을 지정할 때는 인터페이스, 그 외에는 타입 별칭을 사용하는 흐름이 있음
}
{
  /*
    [ 강사님이 인터페이스, 타입 별칭 구분하는 기준 ]
    단순한 객체의 구조를 정의할 때는 인터페이스
    튜플, 기본 타입, 함수, (유니언) -> 타입 별칭 (인터페이스가 지원을 해주지 않거나, 해줘도 불편함)
    API 응답 값 -> 타입 별칭
    어차피 인터페이스만 쓸 수 없음, 개인의 기준이나 조직이나 팀의 규칙으로 섞어 쓰거나 or 타입 별칭만 쓰는 경우도 있음
    인터페이스 사용 불가 : 리터럴 등
  */
}
