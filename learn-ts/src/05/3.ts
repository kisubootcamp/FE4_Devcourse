{
  // ** 제네릭 -> 타입을 변수로 받을 수 있기 때문에 코드의 코드의 재사용성 증가 **
  // 1. <T>
  // T: Type -> 일반적인 타입 (가장 흔하게 사용)
  function returnValue<T>(value: T): T {
    return value;
  }
  returnValue(1);
  returnValue([1, 2]);
  // U: Another Type -> 두 번째 타입 선언할때 사용
  function returnTuple<T, U>(a: T, b: U): [T, U] {
    return [a, b];
  }
  returnTuple(1, 2);
  returnTuple([1, 2, 3], { name: "PSY" });
  // K: Key -> 객체 타입의 키
  // V: Value -> 객체 타입의 값
  // 제네릭에 타입 제약 조건
  // V 인 object 의 키 값을 기준으로 K 에 할당된 값을 유니온으로 확인 후 일치하는것을 할당
  // 제네릭 선언부는 순서랑 아무 상관 없음
  // 매개변수에 들어오는 것을 기준으로 순서가 정해짐
  // K, V 로 쓰는게 일반적인 관례임
  function getValue<K extends keyof V, V>(obj: V, key: K): V[K] {
    return obj[key];
  }
  const name = getValue({ name: "kim", age: 20 }, "name");
  const age = getValue({ name: "kim", age: 20 }, "age");

  // E: Element -> 주로 배열 요소의 타입
  function firstElement<E>(element: E[]): E {
    return element[0];
  }
  firstElement([1, 2, 3]);
  firstElement(["a", "b"]);
  // R: Return Type -> 반환 값의 타입 (함수에서 사용)
}

console.log("-------------------------------------");

{
  function returnTuple<T, U>(a: U, b: T): [U, T] {
    return [a, b];
  }
  const r1 = returnTuple(1, 2); // [1 ,2]
  const r2 = returnTuple(1, "a"); // [1, 'a'];
}
