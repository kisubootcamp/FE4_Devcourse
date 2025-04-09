{
  // Q1
  // 함수 정의
  const sumAllNumbers = (...arr: number[][]): number[] =>
    arr.map((el) => el.reduce((acc, num) => acc + num, 0));

  // 함수 호출
  const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result); // [3, 12, 13]
}

{
  // Q2
  // 함수 정의
  const doubleValue = (arg: number | string): number => {
    if (typeof arg === "number") arg * 2;
    else arg.length * 2;
    throw new Error("error");
  };

  // 함수 호출
  const result1 = doubleValue(5);
  const result2 = doubleValue("hello");
  console.log(result1); // 10
  console.log(result2); // 10
}

{
  // Q3
  // 함수 정의
  const multiplyArrays = (arr1: number[], arr2: number[]): number[] => {
    const result = [];
    const minLength = Math.min(arr1.length, arr2.length);
    for (let i = 0; i < minLength; i++) {
      result.push(arr1[i] * arr2[i]);
    }
    return result;
  };

  // 함수 호출
  const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
  console.log(result); // [4, 10, 18]
}

{
  // Q4
  // 함수 정의
  const intersection = (arr1: number[], arr2: number[]): number[] => {
    const result = arr1.filter((el) => arr2.includes(el));
    return result;
  };

  // 함수 호출
  const result = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result); // [2, 3]
}

{
  // Q5
  // 함수 정의
  const formatInfo = (obj: { name?: string; age?: number }): string => {
    if (obj.name) return `Name: ${obj.name}`;
    else `Age: ${obj.age}`;
    throw new Error("error");
  };

  // 함수 호출
  const info = formatInfo({ name: "Alice" });
  console.log(info); // "Name: Alice"
}

{
  // Q6
  // 함수 정의
  const combineStrings = (str1: string, str2: string): string => str1 + str2;

  // 함수 호출
  const combined = combineStrings("Hello", "World");
  console.log(combined); // "HelloWorld"
}

{
  // Q7
  // 함수 정의
  const squareArray = (arr: number[]): number[] => arr.map((el) => el ** 2);

  // 함수 호출
  const result = squareArray([1, 2, 3, 4]);
  console.log(result); // [1, 4, 9, 16]
}

{
  // Q8
  // 함수 정의
  const addStringAndNumber = (str: string, num: number): string => str + num;

  // 함수 호출
  const result = addStringAndNumber("The number is ", 10);
  console.log(result); // "The number is 10"
}

{
  // Q9
  // 함수 정의
  const compareValues = (num: number, str: string): string => {
    if (num > str.length) return "Number is larger";
    else return "String is larger";
  };

  // 함수 호출
  const result = compareValues(10, "Hello");
  console.log(result); // "Number is larger"
}

{
  // Q10
  // 함수 정의
  const checkValue = (arg: number | string | boolean): string => {
    if (typeof arg === "number") return "It's a number";
    else if (typeof arg === "string") return "It's a string";
    else return "It's a boolean";
  };

  // 함수 호출
  const result = checkValue(true);
  console.log(result);
}

