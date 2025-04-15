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
  interface Pair1<T, U> {
    first: T;
    second: U;
  }

  type Pair2<T, U> = {
    first: T;
    second: U;
  };

  const numberStringPair: Pair1<string, number> = {
    first: "a",
    second: 1,
  };
}

{
  type ID = string | number;
  type Pair<T extends ID, U extends number> = T | U;
  const numberAndString: Pair<string, number> = 10;
}
{
  interface Length {
    legth: number;
  }

  function getLength<T extends Length>(value: T[]): number {
    return value.length;
  }
}
