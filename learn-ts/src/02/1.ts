{
  // 1. string(문자열)
  let name: string = "Alice";
  let greeting: string = `Hello, ${name}`;
  let ssingle: string = "Single Quote";
  let multiLine: string = `Thie is a
  multiline string`;

  // 2. number(숫자)
  let age: number = 10; // 10진수
  let hex: number = 0xff; // 16진수
  let binary: number = 0b1010; // 2진수
  let float: number = 3.14; // 실수

  // 3. boolean(논리형)
  // truthy, falsy
  // false -> false, 0, -0, "", null, undefined, NaN
  // truthy -> falsy를 제외한 모든 값
  let bool1: boolean = true;
  let bool2: boolean = false;
  let bool3: boolean = 10 > 20;
  let bool4: boolean = !0;

  // 4. null
  let nothing: null = null;

  // 5. undefined
  let notDefined: undefined = undefined;

  // 6. any - 아무거나 허용하겠다
  // -> 타입을 검사하지 않겠다.
  // -> 타입 검사를 무력화하는 타입이기 때문에 남용을 피해야 함
  let anything: any = 10;
  anything = "";
  anything = 10;
  anything = true;
  anything = 20;
  anything = undefined;

  // 7. unknown(any 순한맛, 안전한 any)
  // -> 타입 검사를 하지 않는다.
  // -> 단, 그 값을 사용하려고 할 떄는 타입을 검증해야 한다.
  let input: unknown = "Hello";
  input = 10;
  input = true;
  input = undefined;
  input = null;
  input = 3.14;

  if (typeof input === "number") {
    // console.log(input.toFixed(2));
  }

  // 8. 배열 (array)
  let numArr: number[] = [1, 2, 3];
  let numArr2: Array<number> = [4, 5, 6]; //구식

  let strArr: string[] = ["A", "B", "C"];
  let bolArr: boolean[] = [true, false];
  let objArr: {}[] = [{}, {}];

  let matrix: number[][] = [
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
  // 고정된 길이와 형태의 값만 올 수 있다.
  let mixArr: [number[], [string, number]] = [
    [10, 7],
    ["A", 3],
  ];
  // 타입 추론 -> 타입 스크립트가 타입을 자동으로 추론해주는 기능
  // 대신 이미 입력된 타입 중 하나여야함
  mixArr.push(["31", 14]);

  let mixTuple: [number, string, {}][] = [
    [1, "hello", { key: "value" }],
    [2, "world", { key: "example" }],
  ];

  // 10. bigint
  console.log(9007199254740997);

  const bigNumber: bigint = 9007199254740997n;
  console.log(bigNumber);

  console.log(100n + 200n); // 300n
  console.log(100n + BigInt(200));
}
