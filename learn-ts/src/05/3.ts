{
  // 1. <T>
  // T: Type -> 일반적인 타입(가장 흔하게 사용)
  function returnValue<T>(value: T): T {
    return value;
  }
  const r1 = returnValue(1);
  const r2 = returnValue([1, 2]);
  // U: Another Type -> 두 번째 타입
  function returnTuple<T, U>(a: T, b: U): [T, U] {
    return [a, b];
  }
  const r3 = returnTuple(1, 2);
  const r4 = returnTuple([1, 2, 3], { name: 'sucoding' });
  // K: key -> 객체 타입의 키
  // V: Value -> 객체 타입의 값
  // 제네릭 타입 제약 조건
  function getValue<K extends keyof V, V>(obj: V, key: K): V[K] {
    return obj[key];
  }
  const name = getValue({ name: 'kim', age: 20 }, 'name');
  const gender = getValue({ gender: 'male' }, 'gender');
  // E: Element -> 주로 배열 요소의 타입
  function firstElement<E>(element: E[]): E {
    return element[0];
  }
  firstElement([1, 2, 3]);
  firstElement(['a', 'a']);
  // R: Return Type -> 반환 값의 타입 (함수에서 사용)

  //
}
