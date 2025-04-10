{
  // 1. 두 수의 합을 구하는 함수
  const add = function add(n1: number, n2: number): number {
    return n1 + n2;
  };
  const result = add(10, 5);
  console.log(result);

  // const add1 = (n1: number, n2: number): number => n1 + n2;
  // const result1 = add1(10, 5);
  // console.log(result1);
}

{
  // 2. 이름을 받아 인사하는 함수
  const greet = function greet(name: string): string {
    return `Hello, ${name}!`;
  };
  const greeting = greet('Alice');
  console.log(greeting);

  // const greet2 = (name: string): void => console.log(`Hello, ${name}!`);
  // const greeting2 = greet2('Alice');
}

{
  // 3. 숫자 배열을 받아 합을 구하는 함수
  const sumAll = function sumAll(...num: number[]): number {
    return num.reduce((a, b) => a + b, 0);
  };
  const total = sumAll(1, 2, 3, 4);
  console.log(total);

  // const sumAll3 = (...num: number[]): number => num.reduce((a, b) => a + b, 0);
  // const total3 = sumAll3(1, 2, 3, 4);
  // console.log(total3);
}

{
  // 4. 기본값을 설정한 덧셈 함수
  const sum = function sum(num: number, num1: number = 0): number {
    return num + num1;
  };
  const result = sum(5);
  console.log(result);

  // const sum4 = (a: number, b: number = 0): number => a + b;
  // const result4 = sum4(5);
  // console.log(result4);
}

{
  // 5. 두 수를 곱하는 함수
  const multiply: (a: number, b: number) => number = (a, b) => {
    return a * b;
  };
  const product = multiply(4, 5);
  console.log(product);

  // const multiply5 = (a: number, b: number) => a * b;
  // const product5 = multiply5(4, 5);
  // console.log(product5);
}

{
  // 6. 문자열과 숫자를 결합하는 함수
  const concatStringAndNumber = function concatStringAndNumber(
    a: string,
    b: number
  ) {
    return a + b;
  };
  const result = concatStringAndNumber('Hello', 10);
  console.log(result);

  // const concatStringAndNumber6 = (a: string, b: number): string => `${a}${b}`;
  // const result6 = concatStringAndNumber6('Hello', 10);
  // console.log(result6);
}

{
  // 7. 옵셔널 파라미터를 사용한 인사 함수
  const greet = (name: string, message: string = 'Welcome') => {
    console.log(`${message}, ${name}`);
  };
  const greeting1 = greet('Alice', 'Hello');
  const greeting2 = greet('Bob');
}

{
  // 8. 숫자 배열의 최대값을 구하는 함수
  const findMax = function findMax(num: number[]): number {
    let max = num[0];
    for (let i = 0; i < num.length; i++) {
      if (max < num[i]) max = num[i];
    }
    return max;
  };
  const max = findMax([10, 20, 30, 40]);
  console.log(max);

  // const findMax2 = (nums: number[]): number => Math.max(...nums);
  // const max2 = findMax2([10, 20, 30, 40]);
  // console.log(max2);
}

{
  // 9. 단일 숫자를 두 배로 만드는 함수
  const double = function double(num: number) {
    return num * 2;
  };
  const doubled = double(10);
  console.log(doubled);

  // const double9 = (num: number): number => num * 2;
  // const doubled9 = double9(10);
  // console.log(doubled9);
}
