{
  // 1. string
  let name: string = "Alice";
  let greeting: string = `Hello, ${name}`;
  let single: string = "Single Quoto";
  let multiLine: string = `This is
    a multiline string`;

  // 2. number(숫자)
  let age: number = 10; // 10진수
  let hex: number = 0xff; // 26진수
  let binary: number = 0b1010; // 2진수
  let float: number = 3.14; // 실수

  // 3. boolean(논리형)
  // truthy, falsy -> 자바스크립트에서는 가능하지만 타입스크립트는 업격한 타입형을 판별하기때문에 타입스크립트에서는 에러가 난다.
  let bool1: boolean = true;
  let bool2: boolean = false;
  let bool3: boolean = !0;
  let bool4: boolean = 10 > 20;

  // 4. null
  let nothing: null = null;

  // 5. undefined
  let notDefined: undefined = undefined;

  // 6. any - 아무거나 허용하겠다
  // -> 타입을 검사하지 않겠다.
  // -> 타입 검사를 무력화하는 타입이기 때문에 남용을 피해야 함. 에러가 난다면 개발자 탓.
  let anything: any = 10;
  anything = 20;
  anything = "A";
  anything = true;
  anything = null;
  anything = undefined;
  // anything.toFixed(2);      // toFixed는 숫자형 타입에만 사용할 수 있지만 any는 타입검사를 하지 않기 때문에 에러로 표시하지 않음.

  // 7. unknown(any 순한맛, 안전한 any)
  // -> 타입 검사를 하지 않음. 단, 그 값을 사용하려고 할 때는 타입을 검증해야 함.
  let input: unknown = "Hello";
  input = 10;
  input = true;
  input = undefined;
  input = null;
  input = 3.14;

  if (typeof input === "number") console.log(input.toFixed(0));

  // 8. 배열 (Array)
  let arr: [] = [];

  //숫자 타입의 배열
  let numArr: number[] = [10, 20];
  let numArr2: Array<number> = [10, 20];
  // 문자 타입의 배열
  let strArr: string[] = ["apple", "banana"];
  let strArr2: Array<string> = ["orange", "pineapple"];

  // 논리형 타입의 배열
  let boolArr: boolean[] = [true, false];
  let boolArr2: Array<boolean> = [false, true];

  // undefined 배열
  let undefinedArr: undefined[] = [undefined, undefined];
  let undefinedArr2: Array<undefined> = [undefined, undefined];
  // null 배열
  let nullArr: null[] = [null, null];
  let nullArr2: Array<null> = [null, null];

  // object 배열
  let objArr: {}[] = [{}, {}];
  let objArr2: Array<{}> = [{}, {}];

  // 중첩배열
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
      [5, 6],
    ],
  ];

  let cube2: Array<Array<Array<number>>> = [
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
  ];

  // 9. 튜플(tuple)
  // 특정 형태를 갖는 배열을 의미
  // 단점: 고정된 인덱스에 고정된 값만 올 수 있음.
  let mixArr: [number, number, string] = [10, 20, "A"];
  let mixArr2: [number, number[]] = [10, [20, 30]];
  let mixArr3: [number, [], {}] = [10, [], {}];

  let mixTuple: [number, string, {}][] = [
    [1, "hello", { key: "value" }],
    [2, "world", { key: "value2" }],
  ];

  // 특정 형태 배열 -> 추후에 다시 설명
  let Arr3: (string | number)[] = ["orange", "pineapple", 30];

  // 배열에 push를 할 때 타입설정
  let pushedArr: (string | number)[] = [];
  pushedArr.push(10);
  pushedArr.push(20);
  pushedArr.push("v");

  console.log(pushedArr); // [ 10, 20, 'v' ]

  // 튜플에 push를 할 때 타입설정
  let mixArrr: [number, string] = [10, "A"];
  mixArrr.push("A");
  console.log(mixArrr);

  // 10. bigint
  console.log(Number.MAX_SAFE_INTEGER);

  const bigNumber: bigint = 9007199254740997n;
  console.log(bigNumber);
  console.log(100n + 1n); //101n
}
