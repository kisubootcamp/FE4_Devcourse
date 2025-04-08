{
  // 코드 블럭 (중괄호)
  let num: number = 10;

  // 1. string 문자
  let name: string = "Alice";
  let greeting: string = `Hello, ${name}`;
  let single: string = "Single Quote";
  let multi: string = `This is
  a multi`;

  // 2. number 숫자
  let age: number = 10; //10진수
  let hex: number = 0xff; //16진수
  let binary: number = 0b1010; //2진수
  let float: number = 3.14; //실수

  // 3. boolean 논리형
  // falsy -> false, 0 , -음수, "", null, undefined, NaN
  // truthy -> fasly 제외 모든 값
  let bool1: boolean = true;
  let bool2: boolean = false;
  let bool3: boolean = !0;
  let bool4: boolean = 10 > 20;

  // 4. null
  let nothing: null = null;

  // 5. undefined
  let notDef: undefined = undefined;

  // 6. any - 아무거나 허용하겠다
  // 타입을 검사하지 않겠다
  // 타입 검사를 무력화 하는 타입이기 때문에 남용을 피해야 함
  let anything: any = 10;
  anything = 20;
  anything = "A";
  anything = true;
  anything = null;
  anything = undefined;

  anything.toFixed(2); // toFixed 는 숫자에만 사용가능

  // 7. unknown (any 순한맛)
  // -> 타입 검사를 하지 않음
  // -> 단 그 값을 사용하려고 할 때는 타입을 검증해야 함
  let input: unknown = "hi";
  input = 20;
  input = true;
  input = null;
  input = undefined;
  input = 3.14;
  if (typeof input === "number") {
    console.log(input.toFixed(0));
  }

  // any 와 unknown 차이
  // 둘다 모든 타입을 담을 수 있지만, 안전성 측면에서 차이가 있다.
  // any 사용 시 검사 없이 바로 사용
  // unknown 값을 사용 전에 타입 체크 함, 타입 추론 유도

  // 8. 배열
  let arr: [] = [];
  let numArr: number[] = [10, 20]; // 숫자배열일때는 number[]
  let numArr2: Array<number> = [10, 20]; //구버전, ㅇ런게 있구나 정도

  let strArr: string[] = ["a", "b"]; // 문자배열일때는 string[]
  let boolArr: boolean[] = [true, false]; // 논리배열일때는 boolean[]
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
  // 특정 형태를 갖는 배열 의미
  // 각각의 자리에 맞춰서 지정
  let mixArr: [number, string] = [10, "a"];
  let mixAtt: (number | string)[] = [10, "a"];
  let mixArr2: [number, number[]] = [10, [20, 30]];
  let mixArr3: [number, [], {}] = [10, [], {}];

  // 10 bigint : 숫자의 n 을 붙이면 bigint
  //   Number.MAX_SAFE_INTEGER;
  // 자바스크립트에서 정교하게 표현해줄수있는 수에서 더 표현해주기 위해 쓰는 bigint
  const bigNumber: bigint = 90000000000000000n;

  // 객체
  // null 과 undefined 를 제외한 모든 값을 허용하겠다
  let obj: {} = {};
  // 유틸리티 타입 (= 유틸리티 함수)
  // Record<string, never> : 객체의 키값은 문자열, 값은 절대 올 수 없다
  let obj1: Record<string, never> = {};

  // 빈객체는 object 넣어주면 됨
  // 근데 완벽한 빈객체는 아님, 굉장히 특수한값
  let obj2: object = {};

  let user: object = {
    name: "jieun",
    age: 20,
  };

  // 권장방식
  let user1: { name: string; age: number } = {
    name: "jieun",
    age: 20,
  };

  // , 해도 되지만 권장은 ;
  let user2: { name: string; age: number } = {
    name: "jieun",
    age: 20,
  };

  let person: {
    name: string;
    likesFood: string[];
    address: {
      street: string;
      city: string;
    };
  } = {
    name: "john",
    likesFood: ["apple", "banana"],
    address: {
      street: "gang",
      city: "seoul",
    },
  };
}
