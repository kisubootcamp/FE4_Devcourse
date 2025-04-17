{
  // 1. 제네릭
  // 타입을 변수처럼 사용
  function getFirstElement<T>(element: T[]): T {
    return element[0];
  }
  const r1 = getFirstElement<number>([1, 2, 3]);
  const r2 = getFirstElement<string>(["a", "b", "c"]);
  const r3 = getFirstElement([true, false, true]);
  const r4 = getFirstElement([1, "A"]);
}
{
  // 함수 표현식(화살표 함수)에서의 제네릭
  const getFirstElement: <T>(element: T[]) => T = (element) => {
    return element[0];
  };
}
{
  // 타입 별칭
  type MyFunc<T> = (element: T[]) => T;
  const getFirstElement: MyFunc<unknown> = (element) => {
    return element[0];
  };
  const r1 = getFirstElement([1, 2, 3]);
  const r2 = getFirstElement(["a", "b", "c"]);
}
{
  // 타입을 변수에 저장한 것에 불과한 방식
  type MyFunc = <T>(element: T[]) => T;
  const getFirstElement: MyFunc = (element) => {
    return element[0];
  };
  const r1 = getFirstElement([1, 2, 3]);
  const r2 = getFirstElement(["a", "b", "c"]);
}
{
  // 제네릭 - 인터페이스
  interface MyInterface<T> {
    (element: T[]): T;
  }
  const getFirstElement: MyInterface<unknown> = (element) => {
    return element[0];
  };
}
{
  // 타입을 변수에 저장한 것에 불과한 방식 - 인터페이스
  interface MyInterface {
    <T>(element: T[]): T;
  }
  const getFirstElement: MyInterface = (element) => {
    return element[0];
  };
}
