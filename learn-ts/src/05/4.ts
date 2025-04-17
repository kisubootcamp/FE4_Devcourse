{
  // 인터페이스 제네릭 사용 가능하다.
  // 타입 추론이 안되서 Car<{ color: string }> 이렇게 작성해야 한다.

  interface Car<T> {
    name: string;
    options: T;
  }

  const car1: Car<{ color: string }> = {
    name: 'bmw',
    options: {
      color: 'black',
    },
  };

  const car2: Car<{ wheels: number }> = {
    name: 'g90',
    options: {
      wheels: 4,
    },
  };
}

{
  // 인터페이스 제네릭 사용 전
  interface Car {
    name: string;
    options: { color: string } | { wheels: number };
  }

  const car1: Car = {
    name: 'bmw',
    options: {
      color: 'black',
    },
  };

  const car2: Car = {
    name: 'g90',
    options: {
      wheels: 4,
    },
  };
}

{
  // 타입 별칭을 사용한 제네릭을 적용한 인터페이스

  type Pair<T, U> = {
    first: T;
    second: U;
  };

  const numberStringPair: Pair<string, number> = {
    first: 'a',
    second: 2,
  };
}

{
  type Pair<T, U> = T | U;
  const numberAndString: Pair<string, number> = 10;
}

{
  // extends에 타입 별칭이 들어가도 된다.
  interface Length {
    length: number;
  }

  function getLength<T extends Length>(value: T[]): number {
    return value.length;
  }

  type ID = number | string;
  type Pair<T extends ID, U> = T | U;
  const numberAndString: Pair<string, number> = 10;
}
