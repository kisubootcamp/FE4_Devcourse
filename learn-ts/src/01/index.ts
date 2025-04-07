// trans compiling(compile) ts를 js로 변환해주는 작업
// 트랜스 컴파일러: 트랜스 컴파일을 수행하는 도구
// tsc -> 트랜스 컴파일러
// let num1: number = 10;
// console.log(num1);

// const str = "Hello, World!";

// console.log(str.replaceAll(" ", "")); // replaceAll은 ES2021에서 추가됨

// 타입스크립트 : 자바스크립트 + 타입 시스템을 추가한 언어
// 자바스크립트 -> 문법
// 타입스크립트: 타입 시스템을 배우는 것

// string, number, boolean, object, array, tuple, undefined, null, any, bigint, symbol <- 많이 사용되지는 않음.
// 타입스크립트의 기본 타입들
// 타입스크립트는 결국 값의 타입을 지정해주는 것
// 값에 대한 타입을 지정하는 방법이 많아서 어렵다고 생각이 들 수 있음.
{
  let name: string = "jiyoon";
  let age: number = 20;
  let bool: boolean = true;
  let obj: object = {}; // 추후 설명 참고
  let arr: [] = []; // 추후 설명 참고
  let sym: symbol = Symbol("a");
  let und: undefined = undefined; // 직접 작성할 일은 없다. 있다는 것만 알아두자.
  let nul: null = null;
  let big: bigint = 100n;
}
