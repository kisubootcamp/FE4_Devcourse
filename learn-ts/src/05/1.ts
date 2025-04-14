{
  // 1. enum
  // 선언 병합이 가능한 것 enum, interface
  enum Status {
    Pedding, // 아무것도 지정하지 않으면 숫자 0부터 순차적으로 들어감
  }

  enum Status {
    InProgress = "InProgress",
  }

  const current: Status = Status.InProgress;
  console.log(Status.Pedding);
  console.log(current);
}
{
  // 2
  let value: unknown = "Hello";
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
  // 정적 타입일 때 정의
  console.log((<string>value).toUpperCase());
  console.log((value as string).toLowerCase());
}
{
  // 정(고요할 정)적타입, 정적 상태 -> 컴파일 시점에 따라 타입이 결정됨 (타입스크립트)
  // 동적타입, 동적상태 -> 코드를 실행할 때, 데이터의 타입이 결정된다. (자바스크립트)
}
