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
  const obj: object = {
    name: "홍길동",
    age: 32,
  };
  console.log(obj);
}

{
  /* 연습문제+ */

  // 1. 이 변수의 타입을 지정하세요.
  let employee: {
    id: number;
    name: string;
    contact: {
      email: string;
      phone: string;
    };
    department: string;
  } = {
    id: 123,
    name: "John Doe",
    contact: {
      email: "john.doe@example.com",
      phone: "123-456-7890",
    },
    department: "Engineering",
  };

  // 2. 이 변수의 타입을 지정하세요.
  let students: { name: string; age: number; grade: string }[] = [
    { name: "Alice", age: 22, grade: "A" },
    { name: "Bob", age: 24, grade: "B" },
    { name: "Charlie", age: 21, grade: "C" },
  ];

  // 3. 이 변수의 타입을 지정하세요.
  let numbers: number[] = [10, 20, 30, 40, 50];

  // 4. 이 변수의 타입을 지정하세요.
  let users: { name: string; age: number; active: boolean }[] = [
    { name: "Alice", age: 30, active: true },
    { name: "Bob", age: 25, active: false },
    { name: "Charlie", age: 35, active: true },
  ];

  // 5. 문제: 중첩된 배열
  // 이 변수의 타입을 지정하세요.
  let nestedArray: [string[], number[], string[]] = [
    ["apple", "banana"],
    [1, 2, 3],
    ["cherry"],
  ];

  // 6. 이 변수의 타입을 지정하세요.
  let words: string[] = ["apple", "banana", "cherry", "kiwi"];

  // 7. 이 변수의 타입을 지정하세요.
  let items: (
    | { id: number; name: string; price: number }
    | [string, number]
  )[] = [
    { id: 1, name: "Item1", price: 100 },
    { id: 2, name: "Item2", price: 200 },
    ["discount", 10],
  ];

  // 8. 이 변수의 타입을 지정하세요.
  let profile: {
    user: { name: string; age: number };
    preferences: string[];
    isActive: boolean;
  } = {
    user: { name: "John", age: 30 },
    preferences: ["coding", "reading", "travelling"],
    isActive: true,
  };

  // 9. 이 변수의 타입을 지정하세요.
  let mixedData: (string | number | boolean)[] = [
    "apple",
    10,
    true,
    "banana",
    20,
  ];

  // 10. 이 변수의 타입을 지정하세요.
  let company: {
    name: string;
    address: {
      street: string;
      city: string;
      country: string;
    };
  } = {
    name: "Tech Corp",
    address: {
      street: "123 Main St",
      city: "Tech City",
      country: "Techland",
    },
  };
}

{
  /* 연습문제++ */
  // 이 변수의 타입을 지정하세요.

  // 1. 문제
  let complexData: {
    id: number;
    name: string;
    details: {
      description: string;
      dimensions: {
        height: number;
        width: number;
        depth: number;
      };
      tags: string[];
    };
    reviews: [
      { user: string; rating: number; comment: string },
      { user: string; rating: number; comment: string }
    ];
  } = {
    id: 1,
    name: "Product A",
    details: {
      description: "This is a great product",
      dimensions: {
        height: 10,
        width: 5,
        depth: 2,
      },
      tags: ["sale", "new", "featured"],
    },
    reviews: [
      { user: "Alice", rating: 4.5, comment: "Excellent!" },
      { user: "Bob", rating: 3.0, comment: "Decent product." },
    ],
  };
}
