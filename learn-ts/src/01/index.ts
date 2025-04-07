// 트랜스 컴파일링 : 타입스크립트를 자바스크립트로 바꿔주는 작업
// ts -> js
// 트랜스 컴파일러 (트랜스 컴파일을 실행하는 도구)
// tsc -> 트랜스 컴파일러
// let num1: number = 10;
// console.log(num1);

/*
자바스크립트 + 타입 시스템을 추가한 언어
타입스크립트는 값의 타입을 지정해주는 것

기본 타입
string, number, boolean, object, array, symbol, tuple, undefined, null, any, bigint
*/

// 코드를 입력할 땐 중괄호 안에다가 작성하기
{
  let name: string = 'sucoding';
  let age: number = 20;
  let boll: boolean = true;

  let obj: object = {}; // 나중에 다시 설명
  let array = [];

  let sym: symbol = Symbol('a');
  let und: undefined = undefined;
  let nul: null = null;
  let big: bigint = 100n;
}
