{
  // 타입 추론
  // 변수에 할당 되는 값을 보고 타입스크립트 컴파일러가 타입을 추론해주는 현상

  let num = 10;
  let name = 'Hello';
  let bool = true;
  let unde = undefined;
  let nul = null;
  let symbol = Symbol('a');
  let numArr = [1, 2, 3];
  let obj = { name: 'sy', age: 25 };
  let big = 100n;
}

{
  // 리터럴 타입 -> 값 자체를 타입으로 사용하는 것
  const num = 10;
  const str = 'A';
  const bool = true;
  const obj = { name: 'sucoding' };
  obj.name = 'aa';
  const arr: number[] = [1, 2, 3];
}
