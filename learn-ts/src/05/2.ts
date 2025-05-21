{
  //1. 제네릭   NOTE
  // 타입을 변수처럼 사용하는 문법
  // 함수의 식별자와 소괄호 사이 <아무알파벳>, 보통은 <Type> -> 줄여서 <T> 라고 표현
  function getFirstElement<T>(element: T[]): T {
    return element[0];
  }

  const r1 = getFirstElement<number>([1, 2, 3]); // 1
  console.log(r1);
  const r2 = getFirstElement<string>(["a", "b", "c"]);
  console.log(r2);
  const r3 = getFirstElement<boolean>([true, false, true]);
  const r4 = getFirstElement([1, false, "a"]);
  // 제네릭을 꼭 표현해줘야하는 것이 맞는데 생략해도 제네릭이 추론해주기 때문에 현업에서는 함수를 호출할 때 굳이 적어주지 않음 NOTE
  const r5 = getFirstElement([6]);
  console.log(r5);
}

{
  //함수 표현식(화살표 함수)에서 제네릭
  const getFirstElement = <T>(element: T[]): T => {
    return element[0];
  };
}
{
  //함수 표현식(화살표 함수)에서 제네릭
  const getFirstElement: <T>(element: T[]) => T = (element) => {
    return element[0];
  };
}

{
  // 타입 별칭에서 제네릭 (1)
  type MyFunc<T> = (element: T[]) => T;

  //함수 표현식(화살표 함수)에서 제네릭
  const getFirstElement: MyFunc<unknown> = (element) => {
    //CHECK unknown 을 할당
    return element[0];
  };
  const r1 = getFirstElement([1, 2, 3]); // 1
  console.log(r1);
  const r2 = getFirstElement(["a", "b", "c"]);
  console.log(r2);
  const r3 = getFirstElement([true, false, true]);
  const r4 = getFirstElement([1, false, "a"]);
}

{
  // 타입 별칭에서 제네릭 (2)
  // 타입을 변수에 저장한 것에 불과함
  // 함수에서 MyFunc  마우스 오버하면 제네릭이 아니라고 뜸
  // 현업에서는 (2)번 방법을 많이 씀
  type MyFunc = <T>(element: T[]) => T;

  //함수 표현식(화살표 함수)에서 제네릭
  const getFirstElement: MyFunc = (element) => {
    return element[0];
  };
  const r1 = getFirstElement([1, 2, 3]); // 1
  console.log(r1);
  const r2 = getFirstElement(["a", "b", "c"]);
  console.log(r2);
  const r3 = getFirstElement([true, false, true]);
  const r4 = getFirstElement([1, false, "a"]);
}

{
  //인터페이스 제네릭

  interface MyFunc<T> {
    (element: T[]): T;
  }

  //함수 표현식(화살표 함수)에서 제네릭
  const getFirstElement: MyFunc<unknown> = (element) => {
    return element[0];
  };
}
{
  //인터페이스 제네릭
  interface MyFunc {
    <T>(element: T[]): T;
  }
  //함수 표현식(화살표 함수)에서 제네릭
  //   const getFirstElement: MyFunc<unknown> = (element) => {   //generic 이 아니라는 오류가 뜸
  //     return element[0];
  //   };
  const getFirstElement: MyFunc = (element) => element[0];
}
