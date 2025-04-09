{
  // 1. 여러 개의 숫자 배열을 받아 합을 구하는 함수
  const sumAllNumbers = (...arr: number[][]) => {
    return arr.map((a) => a.reduce((x, y) => x + y));
  };

  const result1 = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result1);
}

{
  // 2. 숫자 또는 문자열을 받아 그 값을 두 배로 만드는 함수
  const doubleValue = (a: number | string) => {
    if (typeof a === 'number') {
      return a * 2;
    } else {
      return a.length * 2;
    }
  };
  const result2 = doubleValue(5);
  const result22 = doubleValue('hello');
  console.log(result2);
  console.log(result22);
}

{
  // 3. 두 숫자 배열을 받아 각 배열의 곱을 구하는 함수
}
