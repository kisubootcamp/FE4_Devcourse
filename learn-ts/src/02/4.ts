{
  //타입추론
  // 변수에 할당 되는 값을 보고 타입스크립트 컴파일러가 타입을 추론해주는 현상
  let num = 10;
  let name = "hello";
  let bool = true;

  let unde = undefined;
  let nul = null;

  let symbol = Symbol("a");
  let numArr = [1, 2, 3];
  let obj = { name: "sucoding", age: 20 };
  let big = 100n;

  // 타입을 지정하지 않아도 변수명 위에 마우스 커서를 올리면 타입 추론된 값을 확인할 수 있음
  // undefined, null 값은 추후 재할당 될 수가 있기 때문에 그 때 어떤 값이 할당되는지 알 수 없어 any 타입으로 추정
}
