{
  //1. 여러개의 숫자배열을 받아 합을 구하는 함수
  // 문제 설명: sumAllNumbers 함수는 여러 개의 숫자 배열을 인자로 받아 각 배열의 합을 구하여 반환하는 함수입니다. rest parameter와 map을 사용하여 여러 배열을 처리하고 결과를 반환해야 합니다.
  const sumAllNumbers = (...arr: number[][]): number[] => {
    return arr.map((numArr) => numArr.reduce((acc, cur) => acc + cur, 0));
  };
  const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result);
}

{
  //TODO
  //2. 숫자 또는 문자열을 받아 그 값을 두 배로 만드는 함수
  // doubleValue 함수는 숫자나 문자열을 인자로 받습니다. 숫자라면 두 배를 반환하고, 문자열이라면 문자열 길이를 두 배로 반환합니다. 함수의 반환값 타입을 지정해보세요.

  function double(param: number | string): number {
    if (typeof param === "number") {
      return param * 2;
    } else if (typeof param === "string") {
      return param.length * 2;
    }
    throw new Error("error");
  }
}
{
  //3. 두 숫자 배열을 받아 각 배열의 곱을 구하는 함수
  // multiplyArrays 함수는 두 개의 숫자 배열을 받아 각 배열에서 해당 인덱스의 숫자를 곱한 값을 새로운 배열로 반환합니다. 배열의 길이가 다르면 짧은 배열에 맞춰서 곱셈을 해야 합니다.

  const multiplyArrays = (numArr1: number[], numArr2: number[]) => {
    const minArrayLength = Math.min(numArr1.length, numArr2.length);
    const multiplyArr = [];

    for (let i = 0; i < minArrayLength; i++) {
      multiplyArr.push(numArr1[i] * numArr2[i]);
    }

    // if (numArr1.length > numArr2.length) {
    //   for (let i = 0; i < numArr2.length; i++) {
    //     multiplyArr.push(numArr1[i] * numArr2[i]);
    //   }
    // } else {
    //   for (let i = 0; i < numArr1.length; i++) {
    //     multiplyArr.push(numArr1[i] * numArr2[i]);
    //   }
    // }
    return multiplyArr;
  };

  // 함수 호출
  const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
  console.log(result); // [4, 10, 18]

  const result2 = multiplyArrays([1, 2], [4, 5, 6]);
  console.log(result2); // [4, 10]
}

{
  // CHECK 강사님풀이 참조
  // 4. 두개의 배열을 받아 교차된 값을 반환하는 함수
  //   `intersection` 함수는 두 개의 **배열**을 받아 교차된 값들만 반환하는 함수입니다.
  // 두 배열에서 겹치는 값들을 찾아 반환해보세요.

  // 함수 정의
  const intersection = (numArr1: number[], numArr2: number[]) => {
    return numArr1.filter((value) => numArr2.includes(value));
  };

  // 함수 호출
  const result = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result); // [2, 3]

  //array.filter(): array 값을 조건에 맞는 값만 반환
  //array.includes() : array 값과 일치하는 값이면 true 반환
}

{
  //5. 객체의 필드 값에 따라 출력 형식을 다르게 하는 함수
  //formatInfo 함수는 객체를 받아, name 필드가 존재하면 "Name: {name}"을 출력하고, age 필드가 존재하면 "Age: {age}"를 출력합니다. 매개변수 타입을 지정하고 호출해보세요.

  // 함수 정의
  const formatInfo = (obj: { name: string; age?: number }): string => {
    let result = "";
    if (obj.name) result = `Nmae: is ${obj.name}`;
    if (obj.age) result = `Age: is ${obj.age}`;
    return result;
  };

  // 함수 호출
  const info = formatInfo({ name: "Alice" });
  console.log(info); // "Name: Alice"
}

{
  //6. 두 문자열을 합쳐서 출력하는 함수
  //combineStrings 함수는 두 개의 문자열을 받아 합쳐서 반환하는 함수입니다. 적절한 타입을 지정하여 함수를 정의하고 호출해보세요.
  // 함수 정의
  const combineStrings = (str1: string, str2: string): string => {
    return `${str1}${str2}`;
  };

  // 함수 호출
  const combined = combineStrings("Hello", "World");
  console.log(combined); // "HelloWorld"
}
{
  //7. 배열의 각 값을 제곱하여 새로울 배열을 반환하는 함수
  // squareArray 함수는 숫자 배열을 받아 그 배열의 각 값에 대해 제곱을 계산하여 새로운 배열을 반환합니다.
  // 함수 정의
  const squareArray = (arr: number[]): number[] => {
    return arr.map((number) => number * number);

    // arry.map() : array 를 순회하면서 함수 실행
  };

  // 함수 호출
  const result = squareArray([1, 2, 3, 4]);
  console.log(result); // [1, 4, 9, 16]
}
{
  //8. 문자열과 숫자가 주어졌을 때, 그 둘을 더하여 문자열로 반환하는 함수
  //addStringAndNumber 함수는 문자열과 숫자를 인자로 받아 두 값을 더하여 문자열로 반환하는 함수입니다. 적절한 타입을 지정하여 함수를 정의하고 호출해보세요.
  // 함수 정의
  const addStringAndNumber = (str: string, num: number): string => {
    return `${str} ${num}`;
  };

  // 함수 호출
  const result = addStringAndNumber("The number is ", 10);
  console.log(result); // "The number is 10"
}

{
  //9. 타입이 서로 다른 두 값을 비교하는 함수
  //compareValues 함수는 숫자와 문자열을 받아 두 값을 비교하여 결과를 출력하는 함수입니다. 숫자가 크면 "Number is larger", 문자열의 길이가 길면 "String is larger"를 반환하도록 하세요.
  // 함수 정의
  const compareValues = (num: number, str: string): string => {
    if (num > str.length) return `Number is larger`;
    else if (num < str.length) return `String is larger`;
    else return "same same";
  };

  // 함수 호출
  const result = compareValues(10, "Hello");
  console.log(result); // "Number is larger"
}
{
  //10. 다중조건을 처리하는 조건문 함수
  //checkValue 함수는 숫자, 문자열, 불리언 값을 인자로 받습니다. 이 값이 숫자라면 "It's a number", 문자열이라면 "It's a string", 불리언이라면 "It's a boolean"을 반환하도록 하세요.
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
