{
  // 제네릭 -> 타입을 변수로 받을 수 있기 때문에 코드의 재사용성이 증가 : 타입을 간단하게 지정
  // 1. <T, U> -> 2개(일반적), 3개 <T, U, K>
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

  function returnTuple2(
    a: number | number[] | boolean,
    b: number | object
  ): [number | number[] | boolean, number | object] {
    return [a, b];
  }
  const r3 = returnTuple2(1, 2);
  const r4 = returnTuple2([1, 2, 3], { name: "kyo" });
  const r5 = returnTuple2(true, { name: "kyo" });

  // K: Key -> 객체 타입의 키
  // V: Value -> 객체 타입의 값
  // 제네릭 타입 제약 조건
  function getValue<K extends keyof V, V>(obj: V, key: K): V[K] {
    return obj[key];
  }
  const name = getValue({ name: "kyo", age: 25 }, "name");
  const gender = getValue({ gender: "female" }, "gender");
  /*
    const name2 = getValue2({name: "kyo", age: 25 }, 'name'); 
    V -> {name: string, age: number} 
    K -> name 
    V[K] -> name 이므로 string 타입 
    호출하면 kyo
  */

  // E: Element -> 주로 배열 요소의 타입
  function fristElement<E>(element: E[]): E {
    return element[0];
  }
  fristElement([1, 2, 3]);
  fristElement(["a", "b"]);

  // R: Return Type -> 반환 값의 타입 (함수에서 사용)
}
