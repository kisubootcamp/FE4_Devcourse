// 타입스크립트란?
// 자바스크립트에 “타입(type)”을 추가한 언어
// 타입이 없어서 실수하기 쉬운 부분을 미리 잡아주고 더 안전하고 유지보수가 쉬운 코드를 만듬

//장단점
// 장점
// 타입으로 실수방지, 코드 자동완성 강화, JS문법 그대로 사용가능
//
// 단점
// 초기설정, 트랜스파일, 라이브러리 호환성

// 컴파일 : 
// 주어진 language로 작성된 컴퓨터 프로그램을 다른 언어의 동등한 프로그램으로 변환하는 프로세스
// 컴파일러 : 
// 컴파일러는 이러한 작업을 실행하는 소프트웨어 타입스크립트에서는 tsc(TypeScript Compiler)
// 다운레벨 트랜스파일(Downlevel Transpilation)
// ex) 작성시에 let, const로 작성했지만 컴파일 후 var로 바뀌는경우
// 옛날 브라우저에서도 돌아가도록 안전하게 JS로 변환해줘야 하기떄문에 최신 문법을 옛날 자바스크립트 문법으로 바꿈
// tsconfig.json에서 compilerOptions의 target 변경시 해결

// string, number, boolean, object, array, symbol, tuple, undefined, null, any, biging  고정된 길이와 타입 순서를 가진 배열
{
    let namea: string = "JeongCoding";                  // 문자(텍스트) 타입
    let age: number = 20;                               // 숫자 타입 (정수, 소수 등)
    let bool: boolean = true;                           // true/false 논리값
    let obj: object = {}; // 0                          // 객체 타입
    let arr: [] = [];                                   // 배열 
    let sym: symbol = Symbol("a");                      // 유일한 값 식별
    let und: undefined = undefined;                     // 값이 정의되지 않음
    let nul: null = null;                               // 값이 비어있음 (없음)을 명시
    let bin: bigint = 100n;                             // 아주 큰 정수 타입
    let anything: any = "문자";                         // 아무 타입도 가능, 타입 검사 안 함
    let tuple: [string, number] = ["JeongCoding", 25];  // 고정된 타입과 순서를 가지는 배열
}