{
  // 제네릭 -> 타입을 변수로 받을 수 있기 때문에 코드의 재사용성이 증가
  // 1 2개<T, U>, 3개<T, U, K>

  // T: Type -> 일반적인 타입(가장 흔하게 사용)
  function returnValue<T>(value: T): T {
    return value;
  }
  console.log(returnValue(1));

  // U: Another Type -> 두 번째 타입
  function returnTuple<T, U>(a: T, b: U): [T, U] {
    return [a, b];
  }
  console.log(returnTuple([1, 2, 3], { name: "sucoding" }));
  // K: Key -> 객체 타입의 키
  // V: Value -> 객체 타입의 값
  // 제네릭 타입 제약
  function getValue<K extends keyof V, V>(obj: V, key: K): V[K] {
    return obj[key];
  }
  const name = getValue({ name: "kim", age: 20 }, "name");
  console.log(name);
  // E: Element -> 주로 배열 요소의 타입
  function firstElement<E>(element: E[]): E {
    return element[0];
  }
  firstElement([1, 2, 3]);
  firstElement(["a", "b"]);
  // R: Return Type -> 반환 값의 타입 (함수에 사용)
}
