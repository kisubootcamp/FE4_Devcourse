// 연습문제+
{
  // 1. 여러 개의 숫자 배열을 받아 합을 구하는 함수
  const sumAllNumbers = (...rest: number[][]) =>
    rest.map((numArr) => numArr.reduce((result, num) => (result += num), 0));

  const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result);
}

console.log("------------------------------");

{
  // 2. 숫자 또는 문자열을 받아 그 값을 두 배로 만드는 함수
  const doubleValue = (strongOrNumber: number | string): number =>
    typeof strongOrNumber === "number"
      ? strongOrNumber * 2
      : strongOrNumber.length * 2;

  const result1 = doubleValue(5);
  const result2 = doubleValue("hello");
  console.log(result1); // 10
  console.log(result2); // 10
}

console.log("------------------------------");

{
  // 3. 두 숫자 배열을 받아 각 배열의 곱을 구하는 함수
  const multiplyArrays = (arr1: number[], arr2: number[]): number[] => {
    const length = Math.min(arr1.length, arr2.length);
    const result: number[] = [];

    for (let i = 0; i < length; i++) {
      result.push(arr1[i] * arr2[i]);
    }

    return result;
  };

  const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
  console.log(result); // [4, 10, 18]
}

console.log("------------------------------");

{
  // 4. 두 개의 배열을 받아 교차된 값을 반환하는 함수
  const intersection = (arr1: number[], arr2: number[]): number[] =>
    arr1.filter((num) => arr2.includes(num));

  const result = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result); // [2, 3]
}

console.log("------------------------------");

{
  // 5. 객체의 필드 값에 따라 출력 형식을 다르게 하는 함수
  const formatInfo = (obj: { [key: string]: string }): string => {
    let result = "";
    for (let item in obj) {
      result += `${item}: ${obj[item]}`;
    }
    let str = result[0];
    return result.replace(str, str.toUpperCase());
  };

  const info = formatInfo({ name: "Alice" });
  console.log(info);
}

console.log("------------------------------");

{
  // 6. 두 문자열을 합쳐서 출력하는 함수
  const combineStrings = (
    str1: string,
    str2: string,
    switchStr: boolean = false
  ): string => (switchStr ? str2 + str1 : str1 + str2);

  const combined = combineStrings("Hello", "World");
  const combined1 = combineStrings("Hello", "World", true);
  console.log(combined); // "HelloWorld"
  console.log(combined1); // "WorldHello"
}

console.log("------------------------------");

{
  // 7. 배열의 각 값을 제곱하여 새로운 배열을 반환하는 함수
  const squareArray = (arr: number[]): number[] => arr.map((num) => num ** 2);

  const result = squareArray([1, 2, 3, 4]);
  console.log(result);
}

console.log("------------------------------");

{
  // 8. 문자열과 숫자가 주어졌을 때, 그 둘을 더하여 문자열로 반환하는 함수
  const addStringAndNumber = (str: string, num: number): string =>
    `${str}${num}`;

  const result = addStringAndNumber("The number is ", 10);
  console.log(result);
}

console.log("------------------------------");

{
  // 9. 타입이 서로 다른 두 값을 비교하는 함수
  const compareValuse = (num: number, str: string): string =>
    num > str.length ? "Number is larger" : "String is larger";

  const result = compareValuse(10, "Hello");
  console.log(result);
}

console.log("------------------------------");

{
  // 10. 다중 조건을 처리하는 조건문 함수
  const checkValue = (data: number | string | boolean): string => {
    if (typeof data === "number") return "It's is a number";
    else if (typeof data === "string") return "It's is a string";
    else if (typeof data === "boolean") return "It's is a boolean";

    throw new Error("지원하지 않는 타입입니다.");
  };

  const result = checkValue(true);
  console.log(result);
  console.log(checkValue(""));
  console.log(checkValue(1));
}
