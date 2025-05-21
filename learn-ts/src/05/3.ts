{
  //제네릭 , 실무에서는 2개까지는 사용 (T, U)
  // 제네릭을 사용하면 타입의 재사용성 증가   -> 코드의 재사용성 증가
  // ====> 제네릭 : 타입읇 변수로 받을 수 있기 때문에 코드의 재사용성이 증가 NOTE
  //1. <T, U> 변수 2개, <T, U, K> 변수 3개
  // T : Type  -> 일반적인 타입 (가장 흔하게 사용됨)
  function returnValue<T>(value: T): T {
    return value;
  }
  const r1 = returnValue(1);
  const r2 = returnValue([1, 2]);
  // U : Another Type -> 두번째 타입
  function returnTuple<T, U>(a: T, b: U) {
    return [a, b];
  }
  const r3 = returnTuple(1, 2);
  const r4 = returnTuple([1, 2, 3], { name: "sucoding" });
  // K : Key -> 객체 타입의 키
  // V : Value -> 객체 타입의 값
  //NOTE 제네릭 타입 제약 조건
  function getValue<K extends keyof V, V>(obj: V, key: K): V[K] {
    return obj[key];
  }
  const name = getValue({ name: "kim", age: 30 }, "name");
  const age = getValue({ name: "kim", age: 30 }, "age");
  const gender = getValue({ gender: "male" }, "gender");
  // E : Element -> 주로 배열 요소의 타입
  function firstElement<E>(element: E[]): E {
    return element[0];
  }
  firstElement([1, 2, 3]);
  firstElement(["a", "b", "c"]);
  // R : Return -> 반환 값의 타입 (함수에서 사용)
}
