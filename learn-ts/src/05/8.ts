{
  // 유틸리티 타입
  // -> 어떤 목적을 달성하기 위한 기능을 구현한 커스텀 타입
  // -> 의미만 맞게 사용한다면 여러 개의 유틸리티 타입을 섞어서 사용 가능 !!
  // 1. Partial<T>
  // -> 주어진 타입 T의 모든 속성을 선택적으로 만드는 유틸리티 타입 (엄청 많이 사용됨)
  interface User {
    name: string;
    age: number;
  }

  const user1: User = {
    name: "yubing",
    age: 20,
  };

  const guest1: Partial<User> = {
    name: "guest1",
  };

  const guest2: Partial<User> = {
    age: 23,
  };
}

{
  // 2. Required<T>
  // -> 주어진 타입 T의 모든 속성을 모두 필수 속성으로 만드는 것
  type User = {
    name: string;
    age?: number;
    gender: string;
  };

  const normalUser: User = {
    name: "yubings",
    gender: "female",
  };

  const adultUser: Required<User> = {
    name: "yubin",
    age: 20,
    gender: "female",
  };
}

{
  // 3. Readonly<T>
  type User = {
    name: string;
    age?: number;
    gender: string;
  };

  const premiumUser: Readonly<User> = {
    name: "yubin",
    age: 26,
    gender: "famale",
  };
  // premiumUser.name = "bing"; // 에러 -> Readonly<User> 타입이므로 변경 불가능
}

{
  // 4. Pick<T, K>
  // 주어진 타입 T에서 선택한 속성 K만 추출하여 새로운 타입을 만드는 것
  // 객체 타입에서 특정 속성만 뽑아내서 조합하는 것 (여러 개는 유니온 타입으로 나열)
  interface User {
    name: string;
    age?: number;
    gender: string;
  }

  // name, gender 속성을 포함하면 됨
  const nameObject: Pick<User, "name" | "gender"> = {
    name: "yubing",
    gender: "female",
  };
}

{
  // 5. Omit<T, K>
  // 주어진 타입 T에서 특정 속성 K를 제외한 나머지 속성만 추출하는 것
  interface User {
    name: string;
    age?: number;
    gender: string;
  }

  // name 속성만 포함하면 됨
  // gender만 제외해도, age는 원래 옵셔널 속성이므로 없어도 됨
  const user: Omit<User, "gender"> = {
    name: "yubing",
  };
}

{
  // 6. Record<K, T> (6번까지는 필수로 알아야 하는 유틸리티 타입)
  // 주어진 키 K와 값 T의 타입을 가지는 객체 타입을 생성할 때 쓰는 것
  // 진정한 빈 객체를 생성하는 방법
  let obj: Record<string, never> = {};
  // obj = []; // 에러
  // obj = 10; // 에러

  const score: { math: number; english: number; science: number } = {
    math: 90,
    english: 90,
    science: 70,
  };
  const score2: Record<string, number> = {
    math: 90,
    english: 90,
    science: 70,
  };
}

{
  // 7. Exclude<T, K>
  // 객체에 존재하는 속성을 제거할 때는 Omit
  // 유니온 타입에서 속성을 제거할 때 사용하는 건 Exclude
  type MyType = "a" | "b" | "c";
  const result: Exclude<MyType, "a" | "c"> = "b";
}

{
  // 8. NonNullable<T>
  // 주어진 타입에서 null과 undefined 타입을 제외하고 생성하는 것 (유니온 타입으로 연결된 타입에서)
  type MyType = string | number | undefined | null;
  type NonType = NonNullable<MyType>; // NonType에 마우스 올려보면 string | number만 나옴
}

{
  // 9. ReturnType<T>
  // 주어진 함수 타입 T의 반환 타입을 추출하는 것
  type Age = ReturnType<typeof getAge>;
  type Age2 = ReturnType<() => number>;
  type AgeFunc = typeof getAge; // type AgeFunc = () => number
  function getAge() {
    return 20;
  }

  type Age3 = ReturnType<typeof getAge2>; // type Age3 = { name: string; }
  function getAge2() {
    return { name: "yubin" };
  }
}
