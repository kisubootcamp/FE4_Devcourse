{
  // 연습문제 +
  // 문제 1: 여러 개의 숫자 배열을 받아 합을 구하는 함수
  const sumAllNumbers = (...arr: number[][]): number[] => {
    let newArr: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      const sum = arr[i].reduce((a, b) => a + b, 0);
      newArr.push(sum);
    }
    return newArr;
  };

  // 함수 호출
  const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result); // [3, 12, 13]
}

{
  // 문제 2: 숫자 또는 문자열을 받아 그 값을 두 배로 만드는 함수
  // 함수 정의
  const doubleValue = (numStr: string | number): number => {
    if (typeof numStr === "number") {
      return numStr * 2;
    } else {
      return numStr.length * 2;
    }
  };

  // 함수 호출
  const result1 = doubleValue(5);
  const result2 = doubleValue("hello");
  console.log(result1); // 10
  console.log(result2); // 10
}

{
  // 문제 3: 두 숫자 배열을 받아 각 배열의 곱을 구하는 함수

  // 함수 정의
  const multiplyArrays = (...arr: number[][]): number[] => {
    let result: number[] = [];
    for (let i = 0; i < arr[0].length; i++) {
      let check = 1;
      for (let j = 0; j < arr.length; j++) {
        check = check * arr[j][i];
      }
      result.push(check);
    }
    return result;
  };

  // 함수 호출
  const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
  console.log(result); // [4, 10, 18]
}

{
  // 문제 4: 두 개의 배열을 받아 교차된 값을 반환하는 함수
  // 함수 정의
  const intersection = (...arr: number[][]): number[] => {
    let result: number[] = [];
    let arr1 = arr[0];
    let arr2 = arr[1];
    //console.log(arr1);
    for (let j = 0; j < arr1.length; j++) {
      if (arr2.includes(arr1[j])) {
        result.push(arr1[j]);
      }
    }
    return result;
  };

  // 함수 호출
  const result = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result); // [2, 3]
}

{
  // 문제 5: 객체의 필드 값에 따라 출력 형식을 다르게 하는 함수

  // 함수 정의
  const formatInfo = (obj: {
    name?: string;
    age?: number;
  }): string | undefined => {
    if (obj.name && !obj.age) {
      return `Name: ${obj.name}`;
    } else if (obj.age && !obj.name) {
      return `Age: ${obj.age}`;
    }
  };

  // 함수 호출
  const info1 = formatInfo({ name: "Alice" });
  const info2 = formatInfo({ age: 20 });
  console.log(info1); // "Name: Alice"
  console.log(info2); // "Name: Alice"
}

{
  // 문제 6: 두 문자열을 합쳐서 출력하는 함수
  // 함수 정의
  const combineStrings = (a: string, b: string): string => {
    return `${a}${b}`;
  };

  // 함수 호출
  const combined = combineStrings("Hello", "World");
  console.log(combined); // "HelloWorld"
}

{
  // 문제 7: 배열의 각 값을 제곱하여 새로운 배열을 반환하는 함수
  // 함수 정의
  const squareArray = (arr: number[]): number[] => {
    let result: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] ** 2);
    }
    return result;
  };

  // 함수 호출
  const result = squareArray([1, 2, 3, 4]);
  console.log(result); // [1, 4, 9, 16]
}

{
  // 문제 8: 문자열과 숫자가 주어졌을 때, 그 둘을 더하여 문자열로 반환하는 함수

  // 함수 정의
  const addStringAndNumber = (str: string, num: number): string => {
    return `${str}${num}`;
  };

  // 함수 호출
  const result = addStringAndNumber("The number is ", 10);
  console.log(result); // "The number is 10"
}

{
  // 문제 9: 타입이 서로 다른 두 값을 비교하는 함수
  // 함수 정의
  const compareValues = (num: number, str: string): string => {
    if (num > str.length) {
      return "Number is larger";
    } else {
      return "String is larger";
    }
  };

  // 함수 호출
  const result = compareValues(10, "Hello");
  console.log(result); // "Number is larger"
}

{
  // 문제 10: 다중 조건을 처리하는 조건문 함수
  // 함수 정의
  const checkValue = (a: string | number | boolean): string | undefined => {
    if (typeof a === "number") {
      return "It's a number";
    } else if (typeof a === "boolean") {
      return "It's a boolean";
    } else {
      return "It's a string";
    }
  };

  // 함수 호출
  const result = checkValue(true);
  console.log(result);
}
