{
  // 1. enum, const enum
  // enum, interface처럼 선언 병합이 된다.
  enum Status {
    Pending, // 0
  }

  enum Status {
    InProgress = 'InProgress',
  }

  const current: Status = Status.InProgress;
  console.log(current); // InProgress
  console.log(Status.Pending); // 0
}

{
  // 2. typeof 와 타입 단언
  // 타입 가드는 정적인 상태에서 검사하는게 아니라 동적인 상태에서 검사를 하게 하는 원리이다.
  let value: unknown = 'Hello';
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  }

  // 정적 타입일 때 정의 - 타입 단언
  console.log((<string>value).toUpperCase());
  console.log((value as string).toUpperCase());
}

{
  // 1. 정적 타입, 정적 상태
  // 아무것도 하지 않는 고요한 상태
  // 코드 실행보지 않고 작성만 한 상태
  // 컴파일 시점에 데이터 타입이 결정된다. (타입스크립트)
  // 2. 동적 타입, 동적 상태
  // 코드가 실행할 때 데이터의 타입이 결정된다. (자바스크립트)
  // 자바스크립트 코드가 무언가 실행될 때
}

{
  const greet = function greet(a: string): void {
    console.log(`${a}`);
  };
  greet('sy');
}
