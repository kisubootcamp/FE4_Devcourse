{
  // 함수 정의
  const add: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;
  // 함수 호출
  const result = add(10, 5);
  console.log(result); // 15

  const greet: (uname: string) => string = (uname) => `Hello, ${uname}!`;
  const greeting = greet("Alice");
  console.log(greeting);

  const sumAll = (...nums: number[]): number => nums.reduce((a, b) => a + b, 0);
  const total = sumAll(1, 2, 3, 4);
  console.log(total);

  const sum = (a: number, b: number = 0): number => a + b;
  const result1 = sum(5);
  console.log(result1);

  const multiply = (a: number, b: number): number => a * b;
  const product = multiply(4, 5);
  console.log(product);

  const concatStringAndNumber = (a: string, b: number) => `${a}${b}`;
  const result2 = concatStringAndNumber("Hello", 10);
  console.log(result2);

  const greet2 = (uname: string, message: string = "Welcome") =>
    `${message}, ${uname}!`;

  const greeting1 = greet2("Alice", "Hello");
  const greeting2 = greet2("Bob");
  console.log(greeting1);
  console.log(greeting2);

  const findMax = (numArr: number[]) => Math.max(...numArr);
  const max = findMax([10, 20, 30, 40]);
  console.log(max);

  const double = (num: number) => num * 2;
  const doubled = double(10);
  console.log(doubled);
}
