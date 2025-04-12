{
  // 1. 두 수의 합을 구하는 함수

  // 1-1.
  const add = (a: number, b: number): number => {
    return a + b;
  };

  const result = add(10, 5);
  console.log(result); // 15

  // 1-2.
  const add2 = function add2(a: number, b: number): number {
    return a + b;
  };

  const result2 = add2(10, 5);
  console.log(result2); // 15
}

{
  // 2. 이름을 받아 인사하는 함수

  // 2-1.
  const greet = (name: string): string => {
    return `Hello, ${name}`;
  };

  const greeting = greet('Alice');
  console.log(greeting); // Hello, Alice

  // 2-2.
  const greet2 = (name: string): void => console.log(`Hello, ${name}`); // Hello, Alice
  const greeting2 = greet2('Alice');
}

{
  // 3. 숫자 배열을 받아 합을 구하는 함수
  const sumAll = (...num: number[]): number => {
    return num.reduce((a, b) => a + b, 0);
  };

  const total = sumAll(1, 2, 3, 4);
  console.log(total); // 10
}

{
  // 4. 기본값을 설정한 덧셈 함수

  // 4-1.
  const sum = (a: number, b: number = 0): number => {
    return a + b;
  };

  const result = sum(5);
  console.log(result); // 5

  // 4-2.
  const sum2 = (a: number, b: number = 0): void => console.log(a + b);
  const result2 = sum2(5);
}

{
  // 5. 두 수를 곱하는 함수
  const multiply = (a: number, b: number): number => {
    return a * b;
  };

  const product = multiply(4, 5);
  console.log(product); // 20
}

{
  // 6. 문자열과 숫자를 결합하는 함수

  // 6-1.
  const concatStringAndNumber = (a: string, b: number): string => {
    return `${a}${b}`;
  };

  const result = concatStringAndNumber('Hello', 10);
  console.log(result); // Hello10

  // 6-2.
  const concatStringAndNumber2: (a: string, b: number) => string = (a, b) => {
    return `${a}${b}`;
  };
  const result2 = concatStringAndNumber2('Hello', 10);
  console.log(result2); // Hello10
}

{
  // 7. 옵셔널 파라미터를 사용한 인사 함수

  // 7-1.
  const greet = (name: string, message?: string): string => {
    if (!message) return `Welcome, ${name}!`;
    else return `${message}, ${name}!`;
  };

  const greeting1 = greet('Alice', 'Hello');
  const greeting2 = greet('Bob');
  console.log(greeting1); // Hello, Alice!
  console.log(greeting2); // Welcome, Bob!

  // 7-2.
  const greet2: (name: string, message?: string) => void = (
    name: string,
    message: string = 'Welcome'
  ) => {
    console.log(`${message}, ${name}!`);
  };
  const greeting3 = greet2('Alice', 'Hello'); // Hello, Alice!
  const greeting4 = greet2('Bob'); // // Welcome, Bob!
}

{
  // 8. 숫자 배열의 최대값을 구하는 함수

  // 8-1.
  const findmax = (num: number[]): number => {
    const max = num.sort((a, b) => a - b);
    return max[max.length - 1];
  };

  const max = findmax([10, 20, 30, 40]);
  console.log(max); // 40

  // 8-2.
  const findmax2 = (num: number[]): number => {
    return Math.max(...num);
  };
  const max2 = findmax2([10, 20, 30, 40]);
  console.log(max2); // 40

  // 8-3.
  const findmax3 = (num: number[]): number => {
    let max = num[0];

    for (let i = 0; i < num.length; i++) {
      if (max < num[i]) {
        max = num[i];
      }
    }
    return max;
  };
  const max3 = findmax3([10, 20, 30, 40]);
  console.log(max3); // 40
}

{
  // 9. 단일 숫자를 두 배로 만드는 함수

  // 9-1.
  const double = (a: number): number => {
    return a * 2;
  };

  const doubled = double(10);
  console.log(doubled); // 20

  // 9-2.
  const double2 = function double2(a: number): number {
    return a * 2;
  };

  const doubled2 = double2(10);
  console.log(doubled2); // 20
}
