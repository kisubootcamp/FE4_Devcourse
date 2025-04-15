// 유틸리티 타입
// 어떤 목적을 달성하기 위한 기능을 구현한 커스텀 타입

{
  // 1. Partial<T>
  // -> 주어진 타입 T의 모든 속성을 선택적으로 만드는 유틸리티 타입.
  interface User {
    name: string;
    age: number;
  }

  const user1: User = {
    name: "PSY",
    age: 20,
  };

  const guest: Partial<User> = {
    name: "Guast",
  };

  // ===
  type Partial<T> = {
    [key in keyof T]?: T[key];
  };
}

console.log("-------------------------------------");

{
  // 2. Reqyired<T>
  // -> 주어진 타입 T 를 모두 필수 속성으로 만드는 것
  type User = {
    name: string;
    age?: number;
    gender: string;
  };

  const normalUser: User = {
    name: "PSY",
    gender: "male",
  };

  const adultUser: Required<User> = {
    name: "PSY",
    gender: "male",
    age: 20,
  };

  // ===
  // -? => 옵셔널 프로퍼티 제거
  type Required<T> = {
    [key in keyof T]-?: T[key];
  };
}

console.log("-------------------------------------");

{
  // 3. Readonly<T>
  // -> 모든 항목을 읽기 전용으로 바꿔줌
  type User = {
    name: string;
    age?: number;
    gender: string;
  };

  const premiumUser: Readonly<User> = {
    name: "PSY",
    age: 20,
    gender: "male",
  };

  // premiumUser.name = ""; // Error

  // ===
  type Readonly<T> = {
    readonly [key in keyof T]: T[key];
  };
}

console.log("-------------------------------------");

{
  // 4. Pick<T, K>
  // -> 주어진 타입 T 에서 선택한 속성만 추출
  interface User {
    name: string;
    age: number;
    gender: string;
  }

  const name: Pick<User, "name"> = {
    name: "PSY",
  };

  // ===
  type Pick<T, K extends keyof T> = {
    [key in K]: T[key];
  };
}

console.log("-------------------------------------");

{
  // 5. Omit<T, K>
  // 주어진 타입 T 에서 특정 속성 K 를 제외한 나머지 속성만 추출
  interface User {
    name: string;
    age: number;
    gender: string;
  }

  const user: Omit<User, "age" | "gender"> = {
    name: "PSY",
  };

  // ===
  type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
}

console.log("-------------------------------------");

{
  // 6. Record<K, T>
  // 주어진 키 K 와 값 T의 타입을 가지는 객체 타입을 생성
  let obj3: Record<string, never> = {};

  const score: Record<string, number> = {
    math: 90,
    english: 90,
    science: 70,
  };

  // ===
  type Record<K extends keyof any, T> = {
    [key in K]: T;
  };
}

console.log("-------------------------------------");

{
  // 7. 객체에 존재하는 속성을 제거할 떄는 Omit
  // 유니언 타입에서 속성을 제거할 때 사용하는 건 Exclude
  type MyType = "a" | "b" | "c";
  const result: Exclude<MyType, "a"> = "b";
  const result1: Exclude<MyType, "a"> = "c";

  // ===
  type Exclude<T, U> = T extends U ? never : T;
}

console.log("-------------------------------------");

{
  // 8. Extract<T, U>
  // T 로 부터 U 를 추출하는 타입
  type B = Extract<string | boolean, boolean>;

  // ===
  type Extract<T, U> = T extends U ? T : never;
}

console.log("-------------------------------------");

{
  // 9. NonNullable<T>
  // 주어진 타입에서 Null 과 undefined 를 제거한다.
  type MyType = string | null | undefined;
  type NonnType = NonNullable<MyType>;

  // ===
  type NonNullable<T> = T & {};
}

console.log("-------------------------------------");

{
  // 10. ReturnType<T>
  // 주어진 함수 타입 T의 반환 타입을 추출
  type Aage = ReturnType<typeof getAge>;
  function getAge() {
    return 20;
  }

  // ===
  type ReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
  ) => infer R
    ? R
    : never;
}
