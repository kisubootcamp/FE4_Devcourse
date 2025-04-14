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
    name: "bmw",
    options: {
      color: "red",
    },
  };

  const car2: Car = {
    name: "g90",
    options: {
      wheels: 4,
    },
  };
}
{
  // 인터페이스
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
  interface Pair<T, U> {
    first: T;
    second: U;
  }

  const numberStringPair: Pair<string, number> = {
    first: "a",
    second: 12,
  };
}
{
  type ID = string | number;
  type Pair<T extends boolean, U> = T | U;
  const numberAndString: Pair<boolean, number> = 10;
}
{
  interface Length {
    legnth: number;
  }
  function getLength<T extends Length>(value: T[]): number {
    return value.length;
  }
}
