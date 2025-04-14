{
  // 제네릭 타입 제약 조건
  // extends
  // number 타입의 length 속성이 있는 것만 받게 됨
  function getLength<T extends { length: number }>(value: T): number {
    return value.length;
  }

  getLength<number[]>([1, 2]); // ok
  getLength("abc"); // ok -> 문자열은 래퍼 객체임 !
  // getLength(10); // not ok (length 속성이 없음)
}

{
  // keyof
  // -> 객체의 타입에서 키를 추출할 때 사용
  // typeof
  // -> 객체에서 객체의 타입을 추출할 때 사용
  type Person = {
    name: string;
    age: number;
    gender: string;
  };

  type PersonOfKeys = keyof Person; // "name" | "age" | "gender"
  const key: PersonOfKeys = "gender";

  const car = {
    speed: 100,
  };

  // type CarOfKeys = keyof car; // 에러
  type CarOfKeys = typeof car;
}

{
  function returnTuple<T, U>(a: T, b: U): [T, U] {
    return [a, b];
  }
  const r1 = returnTuple(1, 2); // [number, number]
  const r2 = returnTuple(1, "a"); // [number, string]

  // <>는 순서가 아무런 상관이 없음 !!
  function returnTuple2<T, U>(a: U, b: T): [U, T] {
    return [a, b];
  }
  const r3 = returnTuple2(1, 2); // [number, number]
  const r4 = returnTuple2(1, "a"); // [number, string]
}
