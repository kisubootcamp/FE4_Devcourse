{
  //특정 문자 제거
  const removeChar = (str, target) => {
    const strArr = [...str];
    const resultArr = [];
    let arrNum = 0;

    for (a of strArr) {
      if (a !== target) {
        resultArr[arrNum] = a;
        arrNum++;
      }
    }
    console.log(resultArr.join(""));
  };
  removeChar("hello world", "o"); // "hell wrld"
}

{
  //배열 요소를 반전
  const reverseArray = (arr) => {
    let ressultArr = [];
    for (let i = 0; i < arr.length; i++) {
      ressultArr[i] = arr[arr.length - 1 - i];
    }
    console.log(ressultArr);
  };

  reverseArray([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]
}

{
  // 특정 숫자 찾기
  const containsNumber = (arr, target) => {
    let contains = false;
    for (a of arr) {
      if (a === target) {
        contains = true;
      }
    }

    console.log(contains);
  };
  containsNumber([1, 2, 3, 4, 5], 5); // true
  containsNumber([1, 2, 3, 4, 5], 7); // false
}

{
  //애너그램인지 확인
  const isAnagrams = (str1, str2) => {
    let arr1 = [...str1].sort();
    let arr2 = [...str2].sort();
    let leng = 0;
    let result;

    if (arr1.length > arr2.length) {
      leng = arr1.length;
    } else {
      leng = arr2.length;
    }

    for (let i = 0; i < leng; i++) {
      if (arr1[i] === arr2[i]) {
        result = true;
      } else {
        result = false;
      }
    }

    console.log("Anagrams :", result);
  };

  isAnagrams("listen", "silent"); // true
  isAnagrams("fluster", "restful"); // true
  isAnagrams("rat", "car"); // false
  isAnagrams("aaa", "aaaa"); // false
}

{
  // 배열에서 두 수의 합
  const twiceSum = (arr, target) => {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          resultArr[resultArr.length] = [arr[i], arr[j]];
        }
      }
    }

    console.log(resultArr);
  };

  twiceSum([1, 2, 3, 4, 5], 5); // [[1, 4], [2,3]]
  twiceSum([1, 2, 3, 4, 5], 9); // [[4, 5]]
  twiceSum([1, 2, 3, 4, 5], 6); // [[1, 5], [2,4]]
}
