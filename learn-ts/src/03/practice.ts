// 함수 타입

// 연습문제
{
  // 1. 두 수의 합을 구하는 함수
  // 함수 정의
  const add = (a: number, b: number): number => a + b;
  // 함수 호출
  const result = add(10, 5);
  console.log(result); // 15
}
{
  // 2. 이름을 받아 인사하는 함수
  // 함수 정의
  const greet = (name: string): string => `Hello, ${name}!`;
  // 함수 호출
  const greeting = greet("Alice");
  console.log(greeting); // "Hello, Alice!"
}
{
  // 3. 숫자 배열을 받아 합을 구하는 함수
  // 함수 정의
  const sumAll = (...nums: number[]): number =>
    nums.reduce((sum, num) => sum + num, 0); // 0은 초기값
  // 함수 호출
  const total = sumAll(1, 2, 3, 4);
  console.log(total); // 10
}
{
  // 4.기본값을 설정한 덧셈 함수
  // 함수 정의
  const sum = (a: number, b: number = 0): number => a + b;
  // 함수 호출
  const result = sum(5);
  console.log(result); // 5
}
{
  // 5. 두 수를 곱하는 함
  // 함수 정의
  const multiply = (a: number, b: number): number => a * b;
  // 함수 호출
  const product = multiply(4, 5);
  console.log(product); // 20
}
{
  // 6. 문자열과 숫자를 결합하는 함수
  // 함수 정의
  const concatStringAndNumber = (a: string, b: number): string => `${a}${b}`;
  // 함수 호출
  const result = concatStringAndNumber("Hello", 10);
  console.log(result); // "Hello10"
}
{
  // 7. 옵셔널 파라미터를 사용한 인사 함수
  // 함수 정의
  const greet = (name: string, message: string = "Welcome"): void => {
    console.log(`${message}, ${name}`);
  };
  // 함수 호출
  const greeting1 = greet("Alice", "Hello");
  const greeting2 = greet("Bob");
  console.log(greeting1); // "Hello, Alice!"
  console.log(greeting2); // "Welcome, Bob!"
}
{
  // 8. 숫자 배열의 최대값을 구하는 함수
  // 함수 정의
  const findMax = (nums: number[]): number => Math.max(...nums); //풀어주는 상태?
  // 함수 호출
  const max = findMax([10, 20, 30, 40]);
  console.log(max); // 40
}
{
  // 9. 단일 숫자를 두 배로 만드는 함수
  // 함수 정의
  const double = (num: number): number => num * 2;
  // 함수 호출
  const doubled = double(10);
  console.log(doubled); // 20
}

// 연습문제 +
{
  // 1. 여러 개의 숫자 배열을 받아 합을 구하는 함수*
  // 함수 정의
  const sumAllNumbers = (...arr: number[][]): number[] =>
    arr.map((nums) => nums.reduce((sum, num) => sum + num, 0));
  // 함수 호출
  const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result); // [3, 12, 13]
}
{
  // 2. 숫자 또는 문자열을 받아 그 값을 두 배로 만드는 함수
  // 함수 정의
  const doubleValue = (value: number | string): number =>
    typeof value === "number" ? value * 2 : value.length * 2;

  // 함수 호출
  const result1 = doubleValue(5);
  const result2 = doubleValue("hello");
  console.log(result1); // 10
  console.log(result2); // 10
}
{
  // 3. 두 숫자 배열을 받아 각 배열의 곱을 구하는 함수
  // 함수 정의
  // const multiplyArrays = ...
  // // 함수 호출
  // const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
  // console.log(result); // [4, 10, 18]
}
