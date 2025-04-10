//1번 주어진 문자열에서 특정 문자를 제거하는 함수를 작성하시오
function removeChar(str, char) {
  let result = str
    .split("")
    .filter((str) => str !== char)
    .join("");
  console.log(result);
}

removeChar("hello world", "o"); // "hell wrld"

//2번 주어진 배열의 요소를 반전 시키는 함수를 작성하시오.
function reverseArray(arr) {
  return arr.reverse();
}

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

//2번 주어진 배열이 순서대로 되어있기 때문에 sort로 내림차순 정렬 해봄
function reverseArray1(arr) {
  return arr.sort((a, b) => b - a);
}
console.log(reverseArray1([1, 2, 3, 4, 5]));

//3번 주어진 배열에서 특정 숫자가 있는지 확인하는 함수를 작성하시오.
function containsNumber(arr, n) {
  return arr.includes(n);
}

console.log(containsNumber([1, 2, 3, 4, 5], 5)); // true
console.log(containsNumber([1, 2, 3, 4, 5], 7)); // false

//4번 두 문자열이 애너그램(서로 다른 순서로 같은 문자를 가지는 경우)인지 확인하는 함수를 작성하시오. (알파뱃)
// ((a, b) => a - b)는 배열에만 사용가능
function isAnagrams(str1, str2) {
  let char1 = str1.split("").sort().join("");
  let char2 = str2.split("").sort().join("");
  if (char1 === char2) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagrams("listen", "silent")); // true
console.log(isAnagrams("fluster", "restful")); // true
console.log(isAnagrams("rat", "car")); // false
console.log(isAnagrams("aaa", "aaaa")); // false

//5번 주어진 배열에서 두 수의 합이 특정 목표값이 되는 쌍을 찾아 반환하는 함수를 작성하시오.
function twiceSum(arr, n) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        // 이 부분에서 계속 arr로[] 처리하지 않아서 undefined가 나와 시간이 소요됨
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}
console.log(twiceSum([1, 2, 3, 4, 5], 5)); // [[1, 4], [2,3]]
console.log(twiceSum([1, 2, 3, 4, 5], 9)); // [[4, 5]]
console.log(twiceSum([1, 2, 3, 4, 5], 6)); // [[1, 5], [2,4]]
