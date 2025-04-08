{
  //1. string
  let name: string = "Alice";
  let greeting: string = `Hello, ${name}`;
  let single: string = "Single Quote";
  let mulitLine: string = `This is a multiline string`;

  //2. number 숫자
  let age: number = 10;
  //typescript는 실수나 정수나 16진수나 상관없이 number로 선언

  //3. boolean(논리형)
  let bool1: boolean = true;
  let bool2: boolean = false;

  let bool3: boolean = !0;

  //4. null
  let nothing: null = null;

  //5. undifinded
  let notDedifined: undefined = undefined;

  //6. any (아무타입이나 다) => 남용을 피해야함
  let anything: any = 10;
  anything = "hi"; //오류안생김

  //7. unknown(any 순한 맛 )
  //타입 검사 안함
  //값을 사용하려고 할 때 검사함
  //변수 타입을 잘 모르겠으면 이걸 쓰는게 권장
  //개발 과정에선 쓰고 최종에선 없애기
  let input: unknown = "Hello";
  input = 10;
  input = true;
  input = undefined;
  if (typeof input === "number") {
    console.log(input.toFixed(0));
  }

  //8. 배열
  let arr: [] = [];
  let numArr: number[] = [10, 20];
  let strArr: String[] = ["hi", "im"];
  let boolArr: boolean[] = [true, false];
  let undefinedArr: undefined[] = [undefined, undefined];
  let objArr: {}[] = [{}, {}];
  let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  //예전 방법처럼 명시도 가능
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

  // 9. 튜플
  // 특정 형태를 갖는 배열을 의미
  //각각의 원소가 어떤 타입을 가지는지 명시
  let mixArr: [number, string] = [10, "a"];
  let mixArr2: [number, number[]] = [10, [20, 30]];
  let mixArr3: [number, [], {}] = [10, [], {}];

  let mixTuple: [number, string, object][] = [
    [1, "hello", { key: "value" }],
    [2, "world", { key: "example" }],
  ];

  //10. bigint
  const bigNumber: bigint = 9007199254740997n;
  console.log(bigNumber);
}
