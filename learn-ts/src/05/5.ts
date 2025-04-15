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
  // 제네릭으로 사용하여 재사용성 높인 터압으로 사용 가능
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

console.log("-------------------------------------");

{
  // 인터페이스는 함수와는 다르게 선언된 제네릭의 <> 안의 순서가 바뀌면 타입 값도 바뀐다.
  // 함수 -> 매개변수가 선언된 위치에서 타입값 받아옴
  // 인터페이스 -> 제네릭이 선언된 부분에서 타입값을 가져옴
  // 타입 별칭도 마찬가지
  interface Pair<T, U> {
    first: T;
    second: U;
  }

  const numberStringPair: Pair<string, number> = {
    first: "a",
    second: 1,
  };
}

console.log("-------------------------------------");

{
  type Pair<T, U> = T | U;
  const numberAndString: Pair<string, number> = "";
}

{
  type Pair<T extends boolean, U> = T | U;
  const numberAndString: Pair<boolean, number> = 1;
}
