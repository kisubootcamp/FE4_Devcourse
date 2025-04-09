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

  //연습문제 +
  const sumAllNumbers = (...numArrList: number[][]) =>
    numArrList.map((val) => val.reduce((a, b) => a + b, 0));

  // 함수 호출
  const result3 = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result3);

  function doubleValue(value: string | number): number {
    if (typeof value === "string") return value.length * 2;
    else return value * 2;
  }

  const result4 = doubleValue(5);
  const result5 = doubleValue("hello");
  console.log(result4);
  console.log(result5);

  const multiplyArrays = (arr1: number[], arr2: number[]): number[] => {
    const answer: number[] = [];
    for (let i = 0; i < arr1.length; i++) {
      answer.push(arr1[i] * arr2[i]);
    }
    return answer;
  };

  const result6 = multiplyArrays([1, 2, 3], [4, 5, 6]);
  console.log(result6);

  const intersection = (arr1: number[], arr2: number[]): number[] => {
    return arr1.filter((x) => arr2.includes(x));
  };
  const result7 = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result7);

  const formatInfo = (info: { name?: string; age?: number }): string => {
    if (info.name) {
      return `Name: ${info.name}`;
    } else if (info.age) {
      return `Age: ${info.age}`;
    } else {
      return "No info";
    }
  };
  const info = formatInfo({ name: "Alice" });
  console.log(info);

  const combineStrings = (...combineArr: string[]): string => {
    return combineArr.join("");
  };
  const combined = combineStrings("Hello", "World");
  console.log(combined);

  const squareArray = (numarr: number[]): number[] =>
    numarr.map((val) => val ** 2);
  const result8 = squareArray([1, 2, 3, 4]);
  console.log(result8);

  const addStringAndNumber = (str: string, num: number): string =>
    `${str}${num}`;
  const result9 = addStringAndNumber("The number is ", 10);
  console.log(result9);

  const compareValues = (num: number, str: string): string => {
    if (num > str.length) {
      return "Number is Larger";
    } else {
      return "String is larger";
    }
  };
  const result10 = compareValues(2, "Hello");
  console.log(result10);

  const checkValue = (value: number | string | boolean): string => {
    if (typeof value === "number") {
      return "It's a number";
    } else if (typeof value === "string") {
      return "It's a string";
    } else {
      return "It's a boolean";
    }
  };
  const result11 = checkValue(true);
  console.log(result11);
}
