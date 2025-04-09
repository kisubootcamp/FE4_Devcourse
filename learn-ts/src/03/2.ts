{
    // 유니온(언) 타입
    // | -> 파이프 기호
    let value: number | string | string = 10;
    value = 20;
    value = 'A';

    function printValue(value: number | string | { name: string }): void {
        console.log(value);
    }
    printValue(10);
    printValue('A');
    printValue({ name: 'sucoding' });

    // n1:number, n2:number -> number
    // n1:string, n2:number -> string
    // n1:number, n2:string -> string
    // n1:string, n2:string -> string

    // const sum = (n1: number | string, n2: number | string): number | string => {
    //     if (typeof n1 === 'number' && typeof n2 === 'number') return n1 + n2;
    //     else return `${n1}${n2}`;
    // };
    // console.log(sum(10, 20));
    // console.log(sum('A', 'B'));

    // 함수 오버로드 -> 함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능(유니온)
    function sum(n1: string, n2: string): string;
    function sum(n1: string, n2: number): string;
    function sum(n1: number, n2: string): string;
    function sum(n1: number, n2: number): number; // 오버로드 -> 함수 외부를 위한 문법, 대신 모든 조건을 다 써야됨
    function sum(n1: number | string, n2: number | string): number | string {
        if (typeof n1 === 'number' && typeof n2 === 'number') return n1 + n2; // 함수 내부 타입을위한 문법
        else return `${n1}${n2}`;
    }

    const result1 = sum(1.2, 2.3);
    console.log(result1); // 3.5가 나옴
    console.log(result1.toFixed(0)); // 오버로드로 매개변수를 미리 지정해줬기떄문에 확신이 생겨서 에러가 생기지않음
    if (typeof result1 === 'number') console.log(result1.toFixed(0)); // 타입스크립트는 확실한걸좋아하니 숫자라 명시해두고 출력 -> 매번 이렇게 적을수없으니 함수로바꾸고 오버로드로 해줌

    const result2 = sum('A', 'B');

    const sum2 = (n1: number | string, n2: number | string): number | string => {
        if (typeof n1 === 'number' && typeof n2 === 'number') return n1 + n2;
        else if (typeof n1 === 'string' && typeof n2 === 'number') return `${n1}${n2}`;
        else if (typeof n1 === 'number' && typeof n2 === 'string') return `${n1}${n2}`;
        else if (typeof n1 === 'string' && typeof n2 === 'string') return `${n1}${n2}`;

        throw new Error('error'); // 모든 조건을 만족하나 오류를 처리하여 컴파일러에게 확실함을 준다.
        // return 0; // 이렇게해도됨
    };

    console.log(sum2(10, 20));
    // console.log(sum2('A', true));

    // 함수
    // never void
    let obj: Record<string, never> = {};
    function throwError(message: string): never {
        throw new Error(message);
    }

    // hot module reload -> H.M.R
    function infinitLoop(): never {
        while (true) {
            //.....
        }
    }
}
