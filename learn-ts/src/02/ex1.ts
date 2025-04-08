/* TS 기본 타입 연습문제 */
{
  /* 연습문제 */

  // 1. 문제: 문자열 변수 선언
  // string 타입을 사용하여 "Hello"라는 값을 갖는 문자열 변수를 선언하고, 이 값을 출력하세요.
  const greeting: string = "Hello";
  console.log(greeting);

  // 2. 문제: 숫자 변수 선언
  // `number` 타입을 사용하여 `42`라는 숫자를 갖는 변수를 선언하고, 출력하세요.
  const num: number = 42;
  console.log(num);

  // 3. 문제: 불리언 변수 선언
  // boolean 타입을 사용하여 true 값을 갖는 변수를 선언하고, 출력하세요.
  const bool: boolean = true;
  console.log(bool);

  // 4. 문제: 숫자 배열 선언
  // Array<number> 또는 number[] 타입을 사용하여 숫자 배열을 선언하고, 배열의 요소들을 출력하세요.
  const numArr: number[] = [1, 2, 3];
  console.log(numArr);

  // 5. 문제: 문자열 배열 선언
  // Array<string> 또는 string[] 타입을 사용하여 문자열 배열을 선언하고, 배열의 요소들을 출력하세요.
  const stringArr: string[] = ["hi", "hello"];
  console.log(stringArr);

  // 6. 문제: 튜플 변수 선언
  // tuple 타입을 사용하여 숫자와 문자열이 섞인 튜플을 선언하고, 이 값을 출력하세요.
  const mixArr: [number, string] = [10, "A"];
  console.log(mixArr);

  // 7. 문제: null 값 할당
  // null 타입을 사용하여 null 값을 갖는 변수를 선언하고, 이를 출력하세요.
  const nothing: null = null;
  console.log(nothing);

  // 8. 문제: undefined 값 할당
  // undefined 타입을 사용하여 undefined 값을 갖는 변수를 선언하고, 이를 출력하세요.
  const notDefined: undefined = undefined;
  console.log(notDefined);

  // 9. 문제: 객체 선언
  // object 타입을 사용하여 이름과 나이를 포함하는 객체를 선언하고, 이를 출력하세요.
  const obj: {
    name: string;
    age: number;
  } = {
    name: "홍길동",
    age: 32,
  };
  console.log(obj);
}
