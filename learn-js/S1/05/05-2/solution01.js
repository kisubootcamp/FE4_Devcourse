let n = 10;
let a = 2;
let aArr = [0, 1];
for (let i = 1; i < n - 1; i++) {
  a = aArr[i - 1] + aArr[i];
  aArr.push(a);
}
console.log(aArr);
