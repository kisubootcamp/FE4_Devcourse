{
  //인터페이스
  interface Car<T> {
    name: string;
    options: T;
  }
  //유니온 대신 제네릭 사용
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
  //인터페이스,타입별칭에는 타입추론이 되지 않음
  interface Pair<T, U> {
    first: T;
    second: U;
  }
  //<> 일대일로 타입 들어감
  const numberStringPair: Pair<string, number> = {
    first: "a",
    second: 1,
  };
}
{
  type Pair<T, U> = T | U;
  const numberAndString: Pair<string, number> = 10;
}
{
  type ID = string | number;
  type Pair<T extends ID, U extends number> = T | U;
  const numberAndString: Pair<string, number> = 10;
  //<ID>=<string|number> ID타입 자체일 필요는 x
}
{
  interface Length {
    length: number;
  }

  function getLength<T extends Length>(value: T[]): number {
    return value.length;
  }
}
