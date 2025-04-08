// 타입스크립트
// 자바스크립트 + 타입 시스템을 추가한 언어

// 자바스크립트?
// 타입스크립트부터 했는데? => x 자바스크립트 먼저 공부해야함
// 자바스크립트 -> 타입스크립트
// 자바스크립트 -> 문법
// 타입스크립트 타입 시스템을 배우는 것.
// 타입스크립트는 결국 값의 타입을 지정해주는 것.
// 타입스크립트가 왜 어렵다는 생각이드냐면?
// 값에 대한 타입을 지정하는 방법이 많음

// 타입스크립트 기본 타입
// string, number, boolean, object, array, symbol, tuple, undefined, null, any, bigint
// 정적 타이핑

// 자바스크립트 -> 동적 타입 시스템
// 타입스크립트 -> 정적 타입 시스템
// {
//     let name: string="sucoding";
//     let age: number=20;
//     let bool: boolean=true;
//     let obj: object={}; // o -> 자세히 설명해드림
//     let arr: []=[]; // o ->

//     let sym: symbol = Symbol("a");
//     let und: undefined=undefined; //타입은 존재하나 작업자가 작성할 일 없음
//     let nul: null=null;
//     //let nul: null | string=null; 처럼 하면 두가지 타입 가능 --> 나중에 자세히
//     let big: bigint=100n;

// }
// 한번 정해진 타입은 변하지 않음
{
    // 코드 블럭(중괄호)
    let num: number=10;
}