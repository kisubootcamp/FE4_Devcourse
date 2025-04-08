{
  // 1. string
  let name: string = "Alice";
  let greeting: string = `Hello, ${name}`;
  let single: string = "Single Quote";
  let multie: string = `This is
    a multieline string`;

  // 2. number
  let age: number = 10; // 10진수
  let hex: number = 0xff; // 16진수
  let binary: number = 0b10010; // 2진수
  let float: number = 3.14; // 실수

  // 3. boolean
  let bool1: boolean = true;
  let bool2: boolean = false;
  let bool3: boolean = !0;
  let bool4: boolean = 10 <= 20;

  // 4. null
  let nothing: null = null;

  // 5. undefined
  let notDefined: undefined = undefined;

  // 6. any - 아무거나 허용
  let anything: any = 10;
  anything = 20;
  anything = "A";
  anything = true;
  anything = null;
  anything = undefined;
  anything = 3.14;

  // 7. unknown
  let input: unknown = 10;
  input = 20;
  input = "A";
  input = true;
  input = undefined;
  input = 3.14;
  if (typeof input === "number") {
    console.log(input.toFixed(2));
  }

  // 8. 배열(array)
  let arr: [] = [];
  let numArr: number[] = [10, 20];
  let numArr2: Array<number> = [10, 20];

  let strArr: string[] = ["10", "20"];
  let strArr2: Array<string> = ["10", "20"];

  let boolArr: boolean[] = [true, false];
  let boolArr2: Array<boolean> = [true, false];

  let undefinedArr: undefined[] = [undefined, undefined];
  let undefinedArr2: Array<undefined> = [undefined, undefined];

  let nullArr: null[] = [null, null];
  let nullArr2: Array<null> = [null, null];
  let objArr: object[] = [{}, {}];

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
  let mixArr: [number, string] = [10, "a"];
  mixArr = [20, "b"];
  let mixArr2: [number, number[]] = [10, [20, 30]];
  let mixArr3: [number, [], {}] = [10, [], {}];

  let mixTuple: [number, string, object][] = [
    [1, "hello", { key: "value" }],
    [2, "world", { key: "example" }],
  ];

  // 10. bigint
  console.log(Number.MAX_SAFE_INTEGER);
  console.log(9007199254740997);
  const bigNum: bigint = 9007199254740997n;
  console.log(bigNum);

  console.log(100n + 20n);
}
