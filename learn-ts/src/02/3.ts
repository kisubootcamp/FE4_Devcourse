{
  let num = 10;
  let name = "Hello";
  let bool = true; //boolean이라고 추론
  bool = false;
  // bool="A";//에러
  let unde = undefined;
  let nul = null;
  //undefined,null 변수가 any로 추론하는 이유=> 후에 다른 값으로 할당될 것이라고 가정하기 때문
  let symbol = Symbol("a");
  let numArr = [1, 2, 3];
  let obj = { name: "sucoding", age: 20 };
  let big = 100n;
  //타입 지정안해도 에러 발생하지 않는 이유 => 타입 추론 시스템이 내장되어있기 때문
  //타입 추론
  //변수에 할당되는 값을 보고 타입스크립트 컴파일러가 타입을 추론해주는 현상
}
