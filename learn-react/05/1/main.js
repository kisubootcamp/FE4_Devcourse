const numArr = [1, 2, 3, 4]; //2배한 배열
const numArr2 = numArr.map((num) => num * 2); //2배한 배열
const numArr3 = numArr.map((num) => `<li>${num}</li>`); //2배한 배열
console.log(numArr2);
console.log(numArr3);
