// let num: number = 10;
//typescript 는 전역적으로 type을 검사함
//폴더가 다르더라도 다른 폴더안에 들어가 있는 파일을 인식해서 각각의 파일을 하나의 파일에 들어가 있는 것으로 인식
// -> 그래서 {} (중괄호) 써줘야함

{
  //1. string
  let name: string = "Alice";
  let greeting: string = `Hello, ${name}`;
  let single: string = "Single  Quote";
  let muliLine: string = `This is
    a multiline string`;

  //2. number (숫자)
  let age: number = 10;
  let hex: number = 0xff;
  let binary: number = 0b1010;
  let float: number = 3.14;

  //3. boolean(논리형)
  //truthy, falsy
  //falsy -> 0, -0, "", null, undefined, NaN
  //truthy -> falsy를 제외한 모든 값
  let bool1: boolean = true;
  let bool2: boolean = false;
  let bool3: boolean = !0;
  let bool4: boolean = 10 > 20;

  //4. null
  let nothing: null = null;

  //5. undefined
  let notDefined: undefined = undefined;

  //6. any : 아무거나 허용
  // => type을 검사하지 않음
  // => type 검사를 무력화하는 타입이기 때문에 남용을 피해야 함.
  let anything: any = 10;
  anything = 20;
  anything = true;
  anything = "dtd";
  anything = null;
  anything = undefined;
  // anything.toFixed(2); // 이 error를 체크하지 못함 ,
  // ** toFixed()는 숫자자료형에만 사용 가능

  //7. unknown : any의 순한맛, 안전한 any
  // -> 타입검사를 하지 않음
  // -> 단, 그 값을 사용하려고 할  때는 타입을 검증해야함
  let input: unknown = "Hello";
  input = 10;
  input = true;
  input = undefined;
  input = 3.14;

  //   let input2: number = 3.14;
  if (typeof input === "number") {
    console.log(input.toFixed(0));
  }

  //8. 배열 (array)
  let arr: [] = [];
  let numArr: number[] = [10, 20];
  let strArr: string[] = ["A", "B", "C"];
  let boolArr: boolean[] = [true, false];
  let undefinedArr: undefined[] = [undefined];

  let objArr: {}[] = [{}, {}];

  let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let matrix2: Array<Array<number>>; // 옛날 방식

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

  //9. tuple(튜플) : 특정 형태를 갖는 배열
  // 각각의 인덱스에 해당하는 자료형을 작성
  let mixArr: [number, string] = [10, "a"]; // 고정된 형태에 고정된 값만 올 수 있음
  //   let mixArr: (number | string)[] = [10, "a", 2, "advanced type"];
  let mixArr2: [number, number[]] = [10, [20, 30]];
  let mixArr3: [number, [], {}] = [1, [], {}];

  let mixTuple: [number, string, object][] = [
    [1, "Hello", { key: "value" }],
    [2, "world", { key: "value" }],
  ];

  //10. bigint
  console.log(Number.MAX_SAFE_INTEGER);

  const bigNumber: bigint = 9007199254740998n;
  console.log(bigNumber);
}
