{
  // 1. string
  let name: string = "Alice";
  let greeting: string = `Hello, ${name}`;
  let single: string = "Single Quote";
  let multiLine: string = `This is
  a multiline string`;

  // 2. number(숫자)
  let age: number = 10; // 10진수
  let hex: number = 0xff; // 16진수
  let binary: number = 0b1010; // 2진수
  let float: number = 3.14; // 실수

  // 3. boolean(논리형)
  // truthy, falsy
  // falsy ->  0, -0, "", null, undefined, NaN
  // truthy? -> falsy를 제외한 모든 값
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
  // -> 타입 검사를 무력화 하는 타입이기 때문에 남용을 피해야 함.
  // -> 전부 개발자 탓.
  let anything: any = 10;
  anything = 20;
  anything = 30;
  anything = "A";
  anything = true;
  anything = null;
  anything = undefined;
  // anything.toFixed(2);

  // 7. unknown(any 순한맛, 안전한 any)
  // -> 타입 검사를 하지 않아요.
  // -> 단, 그 값을 사용하려고 할 때는 타입을 검증해야 함.
  let input: unknown = "Hello";
  input = 10;
  input = true;
  input = undefined;
  input = null;
  input = 3.14;

  if (typeof input === "number") {
    console.log(input.toFixed(0));
  }

  // 8. 배열 (array)
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

  // 9. 튜플(tuple)
  // 특정 형태를 갖는 배열을 의미
  // 타입 추론 -> 타입스크립트가 타입을 자동으로 추론해주는 기능
  let mixArr: [number, string] = [10, "A"];

  let mixArr2: [number, number[]] = [10, [20, 30]];
  let mixArr3: [number, [], {}] = [10, [], {}];

  let mixTuple: [number, string, object][] = [
    [1, "hello", { key: "value" }],
    [2, "world", { key: "example" }],
  ];

  // 10. bigint
  console.log(9007199254740997);
  const bigNumber: bigint = 9007199254740997n;
  console.log(bigNumber);
  console.log(100n + 1n); // 300엔
}
