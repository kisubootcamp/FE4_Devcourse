// 유틸리티 타입
// -> 어떤 목적을 달성하기 위한 기능을 구현한 커스텀 타입
// 의미만 맞다면 여러 개의 유틸리티 타입을 섞어 쓸수 있음
{
  // 1. Partial<T>
  // -> 주어진 타입 T의 모든 속성을 선택적으로 만드는 유틸리티 타입
  interface User {
    name: string;
    age: number;
    gender: string;
  }

  const user1: User = {
    name: "kyo",
    age: 20,
    gender: "female",
  };

  const guest1: Partial<User> = {
    name: "guest1",
  };
  const guest2: Partial<User> = {
    age: 20,
  };
}

{
  // 2. Required<T>
  // -> 주어진 타입 T 모두 필수 속성으로 만드는 것
  type User = {
    name: string;
    age?: number;
    gender: string;
  };

  const normalUser: User = {
    name: "kyo",
    age: 20,
    gender: "female",
  };

  const adultUser: Required<User> = {
    name: "kyo",
    age: 20,
    gender: "female",
  };
}

{
  // 3. Readonly<T>
  // -> 주어진 타입 T의 모든 속성을 읽기 전용으로 만드는 것
  type User = {
    name: string;
    age?: number;
    gender: string;
  };

  const premiumUser: Readonly<User> = {
    name: "kyo",
    age: 20,
    gender: "female",
  };
}

{
  // 4. Pick<T, K>
  // -> 주어진 타입 T에서 선택한 속성만 추출
  interface User {
    name: string;
    age?: number;
    gender: string;
  }
  // const nameObject: Pick<User, "age"> = { --> age 써도되고 안써도되고 애초에 (?)
  const nameObject: Pick<User, "name" | "gender"> = {
    name: "kyo",
    gender: "female",
  };
}

{
  // 5. Omit<T, K>
  // -> 주어진 타입 T에서 특정 속성 K를 제외한 나머지 속성만 추출
  interface User {
    name: string;
    age?: number;
    gender: string;
  }

  const user: Omit<User, "gender"> = {
    name: "kyo",
  };
}

{
  // 6. Record<K, T>
  // -> 주어진 키 K와 값 T의 타입을 가지는 객체 타입을 생성할 때 사용
  let obj3: Record<string, never> = {};
  const score: { math: number; english: number; science: number } = {
    math: 90,
    english: 80,
    science: 60,
  };
  const score2: Record<string, number> = {
    math: 90,
    english: 80,
    science: 60,
  };
}
//================= 1 ~ 6 까지는 알아야 됨 ================//
//================= 7 ~ 9 이런 타입들도 있군 ================//
{
  // 7. Exclude<T, U>
  // 객체에 존재하는 속성을 제거할 때는 Omit
  // 유니온 타입에서 속성을 제거할 때 사용하는 건 Exclude
  type Mytype = "a" | "b" | "c";
  const result: Exclude<Mytype, "a" | "c"> = "b";
}

{
  // 8. NonNullable<T>
  // 주어진 타입에서 null과 undefined 타입을 제외하고 생성
  type Mytype = string | number | null | undefined;
  type Nontype = NonNullable<Mytype>;
}

{
  // 9. ReturnType<T>
  type Age = ReturnType<typeof getAge>;
  type AgeFunc = typeof getAge;
  function getAge() {
    return { name: "kyo" };
  }
}
