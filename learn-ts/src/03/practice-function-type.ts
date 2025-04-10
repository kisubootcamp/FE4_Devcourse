{
  // Q1
  // 함수 정의
  const add = (num1: number, num2: number): number => num1 + num2;

  // 함수 호출
  const result = add(10, 5);
  console.log(result); // 15
}

{
  // Q2
  // 함수 정의
  const greet = (name: string): string => `Hello, ${name}`;

  // 함수 호출
  const greeting = greet("Alice");
  console.log(greeting); // "Hello, Alice!"
}

{
  // Q3
  // 함수 정의
  const sumAll = (...rest: number[]): number =>
    rest.reduce((acc, num) => acc + num, 0);

  // 함수 호출
  const total = sumAll(1, 2, 3, 4);
  console.log(total); // 10
}

{
  // Q4
  // 함수 정의
  const sum = (a: number, b: number = 0): number => a + b;

  // 함수 호출
  const result = sum(5);
  console.log(result); // 5
}

{
  // Q5
  // 함수 정의
  const multiply = (num1: number, num2: number): number => num1 * num2;

  // 함수 호출
  const product = multiply(4, 5);
  console.log(product); // 20
}

{
  // Q6
  // 함수 정의
  const concatStringAndNumber = (str: string, num: number): string =>
    `${str}${num}`;

  // 함수 호출
  const result = concatStringAndNumber("Hello", 10);
  console.log(result); // "Hello10"
}

{
  // Q7
  // 함수 정의
  const greet = (name: string, message: string = "Welcome"): string =>
    `${message}, ${name}!`;

  // 함수 호출
  const greeting1 = greet("Alice", "Hello");
  const greeting2 = greet("Bob");
  console.log(greeting1); // "Hello, Alice!"
  console.log(greeting2); // "Welcome, Bob!"
}

{
  // Q8
  // 함수 정의
  const findMax = (arr: number[]): number => Math.max(...arr);

  // 함수 호출
  const max = findMax([10, 20, 30, 40]);
  console.log(max); // 40
}

{
  // Q9
  // 함수 정의
  const double = (num: number): number => num * 2;

  // 함수 호출
  const doubled = double(10);
  console.log(doubled); // 20
}

// 연습문제+
