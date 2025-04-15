{
  // 1. string
  let name: string = 'Alice';
  let greeting: string = `Hello, ${name}`;
  let single: string = 'Single Quote';
  let multiLine: string = `This is
  a multiline string`;

  // 2. number
  let age: number = 10;
  // age = "10";
  // age = true;

  let hex: number = 0xff;
  let binary: number = 0b1010;
  let float: number = 3.14;

  // 3. boolean(논리형)
  //truthy, falsy
  //falsy -> 0, -0, "", null, undefined, NaN
  let bool1: boolean = true;
  let bool2: boolean = false;
  let bool3: boolean = !0;
  let bool4: boolean = 10 > 20;

  // 4. null
  let nothing: null = null;

  // 5. undefined
  let notDefined: undefined = undefined;

  // 6. any - 아무거나 허용
  // -> 타입 검사를 무력화 하는 타입이기 때문에 남용을 피해야 함
  let anything: any = 10;
  anything = 'A';
  anything = true;
  anything = null;
  anything = undefined;

  // 7. unknown
  // -> 타입 검사 x
  // -> 그 값을 사용하려고 할 땐 타입을 검증
  let input: unknown = 'Hello';
  input = 10;
  input = true;
  input = undefined;
  input = null;
  input = 3.14;

  if (typeof input === 'number') console.log(input.toFixed(2));

  //8. 배열 (array)
  let arr: [] = [];
  let numArr: number[] = [10, 20];
  let strArr: string[] = ['A', 'B', 'C'];
  let boolArr: boolean[] = [true, false];
  let undefinedArr: undefined[] = [undefined, undefined];
  let nullArr: null[] = [null, null];

  let objArr: {}[] = [{}, {}];

  let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  // 9. 튜플(tuple)
  // 특정 형태를 갖는 배열을 의미
  let mixArr: [number, string] = [10, 'A'];

  let mixArr2: [number, number[]] = [10, [20, 30]];
  let mixArr3: [number, [], {}] = [10, [], {}];

  let mixTuple: [number, string, object][] = [
    [1, 'Hello', { key: 'value' }],
    [2, 'World', { key: 'example' }],
  ];
}
