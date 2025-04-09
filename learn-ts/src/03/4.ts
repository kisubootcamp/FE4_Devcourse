{
    // 유니온 타입 | (파이프) expr1 || expr2
    // 인터섹션 타입 & (엠퍼샌드) expr1 && expr2

    let value: string | number; // 숫자,문자 둘중하나만 만족해도 됨
    let value2: string & number; // 숫자면서 문자여야 참 -> 객체타입지정할떄사용

    //{ name: string,age?:number }
    let value3: { name: string } & { readonly age?: number };
    value3 = {
        name: 'sucoding',
        // age: 20,
    };
}

{
    //String, Number, Boolean
    //string, number, boolean
    let value: String = 'A'; // String 객체타입
    value = new String('a'); // ok

    let value2: string = 'A'; // string 객체타입
    // value2 = new String('a'); // not ok
}
