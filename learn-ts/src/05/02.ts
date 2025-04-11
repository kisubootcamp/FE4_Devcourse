{
  // 1.
  function getFirstElement(
    element: number[] | string[] | boolean[]
  ): number | string | boolean {
    return element[0];
  }

  const r1 = getFirstElement([1, 2, 3]);
  const r2 = getFirstElement(['A', 'B', 'C']);
  const r3 = getFirstElement([true, false, true]);
  console.log(r1); // 1
}
{
  // 제네릭 : 타입을 변수처럼 사용하는 문법
  // Type 을 그냥 T 라고 적어도 된다.
  function getFirstElement<Type>(element: Type[]): Type {
    //                            ^배열을 전달받으면 element: Type[] 으로 적어야한다.
    return element[0];
  }

  const r1 = getFirstElement<number>([1, 2, 3]);
  const r2 = getFirstElement<string>(['A', 'B', 'C']);
  const r3 = getFirstElement([true, false, true]);
  const r4 = getFirstElement([1, 'A']);
  console.log(r1); // 1
}
{
  // 함수 표현식 (화살표 함수)
  const getFirstElement = <T>(element: T[]) =>
    (T = (element) => {
      return element[0];
    });
}
{
  // 타입 별칭
  // 제네릭 타입별칭
  type MyFunc<T> = (element: T[]) => T;
  const getFirstElement: MyFunc<unknown> = (element) => {
    return element[0];
  };
}
{
  // 타입별칭
  // 타입을 변수에 저장한것에 불과함
  type MyFunc = <T>(element: T[]) => T;
  const getFirstElement: MyFunc = (element) => {
    return element[0];
  };

  const r1 = getFirstElement<number>([1, 2, 3]);
  const r2 = getFirstElement<string>(['A', 'B', 'C']);
  const r3 = getFirstElement([true, false, true]);
  const r4 = getFirstElement([1, 'A']);
}
{
  // 인터페이스
  interface sum {
    (a: number, b: number): number;
  }
  const sum: sum = (a, b) => a + b;

  interface MyFunc<T> {
    (element: T[]): T;
  }
}
{
  interface MyFunc {
    <T>(element: T[]): T;
  }
  const getFirstElement: MyFunc = (element) => {
    return element[0];
  };
}
