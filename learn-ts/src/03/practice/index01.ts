// 01
{
  const add = (a: number, b: number): number => {
    return a + b;
  };

  const result = add(10, 5);
  console.log(result);
}

// 02
{
  const greet = (name: string): string => {
    return `Hello ${name}`;
  };

  const greeting = greet("Alice");
  console.log(greeting);
}

// 03
{
  // const sumAll = (numbers: number[]):number => {
  //   return numbers.reduce((total, num) => result + num, 0);
  // }
  // const total = sumAll(1, 2, 3, 4)
  const sumAll = (...nums: number[]): number =>
    nums.reduce((sum, num) => sum + num, 0); // 혹시나의 예외 사항을 방지하기 위해 맨 마지막에 sum의 초기값으로 0을 지정한다.

  const total = sumAll(1, 2, 3, 4);
  console.log(total);
}

// 04
{
  const sum = (a: number, b?: number): number => {
    if (b === undefined) {
      let b = 0;
      return a + b;
    } else {
      return a + b;
    }
  };

  const result = sum(5);
  console.log(result);
}
// 강사님 답안
{
  const sum = (a: number, b: number = 0): number => a + b;

  const result = sum(5);
  console.log(result);
}

// 05
{
  const multiply = (a: number, b: number): number => a * b;
  const product = multiply(4, 5);
  console.log(product);
}

// 06
{
  const concatStringAndNumber = (a: string, b: number): string => {
    if (typeof a === "string" && typeof b === "number") return a + b;
    return `${a}, ${b}`;
  };

  const result = concatStringAndNumber("Hello", 10);
  console.log(result);
}

{
  const concatStringAndNumber = (a: string, b: number): string => `${a}${b}`;

  const result = concatStringAndNumber("Hello", 10);
  console.log(result);
}

// 07
{
  const greet = (a: string, b?: string): string => {
    if (typeof a === "string" && typeof b === "string") {
      return b + ", " + a;
    } else if (typeof a === "string") {
      let b = "Welcome!";
      return b + ", " + a;
    } else {
      return `${a}${b}`;
    }
  };
  const greeting1 = greet("Alice", "Hello");
  const greeting2 = greet("Bob");

  console.log(greeting1);
  console.log(greeting2);
}

// 강사님 답안
{
  const greet = (name: string, message: string = "Welcome"): void => {
    console.log(`${message}, ${name}`);
  };
}

// 08
{
  const findMax = (nums: number[]): number => Math.max(...nums);

  const max = findMax([10, 20, 30, 40]);
  console.log(max);
}

// 09
{
  const double = (a: number): number => a ** 2;

  const doubleed = double(10);
  console.log(doubleed);
}
