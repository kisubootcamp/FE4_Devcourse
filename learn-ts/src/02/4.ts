{
  //타입 추론
  // 변수에 할당 되는 값을 보고 타입스크립트 컴파일러가 타입을 추론해주는 현상
  let num = 10;
  let name = "Hello";
  let bool = true;

  //undefined나 null의 경우, 추후에 값이 다른 타입으로 재할당 될 것이라 추론하고 any타입이 된다.
  let unde = undefined;
  let nul = null;

  let symbol = Symbol("a");
  let numArr = [1, 2, 3];
  let obj = { name: "sucoding", age: 20 };
  let big = 100n;
}
