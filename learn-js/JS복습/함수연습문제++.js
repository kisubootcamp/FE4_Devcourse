//1번 문자열이 주어졌을 때, 연속된 동일한 문자를 하나의 문자와 그 문자의 개수로 압축해서 반환하는 함수를 만들어주세요.
function charNum(str) {
  let result = [];
  let count = 1;
  let strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i + 1]) {
      count++;
    } else {
      result.push(strArr[i], count);
      count = 1;
    }
  }
  return result.join("");
}
console.log(charNum("aabaa"));
// const i = "aaabbbccc";
// const o = "a3b3c3";

// const i2 = "aabbaa";
// const o2 = "a2b2a2";

// const i3 = "abbbffd";
// const o3 = "a1b3f2d1";

// const i4 = "aabaa";
// const o4 = "a2b1a2"; // a4b1 (???)

// 2번  **팰린드롬 확인하기(쉬운 버전)**
// 주어진 문자열이 팰린드롬인지 확인하는 함수를 작성하세요.
// 팰린드롬이란 앞에서부터 읽으나 뒤에서부터 읽으나 같은 문자열을 말합니다. 대소문자를 구분하지 않으며, 매개변수는 항상 공백 없이 소문자 알파뱃만 넘어온다고 가정합니다.
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] === str[str.length - (1 + i)]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("world")); // false

// function isPalindrome(str) {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = str.length-(i + 1); j < str.length; j++) {
//       if (str[i] === str[j]) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }
// }

// 3번 펠린드롬 확인하기 (어려운 버전)
// 주어진 문자열이 팰린드롬인지 확인하는 함수를 작성하세요. 팰린드롬이란 앞에서부터 읽으나 뒤에서부터 읽으나 같은 문자열을 말합니다. 대소문자를 구분하지 않으며, 알파벳 이외의 문자는 무시합니다.
function isPalindromeSentence(str) {
  // 쉬운버전 코드에서 정규표현식과 toLowerCase() 추가함
  let replaceStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  for (let i = 0; i < replaceStr.length / 2; i++) {
    if (replaceStr[i] === replaceStr[replaceStr.length - (1 + i)]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
console.log(isPalindromeSentence("A man, a plan, a canal, Panama!")); // true
console.log(isPalindromeSentence("Was it a car or a cat I saw?")); // true
console.log(isPalindromeSentence("Hello, world!")); // false
console.log(isPalindromeSentence("No 'x' in Nixon")); // true

//4번 두 정수를 전달 받아서 최대 공약수를 구하는 함수를 구현하세요.

// 최대 공약수는 공통된 약수 중 가장 큰 수를 의미합니다.
// 예) 12 - 1, 2, 3, 4, 6 12
//       18 - 1, 2, 3, 6, 9, 18
// 약수 : 1, 2, 3, 6
// 최대 공약수 6
// // 유클리드 호제법

// 식을 알고 있어서 식을 대입해서 풀긴했지만 정확한 해석 필요
function gcd(n1, n2) {
  return n2 === 0 ? n1 : gcd(n2, n1 % n2);
}

console.log(gcd(56, 98)); // 14
console.log(gcd(101, 10)); // 1
console.log(gcd(15, 5)); // 5
console.log(gcd(100, 75)); // 25
console.log(gcd(18, 24)); // 6

// 6. 주어진 배열을 오름차순으로 정렬하는 함수를 작성하시오.
function bubbleSort(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]

{
  function solution(n, lost, reserve) {
    let current = 0;
    let reserved = [];
    let getItem = [];
    let lostStu = lost.filter((c) => !reserve.includes(c));
    let reserveStu = reserve.filter((b) => !lost.includes(b));
    for (let i = 0; i < reserveStu.length; i++) {
      for (let j = 0; j < lostStu.length; j++) {
        if (
          (lostStu[j] - 1 === reserveStu[i] || lostStu[j] + 1 === reserveStu[i]) &&
          !reserved.includes(reserveStu[i]) &&
          !getItem.includes(lostStu[j]) &&
          !lostStu.includes(reserveStu[i]) &&
          reserveStu.includes(reserveStu[i])
        ) {
          reserved.push(reserveStu[i]);
          getItem.push(lostStu[j]);
          current++;
        }
      }
    }
    return n - (lostStu.length - current);
  }
  console.log(solution(5, [2, 4], [2, 3, 5]));
}
