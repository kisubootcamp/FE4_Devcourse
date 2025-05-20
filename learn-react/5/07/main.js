const numArr = [1, 2, 3, 4];
// const numArr2 = numArr.map(() => 10);
// console.log(numArr2); // [10, 10, 10, 10]

const numArr3 = numArr.map((num) => num * 2);
console.log(numArr3);

const numArr2 = numArr.map((num) => `<li>${num}</li>`);
