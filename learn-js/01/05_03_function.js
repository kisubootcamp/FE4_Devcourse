// 연습문제++

// 1. 문자열 압축
// 문자열이 주어져쓸 때, 연속된 동일한 문자를 하나의 문자와 그 문자의 개수로 압축해서 반환하는 함수를 만들어주세요.
function stringCompression(str) {
  let alphabetObj = {};
  const strList = str.split("");
  for (let i = 0; i < strList.length; i++) {
    const alphabet = strList[i];
    if (!alphabetObj[alphabet]) alphabetObj[alphabet] = 0;

    alphabetObj[alphabet]++;
  }

  let result = "";
  for (let key in alphabetObj) result += key + alphabetObj[key];

  return result;
}

console.log(stringCompression("aaavvvccc"));

console.log(
  "------------------------------------------------------------------------"
);

// 2. 팰린드롭 확인하기 (쉬운 버전)
function isPalindrome(str) {
  let reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("world")); // false

console.log(
  "------------------------------------------------------------------------"
);

// 3. 팰린드롭 확인하기 (어려운 버전)
function isPalindromeSentence(str) {
  let regExp = /[\{\}\[\]\/ ?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
  const reverseStr = str
    .replace(regExp, "")
    .split("")
    .reverse()
    .join("")
    .toLowerCase();

  return str.replace(regExp, "").toLowerCase() === reverseStr;
}

console.log(isPalindromeSentence("A man, a plan, a canal, Panama!")); // true
console.log(isPalindromeSentence("Was it a car or a cat I saw?")); // true
console.log(isPalindromeSentence("Hello, world!")); // false
console.log(isPalindromeSentence("No 'x' in Nixon")); // true

console.log(
  "------------------------------------------------------------------------"
);

// 4. 최대 공약수 (GCD)
// 두 정수를 전달 받아서 최대 공약수를 구하는 함수를 구현
// 최대 공약수는 공통된 약수 중 가장 큰 수를 의미한다.
function gcd(num1, num2) {
  const gcdList = [];
  let tiny = num1 <= num2 ? num1 : num2;
  for (let i = 1; i <= tiny; i++) {
    if (num1 % i === 0 && num2 % i === 0) gcdList.push(i);
  }

  return gcdList.pop();
}
// 유클리드 호제법
function gcd1(a, b) {
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

console.log(gcd1(56, 98)); // 14
console.log(gcd1(101, 10)); // 1
console.log(gcd1(15, 5)); // 5
console.log(gcd1(100, 75)); // 25
console.log(gcd1(18, 24)); // 6

console.log(
  "------------------------------------------------------------------------"
);

// 5. 배열 정렬
const sortArr = (arr) => arr.sort((a, b) => a - b);
// 버블 정렬
function bubbleSort(arr) {
  const result = [...arr];
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      // 오름차순 >, 내림차순 <
      if (result[j] > result[j + 1]) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

console.log(sortArr([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
