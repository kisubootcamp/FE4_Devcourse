function containsNumber(Arr, num) {
  let a = 0;
  let b = 0;
  for (let i = 0; i < Arr.length; i++) {
    a = Arr[i];
    if (a === num) {
      b = a;
    }
  }
  if (b !== 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

containsNumber([1, 2, 3, 4, 5], 5);
containsNumber([1, 2, 3, 4, 5], 7);
