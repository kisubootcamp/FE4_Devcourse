let numArr = [10, -10, 20, -30, 40];
let numSum = [];
for (let i = 0; i < 5; i++) {
  let a = numArr[i];
  if (a > 0) {
    numSum.push(a);
  }
}

let sum = 0;
numSum.forEach((num) => {
  sum += num;
});
console.log(sum);
