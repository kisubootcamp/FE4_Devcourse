// 트랜스 컴파일(컴파일링)
// ts파일 -> js파일로 변환하는 과정
// 변환하는 도구를 트랜스 컴파일러 이라고 한다.
// tsc -> 트랜스 컴파일러

// 자바스크립트 = 동적 타입 시스템
// 타입스크립트 = 정적 타입 시스템

// 타입스크립트 => 자바스크립트 + 타입 시스템을 추가한 언어
// 결국 값의 타입을 지정해주는 것.

// 타입시스템
// string, number, boolean, object, array, tuple, undefined, null, any, bigint

{
  let name: string = "sucoding";
  let age: number = 20;
  let bool: boolean = true;
  let obj: object = {};
  let arr: [] = [];
  let sym: symbol = Symbol("A");
  let und: undefined = undefined;
  let nul: null | string = null;
  let big: bigint = 100n;
}
{
let num: number = 10;
}