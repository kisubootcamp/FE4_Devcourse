{
  //1
  function sumAllNumbers(...arrays: number[][]): number[] {
    return arrays.map((arr) => arr.reduce((sum, num) => sum + num, 0));
  }
  const sumAllNumbers2 = (...arrays: number[][]): number[] =>
    arrays.map((arr) => arr.reduce((sum, num) => sum + num, 0));

  let arrays = [
    [1, 2, 3],
    [4, 5],
    [1, 2],
  ];
  console.log(sumAllNumbers(...arrays));
}
{
  //2
  const doubleValue = (a: number | string): number | string => {
    if (typeof a === 'number') {
      return a * 2;
    } else {
      return `${a}${a}`;
    }
  };
  // let a = 5;
  // console.log(doubleValue(a));
  let a = 'apple';
  console.log(doubleValue(a));
}
{
  //3
}
