{
  // 1. 제네릭 문법
  // 타입을 변수처럼 사용하는 문법

  function getFirstElement(
    element: number[] | string[] | boolean[]
  ): number | string | boolean {
    return element[0];
  }

  const r1 = getFirstElement([1, 2, 3]);
  const r2 = getFirstElement(['A', 'B', 'C']);
  const r3 = getFirstElement([true, false, true]);

  // 위의 코드를 제네릭으로 변환하면?

  // <T> -> <Type> : 타입 변수
  function getFirstElement2<T>(element: T[]): T {
    return element[0];
  }

  const r11 = getFirstElement2<number>([1, 2, 3]);
  const r22 = getFirstElement2<string>(['A', 'B', 'C']);
  const r33 = getFirstElement2([true, false, true]); // <boolean> 생략해도 타입 추론이 자동으로 된다.
}

{
  // 함수 표현식(화살표 함수)에서 제네릭 타입 지정하기
  // 화살표 함수
  // 소괄호 앞에 <T> 작성
  const getFirstElement = <T>(element: T[]): T => {
    return element[0];
  };

  // 함수 표현식
  // 소괄호 앞에 <T> 작성
  const getFirstElement2: <T>(element: T[]) => T = (element) => {
    return element[0];
  };
}

{
  // 타입 별칭
  // 제네릭 타입 별칭
  type MyFunc<T> = (element: T[]) => T;
  const getFirstElement: MyFunc<unknown> = (element) => {
    return element[0];
  };

  const r11 = getFirstElement([1, 2, 3]);
  const r22 = getFirstElement(['A', 'B', 'C']);
  const r33 = getFirstElement([true, false, true]);
}

{
  // 타입 별칭
  // 타입을 변수에 저장한 것에 불과함 -> 많이 사용
  // 제네릭이 아니다.
  type MyFunc = <T>(element: T[]) => T;
  const getFirstElement: MyFunc = (element) => {
    return element[0];
  };

  const r11 = getFirstElement([1, 2, 3]);
  const r22 = getFirstElement(['A', 'B', 'C']);
  const r33 = getFirstElement([true, false, true]);
}

{
  // 인터페이스로
  // 제네릭 타입 별칭
  interface MyFunc<T> {
    (element: T[]): T;
  }

  const getThirdElement: MyFunc<unknown> = (element) => {
    return element[0];
  };
}

{
  // 인터페이스로
  // 타입을 변수에 저장한 것에 불과함 -> 많이 사용
  // 제네릭이 아니다.
  interface MyFunc {
    <T>(element: T[]): T;
  }

  const getThirdElement: <T>(element: T[]) => T = (element) => {
    return element[0];
  };
}
