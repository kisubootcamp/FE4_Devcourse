//ts는 블럭스코프를 전체파일로 잡기떄문에 {}로 코드블럭을 잡아준다

{
    // 1. String
    let name: string = "Alice";
    let greeting: string = `Hello, ${name}`;
    let single: string = 'Single Quote';
    let multiline: string = `This is
    a multiline string`;
    
    // 2. number
    let age: number = 10;           // 10진수
    let hex: number = 0xff;         // 16진수
    let binary: number = 0b1010;    // 2진수
    let float: number = 3.14;       // 실수

    // 3. boolean
    // truthy, falsy
    // falsy -> 0, -0, "", null, undefined, NaN
    // truthy? -> falsy 제외한 모든 값;
    let bool1: boolean = true;
    let bool2: boolean = false;
    let bool3: boolean = !0;
    let bool4: boolean = 10 > 20;

    // 4. null
    let nothing:null = null;

    // 5. undefined
    let notDefined: undefined = undefined;

    // 6. any - 아무거나 허용함
    // -> 타입을 검사하지 않겠다. 자주사용 x
    let anything: any = 10;
    anything = 'anything';
    anything = true;

    // 7. unknown(any 순한맛)
    // -> 타입 검사를 하지 않음.
    // -> 단, 그 값을 사용하려면 타입을 검증해야 함.
    let input: unknown = "Hello";
    input = 10;
    input = true;
    input = undefined;
    input = null;
    input = 3.14;
    if(typeof input === "number"){
        console.log(input.toFixed(2));
    }

    // 8. 배열
    let arr: [] = [];
    let numArr: number[] = [10, 20];
    let numArrOld: Array<number> = [10, 20];
    
    let stringArr: string[] = ['a', 'b', 'c'];
    let stringArrOld: Array<string> = ['a', 'b', 'c'];
    
    let boolArr: boolean[] = [true, false];
    let boolArrOld: Array<boolean> = [true, false];

    let undefinedArr: undefined[] = [undefined, undefined];
    let undefinedArrOld: Array<undefined> = [undefined, undefined];

    let nullArr: null[] = [null, null];
    let nullArrOld: Array<null> = [null, null];
    
    let objArr: {}[] = [{}, {}];

    let matrix: number[][] = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let matrixOld: Array<Array<number>> = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    let cube: number[][][] = [
        [
            [1, 2, 3],
            [1, 2, 3]
        ],
        [
            [4, 5, 6],
            [4, 5, 6]
        ],
        [
            [7, 8, 9],
            [7, 8, 9]
        ]
    ];

    // 9. 튜플(tuple)
    // 특정 형태를 갖는 배열을 의미
    let mixArr: [number, string] = [10, "A"];
    
    let mixArr2: [number, number[]] = [10, [20, 30]];
    let mixArr3: [number, [], {}] = [10, [], {}];

    let mixTuple: [number, string, object][] = [
        [1, "hello", { key: "value" }],
        [2, "world", { key: "example" }],
    ];

    // 10. bigint
    // 숫자 크기에 상관없이 n이 붙으면 bigint type임 
    // ex) 100n
    console.log(Number.MAX_SAFE_INTEGER);
    const bigNumber: bigint = 9007199254740997n;
    console.log(bigNumber);
}