{
  // 코드 블럭 (중괄호)
  // 이렇게 중괄호를 치면 각각의 파일 안에서 독립적인 코드 수행 가능(블록 스코프를 지정함으로써 코드 오염?을 막음)
  // 블록 스코프를 지원하는 키워드: let, const

  // 1. string
  let name: string = "Alice";
  let greeting: string = `Hello, ${name}`; // 이것도 string 타입
  let single: string = "Single Quote";
  let multiLine: string = `This is
  a multiline string`;

  // 2. number(숫자)
  let age: number = 10; // 10진수
  let hex: number = 0xff; // 16진수
  let binary: number = 0b1010; // 2진수
  let float: number = 3.14; // 실수 모두 number 타입, c나 c++이랑 다름

  // 3. boolean(논리형)
  // truthy, falsy: JS가 자동으로 값을 판단? 정의?하는 값
  // falsy -> 0, -, " ", null, undefined, NaN
  // truthy -> falsy를 제외한 모든 값
  let bool1: boolean = true;
  let bool2: boolean = false;
  let bool3: boolean = !0;
  let bool4: boolean = 10 > 20;

  // 4. null
  let nothing: null = null;

  // 5. undefined
  let notDefined: undefined = undefined;

  // 6. any - 아무거나 허용하겠다
  // 타입을 검사하지 않겠다.
  // -> 타입 검사를 무력화하는 타입이기 때문에 남용을 피해야 함.
  // -> 전부 개발자 탓.(실행되고 나서 오류를 발견함)
  let anything: any = 10;
  anything = true;
  anything = "A";
  anything = undefined;
  anything = null;
  anything = true;
  //anything.toFixed(2);

  // 7. unknown(any의 순한맛, 안전한 any)
  // 타입 검사를 하지 않으나 그 값을 사용하려고 할 때는 타입을 검증 해야함.
  // any는 문법적인 오류를 검사해주지 않고 unknown은 검사함.
  let input: unknown = "Hello";
  input = 10;
  input = true;
  input = undefined;
  input = null;
  input = 3.14;

  if (typeof input === "number") {
    console.log(input.toFixed(2));
  }

  // 8. 배열(array)
  // 빈 배열은 아래와 같은 방식으로 지정할 수 없다.
  let arr: [] = [];

  let numArr: number[] = [10, 20];
  let numArr2: Array<number> = [10, 20];

  let strArr: string[] = ["A", "B", "C"];
  let boolArr: boolean[] = [true, false];
  let undefinedArr: undefined[] = [undefined, undefined];
  let nullArr: null[] = [null, null];

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
  // 고정된 배열의 형태만
  //let mixArr: [number, string] = [10, "A"]; 아래와 같음
  let mixArr: (number | string)[] = [10, "A"];
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

  //console.log(100n + 200n); //300n
  //console.log(100n + 200);  //불가 bigint는 bigint끼리 더하기 가능
}
