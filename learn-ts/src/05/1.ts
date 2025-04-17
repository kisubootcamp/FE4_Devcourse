{
  // 1. enum
  // enum은 interface처럼 선언 병합이 가능
  enum Status {
    Pending, // 0
  }
  enum Status {
    InProgress = "InProgress",
  }
  const current: Status = Status.InProgress;
  console.log(current);
  console.log(Status.Pending);
}
{
  // 2.
  //  타입 가드는 정적인 상태에서 검사하는 것이 아님.
  //  타입스크립트의 정적 검사 원리에서 벗어나,
  //  타입 가드는 동적인 상태에서 검사하는 것이다.
  let value: unknown = "HELLO";
  if (typeof value === "string") console.log(value.toUpperCase());

  console.log((value as string).toUpperCase());
  console.log((<string>value).toUpperCase());
}
{
  //  정적 타입과 정적 상태: 컴파일 시점에 데이터 타입이 결정됨 → 타입스크립트
  //  동적 타입과 동적 상태: 코드 실행할 때, 데이터 타입이 결정됨 → 자바스크립트
}
