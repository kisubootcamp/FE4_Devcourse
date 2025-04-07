// 타입스크립트
// 자바스크립트에 타입시스템을 추가한 언어 (자바스트립트 + 타입)

// 자바스크립트 -> 타입스크립트

//string, number, boolean, object, array, symbol, tuple, undefined, null, any, bigint

//typescript 는 다루는 값에 type을 지정해주는 것
// 값에 대한 타입을 지정하는 방법이 많아 타입스크립트가 어렵다는 생각이 듬 -> 불필요한 실수 예방
//정적 타이핑

//자바스트립트 => 동적 타입 시스템
//타입스크립트 => 정적 타입 시스템

{
  let unmae: string = "sucoding";
  let age: number = 20;
  let bool: boolean = true;

  let obj: object = {}; // 나중에 다시 설명
  let arr: [] = [];

  let sym: symbol = Symbol("a");
  let und: undefined = undefined; //개발자는 작성할 일 없다.
  let nul: null | string = null; // "|string" 은 고급문법
  let big: bigint = 100n;
}
