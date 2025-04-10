// 06. 함수 연습문제

// 연습문제

// Q1
// 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
// 매개변수의 갯수 제한은 없습니다.
function plus(a, b) {
  return a + b;
}

// Q2
//사칙연산을 수행하는 로직을 담은 함수를 구현해주세요.  (매개변수 - 2개) (+, -, *, /)
//구현 방법은 자율입니다.
let calc = (a, b) => {
  return {
    plus: a + b,
    minus: a - b,
    multiply: a * b,
    divide: a / b,
  };
};

// Q3
//숫자를 매개변수로 받아서 짝수면 true, 홀수면 false를 반환하는 함수 isEven을 작성하세요.
//함수를 사용하여 7이 짝수인지 홀수인지 판별하고 결과를 출력하세요.
let isEven = (a, b) => {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isEven(7));

// Q4. 배열의 모든 요소 더하기
// 배열의 모든 요소의 합을 반환하는 함수를 작성하세요
function sumArray(nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}
console.log(sumArray([1, 2, 3])); // 6

// Q5. 배열의 최대값 찾기
// 배열에서 최대값을 찾는 함수를 작성하세요
function findMax(nums) {
  return Math.max(...nums);
}
console.log(findMax([1, 5, 3, 9, 2])); // 9

// Q6. 문자열 반전
// 주어진 문자열을 반전시켜 반환하는 함수를 작성하세요
let reverseString = (mesg) => {
  let reverse = "";
  for (let i = mesg.length - 1; i >= 0; i--) {
    reverse += mesg[i];
  }
  return reverse;
};
// let reverseString = (mesg) => mesg.split("").reverse().join("");
console.log(reverseString("hello")); // "olleh"

// Q7. 문자열에서 특정 문자 개수 세기
// 주어진 문자열에서 특정 문자의 개수를 세는 함수를 작성하세요
const countCharacter = (mesg, char) => {
  let count = 0;
  for (let c of mesg) {
    if (c === char) count++;
  }
  return count;
};
console.log(countCharacter("banana", "a")); // 3

//Q8. 팩토리얼 계산하기
// - 양의 정수를 매개변수로 받아서 그 수의 팩토리얼을 반환하는 함수 factorial을 작성하세요.
// - 함수를 사용하여 5의 팩토리얼을 계산하고 결과를 출력하세요.
function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}
console.log(factorial(5));

// Q9. 삼각형 넓이 계산하기
//삼각형의 밑변과 높이를 매개변수로 받아서 넓이를 반환하는 함수 triangleArea를 작성하세요.
//함수를 사용하여 밑변이 10이고 높이가 5인 삼각형의 넓이를 계산하고 결과를 출력하세요.
function triangleArea(w, h) {
  return w * h * 0.5;
}
console.log(triangleArea(10, 5));

// 연습문제+

// 1. 특정 문자 제거
// 주어진 문자열에서 특정 문자를 제거하는 함수를 작성하시오.
const removeChar = (str, c) => {
  return str.replaceAll(c, "");
};
console.log(removeChar("hello world", "o")); // "hell wrld"

// 2. 배열 요소를 반전
// 주어진 배열의 요소를 반전 시키는 함수를 작성하시오.
function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// 3. 특정 숫자 찾기
// 주어진 배열에서 특정 숫자가 있는지 확인하는 함수를 작성하시오.
function containsNumber(arr, num) {
  return arr.includes(num);
}
console.log(containsNumber([1, 2, 3, 4, 5], 5)); // true
console.log(containsNumber([1, 2, 3, 4, 5], 7)); // false

// 4. 애너그램인지 확인
// 두 문자열이 애너그램(서로 다른 순서로 같은 문자를 가지는 경우)인지 확인하는 함수를 작성하시오. (알파뱃)
const isAnagrams = (str1, str2) =>
  str1.split("").sort().join("") === str2.split("").sort().join("");

console.log(isAnagrams("listen", "silent")); // true
console.log(isAnagrams("fluster", "restful")); // true
console.log(isAnagrams("rat", "car")); // false
console.log(isAnagrams("aaa", "aaaa")); // false

// 5. 배열에서 두 수의 합
// 주어진 배열에서 두 수의 합이 특정 목표값이 되는 쌍을 찾아 반환하는 함수를 작성하시오.
function twiceSum(arr, num) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        res.push([arr[i], arr[j]]);
      }
    }
  }
  return res;
}
console.log(twiceSum([1, 2, 3, 4, 5], 5)); // [[1, 4], [2,3]]
console.log(twiceSum([1, 2, 3, 4, 5], 9)); // [[4, 5]]
console.log(twiceSum([1, 2, 3, 4, 5], 6)); // [[1, 5], [2,4]]

// 연습문제++

// 1. 문자열 압축
// 문자열이 주어졌을 때, 연속된 동일한 문자를 하나의 문자와 그 문자의 개수로 압축해서 반환하는 함수를 만들어주세요.
const i = "aaabbbccc";
const o = "a3b3c3";

const i2 = "aabbaa";
const o2 = "a2b2a2";

const i3 = "abbbffd";
const o3 = "a1b3f2d1";

const i4 = "aabaa";
const o4 = "a2b1a2"; // a4b1

// 2. 팰린드롬 확인하기(쉬운 버전)
// 주어진 문자열이 팰린드롬인지 확인하는 함수를 작성하세요. 팰린드롬이란 앞에서부터 읽으나 뒤에서부터 읽으나 같은 문자열을 말합니다. 대소문자를 구분하지 않으며, 매개변수는 항상 공백 없이 소문자 알파뱃만 넘어온다고 가정합니다.
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("world")); // false

// 3. 펠린드롬 확인하기 (어려운 버전)
// 주어진 문자열이 팰린드롬인지 확인하는 함수를 작성하세요. 팰린드롬이란 앞에서부터 읽으나 뒤에서부터 읽으나 같은 문자열을 말합니다. 대소문자를 구분하지 않으며, 알파벳 이외의 문자는 무시합니다.
console.log(isPalindromeSentence("A man, a plan, a canal, Panama!")); // true
console.log(isPalindromeSentence("Was it a car or a cat I saw?")); // true
console.log(isPalindromeSentence("Hello, world!")); // false
console.log(isPalindromeSentence("No 'x' in Nixon")); // true

// 4. 최대 공약수(GCD)
// 두 정수를 전달 받아서 최대 공약수를 구하는 함수를 구현하세요.

// 최대 공약수는 공통된 약수 중 가장 큰 수를 의미합니다.
// 예) 12 - 1, 2, 3, 4, 6 12
//       18 - 1, 2, 3, 6, 9, 18
// 약수 : 1, 2, 3, 6
// 최대 공약수 6

// 유클리드 호제법

gcd(56, 98); // 14
gcd(101, 10); // 1
gcd(15, 5); // 5
gcd(100, 75); // 25
gcd(18, 24); // 6

// 5. 배열 정렬(버블 정렬)
// 주어진 배열을 오름차순으로 정렬하는 함수를 작성하시오.
console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
