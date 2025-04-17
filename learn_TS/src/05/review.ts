{
  // 1. enum. const enum
  // 같은 이름을 갖더라도 다른 값을 할당해주면 병합 가능 (마치 인터페이스처럼)
  enum Status {
    Pending, //0
  }
  enum Status {
    InProgress = 1,
  }
  const current: Status = Status.InProgress;
  console.log(current);
  console.log(Status.Pending);
}

{
  // 2
  // 타입가드는 정적인 상태에서 검사하는게 아니라
  // 동적인 상태에서 검사를 하게 되는 원리
  let value: unknown = "Hello";
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
  // 타입 단언은
  // 정적 타입일 때 정의
  console.log((value as string).toUpperCase());
}

{
  // 정적 타입, 정적 상태
  // : 코드를 실행해보지 않고 그냥 작성만 할 때
  // : 컴파일 시점에 데이터 타입이 결정된다. (타입스크립트)
  // 발생할 수 있는 타입 에러를 미리 방지한다.
  // 동적 타입, 동적 상태
  // : 자바스크립트가 코드를 실행할 때 데이터의 타입이 결정된다.(런타임에 확인 가능)
  // 코드를 실행해보지 않고 에러를 찾지 못하는 경우가 많음
}
