{
  // 1. string
  let name3: string = 'Alice';
  let greeting: string = `Hello ${name3}`;
  let single: string = 'Single Quote';
  let multiLine: string = `This is
  a multiLine string`;

  // 2. number
  let age: number = 10; // 10진수
  let hex: number = 0xff; // 16진수
  let binary: number = 0b1010; // 2진수
  let float: number = 3.14; // 실수

  // 3. boolean
  // truthy
  // falsy -> false, 0, -0, "", null, undefined, NaN
  let bool1: boolean = true;
  let bool2: boolean = false;
  let bool3: boolean = !0;
  let bool4: boolean = 10 > 20;

  // 4. null
  let nothing: null = null;

  // 5. undefined
  let notDefined: undefined = undefined;

  // 6. any - 아무거나 허용하겠다.
  let anything: any = 10;
  anything = 'A';
  anything = true;
  anything = null;
  anything = undefined;

  // 7. unknown - 타입 검사를 하지않고, 값을 사용할 때 타입을 검증
  let input: unknown = 'Hi';
  input = true;
  input = 10;
  console.log(input);

  if (typeof input === 'number') console.log(input.toFixed(0));

  // 8. 배열
  let arr: [] = [];

  let numArr: number[] = [10, 20];
  let numArr2: Array<number> = [10, 20];

  let strArr: string[] = ['A', 'B', 'C'];
  let strArr2: Array<string> = ['A', 'B', 'C'];

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

  // 9. 튜블 - 특정 형태를 갖는 배열
  let mixArr: [number, string] = [10, 'a'];
  let mixArr2: [Number, Number[]] = [10, [20, 3]];
  let mixArr3: [number, [], {}] = [10, [], {}];

  let mixTuple: [number, string, object][] = [
    [1, 'hello', { key: 'value' }],
    [2, 'world', { key: 'example' }],
  ];

  // 10. bigint
  const bigNumber: bigint = 9007199254780990n;
}
