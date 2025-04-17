{
  // 1. 제네릭
  // 타입을 변수처럼 사용하는 문법
  // 일반적으로 <T>라고 사용 -> <Type>의 줄임말
  // 함수, 타입 별칭, 인터페이스, 클래스 등에 모두 사용 가능
  function getFirstElement(
    element: number[] | string[] | boolean[]
  ): number | string | boolean {
    return element[0];
  }

  function getFirstElement2<T>(element: T[]): T {
    return element[0];
  }

  const r1 = getFirstElement2<number>([1, 2, 3]);
  console.log(r1); // 1
  const r2 = getFirstElement2<string>(["A", "B", "C"]);
  console.log(r2); // A

  // 제네릭으로 정의된 함수를 호출하는 경우라면 자동으로 타입 추론을 해줌
  // 원래라면 <boolean>이라고 적는 게 정석이지만, 현업에선 보통 생략함 (가독성이 떨어져 보이므로)
  const r3 = getFirstElement2([true, false, true]);
  console.log(r3); // true
}

{
  // 함수 표현식
  const getFirstElement = function getFirstElement<T>(element: T[]): T {
    return element[0];
  };

  // 화살표 함수
  const getFirstElement2 = <T>(element: T[]): T => {
    return element[0];
  };
  const getFirstElement3: <T>(element: T[]) => T = (element) => {
    return element[0];
  };
}

{
  // 타입 별칭 1
  // <T>의 위치가 =의 뒤에서 =의 앞으로 이동
  // 제네릭(타입 별칭)
  // 실제로 변수를 사용하려면 타입 가드를 해줘야 함
  type MyFunc<T> = (element: T[]) => T;
  const getFirstElement: MyFunc<unknown> = (element) => {
    return element[0];
  };
  const r1 = getFirstElement([1, 2, 3]);
  const r2 = getFirstElement(["A", "B", "C"]);
  const r3 = getFirstElement([true, false, true]);
  const r4 = getFirstElement([1, "A"]);
}

{
  // 타입 별칭 2
  // 단순히 타입을 변수에 저장한 것에 불과함
  // 위의 방법보다 이 방법을 더 많이 씀
  type MyFunc = <T>(element: T[]) => T;
  const getFirstElement: MyFunc = (element) => {
    return element[0];
  };
  const r1 = getFirstElement([1, 2, 3]);
  const r2 = getFirstElement(["A", "B", "C"]);
  const r3 = getFirstElement([true, false, true]);
  const r4 = getFirstElement([1, "A"]);
}

{
  // 인터페이스 1
  // 제네릭(인터페이스)
  interface MyFunc<T> {
    (element: T[]): T;
  }
  const getFirstElement: MyFunc<unknown> = (element) => {
    return element[0];
  };
}

{
  // 인터페이스 2
  // 단순히 타입을 인터페이스라는 껍데기에 담은 것에 불과함
  interface MyFunc {
    <T>(element: T[]): T;
  }
  const getFirstElement: MyFunc = (element) => {
    return element[0];
  };

  // 함수는 소괄호 앞에 <T>을 붙여야 제네릭 문법
  // 타입 별칭, 인터페이스, 클래스는 식별자에 <T>을 붙여야 제네릭 문법
}
