{
  // 1. string
  let name: string = 'Alice';
  name = 'Bob';

  let greeting: string = `hello, ${name}`;
  let multiLine: string = `This is a multiline string`;

  // 2. number
  let age: number = 10; // 10진수
  let hex: number = 0xff; // 16진수
  let binary: number = 0b1010; // 2진수
  let float: number = 3.14; // 실수

  // 3. boolean
  let bool1: boolean = true;
  let bool2: boolean = false;
  let bool3: boolean = !0;
  let bool4: boolean = 10 > 20;

  // 4. null
  let nothing: null = null;

  // 5. undefined
  let notDefined: undefined = undefined;

  // 6. any
  let anything: any = 10;
  anything = 30;
  anything = 'sy';
  anything = null;
  anything = true;

  // 7. unknown
  let input: unknown = 'Hello';
  input = 10;
  input = true;
  input = undefined;
  input = null;
  input = 3.14;

  if (typeof input === 'number') {
    console.log(input.toFixed(2));
  }

  // 8. 배열
  let arr: [] = [];
  let numArr: number[] = [10, 20];
  let numArr2: Array<number> = [10, 20];

  let strArr: string[] = ['A', 'B'];
  let strArr2: Array<string> = ['A', 'B'];

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

  // 9. 튜플(tuple)
  let tupleArr: [number, string] = [10, 'A'];
  let tupleArr2: (number | string)[] = [10, 'A'];
  tupleArr2 = [10, 'A', 30, 'B'];

  let tupleArr3: [number, number[]] = [10, [20, 30]];
  let tupleArr4: [number, [], {}] = [10, [], {}];

  let mixTuple: [number, string, object][] = [
    [1, 'hello', { key: 'value' }],
    [2, 'hello', { key: 'ex' }],
  ];

  // 10. bigint
  console.log(Number.MAX_SAFE_INTEGER);
  const bigNumber: bigint = 9007199254740997n;
  console.log(bigNumber);
}
