{
  // T: Type → 일반적인 타입 변수
  function returnValue<T>(value: T): T {
    return value;
  }
  const r1 = returnValue(1);
  const r2 = returnValue([1, 2]);

  // U: Another Type → 두 개 사용할 때
  function returnTuple<T, U>(a: T, b: U): [T, U] {
    return [a, b];
  }
  function returnTuple2(
    a: number | number[],
    b: number | object
  ): [number | number[], number | object] {
    return [a, b];
  }
  const r3 = returnTuple(1, 2);
  const r4 = returnTuple([1, 2, 3], { name: "jaegeon" });

  // K: Key→ 객체 타입의 키
  // V: Value→ 객체 타입의 값
  function getValue<K extends keyof V, V>(obj: V, key: K): V[K] {
    return obj[key];
  }
  const name = getValue({ name: "kim", age: 20 }, "name");
  const gender = getValue({ gender: "male" }, "gender");

  // E: Element→ 주로, 배열 요소의 타입
  function firstElement<E>(element: E[]): E {
    return element[0];
  }
  firstElement([1, 2, 3]);
  firstElement(["a", "b"]);

  // R: Return Type → 반환 값의 타입(함수)
  // ⇒ 2개의 제네릭: <T, U>
}
