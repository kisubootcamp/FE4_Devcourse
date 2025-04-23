{
  // 제네릭 타입 제약 조건
  // extends
  function getLength<T extends { length: number }>(value: T): number {
    // length에 number속성으로 제약을 검
    return value.length;

    getLength([2, 3]); // O
    getLength("abc"); // O 레퍼 객체
    // getLength(10); // X
  }
}

{
  type Person = {
    name: string;
    age: number;
    gender: string;
  };

  type PersonOfKeys = keyof Person; // "name | "age" | "gender"  keyof: 객체의 key를 가지고 값을 찾을 떄
  const key: PersonOfKeys = "gender";

  const car = {
    speed: 100,
  };

  type CarOfKeys = typeof car; // typeof: 객체의 "타입"을 가지고 객체의 값을 찾을 때
}

{
  function returnTuple<T, U>(a: U, b: T): [T, U] {
    return [a, b];
  }

  const r1 = returnTuple(1, 2); // [1, 2] -> [number, number]
  const r2 = returnTuple(1, "a"); // [1, 'a'] -> [number, string]
}
