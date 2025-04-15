{
  // 1. enum
  // 열거형 타입 지정
  // const enum, enum
  enum Status {
    Pending, // = 0 이 자동으로 들어감
  }
  // 위의 enum 과 이름이 같아서 병합이 가능함 - interface 와 같은 느낌
  // 하지만 값이 중복되면 안됨
  enum Status {
    InProgress = "InProgress",
  }

  const current: Status = Status.InProgress;
  console.log(current);
  console.log(Status.Pending);
}

console.log("-------------------------------------");

{
  // 2. unknown
  // 타입 가드는 정적인 상태에서 검사하는 게 아니라,
  // 동적인 상태에서 검사를 하게 하는 원리
  let value: unknown = "Hello";
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }

  // 타입 단언
  // 정적 타입일 때 정의
  // 에러가 발생할 확률이 높음
  console.log((<string>value).toUpperCase()); // 리액트 문법과 충돌 위험
  console.log((value as string).toUpperCase()); // 위 코드 보다 이 부분을 더 많이 씀
}

console.log("-------------------------------------");

{
  // 정적 타입, 정적 상태 -> 컴파일 시점에 타입이 결정 됨 (타입스크립트)
  // 동적 타입, 동적 상태 -> 코드를 실행할 때, 데이터의 타입이 결정 된다. (자바스크립트)
}
