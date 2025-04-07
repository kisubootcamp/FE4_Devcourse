// 타입스크립트
// 자바스크립트 + 타입 시스템을 추가한 언어

// 자바스크립트 -> 타입스크립트
// 자바스크립트 -> 문법
// 타입스크립트 타입 시스템을 배우는 것.
// 타입스크립트는 결국 값의 타입을 지정해주는 것.
// 타입스크립트가 왜 어렵다는 생각이 드냐면 ?
// 값에 대한 타입을 지정하는 방법이 많음
// 타입을 지정하면 불필요한 실수를 예방할 수 있음.

// 자료형의 종류
// string, number, boolean, object, array, symbol, tuple, undefined, null, any, bigint
// 정적 타이핑
// 자바스크립트 -> 동적 타입 시스템
// 타입스크립트 -> 정적 타입 시스템
{
  let name: string = "yubin";
  let age: number = 26;
  let bool: boolean = true;

  let MAX_LEVEL: number = 99;
  // MAX_LEVEL = "99"; // string 타입이기 때문에 에러 발생

  let obj: object = {}; // 논란이 좀 있는 부분 -> 나중에 자세히 설명.
  let arr: [] = []; // 나중에 자세히 설명.

  let sym: symbol = Symbol("a");
  let und: undefined = undefined; // 실제로 개발자가 이런 코드를 작성할 일은 없음
  let nul: null | string = null;
  let big: bigint = 100n;

  nul = "a"; // 타입스크립트에서는 한 번 null로 할당하면 영원히 null
}
