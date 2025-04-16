{
  // 유틸리티 타입
  // 어떤 목적을 달성하기 위한 기능을 구현한 커스텀 타입

  // Partical<T> : 주어진 타입 T의 모든 속성을 선택적으로 만드는 유틸리티 타입
  interface User {
    name: string;
    age: number;
  }

  const user1: User = {
    name: "fasdf",
    age: 20,
  };
  const guest1: Partial<User> = {
    name: "guest1",
  };

  const guest2: Partial<User> = {
    age: 62,
  };
}

{
  // Required<T>
  // 주어진 타입 T 모두 필수 속성으로 만드는것
  type User = {
    name: string;
    age?: number;
    gender: string;
  };

  const nomal: User = {
    name: "fasdf",
    gender: "male",
  };

  const adult: Required<User> = {
    name: "fasdf",
    age: 43,
    gender: "male",
  };
}

{
  // Readonly<T>
  // 모든 속성을 읽기 전용으로 바꿔준다

  type User = {
    name: string;
    age?: number;
    gender: string;
  };

  const premium: Readonly<User> = {
    name: "j",
    age: 43,
    gender: "male",
  };

  //   premium.name = "H"; 속성을 변경할 수 없음
}

{
  // Pick<T,K>
  // 주어진 타입 T에서 선택한 속성만 추출하여 새로운 타입

  interface User {
    name: string;
    age?: number;
    gender: string;
  }

  const guest1: Pick<User, "name" | "gender"> = {
    name: "guest1",
    gender: "male",
  };
}

{
  // Omit<T,K>
  // 객체에서 주어진 타입 T에서 특정 속성 K를 제외한 나머지 속성만 추출
  interface User {
    name: string;
    age?: number;
    gender: string;
  }

  const guest1: Omit<User, "name" | "gender"> = {
    age: 34,
  };
}

{
  //Record<K,T>
  // 주어진 key K와 값 T의 타입을 가지는 타입을 생성할 때 쓰는것
  let obj: Record<string, never> = {};
  const score: Record<string, number> = {
    math: 90,
    english: 90,
    music: 100,
  };
}

{
  // Exclude<T, U>
  //  타입 T에서 타입 U를 제외한 나머지 타입을 반환
  type MyType = "a" | "b" | "c";

  // 예제 1: "b"를 제외한 나머지 타입 반환
  type Result = Exclude<MyType, "b">; // "a" | "c"
  const value: Result = "a"; // 유효

  // 예제 2: "a"를 제외한 나머지 타입 반환
  type Result2 = Exclude<MyType, "a">; // "b" | "c"
  const value2: Result2 = "b"; // 유효

  // 예제 3: 여러 값을 제외한 나머지 타입 반환
  type Result3 = Exclude<MyType, "a" | "c">; // "b"
  const value3: Result3 = "b"; // 유효
}

{
  // Extract<T, U>
  // 타입 T에서 U와 겹치는 부분만 추출하여 반환
  type MyType = "a" | "b" | "c";

  // 예제 1: "b"와 "c"가 추출됨
  type Result = Extract<MyType, "b" | "c">; // "b" | "c"
  const value: Result = "b"; // 유효

  // 예제 2: "a"와 "b"가 추출됨
  type Result2 = Extract<MyType, "a" | "b">; // "a" | "b"
  const value2: Result2 = "a"; // 유효
}

{
  // NonNullable<T>
  // 타입 T에서 null과 undefined를 제외한 타입을 반환
  type MyType = string | number | null | undefined;

  // 예제 1: null과 undefined를 제외한 타입 반환
  type Result = NonNullable<MyType>; // string | number
  const value: Result = "Hello"; // 유효

  // 예제 2: null과 undefined를 제외한 타입
  type Result2 = NonNullable<MyType>; // string | number
  const value2: Result2 = 42; // 유효
}

{
  // ReturnType<T>
  // 주어진 함수 타입 T의 반환 타입을 추출
  function getUser() {
    return { name: "John", age: 30 };
  }

  // 예제 1: 반환 타입 추출
  type User = ReturnType<typeof getUser>; // { name: string; age: number }
  const user1: User = { name: "John", age: 30 };

  // 예제 2: 반환 타입 추출
  type User2 = ReturnType<typeof getUser>;
  const user2: User2 = { name: "Alice", age: 25 };
}
