{
  // 1.
  function getFirstElement<T>(element: T[]): T {
    return element[0];
  }

  const r1 = getFirstElement<number>([1, 2, 3]); // 1
  const r2 = getFirstElement<string>(["A", "B", "C"]); // "A"
  const r3 = getFirstElement([true, false, true]); // true
  const r4 = getFirstElement([1, "A"]); // true
}

{
  // 함수 표현식(화살표 함수)
  const getFirstElement: <T>(element: T[]) => T = (element) => {
    return element[0];
  };
}

{
  // 타입 별칭(<T>를 소괄호 앞이 아닌 타입 이름 옆에)
  // 제네릭(타입 별칭)
  type MyFunc<T> = (element: T[]) => T;
  const getFirstElement: MyFunc<unknown> = (element) => {
    return element[0];
  };
}

{
  // 타입 별칭
  // 소괄호 앞에 붙여도 됨
  // 타입 별칭이 제네릭이 되는 것은 아니다.
  // 타입을 변수에 저장한 것에 불과하다.
  type MyFunc = <T>(element: T[]) => T;
  const getFirstElement: MyFunc = (element) => {
    return element[0];
  };

  const r1 = getFirstElement([1, 2, 3]); // 1
  const r2 = getFirstElement(["A", "B", "C"]); // "A"
  const r3 = getFirstElement([true, false, true]); // true
  const r4 = getFirstElement([1, "A"]); // true
}

{
  // 인터페이스
  interface MyFunc<T> {
    (element: T[]): T;
  }

  const getFirstElement: MyFunc<unknown> = (element) => {
    return element[0];
  };
}

{
  interface MyFunc {
    <T>(element: T[]): T;
  }

  const getFirstElement: <T>(element: T[]) => T = (element) => {
    return element[0];
  };
}
