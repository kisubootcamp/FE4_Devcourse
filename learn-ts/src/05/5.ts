{
  // 인터페이스에서 제네릭을 사용하면 확실히 코드의 재사용성이 증가하게 됨 !!
  interface Car<T> {
    name: string;
    options: T;
  }

  const car1: Car<{ color: string }> = {
    name: "bmw",
    options: {
      color: "red",
    },
  };

  const car2: Car<{ wheels: number }> = {
    name: "g90",
    options: {
      wheels: 4,
    },
  };
}

{
  // 함수의 제네릭 -> 함수를 호출할 때 타입 추론이 돼서 생략 가능
  // 인터페이스나 타입 별칭의 제네릭 -> 인터페이스나 타입 별칭은 타일 추론이 되지 않아서 생략 불가능
  interface Pair<T, U> {
    first: T;
    second: U;
  }

  // 이렇게 순서를 바꾸면 에러 발생 !!
  interface Pair2<T, U> {
    first: U;
    second: T;
  }

  const numberStringPair: Pair<string, number> = {
    first: "a",
    second: 1,
  };

  // 에러 발생
  // const numberStringPair2: Pair2<string, number> = {
  //   first: "a",
  //   second: 1,
  // };
}

{
  // 타입 별칭의 제네릭
  type Pair3<T, U> = {
    first: T;
    second: U;
  };

  // 타입 별칭은 이렇게도 가능
  type Pair<T, U> = T | U;
  const numberStringPair: Pair<string, number> = 10;
}

{
  type ID = boolean | string;
  type Pair<T extends ID, U> = T | U;

  const numberStringPair: Pair<boolean, number> = 10;
  const numberStringPair2: Pair<string, number> = 10;
  // const numberStringPair3: Pair<number, number> = 10; // 에러
}

{
  // 결국 제약 조건을 걸고 싶은 타입만 들어가면 됨 !
  interface Length {
    length: number;
  }

  function getLength<T extends Length>(value: T[]): number {
    return value.length;
  }
}
