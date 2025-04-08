//타입스크립트
{
  let name:string = '이준호';
  let age:number = 28;
  let bool:boolean = true;
  let obj:object = {};
  let arr:[] = [];
  let sym:symbol = Symbol("a");
  let und: undefined = undefined; // 작성할 일 없다.
  let nul:null = null;//null은 null 값만 가질 수 있다.
  let big:bigint = 100n;
}
//타입스크립트는 모든 파일을 점검하기 때문에 다른 파일에 같은 변수명을 선언하면 오류가 난다. 그렇기 때문에 이번 ts 공부를 진행 할 때 블럭 안에서 타입스크립트 코드를 치고 있는 것이다.

{
  // string
  let name:string =  '김덕배';
  let greeting:string = `hello ${name}`;

  // number
  let age:number = 10; //10진수
  let hex:number = 0xff; //16진수
  let binary:number = 0b1010; //2진수
  let float:number = 3.14; //실수

  // boolean
  let bol1:boolean = true;
  let bol2:boolean = false;

  //null
  let n11:null = null;

  //undefined
  let notdefined:undefined = undefined;

  //any - 아무거나 허용
  //타입을 검사하지 않는다, 타입 검사를 무력화 하는 타입이기 때문에 남용을 피해야한다.
  let anything:any = 10;
  anything = 'string';
  anything = null;
  anything = true;
  anything = 100n;
  anything = undefined;

  //unknown
  //타입 검사를 하지 않는다, 단 그 값을 사용하려고 할 때는 타입을 검증 해야한다.
  let unk:unknown = '100';
  unk = true;
  unk = null;
  unk = 1000n;
  unk = 3.14;

  //unknown과 any는 타입이 지정 되있지 않기 때문에 각 타입별 내장 메소드를 사용 하려할 때 에러가 난다.

  //ex) anything.split(); err
  //ex) unk.thFixed(); err
  
  //그렇기 때문에 아래와 같이 타입 검증이 필요하다
  if(typeof unk === "number") console.log(unk.toFixed(1));

  //배열, 타입[]
  let arr: [] = [];

  let numArr: number[] = [10, 20];
  let numArr2: Array<number> = [10, 20];

  let strArr: string[] = ["A", "B", "C"];
  let strArr2: Array<string> = ["A", "B", "C"];

  let boolArr: boolean[] = [true, false];
  let boolArr2: Array<boolean> = [true, false];

  let undefinedArr: undefined[] = [undefined, undefined];
  let undefinedArr2: Array<undefined> = [undefined, undefined];

  let nullArr: null[] = [null, null];
  let nullArr2: Array<null> = [null, null];

  let objArr: {}[] = [{}, {}];

  let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let matrix2: Array<Array<number>> = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let cube: number[][][] = [
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ],
  ];

  // 튜플(tuple)
  // 특정 형태를 갖는 배열을 의미
  let mixArr: [number, string] = [10, "A"];
  let mixArr2: [number, number[]] = [10, [20, 30]];
  let mixArr3: [number, [], {}] = [10, [], {}];

  let mixTuple: [number, string, object][] = [
    [1, "hello", { key: "value" }],
    [2, "world", { key: "example" }],
  ];
}

