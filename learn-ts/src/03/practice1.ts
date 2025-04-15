{
  // 1.
  // 함수 정의
  const add = (a: number, b: number): number => a + b;
  // 함수 호출
  const result = add(10, 5);
  console.log(result); // 15

  // 2.
  // 함수 정의
  const greet = (str: string): string => `Hello, ${str}`;

  // 함수 호출
  const greeting = greet('Alice');
  console.log(greeting); // "Hello, Alice!"

  // 3.
  // 함수 정의
  const sumAll = (...rest: number[]): number =>
    rest.reduce((num1, num2) => num1 + num2, 0);

  // 함수 호출
  const total = sumAll(1, 2, 3, 4);
  console.log(total); // 10

  // 4.
  // 함수 정의
  const sum = (a: number, b: number = 0): number => a + b;

  // 함수 호출
  const result2 = sum(5);
  console.log(result2); // 5

  // 5.
  // 함수 정의
  const multiply = (a: number, b: number): number => a * b;

  // 함수 호출
  const product = multiply(4, 5);
  console.log(product); // 20

  // 6.
  // 함수 정의
  const concatStringAndNumber = (a: string, b: number): string => `${a}${b}`;

  // 함수 호출
  const result3 = concatStringAndNumber('Hello', 10);
  console.log(result3); // "Hello10"

  // 7.
  // 함수 정의
  const greet1 = (name: string, message: string = 'Welcome'): string =>
    `${name}, ${message}`;

  // 함수 호출
  const greeting1 = greet1('Alice', 'Hello');
  const greeting2 = greet1('Bob');
  console.log(greeting1); // "Hello, Alice!"
  console.log(greeting2); // "Welcome, Bob!"

  // 8.
  // 함수 정의
  const findMax = (nums: number[]): number => Math.max(...nums);

  // 함수 호출
  const max = findMax([10, 20, 30, 40]);
  console.log(max); // 40

  // 9.
  // 함수 정의
  const double = (a: number): number => a * 2;

  // 함수 호출
  const doubled = double(10);
  console.log(doubled); // 20
}
