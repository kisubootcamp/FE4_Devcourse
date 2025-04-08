{
  // 코드 블럭 (중괄호)

  // 1. string(문자열)
  let name: string = "Alice";
  name = "Yubin";
  let greeting: string = `Hello, ${name}!`;
  let single: string = "Single Quote";
  let multiline: string = `This is
  a multiline string`;

  // 2. number(숫자)
  let age: number = 10; // 10진수
  let hex: number = 0xff; // 16진수
  let binary: number = 0b1010; // 2진수
  let float: number = 3.14; // 실수

  // 3. boolean(논리형)
  // truthy, falsy
  // falsy -> false, 0, -0, "", null, undefined, NaN
  // truthy -> falsy를 제외한 모든 값
  // 값에 평가가 이루어진다면 위와 같은 값들은 falsy라는 뜻.
  // BUT, 자바스크립트에선 자동적으로 값에 대한 평가를 내리지 않음.
  // 그래서 boolean 타입의 변수에 ""이나 null을 넣으면 오류가 남.
  // 값에 대한 평가를 하는 것에는 대표적으로 if문이 있음.
  let bool1: boolean = true;
  let bool2: boolean = false;
  let bool3: boolean = !0;
  let bool4: boolean = 10 > 20;

  // 4. null
  let nothing: null = null;

  // 5. undefined
  let notDefined: undefined = undefined;

  // 6. any - 아무거나 허용하겠다
  // -> 타입을 검사하지 않겠다는 의미
  // -> 타입 검사를 무력화하는 타입이기 때문에 남용을 피해야 함 (타입스크립트를 사용하는 이점이 떨어지게 됨)
  // -> any 타입은 타입스크립트가 에러를 체크해주지 않기 때문에 전적으로 개발자 탓임.

  // 실무에서 any라는 타입이 꼭 나쁜 건 아님
  // -> 리액트를 타입스크립트로 하다보면 리액트에서 제공하는 타입을 사용해야 되는 경우가 있음
  // -> 리액트에서 내가 모르는 타입을 만나면 일단 임시적으로 any 타입으로 작성하면 됨
  // BUT, 나중에 반드시 수정해야 함 !!
  let anything: any = 10;
  anything = 20;
  anything = "A";
  anything = true;
  anything = null;
  anything = undefined;
  anything.toFixed(2); // toFixed는 숫자 타입일 때만 사용 가능한데, 문법적으로 에러가 안 나고 실행해야 에러가 남.

  // 7. unknown (any의 순한 맛)
  // -> 타입 검사를 하지 않음
  // -> 단, 그 값을 사용하려고 할 때는 타입을 검증해야 함!
  let input: unknown = "Hello";
  input = 10;
  input = true;
  input = undefined;
  input = null;
  input = 3.14;
  // 타입스크립트는 input이 숫자 타입이 아니라 unknown 타입이기 때문에, 안에 든 값이 숫자라고 확신할 수 없어서 에러를 나게 함.
  // -> any와의 차이점
  //console.log(input.toFixed(2));

  // 숫자인지 검증하면 에러가 나지 않음!
  // 따라서 굳이 쓴다면 any보다 unknown을 권장하지만, 둘 다 제거해야 할 타입인 건 같음.
  if (typeof input === "number") console.log(input.toFixed(2));

  // 숫자 타입이라고 명시해주면 문제 없음.
  let input2: number = 3.14;
  console.log(input2.toFixed(2));

  // 8. 배열 (array)
  let arr: [] = []; // 빈 배열일 때는 이렇게 지정해야 함.
  // arr = [10, 20]; // 배열 안의 요소에 대한 타입을 정해주지 않았으므로 에러가 남.
  let numArr: number[] = [10, 20];
  // Array<> : 제네릭
  let numArr2: Array<number> = [10, 20]; // 위의 코드와 같은 의미지만, 요즘은 사용하지 않음.

  let strArr: string[] = ["a", "b", "c"];
  let strArr2: Array<string> = ["a", "b", "c"];

  let boolArr: boolean[] = [true, false];
  let boolArr2: Array<boolean> = [true, false];

  let undefinedArr: undefined[] = [undefined, undefined];
  let undefinedArr2: Array<undefined> = [undefined, undefined];

  let nullArr: null[] = [null, null];
  let nullArr2: Array<null> = [null, null];

  let objArr: object[] = [{}, {}];
  let objArr2: {}[] = [{}, {}];

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
  // 각각의 인덱스마다 타입을 지정 -> 고정된 위치에 고정된 값만 올 수 있다는 단점이 있음
  let mixArr: [number, string] = [10, "A"];
  // 타입 추론 -> 타입스크립트가 타입을 자동으로 추론해주는 기능
  mixArr.push("A");
  // 그렇다고 아예 생뚱맞은 게 들어가는 건 안 됨. 에러가 남.
  //mixArr.push(true);

  let mixArr2: [number, number[]] = [10, [20, 30]];
  let mixArr3: [number, [], {}] = [10, [], {}];

  // object는 {}로도 가능
  let mixTuple: [number, string, object][] = [
    [1, "hello", { key: "value" }],
    [2, "world", { key: "example" }],
  ];

  // number나 string 타입이 어느 위치든 다 올 수 있다는 의미 -> 유니온 타입
  let mixArr4: (number | string)[] = [10, "A"];
  mixArr4 = [20, "B", 30];

  // push 할 때 미리 배열에 들어갈 값을 예측해서 배열 타입을 지정해놓아야 함.
  let pushedArr: (number | string)[] = [];
  pushedArr.push(10);
  pushedArr.push(20);
  pushedArr.push("A");

  // 10. bigint
  // Number.MAX_SAFE_INTEGER 보다 더 큰 숫자는 자바스크립트가 안전하게 다룰 수 없음.
  // 그래서 나온 게 bigint
  console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
  console.log(9007199254740991); // 9007199254740991
  console.log(9007199254740997); // 9007199254740996

  const bigNumber = 9007199254740997n;
  console.log(bigNumber); // 9007199254740997n

  // bigint는 bigint끼리만 계산해야 함.
  // 그냥 숫자에 n을 붙이면 bigint 타입이 되는 것.
  // 100n은 100과 동일하지만, n이 붙는 순간 굉장히 큰 숫자를 다룰 수 있다는 의미로 이해하면 됨.
  console.log(100n + 200n); // 300n
  //console.log(100n + 200); // 오류
}
