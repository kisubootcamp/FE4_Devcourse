{
  // 유니온(언) 타입
  // | -> 파이프 기호
  function printValue(value: number | string): void {
    console.log(value);
  }
  printValue(10);
  printValue("A");

  // 타입 가드(Type Guard) -> 타입을 좁혀주는 행위 -if문

  // 타입 가드 번거로워서 함수 오버로드 - 함수 선언문에서만 가능
  // 함수 오버로드 -> 함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능. (유니온)
}
