{
  //유틸리티 타입
  // -> 어떤 목적을 달성하기 위해 기존의 타입을 커스텀한 타입

  //CHECK
  //1. partial<T>                                                   NOTE
  // -> 주어진 타입 T 의 모든 속성을 선택적으로 만드는 유틸리티 타입
  // Partial<type> : 모든 것이 필수인 type 에서 모든 속성이 선택적 속성으로 바뀜
  // 타입별칭, 인터페이스 둘 다 사용 가능
  interface User {
    name: string;
    age: number;
  }
  const user1: User = {
    name: "sucoding",
    age: 20,
  };
  interface GuestType1 {
    name: string;
  }
  interface GuestType2 {
    age: number;
  }

  const guest1: Partial<User> = {
    name: "guest1",
  };
  const geust2: Partial<User> = {
    age: 20,
  };
}

{
  //CHECK
  //2. Required<T>                              NOTE
  // 주어진 타입 T 를 모두 필수 속성으로 만드는 것
  // 옵셔널이 있는 타입을 필수 속성으로

  type User = {
    name: string;
    age?: number;
    gender: string;
  };
  const normalUser: User = {
    name: "sucoding",
    gender: "male",
  };
  const adultUser: Required<User> = {
    name: "sucoding",
    age: 20,
    gender: "male",
  };
}

{
  //CHECK
  //3. readonly<T>
  // 모든 속성을 읽기 전용으로
  type User = {
    name: string;
    age?: number;
    gender: string;
  };

  const premiumUser: Readonly<User> = {
    name: "sucoding",
    age: 20,
    gender: "male",
  };
  premiumUser.name = "John"; // 읽기 전용으로 되어 변경 불가능
}

{
  //유틸리티를 혼합해서 사용 가능
}

{
  //CHECK
  // 4. Pick<T,K>
  // 주어진 타입 T 에서 선택한 속성만 추출하여 새로운 타입, 특정타입만 뽑아와서
  interface User {
    name: string;
    age?: number;
    gender: string;
  }
  const nameObject: Pick<User, "age"> = {
    age: 29,
  };
}
{
  //CHECK
  //5. Omit<T, K>
  // 주어진 타입 T 에서 특정 속성 K 를 제외한 나머지 속성만 추출
  interface User {
    name: string;
    age?: number;
    gender: string;
  }
  const nameObject: Omit<User, "gender"> = {
    name: "sucoding",
  };
}

{
  //CHECK
  //6. Record<K, T>
  // 주어진 키 K 와 값 T 의 타입을 가지는 객체 타입을 생성할 때 쓰는 것
  let obj2: {} = {};
  obj2 = 10;

  let obj: Record<string, never> = {}; // never : 어떠한 값도 올 수 없다.
  const score: { math: number; english: number; science: number } = {
    math: 90,
    english: 90,
    science: 80,
  };
  const score2: Record<string, number> = {
    math: 90,
    egnlish: 90,
    science: 80,
  };
}

{
  // 객체에 존재하는 속성을 제거할 때는 Omit
  //7. 유니언 타입에서 속성을 제거할 때는 Exclude
  type MyType = "a" | "b" | "c";
  const result: Exclude<MyType, "a"> = "b";
}

{
  //8. NonNullable<T>
  // 유니온 타입으로 연결된 타입에서 null과 undefined 타입을 제외하고 생성
  type MyType = string | number | undefined | null;
  type NonType = NonNullable<MyType>;
}

{
  //9. ReturnType<T>
  // 주어진 함수 타입 T 의 반환 타입을 추출
  type Age = ReturnType<typeof getAge>;
  type AgeFunc = typeof getAge;
  function getAge() {
    return 20;
  }

  type Name = ReturnType<typeof getName>;
  type NameFunc = typeof getName;
  function getName() {
    return "kuku";
  }
}
