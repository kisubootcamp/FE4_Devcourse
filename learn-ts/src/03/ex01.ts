{
  // 함수 타입 연습문제
  // 1
  // 함수 정의
  const add = (a: number, b: number): number => a + b;

  // 함수 호출
  const result = add(10, 5);
  console.log(result); // 15

  // 2
  // 함수 정의
  const greet = (name: string): string => `Hello, ${name}!`;

  // 함수 호출
  const greeting = greet("Alice");
  console.log(greeting); // "Hello, Alice!"

  // 3
  // 함수 정의
  const sumAll = (...nums: number[]): number => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
  };

  // reduce를 사용한 방식
  const sumAll2 = (...nums: number[]): number =>
    nums.reduce((sum, num) => sum + num, 0);

  // 함수 호출
  const total = sumAll(1, 2, 3, 4);
  console.log(total); // 10

  // 4
  // 함수 정의
  const sum = (a: number, b: number = 0): number => a + b;

  // 함수 호출
  const result1 = sum(5);
  console.log(result1); // 5

  // 5
  // 함수 정의
  const multiply = (a: number, b: number): number => a * b;

  // 함수 호출
  const product = multiply(4, 5);
  console.log(product); // 20

  // 6
  // 함수 정의
  const concatStringAndNumber = (a: string, b: number): string => a + b;
  // 또 다른 방법
  const concatStringAndNumber2 = (a: string, b: number): string => `${a}${b}`;

  // 함수 호출
  const result3 = concatStringAndNumber("Hello", 10);
  console.log(result3); // "Hello10"

  // 7
  // 함수 정의
  // 초기값이 설정되어있으면 옵셔널 파라미터로 처리할 수 없음 (처리할 필요도 없음)
  const greet2 = (name: string, message: string = "Welcome"): string =>
    `${message}, ${name}!`;

  // 함수 호출
  const greeting1 = greet2("Alice", "Hello");
  const greeting2 = greet2("Bob");
  console.log(greeting1); // "Hello, Alice!"
  console.log(greeting2); // "Welcome, Bob!"

  // 8
  // 함수 정의
  const findMax = (nums: number[]): number => Math.max(...nums);
  const findMax2 = (nums: number[]): number => {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > max) max = nums[i];
    }
    return max;
  };

  // 함수 호출
  const max = findMax([10, 20, 30, 40]);
  console.log(max); // 40
  const max2 = findMax2([10, 20, 30, 40]);
  console.log(max2); // 40

  // 9
  // 함수 정의
  const double = (num: number): number => num * 2;

  // 함수 호출
  const doubled = double(10);
  console.log(doubled); // 20
}

{
  // 함수 타입 연습문제+
  // 1
  // 함수 정의
  const sumAllNumbers = (...nums: number[][]): number[] =>
    nums.map((arr) => arr.reduce((sum, num) => sum + num, 0));

  // 함수 호출
  const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result); // [3, 12, 13]

  // 2
  // 함수 정의
  const doubleValue = (value: string | number): number => {
    if (typeof value === "string") return value.length * 2;
    else return value * 2;
  };

  // 함수 호출
  const result1 = doubleValue(5);
  const result2 = doubleValue("hello");
  console.log(result1); // 10
  console.log(result2); // 10

  // 3
  // 함수 정의
  const multiplyArrays = (arr1: number[], arr2: number[]): number[] => {
    let newArr = [];
    let shortArr = Math.min(arr1.length, arr2.length);
    for (let i = 0; i < shortArr; i++) {
      newArr.push(arr1[i] * arr2[i]);
    }
    return newArr;
  };

  // 함수 호출
  const result3 = multiplyArrays([1, 2, 3], [4, 5, 6]);
  console.log(result3); // [4, 10, 18]

  // 4
  // 함수 정의
  const intersection = (arr1: number[], arr2: number[]): number[] => {
    let res = [];
    for (let i = 0; i < arr2.length; i++) {
      if (arr1.includes(arr2[i])) res.push(arr2[i]);
    }
    return res;
  };

  // 함수 호출
  const result4 = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result4); // [2, 3]

  // 5
  // 함수 정의
  const formatInfo = (obj: { name: string } | { age: number }): string => {
    if ("name" in obj) return `Name: ${obj.name}`;
    else return `Age: ${obj.age}`;
  };

  // 함수 호출
  const info = formatInfo({ name: "Alice" });
  console.log(info); // "Name: Alice"

  // 6

  // 7

  // 8

  // 9

  // 10
}
