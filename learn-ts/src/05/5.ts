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
  //함수와는 다르게 초기화할 때 제너릭의 생략이 불가능하며
  //설정된 제너릭의 순서가 interface와 일치한다.
  //string = T, number = U
  interface Pair<T, U> {
    first: T;
    second: U;
  }

  const numberStringPair: Pair<string, number> = {
    first: "hi",
    second: 2,
  };
}
{
  type Pair<T, U> = T | U;
  const numberAndString: Pair<string, number> = "hi";
}

{
  const arr = [1, 2, 3];
  const newArr = arr.map((it) => it * 2);

  function map<T>(arr: T[], callback: (item: T) => T): T[] {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }

  console.log(map([1, 2, 3], (item) => item * 2));
}

{
  function forEach<T>(arr: T[], callback: (item: T) => void) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
  }

  forEach(["1", 2, "a"], (item) => console.log(item));
}
