{
  // 1.제네릭
  // 타입을 변수처럼 사용하는 문법
  // 함수 호출 시 <>로 타입 명시 안하는게 추세
  function getFirstElement<T>(element: T[]): T {
    return element[0];
  }

  const r1 = getFirstElement<number>([1, 2, 3]); // 1
  const r2 = getFirstElement<string>(["A", "B", "C"]); // "A"
  const r3 = getFirstElement([true, false, true]); // true
  const r4 = getFirstElement([1, "A"]);
}

{
  // 함수 표현식(화살표 함수)
  const getFirstElement1 = <T>(element: T[]): T => {
    return element[0];
  };
  const getFirstElement2: <T>(element: T[]) => T = (element) => {
    return element[0];
  };
}

{
  // 타입 별칭
  // 제네릭(타입별칭)
  type MyFunc<T> = (element: T[]) => T;
  const getFirstElement: MyFunc<unknown> = (element) => {
    return element[0];
  };
  const r1 = getFirstElement([1, 2, 3]); // 1
  const r2 = getFirstElement(["A", "B", "C"]); // "A"
  const r3 = getFirstElement([true, false, true]); // true
  const r4 = getFirstElement([1, "A"]);
}
{
  // 타입 별칭
  // 타입을 변수에 저장한 것에 불과함
  // 위 방법보다 이 방법을 더 많이 사용
  type MyFunc = <T>(element: T[]) => T;
  const getFirstElement: MyFunc = (element) => {
    return element[0];
  };
  const r1 = getFirstElement([1, 2, 3]); // 1
  const r2 = getFirstElement(["A", "B", "C"]); // "A"
  const r3 = getFirstElement([true, false, true]); // true
  const r4 = getFirstElement([1, "A"]);
}
{
  // 인터페이스로
  interface sum {
    (a: number, b: number): number;
  }
  const sum: sum = (a, b) => a + b;

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
  const getFirstElement: MyFunc = (element) => {
    return element[0];
  };
}
