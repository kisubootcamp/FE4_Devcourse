let n = 5;
let nArr = [];
let a = 0;
for (let i = 0; i < n; i++) {
  a = ++a;
  nArr.push(a);
}
// console.log(nArr);
let mul = 1;
nArr.forEach((num) => {
  mul *= num;
});

console.log(mul);
