{   
    // .ts파일은 기본적으로 전역 스코프를 공유하기에 {}로 스코프를 잡아주거나 모듈화 해야함
    // {}
    // import/export

    // 타입추론(Type Inference)
    // 타입추론 이란?
    // 명시적으로 타입을 지정하지 않아도, TypeScript가 코드의 문맥을 보고 변수의 타입을 "추론"하는 기능
    let name = "Alice"; // string
    let age = 30;       // number
    let active = true;  // boolean

    // 단 undefined, null은 any로 추론
    // null같은경우는 다른 실제 타입의 초기화 용도로 자주 쓰이고 불명확 하기에 any처리 유연성 확보
    // const로 선언할경우 재할당이 불가능 하기에 null
    let valueNull = null;               // any (strictNullChecks=true여도 let은 any 처리됨)
    let valueUndefined = undefined;     // any 
    
    const constUndefined = undefined;   // undefined
    const constNull = null;             // null

    // readonly와 옵셔널(?)
    // readonly 속성 값을 한 번 설정한 이후 변경할 수 없도록 고정
    type User = {
        readonly id: number;
        name: string;
    };

    // 옵셔널 해당 속성이 있을 수도 있고, 없을 수도 있다
    // name?: string → 타입은 내부적으로 string | undefined
    type User2 = {
        id: number;
        name?: string;
    };
}