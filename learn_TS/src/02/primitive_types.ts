{
  // 중괄호는 코드 블럭
  // 똑같은 식별자가 있어도 에러가 나지 않음 (좋다!)

  // boolean
  // truthy, falsy 인 것 까지 다 포함
  // falsy : false, 0, -0, "", null, undefined, NaN
  // truthy : falsy를 제외한 모든 값
  let boo1: boolean = true;
  let boo2: boolean = false;
  let boo3: boolean = !0;
  let boo4: boolean = 10 > 20;

  // null/undefined
  const data: null = null;
  const noting: undefined = undefined;

  // any : 아무거나 허용하겠다.(타입을 검사하지 않겠다.)
  const any: any = 10;

  // unknown (any의 순한맛)
  // 타입 검사를 하지 않음.
  // 그 값을 사용하려 할 때는 타입을 검증해야 함.
  let input: unknown = "Hello";
  input = 10;
  input = true;
  input = undefined;

  // any면 문법적으로 에러를 안보내고 실행했을 때 에러를 내지만
  // unknown은 문법적으로 검사할 때 에러를 내보낸다.
  // console.log(input.toFixed(2));

  // 배열(array) : 안에 들어있는 요소가 중요하다.
  let arr: [] = [];

  // 문자열 요소만 담긴 배열
  const fruits: Array<string> = ["apple", "banana", "orange"];
  const fruits1: string[] = ["apple", "banana", "orange"];

  // 숫자 요소만 담긴 배열
  const luckyNumber: Array<number> = [10, 20, 30];
  const luckyNumber1: number[] = [10, 20, 30];

  // 문자랑 숫자랑 섞인 배열
  const mySave: Array<string | number> = [10, "apple", "banana", 20];
  const mySave1: (string | number)[] = [10, "apple", "banana", 20];

  let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  // tuple
  // 특정 형태를 갖는 배열을 의미
  // 첫 번째 요소는 문자열이고, 두 번째 요소는 숫자형이다.
  const mixArr: [string, number] = ["apple", 10];
  let mixArr1: [number, string] = [10, "A"];
  let mixArr2: [number, number[]] = [10, [20, 30]];
  let mixArr3: [number, [], {}] = [10, [], {}];

  let mixTuple: [number, string, object][] = [
    [1, "hello", { key: "value" }],
    [2, "world", { key: "example" }],
  ];
}
