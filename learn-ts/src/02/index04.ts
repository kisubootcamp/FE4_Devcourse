{
  // 타입 추론
  // 변수에 할당되는 값을 보고 타입스크립트 컴파일러가 타입을 추론해주는 현상
  let num = 10;
  let name = "Hello";
  let bool = true;
  let unde = undefined; // any타입으로 추론되는 이유: 이후에라도 다른 값으로 할당될 수 있다고 추론하기 때문
  let nul = null; // any타입으로 추론되는 이유: 이후에라도 다른 값으로 할당될 수 있다고 추론하기 때문
  let symbol = Symbol("a");
  let numArr = [1, 2, 3];
  let obj = { name: "ji", age: 20 };
  let big = 100n;
}
// 프레임워크(리액트, 뷰 등) 없이 타입스크립트를 사용할 때는 되도록이면 타입을 명시적으로 적어주는 것이 좋음.
