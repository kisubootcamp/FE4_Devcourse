{
  // 1. enum, const enum
  // enum은 interface처럼 선언 병합이 가능함.
  enum Status {
    Pending, // 0
  }

  // 이넘 선언 병합 -> 이름이 같은 이넘을 병합해줌 (값은 각각 달라야 함)
  enum Status {
    InProgress = "InProgress",
  }

  const current: Status = Status.InProgress;
  console.log(current);
  console.log(Status.Pending);
}

{
  // 2
  let value: unknown = "Hello";
  // 정적인 상태에서는 타입 검사를 하지 못하기 때문에 런타임 때로 타입 검사를 위임함.
  // 타입 가드는 정적인 상태에서 검사하는 게 아니라, 동적인 상태에서 검사를 하게 하는 원리임.
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }

  // 타입 단언은 정적 타입일 때 정의하는 것.
  // 대부분의 에러를 쉽게 피해갈 수 있지만, 그로 인해 런타임 때 에러가 발생할 수 있음.
  console.log((value as string).toUpperCase());
  console.log((<string>value).toUpperCase());
}

{
  // 정적 타입, 정적 상태 (타입스크립트)
  // -> 컴파일(TS 파일을 JS 파일로 변환하는 것) 시점에 타입이 결정됨
  // -> 코드를 실행해보지 않아도 컴파일하는 과정에서(코드가 실행되기도 전에) 에러를 확인 할 수 있음
  // -> 사전에 발생할 수 있는 타입 에러를 미리 확인하기 위해 타입스크립트를 사용하는 것
  //
  // 동적 타입, 동적 상태 (자바스크립트)
  // -> 자바스크립트 코드가 무언가 움직일 때
  // -> 코드를 실행할 때 데이터의 타입이 결정됨
  // -> 코드를 실행해보기 전까지는 에러인지 아닌지 모름
}
