{
  // 유니온타입을 사용하면 타입이 달라질 때마다 계속해서 추가해 주어야 함.
  function getFirstElement(element: number[] | string[] | boolean[]): number | string | boolean {
    return element[0];
  }

  const r1 = getFirstElement([1, 2, 3]); //1
  console.log(r1);
  const r2 = getFirstElement(["a", "b", "c"]); //"a"
  console.log(r2);
  const r3 = getFirstElement([true, false, false]); // true
  console.log(r3);
}
{
  // 제네릭
  // 타입을 변수처럼 사용하는 문법.
  function getFirstElement<T>(element: T[]): T {
    return element[0];
  }

  // 제네릭 타입을 함수에 정의해두면 타입명을 적지않아도 자동으로 추론됨.
  const r1 = getFirstElement<number>([1, 2, 3]); //1
  const r2 = getFirstElement(["a", "b", "c"]); //"a"
  const r3 = getFirstElement([true, false, false]); // true

  console.log(r1);
  console.log(r2);
  console.log(r3);
}
{
  //함수표현식(화살표 함수)
  const getFirstElement: <T>(element: T[]) => T = (element) => {
    return element[0];
  };
}
{
  // 타입 별칭
  // unknown으로 작성하게 될 경우 타입가드를 통해 타입을 결정해 주어야하는 불편함이 있다.
  type MyFunc<T> = (element: T[]) => T;
  const getFirstElement: MyFunc<unknown> = (element) => {
    return element[0];
  };
  const r1 = getFirstElement([1, 2, 3]); //1
  const r2 = getFirstElement(["a", "b", "c"]); //"a"
  const r3 = getFirstElement([true, false, false]); // true
}
{
  // 타입별칭
  // 타입을 변수에 저장한 것에 불과함
  type MyFunc = <T>(element: T[]) => T;
  const getFirstElement: MyFunc = (element) => {
    return element[0];
  };
  const r1 = getFirstElement([1, 2, 3]); //1
  const r2 = getFirstElement(["a", "b", "c"]); //"a"
  const r3 = getFirstElement([true, false, false]); // true
}

{
  // 인터페이스의 제네릭
  interface MyFunc<T> {
    (element: T[]): T;
  }

  const getFirstElement: MyFunc<unknown> = (element) => {
    return element[0];
  };
}
