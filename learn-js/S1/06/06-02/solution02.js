function reverseArray(Arr) {
  let a = 0;
  revArr = [];
  for (let i = Arr.length - 1; i >= 0; i--) {
    a = Arr[i];
    revArr.push(a);
  }
  console.log(revArr);
}
reverseArray([1, 2, 3, 4, 5]);
