// - 타입스크립트는 자바스크립트 + 타입 시스템을 추가한 언어
// - 타입스크립트는 결국 값의 타입을 지정하는 것!
// string number boolean object array symbol tuple undefined null any bigint

// JS = 동적 타입 시스템 / TS = 정적 타입 시스템
{
  let name: string = "geoncoding";
  let age: number = 26;
  let bool: boolean = true;

  let obj: object = {};
  let arr: [] = []; // 배열을 지정하는 방법!

  let sym: symbol = Symbol("a");
  let und: undefined = undefined;
  let nul: null = null;
  let big: bigint = 100n;
}
