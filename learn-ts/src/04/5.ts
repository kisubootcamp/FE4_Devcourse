{
  let value: number | string = 10.12;
  console.log(value.toFixed(0));
}

console.log("-------------------------------------");

{
  function printValue(value: number | string) {
    // 타입을 좁혀주는 조건문 또는 문법 -> 타입 가드
    if (typeof value === "number") console.log(value.toFixed(0));
    // 타입 단언
    // 타입 단언 -> as [단언할 타입] or <[단언할 타입]>변수 단, <> 문법은 jsx 에서 사용 불가. 문법 충돌 발생 가능
    // 주의 ! 개발자가 타입 단언을 할 경우 타입스크립트는 무조건 단언한 타입을 확신하고 진행함. 틀리면 큰일남.
    console.log((value as number).toFixed(0));
    console.log((<number>value).toFixed(0));
  }

  printValue(10.12);
}

console.log("-------------------------------------");

{
  // 널 체크 보장 연산자 (!)

  function printValue(value: number | null) {
    // 옵셔널 체이닝 연산자 ?
    // null 이 아님을 확실하지만 현 타입에 String 이 추가되면 number 인지 string 인지 확인 불가
    console.log(value?.toFixed(0));

    // 널 체크 보장 연산자 (!)
    // null 이 아님을 확신하고 number 타입이라고 확신하게 함
    console.log(value!.toFixed(0));
  }
}

// 타입 단언, 널 체크 보장 연산자 는 TS 가 타입 검사를 진행 하지 않고 단언해준 타입으로 확신하고 진행 한다.
// 하지만 그게 아니라면 런타임에 에러가 나타난다.
