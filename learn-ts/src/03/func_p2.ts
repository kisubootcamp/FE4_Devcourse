{
  // 1
  // 함수 정의
  const sumAllNumbers = (...arrs: number[][]): number[] => {
    return arrs.map((arr) => arr.reduce((a, b) => a + b, 0));
  };

  // 함수 호출
  const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result); // [3, 12, 13]
}
{
  // 2
  // 함수 정의
  const doubleValue = (input: number | string): number => {
    if (typeof input === "number") return input * 2;
    if (typeof input === "string") return input.length * 2;
    throw new Error("없는 타입입니다.");
  };

  // 함수 호출
  const result1 = doubleValue(5);
  const result2 = doubleValue("hello");
  console.log(result1); // 10
  console.log(result2); // 10
}
{
  // 3
  // 함수 정의
  const multiplyArrays = (arr1: number[], arr2: number[]): number[] => {
    const minLength = arr1.length > arr2.length ? arr2.length : arr1.length;
    const res: number[] = [];
    for (let i = 0; i < minLength; i++) {
      res.push(arr1[i] * arr2[i]);
    }
    return res;
  };

  // 함수 호출
  const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
  console.log(result); // [4, 10, 18]

  const result2 = multiplyArrays([1, 2], [4, 5, 6]);
  console.log(result2); // [4, 10]
}
{
  // 4
  // 함수 정의
  const intersection = (arr1: number[], arr2: number[]): number[] => {
    return arr1.filter((v) => arr2.includes(v));
  };
  // 함수 호출
  const result = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result); // [2, 3]
}
{
  // 5
  // 함수 정의
  type Info = {
    name?: string;
    age?: number;
  };
  const formatInfo = (obj: Info): string => {
    if ("name" in obj) return `Name: ${obj.name}`;
    if ("age" in obj) return `Age: ${obj.age}`;
    throw new Error("없는 속성입니다.");
  };

  // 함수 호출
  const info = formatInfo({ name: "Alice" });
  console.log(info); // "Name: Alice"
}
{
  // 6
  // 함수 정의
  const combineStrings = (s1: string, s2: string): string => {
    return s1 + s2;
  };

  // 함수 호출
  const combined = combineStrings("Hello", "World");
  console.log(combined); // "HelloWorld"
}
{
  // 7
  // 함수 정의
  const squareArray = (arr: number[]): number[] => {
    return arr.map((v) => v ** 2);
  };

  // 함수 호출
  const result = squareArray([1, 2, 3, 4]);
  console.log(result); // [1, 4, 9, 16]
}
{
  // 8
  // 함수 정의
  const addStringAndNumber = (a: string, b: number): string => {
    return a + b.toString();
  };

  // 함수 호출
  const result = addStringAndNumber("The number is ", 10);
  console.log(result); // "The number is 10"
}
{
  // 9
  // 함수 정의
  const compareValues = (a: number, b: string): string => {
    return a > b.length ? "Number is larger" : "String  is larger";
  };

  // 함수 호출
  const result = compareValues(10, "Hello");
  console.log(result); // "Number is larger"
}
{
  // 10
  // 함수 정의
  const checkValue = (input: string | number | boolean): string => {
    if (typeof input === "string") return "It's a string";
    if (typeof input === "number") return "It's a number";
    if (typeof input === "boolean") return "It's a boolean";
    throw new Error("타입 없음");
  };

  // 함수 호출
  const result = checkValue(true);
  console.log(result);
}
