// 함수 타입 연습문제
// 1
{
  // 함수 정의
  const add = (n1: number, n2: number): number => n1 + n2;

  // 함수 호출
  const result = add(10, 5);
  console.log(result); // 15
}

// 2
{
  // 함수 정의
  const greet = (name: string): string => `Hello, ${name}!`;
  // 함수 호출
  const greeting = greet('Alice');
  console.log(greeting); // "Hello, Alice!"
}

// 3
{
  // 함수 정의
  const sumAll = (...numbers: number[]): number => {
    return numbers.reduce((result, num) => result + num, 0);
  };
  // 함수 호출
  const total = sumAll(1, 2, 3, 4);
  console.log(total); // 10
}

// 4
{
  // 함수 정의
  const sum = (a: number, b: number = 0): number => a + b;
  // 함수 호출
  const result = sum(5);
  console.log(result); // 5
}

// 5
{
  // 함수 정의
  const multiply = (a: number, b: number): number => a * b;

  // 함수 호출
  const product = multiply(4, 5);
  console.log(product); // 20
}

// 6
{
  // 함수 정의
  const concatStringAndNumber = (a: string, b: number): string => a + b;

  // 함수 호출
  const result = concatStringAndNumber('Hello', 10);
  console.log(result); // "Hello10"
}

// 7
{
  // 함수 정의
  const greet = (name: string, message?: string): string => {
    if (name && message) {
      return `${message}, ${name}!`;
    } else {
      return `Welcome, ${name}!`;
    }
  };

  // 함수 호출
  const greeting1 = greet('Alice', 'Hello');
  const greeting2 = greet('Bob');
  console.log(greeting1); // "Hello, Alice!"
  console.log(greeting2); // "Welcome, Bob!"
}

// 8
{
  // 함수 정의
  const findMax = (numArr: number[]): number => {
    return Math.max(...numArr);
  };

  // 함수 호출
  const max = findMax([10, 20, 30, 40]);
  console.log(max); // 40
}

// 9
{
  // 함수 정의
  const double = (num: number): number => num * 2;

  // 함수 호출
  const doubled = double(10);
  console.log(doubled); // 20
}

// 연습문제+
// 01
{
  // 함수 정의
  const sumAllNumbers = (...numArr: number[][]) =>
    numArr.map((numbers) => numbers.reduce((result, num) => result + num, 0));

  // 함수 호출
  const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result); // [3, 12, 13]
}

// 02
{
  // 함수 정의
  const doubleValue = (value: number | string): number => {
    if (typeof value === 'number') {
      return value * 2;
    } else {
      return value.length * 2;
    }
  };

  // 함수 호출
  const result1 = doubleValue(5);
  const result2 = doubleValue('hello');
  console.log(result1); // 10
  console.log(result2); // 10
}

// 03
{
  // 함수 정의
  const multiplyArrays = (arr1: number[], arr2: number[]): number[] => arr1.map((a, b) => a * arr2[b]);

  // 함수 호출
  const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
  console.log(result); // [4, 10, 18]
}

// 04
{
  // 함수 정의
  const intersection = (arr1: number[], arr2: number[]): number[] => arr1.filter((a) => arr2.includes(a));

  // 함수 호출
  const result = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result); // [2, 3]
}

// 05
{
  // 함수 정의
  const formatInfo = (userObj: { name?: string; age?: number }): string => {
    if (userObj.name) {
      return `Name: ${userObj.name}`;
    } else {
      return `Age: ${userObj.age}`;
    }
  };

  // 함수 호출
  const info = formatInfo({ name: 'Alice' });
  console.log(info); // "Name: Alice"
}

// 06
{
  // 함수 정의
  const combineStrings = (str1: string, str2: string, isReverse: boolean = false): string =>
    isReverse ? str2 + str1 : str1 + str2;

  // 함수 호출
  const combined = combineStrings('Hello', 'World');
  console.log(combined); // "HelloWorld"
}

// 07
{
  // 함수 정의
  const squareArray = (numArr: number[]): number[] => numArr.map((num) => num ** 2);

  // 함수 호출
  const result = squareArray([1, 2, 3, 4]);
  console.log(result); // [1, 4, 9, 16]
}

// 08
{
  // 함수 정의
  const addStringAndNumber = (str: string, num: number): string => str + num;

  // 함수 호출
  const result = addStringAndNumber('The number is ', 10);
  console.log(result); // "The number is 10"
}

// 09
{
  // 함수 정의
  const compareValues = (num: number, str: string): string => {
    if (num > str.length) {
      return 'Number is larger';
    } else if (num < str.length) {
      return 'String  is larger';
    } else {
      return 'same';
    }
  };

  // 함수 호출
  const result = compareValues(5, 'Hello');
  console.log(result); // "Number is larger"
}

// 10
{
  // 함수 정의
  const checkValue = (value: string | number | boolean): string => {
    if (typeof value === 'string') {
      return "It's a string";
    } else if (typeof value === 'number') {
      return "It's a number";
    } else if (typeof value === 'boolean') {
      return "It's a boolean";
    } else {
      return '';
    }
  };

  // 함수 호출
  const result = checkValue(true);
  console.log(result);
}
