{
  //1. enum, const enum
  //enum, interface 처럼 선언 병합이 된다.
  enum Status {
    Pending, //0
  }

  enum Status {
    InProgress = "InProgress",
  }

  const current: Status = Status.InProgress;
  console.log(current);
  console.log(Status.Pending);
}
{
  //2.
  // 타입 가드는 정적인 상태에서 검사하는게 아닌
  // 동적인 상태에서 검사를 하게 하는 원리임
  let value: unknown = "Hello";
  if (typeof value === "string") {
    console.log(value.toUpperCase()); //에러 ; unknown
  }

  //정적 타입일 때 정의
  console.log((value as string).toUpperCase()); //런타임에러
  console.log((<string>value).toUpperCase()); //리액트에서 충돌 발생
}
{
  //정(고요할 정)적 타입, 정적 상태 -> 컴파일 시점에 데이터 타입이 결정된다. (타입스크립트)
  //동적 타입, 동적 상태 -> 코드를 실행할 때, 데이터의 타입이 결정된다. (자바스크립트)
}
