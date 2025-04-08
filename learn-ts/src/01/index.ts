//트랜스 컴파일링 ts -> js
//트랜스 컴파일러(트랜스 컴파일을 수행하는 도구)
//tsc => 트랜스 컴파일러
const str = 'Hello World!!!!';
console.log(str.replaceAll(' ', ''));

// 타입스크립트
// 자바스크립트 + 타입 시스템 추가한 언어

// string, number, boolean, object, array, tuple, undefined, null, any, bigint
// 정적 타이핑

// 타입스크립트는 결국 값의 타입을 지정
{
  let name: string = 'sucoding';
  let age: number = 20;
  let bool: boolean = true;
  let obj: object = {};
  let arr: [] = [];
  let sym: symbol = Symbol('a');
  let und: undefined = undefined;
  let nul: null = null;
  let big: bigint = 100n;
}
