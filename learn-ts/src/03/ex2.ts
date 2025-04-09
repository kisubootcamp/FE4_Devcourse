{
  //1
  // 함수 정의
  const sumAllNumbers = (...numsArr: number[][]): number[] => {
    return numsArr.map((nums) => {
      return nums.reduce((acc, num) => acc + num, 0);
    });
  };

  // 함수 호출
  const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result); // [3, 12, 13]
}

{
  //2
  // 함수 정의
  function doubleValue(value: string): number;
  function doubleValue(value: number): number;
  function doubleValue(value: string | number): number {
    if (typeof value === "string") return value.length * 2;
    else return value * 2;
  }

  // 함수 호출
  const result1 = doubleValue(5);
  const result2 = doubleValue("hello");
  console.log(result1); // 10
  console.log(result2); // 10
}

{
  //3
  // 함수 정의
  const multiplyArrays = (arr1: number[], arr2: number[]): number[] => {
    return arr1.map((_, idx, arr1) => arr1[idx] * arr2[idx]);
  };

  // 함수 호출
  const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
  console.log(result); // [4, 10, 18]
}

{
  //4
  // 함수 정의
  const intersection = (arr1: number[], arr2: number[]): number[] => {
    return arr1.filter((num) => arr2.includes(num));
  };

  // 함수 호출
  const result = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result); // [2, 3]
}

{
  //5
  // 함수 정의
  function formatInfo(obj: { age: number }): string;
  function formatInfo(obj: { name: string }): string;
  function formatInfo(obj: { name?: string } & { age?: number }): string {
    if (obj.name) {
      return `Name: {${obj.name}}`;
    } else {
      return `Age: {${obj.age}}`;
    }
  }
  // 함수 호출
  const info = formatInfo({ name: "Alice" });
  //   const info = formatInfo({ age: 20 });
  console.log(info); // "Name: Alice"
}

{
  //6
  // 함수 정의
  const combineStrings = function (a: string, b: string): string {
    return a.concat(b);
  };

  // 함수 호출
  const combined = combineStrings("Hello", "World");
  console.log(combined); // "HelloWorld"
}

{
  //7
  // 함수 정의
  const squareArray = function (arr: number[]): number[] {
    return arr.map((num) => Math.pow(num, 2));
  };
  // 함수 호출
  const result = squareArray([1, 2, 3, 4]);
  console.log(result); // [1, 4, 9, 16]
}

{
  //8
  // 함수 정의
  const addStringAndNumber = (a: string, b: number): string => {
    return `${a}${b}`;
  };

  // 함수 호출
  const result = addStringAndNumber("The number is ", 10);
  console.log(result); // "The number is 10"
}

{
  //9
  // 함수 정의
  const compareValues = (a: number, b: string): string => {
    if (a > b.length) return "Number is larger";
    else return "String is larger";
  };

  // 함수 호출
  const result = compareValues(10, "Hello");
  console.log(result); // "Number is larger"
}

{
  //10
  // 함수 정의
  const checkValue = (value: number | string | boolean): string => {
    if (typeof value === "number") return "It's a number";
    else if (typeof value === "string") return "It's a string";
    else return "It's a boolean";
  };

  // 함수 호출
  const result = checkValue(true);
  console.log(result);
}
