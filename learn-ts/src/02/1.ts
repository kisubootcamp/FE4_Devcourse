// {
//     //코드블럭(중괄호)
//     let num: number=10;
// }

{
    //1. string
    let name: string="Alice";
    let greeting: string=`Hello,${name}`;
    let single: string="Single Quote";
    let multiLine: string=`This is a multiline string`;

    //2. number(숫자)
    let age: number=10; //10진수
    let hex:number=0xff; //16진수
    let binary:number=0b1010; //2진수
    let float:number=3.14; //실수
    //16진수, 2진수, 소수 모두 number 타입

    //3. boolean(논리형)
    // falsy-> 0,-0,"",null,undefined,NaN boolean에 직접적으로 넣을 순 없고 평가할때 false로 인지
    // truthy-> falsy를 제외한 모든 값 
    let bool1:boolean=true;
    let bool2:boolean=false;
    let bool3:boolean=!0; //truthy
    let bool4:boolean=10>20;

    //4. null
    let nothing:null=null;

    //5. undefined
    let notDefined:undefined=undefined;

    //6. any - 아무거나 허용하겠다
    //-> 타입을 검사하지 않겠다.
    //-> 타입 검사를 무력화 하는 타입이기 때문에 남용을 피해야 함
    let anything:any=10;
    anything=20;
    anything=30;
    anything="A";
    anything=true;
    anything=null;
    anything=undefined;
    // anything.toFixed(2); //소수점 자리수 ;에러

    //7. unknown(any 순한맛)
    //-> 타입 검사를 하지 않아요.
    //-> 단, 그 값을 사용하려고 할 때는 타입을 검증해야함.(사용불가)
    //any는 타입검사 안하고 그냥 사용가능 unknown은 사용할때 타입검사함
    let input:unknown="Hello";
    input=10;
    input=true;
    input=undefined;
    input=null;
    input=3.14;
    
    //사용자가 타입검사를 직접 실행시켜주면 사용가능
    if(typeof input==="number") console.log(input.toFixed(2));

    //8. 배열(array)
    let arr:[]=[];
    let numArr:number[]=[10,20];
    let numArr2:Array<number>=[10,20];
    
    let strArr:string[]=["A","B","C"];
    let strArr2:Array<string>=["A","B","C"];
    
    let boolArr:boolean[]=[true,false];
    let boolArr2:Array<boolean>=[true,false];
    
    let undefinedArr:undefined[]=[undefined,undefined];
    let undefinedArr2: Array<undefined>=[undefined,undefined];
    
    let nullArr:null[]=[null,null];
    let nullArr2:Array<null>=[null,null];

    let objArr:object[]=[{},{}];
    // let objArr:{}[]=[{},{}];도 동일
    
    let matrix: number[][]=[
        [1,2,3],
        [4,5,6],
        [7,8,9],
    ];

    let matrix2: Array<Array<number>>=[
        [1,2,3],
        [4,5,6],
        [7,8,9],
    ];
    
    let cube:number[][][]=[
        [
            [1,2],
            [3,4],
        ],
        [
            [5,6],
            [7,8],
        ],
    ]
    
    //9. 튜플(tuple)
    //특정 형태를 갖는 배열을 의미
    let mixArr:[number,string]=[10,"A"];
    //mixArr=[20,"B",30] 처럼 뒤에 값 추가하려면 [number,string]=>(number|string)[]처럼 표현함
    let mixArr2:[number,number[]]=[10,[20,30]];
    let mixArr3:[number,[],{}]=[10,[],{}];

    let mixTuple:[number,string,object][]=[
        [1,"hello",{key:"value"}],
        [2,"world",{key:"example"}],
    ]
    //10. bigint
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(9007199254740991);
    console.log(9007199254740997n);
    console.log(100n+200n); //300n
    //console.log(100n+200); //에러 서로 교차해서 계산 불가
    console.log(100n+1n); //101n
}
