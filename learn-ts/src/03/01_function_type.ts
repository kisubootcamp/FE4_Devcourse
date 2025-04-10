// 함수 타입 연습 문제
{
  // 1. 두 수의 합을 구하는 함수
  // 함수 정의
  const add = (a: number, b: number): number => a + b;

  // 함수 호출
  const result = add(10, 5);
  console.log(result); // 15
}

console.log("------------------------------");

{
  // 2. 이름을 받아 인사하는 함수
  // 함수 정의
  const greet = (name: string): string => `Hello, ${name}!`;

  // 함수 호출
  const greeting = greet("Alice");
  console.log(greeting); // "Hello, Alice!"
}

console.log("------------------------------");

{
  // 3. 숫자 배열을 받아 합을 구하는 함수
  const sumAll = (...arr: number[]): number =>
    arr.reduce((result, num) => result + num, 0);

  const total = sumAll(1, 2, 3, 4);
  console.log(total);
}

console.log("------------------------------");

{
  // 4. 기본값을 설정한 덧셈 함수
  const sum = (a: number, b: number = 0): number => a + b;

  const result = sum(5);
  console.log(result);
}

console.log("------------------------------");

{
  // 5. 두 수를 곱하는 함수
  const multiply = (a: number, b: number): number => a * b;

  const product = multiply(4, 5);
  console.log(product);
}

console.log("------------------------------");

{
  // 6. 문자열과 숫자를 결합하는 함수
  const concatStringAndNumber = (str: string, num: number): string => str + num;

  const result = concatStringAndNumber("Hello", 10);
  console.log(result);
}

console.log("------------------------------");

{
  // 7. 옵셔널 파라미터를 사용한 인사 함수
  const greet = (name: string, message?: string): string => {
    const defaultMessage = message ? message : "Welcome";
    return `${defaultMessage}, ${name}`;
  };

  const greeting1 = greet("Alice", "Hello");
  const greeting2 = greet("Bob");
  console.log(greeting1); // "Hello, Alice!"
  console.log(greeting2); // "Welcome, Bob!"
}

console.log("------------------------------");

{
  // 8. 숫자 배열의 최대값을 구하는 함수
  const findMax = (numberArr: number[]): number => Math.max(...numberArr);

  const max = findMax([10, 20, 30, 40]);
  console.log(max);
}

console.log("------------------------------");

{
  // 9. 단일 숫자를 두 배로 만드는 함수
  const double = (num: number) => num * 2;

  const doubled = double(10);
  console.log(doubled);
}

console.log("------------------------------");
