//1. enum, const enum
//enum status 선언 병합이 된다

//2
//
{
  let value: unknown = "hello";
  //타입가드 : ts는 정적 타입에서 검사를 안함  => 실행하지 않으면 모름 => 코드를 실행해보면 타입을 알 수 있음 (동적인 상태로 타입 검사)
  // 즉 동적인 상태에서 검사를 하게 하는 원리
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }

  //타입 가드를 쓰지 않으려면
  //타입 단언 (as) 를 써라
  //정적인 상태에서 정의
  console.log((value as string).toUpperCase());
  console.log((<string>value).toUpperCase());
  //단점 : 따라서 실행 이후에 에러 발생 가능
  //<이런식> 으로 쓰면 react랑 충돌나서 위쪽 방법을 권장
}

{
  //정적 타입, 정적 상태 -> 컴파일 시점에 데이터 타입을 결정함 (ts)
  //동적 타입, 동적 상태 -> 코드를 실행할 때, 데이터의 타입이 결정된다. (js) -> 실제로 코드를 실 행하기 전까지 에러를 발견 못하는 경우가 있다.
}
