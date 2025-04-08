// let num: number = 10;
// 타입스크립트는 다른 파일에 있는 코드여도 하나의 파일처럼 인식하고 검사한다. 그렇기 때문에 선행 파일에서 num이 먼저 선언되었기 때문에 여기서는 num이 중복되어 선언될 수 없다.
// 각각의 파일 안에서 중괄호를 사용(코드 블럭을 생성)해서 문제를 해결할 수 있다.
// 코드 블럭을 사용하면 다른 파일의 변수 선언과 중복되어도 사용 가능하다.
// 블럭 스코프를 지정함으로서 스코프 오염을 막는다.
{
  let num: number = 10;
}

{
  // 1. string
  let name: string = "Alice";
  // string으로 선언되어있기 때문에 string타입이 아닌 것으로는 선언이 불가능하다.
  name = "jiyoon";
  let greeting: string = `안녕하세요, ${name}`; // string타입
  let single: string = "Single Quote";
  let multiline: string = `This is
  a nultiline string`;

  // 2. number
  let age: number = 10;
  let hex: number = 0xff;
  let binary: number = 0b1010;
  let float: number = 3.14;
  // 10진수, 16진수, 2진수, 실수에 상관 없이 선언이 가능하다

  // 3. boolean
  // truthy, falsy
  // falsy: false, 0, -0, "", null, undefined, NaN
  // truthy: falsy를 제외한 모든 값
  // truthy / falsy는 완전히 boolean이 아니고 JS에서 자동으로 형변환을 해서 사용하기 때문에 boolean 타입에서 직접적으로 사용할 수 없다
  // -> JS가 자동으로 평가를 내릴 때만 true. false의 느낌으로 사용된다.
  let bool1: boolean = true;
  let bool2: boolean = false;
  let bool3: boolean = !0;
  let bool4: boolean = 10 > 20;

  // 4. null
  let nothing: null = null;

  // 5. undefined
  let notDefined: undefined = undefined;

  // 6. any - 아무거나 허용 -> 타입을 검사하지 않음
  // 타입 검사를 무력화 하는 타입이기 때문에 남용을 피해야 함.
  // 일부 개발 상황에서는 사용할 수도 있지만 이후 any타입을 걷어내야 한다.
  // any를 사용해서 생기는 문제는 개발자 책임
  let anything: any = 10;
  anything = "A";
  anything = true;
  anything = null;
  anything = undefined;

  // 7. unknown (검증을 해야하기에 안전한 any라고 불림)
  // 타입 검사를 하지 않지만, 그 값을 사용하려고 할 때는 타입을 검증해야 함.
  // 최종 코드에는 any와 unknown이 절대 있으면 안된다.
  // !!! 꼭 써야 한다면 any보다는 unknown을 사용하는게 더 낫다 !!!
  let input: unknown = "Hello";
  input = 10;
  input = true;
  input = undefined;
  input = null;
  input = 3.14;

  if (typeof input === "number") {
    console.log(input.toFixed(2));
  } // typeof로 input이 number타입이면 console.log를 실행

  // 8. 배열
  let arr: [] = [];
  // 배열 안에 무슨 값이 들어가느냐가 중요!
  let numArr: number[] = [10, 20]; //<- 배열 안에 들어가 있는 요소의 값이 배열의 타입을 결정하는 데 중요한 역할을 한다 그래서 배열 지정 앞에 타입 지정을 해줘야 한다.
  let numArr2: Array<number> = [10, 20]; // 이제는 더 이상 쓰지 않는다.
  let strArr: string[] = ["A", "B"];
  let boolArr: boolean[] = [true, false];
  let undefinedArr: undefined[] = [undefined, undefined];
  let nullArr: null[] = [null, null];

  let objArr: object[] = [{}, {}]; // = let objArr: {}[] = [{}, {}] object[]보다는 {}[]를 사용하자

  let matrix: number[][] = [
    // 배열 안에 배열이 있음을 표현
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
    // 3차원 배열
  ];

  // 9. 튜플
  // 특정 형태를 갖는 배열을 의미
  // 고정된 배열 형태의 값만 올 수 있다.
  let mixArr: [number, string] = [10, "A"]; // 각 인덱스에 1:1로 타입을 부여
  mixArr.push("A");
  // 타입 추론이란? 타입스크립트가 타입을 자동으로 추론해주는 기능. 지정된 타입 이외는 넣을 수 없음
  let mixArr2: [number, number[]] = [10, [20, 30]];
  let mixArr3: [number, [], {}] = [10, [], {}];

  let mixTuple: [number, string, object][] = [
    [1, "hello", { key: "value" }],
    [2, "world", { key: "example" }],
  ];

  let pushedArr: (number | string)[] = []; // 배열에 push로 들어올 값의 타입이 지정되어있어야 한다.
  pushedArr.push(10);
  pushedArr.push(20);
  pushedArr.push("A");
  // pushedArr.push(true) 만일 지정되지 않은 타입을 push하려 한다면 오류가 발생한다.

  // 10. bigint
  // bigint는 JS의 MAX_SAFE_INTEGER값을 넘기는 수를 문제 없이 다루기 위해 생겨났다. ES2020 이후부터 지원된다.
  console.log(Number.MAX_SAFE_INTEGER);
  const bigNumber: bigint = 9007199254740998n;
  console.log(bigNumber);

  console.log(100n + 200n); // 300n: 숫자에 n을 붙이면 bigint자료형이 된다.
}
