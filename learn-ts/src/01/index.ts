// 트랜스 컴파일(컴파일링)
// ts -> js로 변환해주는 과정
// 트랜스 컴파일을 수행하는 도구를 트랜스 컴파일러라 함

// 타입 스크립트
// 자바스크립트 + 타입 시스템을 추가한 언어

// 자바스크립트 -> 타입스크립트
// 자바스크립트 -> 문법
// 타입스크립트 타입 시스템을 배우는 것.
// 타입스크립트는 결국 값의 타입을 지정해주는 것.
// 타입스크립트가 어려운 이유: 값에 대한 타입을 지정하는 방법이 많음

// string, number, boolean, object, array, tuple, undefined, null, any, bigint
// 정적 타이핑

// 자바스크립트 -> 동적 타입 시스템
// 타입스크립트 -> 정적 타입 시스템
// {
//   let name: string = "sucoding";
//   let age: number = 20;
//   let bool: boolean = true;

//   let obj: object = {};
//   let arr: [] = [];

//   let sym: symbol = Symbol("a");
//   let und: undefined = undefined; // 작성할 일 없다.
//   let nul: null | string = null; // | 아직 안배웠지만 or 연산자랑 비슷한 느낌
//   let big: bigint = 100n;

//   nul = "a";
// }

{
  let num: number = 10;
}
