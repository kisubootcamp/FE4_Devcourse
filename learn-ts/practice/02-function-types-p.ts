{
  // 1. 여러 개의 숫자 배열을 받아 합을 구하는 함수
  const sumAllNumbers = (...num: number[][]): number[] => {
    return num.map((a) => a.reduce((x, y) => x + y, 0));
  };

  const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result); // [3, 12, 13]
}

{
  // 2. 숫자 또는 문자열을 받아 그 값을 두배로 만드는 함수
  const doubleValue = (a: number | string): number => {
    if (typeof a === 'number') {
      return a * 2;
    } else {
      return a.length * 2;
    }
  };

  const result1 = doubleValue(5);
  const result2 = doubleValue('hello');
  console.log(result1); // 10
  console.log(result2); // 10
}

{
  // 3. 두 숫자 배열을 받아 각 배열의 곱을 구하는 함수

  // 3-1.
  const multiplyArrays = (a: number[], b: number[]): number[] => {
    const arrLen = Math.min(a.length, b.length);
    const result: number[] = [];

    for (let i = 0; i < arrLen; i++) {
      result.push(a[i] * b[i]);
    }

    return result;
  };

  const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
  console.log(result); // [ 4, 10, 18 ]

  const result2 = multiplyArrays([1, 2], [4, 5, 6]);
  console.log(result2); // [ 4, 10 ]

  // 3-2.
  const multiplyArrays2 = (a: number[], b: number[]): number[] => {
    const minLength = Math.min(a.length, b.length);

    return Array.from({ length: minLength }, (_, index) => a[index] * b[index]);
  };
  const result3 = multiplyArrays2([1, 2], [4, 5, 6]);
  console.log(result3); // [4, 10]
}

{
  // 4. 두 개의 배열을 받아 교차된 값을 반환하는 함수

  // 4-1.
  const intersection = (a: number[], b: number[]): number[] => {
    const result: number[] = [];

    for (let i = 0; i < a.length; i++) {
      if (b.includes(a[i])) {
        result.push(a[i] * a[i]);
      }
    }
    return result;
  };

  const result = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result); // [4, 9]

  // 4-2.
  const intersection2 = (a: number[], b: number[]): number[] => {
    return a.filter((value) => b.includes(value)).map((value) => value * value);
  };

  const result2 = intersection2([1, 2, 3], [2, 3, 4]);
  console.log(result2); // [4, 9]
}

{
  // 5. 객체의 필드 값에 따라 출력 형식을 다르게 하는 함수

  // 5-1.
  const formatInfo = (value: { name: string; age?: number }): void => {
    if (value.name) {
      console.log(`Name: ${value.name}`); // Name: Alice
    }
    if (value.age) {
      console.log(`Age: ${value.age}`);
    }
  };

  const info = formatInfo({ name: 'Alice' });

  // 5-2.
  const formatInfo2 = (value: { name: string; age?: number }): string => {
    if (value.name) {
      return `Name: ${value.name}`;
    }
    if (value.age) {
      return `Age: ${value.age}`;
    }
    throw new Error('Type Invalid');
  };

  const info2 = formatInfo2({ name: 'Alice' });
  console.log(info2); // Name: Alice
}

{
  // 6. 두 문자열을 합쳐서 출력하는 함수
  const combineStrings = (a: string, b: string): string => {
    return `${a}${b}`;
  };

  const combined = combineStrings('Hello', 'World');
  console.log(combined); // HelloWorld
}

{
  // 7. 배열의 각 값을 제곱하여 새로운 배열을 반환하는 함수
  const squareArray = (num: number[]): number[] => {
    return num.map((a) => a * a);
  };

  const result = squareArray([1, 2, 3, 4]);
  console.log(result); // [ 1, 4, 9, 16 ]
}

{
  // 8. 문자열과 숫자가 주어졌을 때, 그 둘을 더하여 문자열로 반환하는 함수
  const addStringAndNumber = (a: string, b: number): string => {
    return `${a}${b}`;
  };

  const result = addStringAndNumber('The number is ', 10);
  console.log(result); // The number is 10
}

{
  // 9. 타입이 서로 다른 두 값을 비교하는 함수

  // 9-1.
  const compareValues = (a: number, b: string): string => {
    if (a > b.length) {
      return 'Number is larger';
    } else {
      return 'String is larger';
    }
  };

  const result = compareValues(10, 'Hello');
  console.log(result); // Number is larger

  // 9-2.
  const compareValues2 = (a: number, b: string): string => {
    return a > b.length ? 'Number is larger' : 'String is larger';
  };

  const result2 = compareValues2(10, 'Hello');
  console.log(result2); // Number is larger
}

{
  // 10. 다중 조건을 처리하는 조건문 함수
  const checkValue = (a: number | string | boolean): string => {
    if (typeof a === 'number') {
      return "It's a number";
    } else if (typeof a === 'string') {
      return "It's a string";
    } else {
      return "It's a boolean";
    }
  };

  const result = checkValue(true);
  console.log(result); // It's a boolean
}
