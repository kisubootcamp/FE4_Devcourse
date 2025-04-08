{
  // 1. 기본 타입 지정
  let str1: string = 'junsu';
  let num1: number = 10;
  let bool1: boolean = true;
  let nothing: null = null;
  let notDefined: undefined = undefined;

  // 2. any - 아무거나 허용
  // -> 타입 검사를 무력화 하는 타입이기 때문에 남용을 피해야 함함
  let anything: any = 10;
  anything = 'A';
  anything = true;
  anything = null;
  anything = undefined;

  // 3. unknown
  // -> 타입 검사 x
  // -> 그 값을 사용하려고 할 땐 타입을 검증
  let input: unknown = 'Hello';
  input = 10;
  input = true;
  input = undefined;
  input = null;
  input = 3.14;

  if (typeof input === 'number') console.log(input.toFixed(2));

  // 4. 배열
  let arr: [] = [];
  let numArr: number[] = [10, 20];
  let strArr: string[] = ['A', 'B', 'C'];
  let boolArr: boolean[] = [true, false];
  let undefinedArr: undefined[] = [undefined, undefined];
  let nullArr: null[] = [null, null];

  // 5. 튜플
  let mixTuple: [number, string, object][] = [
    [1, 'Hello', { key: 'value' }],
    [2, 'World', { key: 'example' }],
  ];

  // 6. 객체
  let person: {
    name: string;
    likesFood: string[];
    address: { street: string; city: string };
    isLoggedIn: boolean;
  } = {
    name: 'John',
    likesFood: ['apple', 'banana'],
    address: {
      street: 'gang-nam',
      city: 'seoul',
    },
    isLoggedIn: false,
  };
}
