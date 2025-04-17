{
  // 1. enum, const enum
  enum Status {
    Pending, // 0
  }

  enum Status {
    InProgress = 'InProgress',
  }
  const current: Status = Status.InProgress;
  console.log(Status.Pending);
  console.log(current);
}
{
  // 2.
  let value: unknown = 'Hello';
  if (typeof value === 'string') console.log(value.toUpperCase());

  // 정적 타입일 때 정의
  console.log((value as string).toUpperCase());
}
{
  // 정적 타입, 정적 상태 -> 컴파일 시점에 데이터 타입이 결정 (타입스크립트)
  // 동적 타입, 동적 상태 -> 코드를 실행할 때, 데이터의 타입 결정 (자바스크립트)
}
