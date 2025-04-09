{
  const intersection = (a: number[], b: number[]): void => {
    let n = {};
    a.forEach((num) => {
      n = num;
    });
    console.log(n);
  };
  const result = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result); // [2, 3]
}

