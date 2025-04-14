{
  // 유틸리티 타입
  // -> 어떤 목적을 달성하기 위한 기능을 구현한 커스텀 타입

  // 1. Partial<T>
  // -> 주어진 타입T의 모든 속성을 선택적으로 만드는 유틸리티 타입
  interface User {
    name: string;
    age: number;
  }

  const user1: User = {
    name: "sucoding",
    age: 20,
  };

  const user2: Partial<User> = {
    name: "guest1",
  };

  const user3: Partial<User> = {
    age: 30,
  };
}
{
  //2. Required<T>
  // 주어진 타입 T를 모두 필수 속성으로 만드는 것
  type User = {
    name: string;
    age?: number;
    gender: string;
  };

  const normalUser: User = {
    name: "mod",
    gender: "male",
  };

  const adultUser: Required<User> = {
    name: "su",
    age: 33,
    gender: "male",
  };
}
{
  //3. Readonly<T>
  // 모든 속성을 읽기 전용으로 변경
  type User = {
    name: string;
    age?: number;
    gender: string;
  };

  const premiumUser: Readonly<User> = {
    name: "sudi",
    age: 20,
    gender: "male",
  };

  // premiumUser.name = "John"; //변경 불가
}
{
  //
  // 여러개의 유틸리티 타입을 같이 사용할 수 있다.
}
{
  //4. Pick<T>
  // 주어진 타입 T에서 선택한 속성만 추출하여 새로운 타입
  interface User {
    name: string;
    age?: number;
    gender: string;
  }

  const nameObject: Pick<User, "name"> = {
    name: "bomin",
  };
}
{
  //5. Omit<T, K>
  // 주어진 타입 T에서 특정 속성 K를 제외한 나머지 속성만 추출
  interface User {
    name: string;
    age?: number;
    gender: string;
  }

  const user: Omit<User, "gender"> = {
    name: "Eric",
  };
}
{
  let obj: Record<string, number> = {
    math: 80,
    science: 81,
    english: 67,
  };
}
{
  // 7. 객체에  존재하는 속성을 제거할 때는 Omit
  // 유니언 파입에서 숙성으을 제거 할 때 사용하는 건 Exclude
  type MyType = "a" | "b" | "c";
  const result: Exclude<MyType, "a" | "c"> = "b";
}
{
  // 8.NonNullable<T>
  // 주어진 타입에서 null과 undefined 타입을 제외하고 생성
  type MyType = string | number | undefined | null;
  type NonType = NonNullable<MyType>;
}
{
  // 9. ReturnType<T>
  // 주어진 함수 타입 T의 반환 타입을 추출
  type Age = ReturnType<typeof getAge>; // number
  type AgeFunc = typeof getAge;
  function getAge() {
    return { name: "sucoding" };
  }
}
