 const twiceSum = (arr, a) => {
    let arr2 = [];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === a) arr2.push([arr[i], arr[j]]);
      }
    }
    console.log(arr2);
    return arr2;
  };
  twiceSum([1, 2, 3, 4, 5], 5); // [[1, 4], [2,3]]
  twiceSum([1, 2, 3, 4, 5], 9); // [[4, 5]]
  twiceSum([1, 2, 3, 4, 5], 6); // [[1, 5], [2,4]]