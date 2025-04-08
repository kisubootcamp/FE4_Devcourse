// 웹 브라우저는
// html, javascript, css 만 실행 할 수 있다. 그 외에는 실행 못함
// 그래서 typescript는 실행이 안되기 때문에 트랜스 컴파일링을 해야 한다.



// 트랜스 컴파일(컴파일링)
//ts -> js
// 트랜스 컴파일러 (트랜스 컴파일을 수행하는 도구)
// tsc -> 트랜스 컴파일러
let num1 : number = 10;
console.log(num1);

//tsconfig.json -> 타입스크립트 설정이 들어있는 파일

const str = "Hello, World!!!!!!";
console.log(str.replaceAll(" ", "")); //es2021 이후에 생긴 문법


///////////////////////////////////////////////////////////////////////////////
//타입스크립트 ,, 자바스크립트 + 타입을 추가한 언어
// 타입스크립트는 결국 값의 타입을 지정해주는 것.
// 값에 대한 타입을 지정하는 방법이 많다..
//string, number, boolean, object, array, tuple, undefined, null, any, bigint
// 자바스크립트 => 동적 타이핑 (할당과 동시에 타입이 결정된다)
// 타입스크립트 => 정적 타이핑 (선언할때 타입을 결정하게 되며 변하지 않는다.)
{
    let sname : string = "sucoding";
    let age : number = 20;
    let bool : boolean = true;

    let obj : object = {} // 자세한 내용이 더 있음
    let arr : [] = [];

    let sym : symbol = Symbol("a");
    let und : undefined = undefined; // 작성할 일 없다.
    let nul: null | string = null;
    let big: bigint = 100n;

}
