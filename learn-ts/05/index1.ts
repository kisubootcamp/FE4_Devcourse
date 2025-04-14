{
  // 1. enum, const enum
  // interface처럼 선언 병합이 된다.
  enum Status {
    Pending,
  }

  enum Status {
    Inprogress = "In Progress",
  }

  // 같은 이름으로 병합이 가능하다.
  // 하지만 내부의 두 초기값이 같으면 병합이 되지 않는다.
  // 병합되려는 요소의 값을 다르게 해주면 병합이 된다.

  const current: Status = Status.Inprogress;

  console.log(current);
  console.log(Status.Pending);
}

{
  // 2. 타입 가드는 정적인 상태에서 검사하는 게 아니라, 동적인 상태에서 검사를 하게 되는 원리다.
  // 타입스크립트는 정적 프로그래밍 언어
  let value: unknown = "Hello";
  if (typeof value === "string") console.log(value.toUpperCase()); // 런타임 때 if문을 통해 에러를 조치할 수 있는 구문을 작성

  // 정적 타입일 때 정의
  console.log((value as string).toUpperCase()); // 호환성이 더 좋음
  console.log((<string>value).toUpperCase());
}

{
  // 정적 타입, 정적 상태 -> 컴파일 시점에 데이터 타입이 결정된다. (타입스크립트)
  // 동적 타입, 동적 상태 -> 코드를 실행할 때, 데이터의 타입이 결정된다. (자바스크립트)
}

{
  // 1. 제네릭
  // 타입을 변수처럼 사용하는 문법
  function getFirstElement<T>(elemnet: T[]): T {
    // T: Type을 줄여서 사용
    return elemnet[0];
  }

  const r1 = getFirstElement<number>([1, 2, 3]); // 1
  const r2 = getFirstElement(["A", "B", "C"]);
  const r3 = getFirstElement([true, false, true]); // 타입을 적지 않아도 타입 추론으로 오류가 발생하지 않음
  const r4 = getFirstElement<number | string>([1, "A"]); // 업계에서는 타입을 명시해서 전달하지 않는 경우가 많음
}

{
  // 함수 표현식 (화살표 함수)
  const getFirstElement: <T>(elemnet: T[]) => T = (elemnet) => {
    return elemnet[0];
  };
}

{
  // 제네릭 타입 별칭
  type MyFunc<T> = (elemnet: T[]) => T;

  const getFirstElement: MyFunc<unknown> = (elemnet) => {
    // 전달할 타입을 명시적으로 표기
    return elemnet[0];
  };

  const r1 = getFirstElement([1, 2, 3]); // 1
  const r2 = getFirstElement(["A", "B", "C"]);
  const r3 = getFirstElement([true, false, true]); // 타입을 적지 않아도 타입 추론으로 오류가 발생하지 않음
  const r4 = getFirstElement([1, "A"]); // 업계에서는 타입을 명시해서 전달하지 않는 경우가 많음
}
{
  // 타입 별칭
  // 타입을 변수에 저장한 것에 불과
  type MyFunc = <T>(elemnet: T[]) => T;

  // 전달할 타입을 명시적으로 표기
  const getFirstElement: MyFunc = (elemnet) => {
    return elemnet[0];
  };

  const r1 = getFirstElement([1, 2, 3]); // 1
  const r2 = getFirstElement(["A", "B", "C"]);
  const r3 = getFirstElement([true, false, true]); // 타입을 적지 않아도 타입 추론으로 오류가 발생하지 않음
  const r4 = getFirstElement([1, "A"]); // 업계에서는 타입을 명시해서 전달하지 않는 경우가 많음
}

{
  // 인터페이스
  interface MyFunc<T> {
    // 전달할 타입을 명시적으로 표기
    (element: T[]): T;
  }

  const getFirstElement: MyFunc<number | string | boolean> = (elemnet) => {
    // 전달할 타입을 명시적으로 표기
    return elemnet[0];
  };

  const r1 = getFirstElement([1, 2, 3]); // 1
  const r2 = getFirstElement(["A", "B", "C"]);
  const r3 = getFirstElement([true, false, true]); // 타입을 적지 않아도 타입 추론으로 오류가 발생하지 않음
  const r4 = getFirstElement([1, "A"]); // 업계에서는 타입을 명시해서 전달하지 않는 경우가 많음
}

{
  // 제네릭 -> 타입의 재사용성이 증가
  // <T, U> -> 2개
  // T: Type -> 일반적인 타입 (가장 흔하게 사용)
  function returnValue<T>(value: T): T {
    return value;
  }

  const r1 = returnValue(1);
  const r2 = returnValue([1, 2]);

  // U: Another Type -> 두 번째 타입
  function returnTuple<T, U>(a: T, b: U): [T, U] {
    return [a, b];
  }
  const r4 = returnTuple([1, 2, 3], { name: "Lee" });

  function returnTuple2(
    a: number | number[] | boolean,
    b: number | object
  ): [number | number[] | boolean, number | object] {
    return [a, b];
  }

  const r3 = returnTuple2(1, 2);
  const r5 = returnTuple2(true, { name: "sucoding" });
  // K: Key -> 객체 타입의 키
  // V: Value -> 객체 타입의 값
  // 제네릭에 타입 제약 조건
  function getValue<K extends keyof V, V>(obj: V, key: K): V[K] {
    // 제네릭 안의 K, V의 순서는 함수의 매개변수와 관련이 있다. <V, K extends V>도 가능은 하다
    // K에 모든 값들이 올 수 있기에 제약 조건을 걸어줘야 한다. keyof: 특정 객체의 key값을 추출하는 연산자.
    return obj[key];
  }

  const name = getValue({ name: "kim", age: 20 }, "name"); // 첫 번째 매개변수는 obj로 두 번째 매개변수는 key로
  const gender = getValue({ gender: "male" }, "gender");
  // E: Element -> 주로 배열 요소의 타입
  function firstElement<E>(element: E[]): E {
    return element[0];
  }
  firstElement([1, 2, 3]);
  firstElement(["a", "a"]);
  // R: Return Type: 반환 값의 타입(함수에서 사용)
}

{
  // 인터페이스 제네릭
  interface Car<T> {
    // 코드의 재사용성이 증가한다.
    name: string;
    options: T;
  }

  const car1: Car<{ color: string }> = {
    name: "bmw",
    options: {
      color: "red",
    },
  };

  const car2: Car<{ year: number }> = {
    name: "g90",
    options: {
      year: 2024,
    },
  };
}
{
  interface Pair<T, U> {
    first: T;
    second: U;
  }

  const numberStringPair: Pair<string, number> = {
    first: "a",
    second: 1,
  };
}

{
  type Pair<T, U> = T | U;
  const numberAndString: Pair<string, number> = 10; // 인터페이스 제네릭과 타입 별칭 제네릭의 다른 부분은 다른 유형의 변수를 넣을 수 있는지에 대한 여부가 차이점이다.
}
{
  type ID = string | number;
  type Pair<T extends ID, U> = T | U; // string과 number로 지정
  const numberAndString: Pair<string, number> = 10;
}

{
  interface Length {
    length: number;
  }

  function getLength<T extends Length>(value: T[]): number {
    return value.length;
  }
}
