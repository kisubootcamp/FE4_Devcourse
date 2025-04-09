{
  // 1.여러 개의 숫자 배열을 받아 합을 구하는 함수
  // 함수 정의
  const sumAllNumbers = (...numbers: number[][]): number[] => {
    let result: number[] = [];
    numbers.forEach((number, i) => {
      let sum: number = 0;
      number.forEach((num, j) => {
        sum += num;
      });
      result[i] = sum;
    });

    return result;
  };

  // 함수 호출
  const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result); // [3, 12, 13]
}

{
  // 2. 숫자 또는 문자열을 받아 그 값을 두 배로 만드는 함수
  // 함수 정의
  const doubleValue: (input: number | string) => number = (input) => {
    if (typeof input === "number") return input * 2;
    else return input.length * 2;
  };

  // 함수 호출
  const result1 = doubleValue(5);
  const result2 = doubleValue("hello");
  console.log(result1); // 10
  console.log(result2); // 10
}

{
  // 3. 두 숫자 배열을 받아 각 배열의 곱을 구하는 함수
  // 함수 정의
  const multiplyArrays = (numArr1: number[], numArr2: number[]): number[] => {
    let result: number[] = [];
    for (let i = 0; i < numArr1.length; i++) {
      result[i] = numArr1[i] * numArr2[i];
    }
    return result;
  };

  // 함수 호출
  const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
  console.log(result); // [4, 10, 18]
}

{
  // 4. 두 개의 배열을 받아 교차된 값을 반환하는 함수
  // 함수 정의
  const intersection = (numArr1: number[], numArr2: number[]): number[] => {
    let result: number[] = [];
    for (let i = 0; i < numArr1.length; i++) {
      for (let j = 0; j < numArr1.length; j++) {
        if (numArr1[i] === numArr2[j]) {
          result[result.length] = numArr1[i];
        }
      }
    }

    return result;
  };

  // 함수 호출
  const result = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result); // [2, 3]
}
{
  // 5. 객체의 필드 값에 따라 출력 형식을 다르게 하는 함수
  // 함수 정의
  const formatInfo = (obj: { name?: string; age?: number }): string => {
    if (obj.name !== undefined) return `Name: ${obj.name}`;
    else return `Age: ${obj.age}`;
  };

  // 함수 호출
  const info = formatInfo({ name: "Alice" });
  const info2 = formatInfo({ age: 17 });
  console.log(info); // "Name: Alice"
  console.log(info2);
}

{
  // 6. 두 문자열을 합쳐서 출력하는 함수
  // 함수 정의
  const combineStrings = (str1: string, str2: string): string =>
    `${str1}${str2}`;

  // 함수 호출
  const combined = combineStrings("Hello", "World");
  console.log(combined); // "HelloWorld"
}

{
  //7.배열의 각 값을 제곱하여 새로운 배열을 반환하는 함수
  // 함수 정의
  const squareArray = (numArr: number[]): number[] => {
    let result: number[] = [];
    numArr.forEach((num) => {
      result[result.length] = num ** 2;
    });
    return result;
  };

  // 함수 호출
  const result = squareArray([1, 2, 3, 4]);
  console.log(result); // [1, 4, 9, 16]
}

{
  // 8.문자열과 숫자가 주어졌을 때, 그 둘을 더하여 문자열로 반환하는 함수
  // 함수 정의
  const addStringAndNumber = (str: string, num: number): string =>
    `${str}${num}`;

  // 함수 호출
  const result = addStringAndNumber("The number is ", 10);
  console.log(result); // "The number is 10"
}

{
  // 9.타입이 서로 다른 두 값을 비교하는 함수
  // 함수 정의
  const compareValues: (num: number, str: string) => string = (num, str) =>
    num > str.length ? "Number is larger" : "String is larger";

  // 함수 호출
  const result = compareValues(10, "Hello");
  console.log(result); // "Number is larger"
}
{
  // 10. 다중 조건을 처리하는 조건문 함수
  // 함수 정의
  const checkValue: (num: number | string | boolean) => string = (input) => {
    if (typeof input === "number") return "It's a number";
    else if (typeof input === "string") return "It's a string";
    else if (typeof input === "boolean") return "It's a boolean";

    throw new Error("error");
  };

  // 함수 호출
  const result = checkValue(true);
  console.log(result);
}
