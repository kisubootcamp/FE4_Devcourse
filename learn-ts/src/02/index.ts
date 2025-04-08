{
  // 1. string
  let name: string = 'Alice';
  let greeting: string = `Hello, ${name}`;
  let multiline: string = `This is
  a multiline string`;

  // 2. number
  let age: number = 10;
  // 한번 정의하면 다른 값을 정의할 수 없다.

  let hex: number = 0xff; //16진수
  let binary: number = 0b1010; // 2진수
  let float: number = 3.14; //실수

  // 3. boolean
  let bool1: boolean = true;
  let bool2: boolean = false;

  // truthy -> falsy가 아닌 모든 값
  // falsy  -> 0, -0, "", null, undefined, NaN
  let bool3: boolean = !0;
  let bool4: boolean = 10 > 20;

  // 얘네들은
  // let bool5: boolean = NaN;

  // 4. null
  let nothing: null = null;

  // 5. undefined
  let notDefined: undefined = undefined;

  // 6. any = 아무거나 허용하겠다 (타입을 검사하지 않겠다.)
  // 타입 검사를 무력화하는 타입이기 때문에 남용을 피해야한다.
  let anything: any = 10;
  anything = 20;
  anything = 30;
  anything = 'A';
  anything = true;
  anything = null;
  anything = undefined;
  anything.toFixed(2); //지금은 문제가 없지만, 코드를 실행하면 에러가 뜬다.
  // 타입 검사를 무력화 하기 때문에!

  // 7. unkown (any의 순한맛, 안전한 any  ===> any 쓸거면 unkown 써라)
  // 타입 검사를 하지 않는다.
  // 단, 그 값을 사용하려고 할 때는 타입을 검증해야한다.
  let input: unknown = 'Hello';
  input = 10;
  input = true;
  input = undefined;
  input = null;
  input = 3.14;
  console.log(input.toFixed(2)); // error, 문법적으로도 no error, 실행하면 error

  let input2: number = 3.14;
  console.log(input2.toFixed(2)); // no error

  if (typeof input === 'number') {
    console.log(input.toFixed(0));
  }

  // 8. 배열
  let arr: [] = [];
  // arr = [10,20] // 이렇게 하면 안된다.
  let numArr: number[] = []; // string[] ,boolean[], null[]

  let numArr2: Array<number> = [10, 20]; //이것도 되는데 이젠 안씀

  let objArr: {}[] = [{}, {}];

  let matring: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let cube: number[][][] = [
    [
      [1, 2],
      [3, 4],
    ],
  ];

  // 9. 튜플 (특정 형태를 갖는 배열)
  // 단점 : 고정된 형태의 배열 값만 올 수 있다.
  // 그래서 실무에서 자주 사용하진 않는다.
  let mixArr: [number, string] = [10, 'A'];

  // let mixArr: (number | string)[] = [10,"A"], [10,"A",30] 이렇게 쓰면 다 상관없다.

  let mixArr2: [number, number[]] = [10, [20, 30]];
  let mixArr3: [number, [], {}] = [10, [], {}];

  let mixTuple: [number, string, object][] = [
    [1, 'hello', { key: 'value' }],
    [2, 'hello', { key: 'value' }],
  ];

  // 10. bigint  - 은행 아니면 잘 안씀

  console.log(Number.MAX_SAFE_INTEGER); //9007199254740996

  const bigNumber = 9007199254740997n;
  console.log(bigNumber);
  console.log(100n + 1n);
}
