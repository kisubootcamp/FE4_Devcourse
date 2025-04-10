{
  // 함수 정의

  function sumAllNumbers(...arrays: number[][]): number[] {
    return arrays.map((arr) => arr.reduce((sum, num) => sum + num, 0));
  }

  // 함수 호출
  const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result); // [3, 12, 13]
}
{
  //2
  // 함수 정의
  const doubleValue = (a: number | string): number | string => {
    if (typeof a === 'number') return a * 2;
    else return `${a}${a}`;
  };

  // 함수 호출
  const result1 = doubleValue(5);
  const result2 = doubleValue('hello');
  console.log(result1); // 10
  console.log(result2); // hellohello
}

{
  //3
  // 함수 정의
  const multiplyArrays = (a: number[], b: number[]): number[] => {
    let result: number[] = [];

    if (a.length < b.length) {
      for (let i = 0; i < a.length; i++) {
        result.push(a[i] * b[i]);
      }
    } else if (a.length > b.length) {
      for (let i = 0; i < b.length; i++) {
        result.push(a[i] * b[i]);
      }
    } else {
      for (let i = 0; i < b.length; i++) {
        result.push(a[i] * b[i]);
      }
    }

    return result;
  };

  // 함수 호출
  const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
  console.log(result); // [4, 10, 18]
}
