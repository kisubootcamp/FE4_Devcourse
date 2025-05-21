{
  //1. enum, const enum
  // enum과 인터페이스는 선언병합이 됨
  enum Status {
    Pending, //0
  }

  enum Status {
    // InProgress,//위의 Status 와 0 이라는 값이 중복되어 오류가 남
    InProgress = "InProgress", // 값을 할당해줘야 오류가 나지 않음

    // enum Status {
    // Pending,
    //   InProgress = "InProgress"}
  }
}

{
  //2
  // 타입가드를 쓰지 않았을 때는 타입스크립트가 타입을 확신할 수 없음
  // 정적인 상태에서는 타입을 확신할 수 없어, 런타임때 확인해보라고 위임
  // -> 런타임때 if 문을 통해 적절하게 조치를 취해보라는 의미
  // ****** 타입가드는 정적인 상태에서 검사하는게 아니라, 동적인 상태에서 검사를 하게하는 원래 NOTE
  let value: unknown = "Hello";
  if (typeof value === "string") console.log(value.toUpperCase());
  //or
  // 정적타입일 때 정의
  // 타입 단언은 대부분의 오류를 쉽게 피해갈 수 있지만
  // 런타임때 오류를 막을 수 없음
  console.log((<string>value).toUpperCase()); // 옛날 단언 방식이지만 리액트 문법과 충돌할 수 있음
  console.log((value as string).toUpperCase());
}

{
  // 정적 타입, 정적 상태 ===> 컴파일 시점에서 타입이 결정 됨 (타입스크립트)
  // --> 코드를 실행해보지 않아도 TS->JS 로 변환하는 컴파일 과정에서 오류를 확인할 수 있음
  // --> 사전에 발생할 수 있는 오류를 미리 확인하여 방지하기 위해 타입스크립트를 사용
  // 동적 타입 , 동적 상태 ===> 모든 코드의 타입을 코드를 *실행할 때* 결정 됨 (자바스크립트)
  // --> 실행을 하고 나서야 에러를 확인할 수 있음
}
