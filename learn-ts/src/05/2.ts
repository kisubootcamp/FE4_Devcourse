{
  // 1 제네릭
  // 타입을 변수처럼 사용하는 문법
  function getFirstElement<T>(element: T[]) {
    // 반환값 타입을 지정하지 않아도 추론이 가능하기 떄문에 오류가 나지 않는다.
    return element[0];
  }

  const r1 = getFirstElement<number>([1, 2, 3]); // 1
  const r2 = getFirstElement<string>(["A", "B", "C"]); // "A"
  const r3 = getFirstElement([true, false, true]); // true
  // 매개변수의 타입을 정해주지 않아도 타입 추론을 통해 판단할 수 있다.
  // 정석은 제네릭을 넣는거지만, 실무에서는 잘 사용하지 않는다.
  console.log(r1, r2, r3);
}

{
  // 함수 표현식(화살표 함수)
  const getFirstElement: <T, U>(element: T[], name: U) => T = (
    element,
    name
  ) => {
    console.log(name);
    return element[0];
  };
  const r1 = getFirstElement<number, string>([1, 2, 3], "hi"); // 1
  console.log(r1);
}

{
  // 타입 별칭
  // 제네릭(타입별칭)
  type MyFunc<T> = (element: T[]) => T;
  const getFirstElement: MyFunc<unknown> = (element) => {
    return element[0];
  };
  console.log(getFirstElement([1, 2, 3]));
}

{
  // 타입 별칭
  // 타입을 변수에 저장한 것에 불과함
  // 협업에서는 이걸 더 많이 쓰게됨
  type MyFunc = <T>(element: T[]) => T;
  const getFirstElement: MyFunc = (element) => {
    return element[0];
  };
  console.log(getFirstElement([1, 2, 3]));
}

{
  // 인터페이스<제너릭>
  interface MyFunc<T> {
    (element: T[]): T;
  }
  const getFirstElement: MyFunc<unknown> = (element) => {
    return element[0];
  };
  console.log(getFirstElement([1, 2, 3]));
}
{
  // 인터페이스
  interface MyFunc {
    <T>(element: T[]): T;
  }
  const getFirstElement: MyFunc = (element) => {
    return element[0];
  };
  console.log(getFirstElement([1, 2, 3]));
}

{
  const func: <T>(a: T) => T = (a) => {
    return a;
  };
  const func1 = func<string>("hello");
}
