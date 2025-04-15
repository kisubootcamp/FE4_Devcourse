{
  // 1.
  // 함수 정의
  const sumAllNumbers = (...rest: number[][]): number[] => {
    return rest.map((arr) => arr.reduce((sum, num) => sum + num, 0));
  };

  // 함수 호출
  const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result); // [3, 12, 13]
}

{
  // 2.
  // 함수 정의
  const doubleValue = (string | number) => {};

  // 함수 호출
  const result1 = doubleValue(5);
  const result2 = doubleValue('hello');
  console.log(result1); // 10
  console.log(result2); // 10
}
