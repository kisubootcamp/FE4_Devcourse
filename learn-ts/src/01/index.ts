//npx tsc src/01/index.ts(경로) -> 자바스크립트로 변경해줌
//npx tsc 경로
// 타입스크립트
// 자바스크립트 + 타입시스템을 추가한 언어
// 타입스크립트는 결국 값의 타입을 지정해주는것

// string,number,boolean,object,array,symbol,tuple,undefined, null, any, bigint
{
    // 코드블록 {}
    let name: string = 'sucoding';
    let age: number = 20;
    let bool: boolean = true;

    let MAX_LEVEL: number = 99;
    // MAX_LEVEL = '9'; // 타입을 숫자로 지정했으므로 에러 체크됨

    let obj: object = {}; // 나중에 설명
    let arr: [] = []; // 나중에 설명

    let sym: symbol = Symbol('a');
    let und: undefined = undefined;
    let nul: null = null;
    let big: bigint = 100n;
    let num: number = 10;
}
