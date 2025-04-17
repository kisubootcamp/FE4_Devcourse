{
  // 제네릭 타입 제약 조건
  // extends
  function getLength<T extends { length: number }>(value: T): number {
    return value.length;
  }
  getLength([1, 2]);
  getLength("abc");
  //   getLength(10);
}
{
  type Person = {
    name: string;
    age: number;
    gender: string;
  };
  type PersonOfKeys = keyof Person;
  const key: PersonOfKeys = "gender";

  const car = {
    speed: 100,
  };
  type CarOfKeys = typeof car;
}
{
  function returnTuple<T, U>(a: T, b: U): [T, U] {
    return [a, b];
  }

  const r1 = returnTuple(1, 2);
  const r2 = returnTuple(1, "a");
}
