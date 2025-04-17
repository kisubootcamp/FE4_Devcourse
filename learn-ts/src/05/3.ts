{
  // 제네릭 -> 타입을 변수로 받을 수 있기 때문에 코드의 재사용성이 증가
  // 1. <T> 타입 변수
  // 제네릭을 두 개 받고 싶을 때 -> <T, U> -> 일반적 -> 세 개는 드물다.
  // T: Type -> 일반적인 타입(가장 흔하게 사용)
  // U: Another Type -> 두 번째 타입
  // K: Key -> 객체 타입의 키
  // V: Value -> 객체 타입의 값
  // E: Element -> 주로 배열 요소의 타입
  // R: Return Type -> 반환값의 타입(주로 함수에서 사용)
}

{
  // 매개변수 1개
  function returnValue<T>(value: T): T {
    return value;
  }

  returnValue(1);
  returnValue([1, 2]);
}

{
  // 매개변수 2개
  function returnTuple<T, U>(a: T, b: U): [T, U] {
    return [a, b];
  }
  const r = returnTuple(1, 2);
  const r1 = returnTuple([1, 2, 3], { name: 'su' });
}

{
  function getValue(obj: any, key: any) {
    return obj[key]; // 객체의 값 출력
  }
  const name = getValue({ name: 'su', age: 20 }, 'name');
  const gender = getValue({ gender: 'male' }, 'gender');

  // 제네릭으로 변경해보기
  // 제네릭 타입 제약이라는 새로운 문법 사용
  // 제넥에 타입 제약 조건

  function getValue2<K extends keyof V, V>(obj: V, key: K): V[K] {
    return obj[key]; // 객체의 값 출력
  }
  const name2 = getValue2({ name: 'su', age: 20 }, 'name');
  console.log(name2);
  const gender2 = getValue2({ gender: 'male' }, 'gender');
}

{
  // 제네릭은 모든 타입 허용
  // 제네릭 타입에 제약 조건을 추가해서 특정 속성을 가진 타입만 허용하도록 할 수 있다.
  // extends 키워드 사용 -> 타입 제약

  function getLength2<T extends { length: number }>(value: T): number {
    return value.length;
  }
}

{
  // E: Element -> 주로 배열 요소의 타입

  function firstElement<E>(element: E[]): E {
    return element[0];
  }
  firstElement([1, 2, 3]);
  firstElement(['a', 'a']);
}

{
  function returnTuple<T, U>(a: T, b: U): [T, U] {
    return [a, b];
  }
  const r1 = returnTuple(1, 2);
  const r2 = returnTuple(1, 'a');
}
