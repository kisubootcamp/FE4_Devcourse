{
  // 유틸리티 타입
  // -> 어떤 목적을 달성하기 위한 기능을 구현한 커스텀 타입
  // 1. Partial<T>
  interface User {
    name: string;
    age: number;
  }

  const user1: User = {
    name: "jaegeon",
    age: 26,
  };
  const guest1: Partial<User> = {
    name: "jaegeon",
  };
  const guest2: Partial<User> = {
    age: 26,
  };
}
{
  // 2. Required<T>
  // 주어진 타입 T 모두 필수 속성으로 만드는 것
  type User = {
    name: string;
    age?: number;
    gender: string;
  };

  const normalUser: User = {
    name: "jaegeon",
    gender: "male",
  };
  const adultUser: Required<User> = {
    name: "jaegeon",
    age: 26,
    gender: "male",
  };
}
{
  //3. Readonly<T>
  type User = {
    name: string;
    age?: number;
    gender: string;
  };

  const premiumUser: Readonly<User> = {
    name: "jaegeon",
    age: 26,
    gender: "male",
  };
  //   premiumUser.name = "john";
}
{
  // 4. Pick<T, K>
  // 주어진 타입 T에서 선택한 속성 K만 추출하여 새로운 타입 제시
  interface User {
    name: string;
    age?: number;
    gender: string;
  }

  const nameObj: Pick<User, "name"> = {
    name: "jaegeon",
  };
}
{
  // 5. Omit<T, K>
  // 주어진 타입 T에서 선택한 속성 K를 제외하여 새로운 타입 제시
  interface User {
    name: string;
    age?: number;
    gender: string;
  }

  const nameObj: Omit<User, "age" | "gender"> = {
    name: "jaegeon",
  };
}
{
  // 6. Record<K, T>
  // 주어진 키 K와 값 T의 타입을 가지는 객체 타입을 생성할 때 사용
  let objEmpty: Record<string, never> = {}; // 빈 객체 생성
  const score: { math: number; english: number; science: number } = {
    math: 90,
    english: 75,
    science: 100,
  };
  const score2: Record<string, number> = {
    math: 90,
    english: 75,
    science: 100,
  };
}
{
  // 7. 객체에 존재하는 속성을 제거시 -> Omit<T, K>
  // 유니언 타입에서 속성을 제거 시 -> Exclude<T, K>
  type Mytype = "a" | "b" | "c";
  const res: Exclude<Mytype, "a" | "c"> = "b";
}
{
  // 8. NonNullable<T>
  // 주어진 타입에서 null과 undefined를 제외하고 새성
  type Mytype = string | number | boolean | null | undefined;
  type NonType = NonNullable<Mytype>;
}
{
  // 9. ReturnType<T>
  // 주어진 함수 타입 T의 반환 타입 추출
  type Age = ReturnType<typeof getAge>; // number
  type AgeFunc = typeof getAge; // () => number
  function getAge() {
    return 20;
  }
}
