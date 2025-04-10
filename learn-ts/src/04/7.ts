{
  function printValue(value: number | string) {
    // 타입을 좁혀주는 조건문 또는 문법 -> 타입가드

    // 타입 단언 -> 타입스크립트 컴파일러에게 타입을 명확하게 알려주는 행위
    // as [단언할 타입]
    console.log((value as number).toFixed(0));

    // <단언할 타입> -> 리액트에서 사용할 수 없다. JSX 문법과 충돌
    console.log((<number>value).toFixed(0));
  }
  printValue(3.14);
}

{
  // 널 아님 보장 연산자(!) -> 타입 단언의 한 종류
  function printValue(value: number | null) {
    // if (typeof value === "string")
    console.log(value!.toFixed(2));
  }
  printValue(null);
}
