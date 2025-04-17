{
  // 인터페이스
  interface Car {
    name: string;
    options:
      | {
          color: string;
        }
      | {
          wheels: number;
        };
  }

  const car1: Car = {
    name: "BMW",
    options: {
      color: "red",
    },
  };
  const car2: Car = {
    name: "G90",
    options: {
      wheels: 4,
    },
  };
}
{
  // 인터페이스 제네릭
  interface Car<T> {
    name: string;
    options: T;
  }

  const car1: Car<{ color: string }> = {
    name: "BMW",
    options: {
      color: "red",
    },
  };
  const car2: Car<{ wheels: number }> = {
    name: "G90",
    options: {
      wheels: 4,
    },
  };
}
{
  interface Pair<T, U> {
    first: T;
    second: U;
  }
  const numberStringPair: Pair<string, number> = {
    first: "A",
    second: 12,
  };
}
{
  type ID = string | number;
  type Pair<T extends boolean | string, U> = T | U;
  const numberAndString: Pair<string, number> = 10;
}
{
  interface Length {
    length: number;
  }
  function getLength<T extends Length>(value: T[]): number {
    return value.length;
  }
}
