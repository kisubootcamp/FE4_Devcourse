{
  // 제네릭 -> 타입을 변수로 받을 수 있기 때문에 코드의 재사용성이 증가 !!!
  // 1. <T, U> -> 2개까지 쓰는 건 일반적. <T, U, K> -> 3개부터는 거의 못 봄.
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
  // 만약 제네릭이 없었다면 아래와 같이 복잡하고 가독성 떨어지게 사용해야 함
  function returnTuple2(
    a: number | number[] | boolean,
    b: number | object
  ): [number | number[] | boolean, number | object] {
    return [a, b];
  }
  const r3 = returnTuple2(1, 2);
  const r4 = returnTuple2([1, 2, 3], { name: "yubin" });
  const r5 = returnTuple2(true, { name: "yubin" });

  // K: Key -> 객체 타입의 키
  // V: Value -> 객체 타입의 값
  // 제네릭 타입 제약 조건
  // -> 원래 제네릭은 아무런 제약 없이 모든 값이 전달될 수 있음.
  // -> extends
  // -> 4.ts
  function getValue(obj: any, key: any): any {
    return obj[key];
  }
  // K와 V의 순서 주의 !!
  // 매개변수 순서대로 <V, K> 써도 되지만 <K, V> 이 순서로 사용하는 게 관례임 !
  function getValue2<K extends keyof V, V>(obj: V, key: K): V[K] {
    return obj[key];
  }
  const name = getValue2({ name: "han", age: 20 }, "name");
  const gender = getValue2({ gender: "female" }, "gender");

  // E: Element -> 주로 배열 요소의 타입
  function firstElement<E>(element: E[]): E {
    return element[0];
  }
  firstElement([1, 2, 3]);
  firstElement(["a", "b"]); // E -> string

  // R: Return Type -> 반환 값의 타입 (함수에서 사용)
  // -> 조건부 타입 배울 때 설명
}
