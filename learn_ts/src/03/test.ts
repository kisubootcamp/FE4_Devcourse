// 연습문제
{
  // 1
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  console.log(add(1, 2));
}

{
  // 2
  function greet(name: string): string {
    return `Hello ${name}`;
  }
  console.log(greet("이준호"));
}

{
  // 3
  function sumAll(...arg: number[]): number {
    return arg.reduce((acc, num) => acc + num, 0);
  }
  console.log(sumAll(1, 2, 3, 4));
}

{
  // 4
  function sum(num1: number, num2: number = 0): number {
    return num1 + num2;
  }
  console.log(sum(5));
}

{
  // 5
  function multiply(a: number, b: number): number {
    return a * b;
  }
  console.log(multiply(2, 3));
}

{
  // 6
  function concatStringAndNumber(str: string, num: number): string {
    return `${str}${num}`;
  }
  console.log(concatStringAndNumber("hello", 10));
}

{
  // 7
  function greet(str1: string, str2?: string): string {
    if (!str2) return `Welcome, ${str1}`;
    return `${str2}, ${str1}`;
  }
  console.log(greet("Alice", "Hello"));
  console.log(greet("Bob"));
}

{
  // 8
  function findMax(nums: number[]): number {
    return Math.max(...nums);
  }
  console.log(findMax([10, 20, 30, 40]));
}

{
  // 9
  function double(num: number): void {
    console.log(num * 2);
  }
  double(10);
}

//연습문제+
{
  //1
  function sumAllNumbers(...arg: number[][]) {
    return arg.map((arr) => arr.reduce((acc, num) => acc + num, 0));
  }
  console.log(sumAllNumbers([1, 2], [3, 4, 5], [6, 7]));
}

{
  //2
  function doubleValue(value: string | number): number {
    if (typeof value === "string") return value.length * 2;
    return value * 2;
  }

  const result1 = doubleValue(5);
  const result2 = doubleValue("hello");
  console.log(result1);
  console.log(result2);
}

{
  //3
  const intersection = (arr1: number[], arr2: number[]) => {
    arr1.map((num) => {
      if (arr2.indexOf(num) > -1) {
        return num;
      }
    });
  };
  const result = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result);
}
