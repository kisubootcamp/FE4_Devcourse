{
  //1. 제너릭 => 타입을 변수처럼 사용하는 문법
  function getFirstElement(
    element: number[] | string[] | boolean[]
  ): number | string | boolean {
    return element[0];
  }

  const rl = getFirstElement([1, 2, 3]); //1
  const r2 = getFirstElement(["a", "b", "c"]); //1
  const r3 = getFirstElement([true, false]); //1

  //배열안에 어떤 요소가 들어가는 지 따라서 타입은 계속 | (유니온) 로 확장
  //이게 복잡하면 제너릭을 이용

  function getFirstElementwithGeneric<T>(element: T[]): T {
    //전달 된 타입으로 파리미터에 들어간다 //return 타입에도 쓸 수 있음.
    return element[0];
  }

  const r4 = getFirstElementwithGeneric<number>([1, 2, 3]); //함수를 호출할 때 무슨 타입 줄건지 명시해도 되고
  const r5 = getFirstElementwithGeneric([1, "2", true]); //안해도 됨
}

{
  //화살표 함수로 함수 표현
  const getFirstElementwithGeneric: <T>(element: T[]) => T = (element) => {
    return element[0];
  };
}

{
  //타입 별칭
  //타입을 변수에 저장한 것에 불과함
  type MyFunc = <T>(element: T[]) => T;
  const getFirstElementwithGeneric: MyFunc = (element) => {
    return element[0];
  };

  const rl = getFirstElementwithGeneric([1, 2, 3]); //1
  const r2 = getFirstElementwithGeneric(["a", "b", "c"]); //1
  const r3 = getFirstElementwithGeneric([true, false]); //1
}

{
  //인터페이스도 가능
  interface myFunc {
    <T>(element: T[]): T;
  }
}
