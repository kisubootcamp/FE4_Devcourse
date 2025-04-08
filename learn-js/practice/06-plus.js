// 1. 특정 문자 제거
function removeChar(a, b) {
  let s = '';

  for (let i = 0; i < a.length; i++) {
    if (a[i] != b) {
      s += a[i];
    }
  }
  return s;
}
const result1 = removeChar('hello world', 'o');
console.log(result1);

// 2. 배열 요소를 반전
const reverseArray = (arr) => {
  for (let i = 0; i < (arr.length - 1) / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
};
const result2 = reverseArray([1, 2, 3, 4, 5]);
console.log(result2);

// 3. 특정 숫자 찾기
function containsNumber(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}
const result3 = containsNumber([1, 2, 3, 4, 5], 5);
console.log(result3);

// 4. 애너그램인지 확인
const isAnagrams = (str, a) => {
  // .......
};
const result4 = isAnagrams('listen', 'silent');
console.log(result4);

// 5. 배열에서 두 수의 합
