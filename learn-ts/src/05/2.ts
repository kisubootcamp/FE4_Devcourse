{
  // 1. 제네릭
  // 타입을 변수처럼 사용하는 문법
  function getFirstElement<T>(element: T[]) {
    return element[0];
  }

  // 제네릭 타입에선 함수의 매개변수 앞에 타입을 보내줘야 함
  // 하지만 TS의 기능중 하나인 타입 추론에 의하여 추론이 되기떄문에 안써줘도 되긴 함
  // 그리고 요즘은 보통 안적는다 함
  // 하지만 타입 추론이 잘 안된다면 그때 써주면됨
  const r1 = getFirstElement([1, 2, 3]); // 1
  const r2 = getFirstElement(["A", "B", "C"]); // A
  const r3 = getFirstElement([true, false, true]); // true
}

console.log("-------------------------------------");

{
  // 함수 표현식(화살표 함수)
  type FuncType<T> = (element: T[]) => T;

  type FuncType2 = <T>(element: T[]) => T;

  const getFirstElement: FuncType2 = (element) => {
    return element[0];
  };

  const r1 = getFirstElement([1, 2, 3]); // 1
  const r2 = getFirstElement(["A", "B", "C"]); // A
  const r3 = getFirstElement([true, false, true]); // true
}

console.log("-------------------------------------");

{
  interface FirstElement {
    <T>(element: T[]): T;
  }

  const getFirstElement: FirstElement = (element) => {
    return element[0];
  };

  const r1 = getFirstElement([1, 2, 3]); // 1
}

console.log("-------------------------------------");

{
  interface FirstElement<T> {
    (element: T[]): T;
  }

  const getFirstElement: FirstElement<number> = (element) => {
    return element[0];
  };

  const r1 = getFirstElement([1, 2, 3]); // 1
}
