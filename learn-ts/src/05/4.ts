{
  // 제네릭 타입 제약 조건
  // extends
  function getLength<T extends { length: number }>(value: T): number {
    return value.length;
  }

  getLength([1, 2]); // ok
  getLength("abc"); // ok, 래퍼 객체
  // getLength(10); // not ok
}

{
  //
  type Person = {
    name: string;
    age: number;
    gerder: string;
  };
  type PersonOfKeys = keyof Person; // 타입의 키를 추출
  const key: PersonOfKeys = "gerder";

  const car = {
    speed: 100,
  };
  type CarOfKeys = typeof car; //
}

{
  function returnTuple<T, U>(a: T, b: U): [T, U] {
    return [a, b];
  }

  const r1 = returnTuple(1, 2); // [1, 2] -> [number, number]
  const r2 = returnTuple(1, "a"); // [1, "a"] -> [number, string]

  /*
    function returnTuple<T, U>(a: T, b: U): [T, U]
    <T, U> : 제네릭 변수 종류, 순서랑 무관
    (a: T, b: U) : 실제 매개변수의 타입, 순서대로
  */
}
