function findMax() {
  let findMax = [1, 5, 3, 9, 2];
  let max = 0;
  findMax.forEach((num) => {
    if (max < num) {
      max = num;
    }
  });
  console.log(max);
}
findMax();
