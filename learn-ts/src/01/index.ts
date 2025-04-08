// 타입스크립트
// 자바스크립트 + 타입 시스템을 추가한 언어

// 타입스크립트는 결국 값의 타입을 지정해주는 것
// 값에 대한 타입을 지정하는 방법이 많음

// string, number, boolean, object, array, symbol, tuple, undefined, null, any, bigint

// 자바스크립트 -> 동적 타입 시스템
// 타입스크립트 -> 정적 타입 시스템
{
  let name: string = "sucoding";
  let age: number = 20;
  let bool: boolean = true;

  // o -> 자세히 설명해줌
  let obj: object = {};
  let arr: [] = [];

  let sym: symbol = Symbol("a");
  let und: undefined = undefined;
  let nul: null = null;
  let big: bigint = 100n;
}
