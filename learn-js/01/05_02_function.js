// 1. 특정 문자 제거
// 주어진 문자열에서 특정 문자를 제거하는 함수를 작성하시오

const removeChar = (str, char) => str.replaceAll(char, "");
console.log(removeChar("Hello, World!", "o"));

// 2. 배열 요소를 반전
// 주어진 배열의 요소를 반전 시키는 함수를 작성하시오.

const reverseArray = (arr) => arr.reverse();
console.log(reverseArray([1, 2, 3, 4, 5]));

// 3. 특정 숫자 찾기
// 주어진 배열에서 특정 숫자가 있는지 확인하는 함수를 작성하시오.

const containsNumber = (arr, num) => arr.includes(num);
console.log(containsNumber([1, 2, 3, 4, 5], 3));
console.log(containsNumber([1, 2, 3, 4, 5], 6));

// 4. 애너그램인지 확인
// 두 문자열이 애너그램(서로 다른 순서로 같은 문자를 가지는 경우)인지 확인하는 함수를 작성하시오. (알파뱃)

const isAnagrams = (str1, str2) => {
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
};

console.log(isAnagrams("listen", "silent"));
console.log(isAnagrams("rat", "car"));

// 5. 배열에서 두 수의 합
// 주어진 배열에서 두 수의 합이 특정 목표값이 되는 쌍을 찾아 반환하는 함수를 작성하시오.

const twiceSum = (arr, target) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) result.push([arr[i], arr[j]]);
    }
  }

  return result;
};
console.log(twiceSum([1, 2, 3, 4, 5], 5));
console.log(twiceSum([1, 2, 3, 4, 5], 9));
console.log(twiceSum([1, 2, 3, 4, 5], 6));
