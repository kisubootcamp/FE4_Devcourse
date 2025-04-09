// // 01
// {
//   const sumAllNumbers = (...nums: number[][]): number => {
//     nums.reduce((sum, num) => sum + num, 0); // 혹시나의 예외 사항을 방지하기 위해 맨 마지막에 sum의 초기값으로 0을 지정한다.
//   };
// }

// 02
{
  const doubleValue = (a: number | string): number => {
    if (typeof a === "number") {
      return 2 * a;
    } else if (typeof a === "string") {
      return 2 * a.length;
    } else {
      return a;
    }
  };

  const result1 = doubleValue(5);
  const result2 = doubleValue("hello");
  console.log(result1); // 10
  console.log(result2); // 10
}
