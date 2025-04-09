// 06. 함수
//연습문제
// 01
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4));

// 02
let count = 0;
function calculate(num, operate) {
  switch (operate) {
    case '+': {
      count += num;
      break;
    }
    case '-': {
      count -= num;
      break;
    }
    case '*': {
      count *= num;
      break;
    }
    case '/': {
      count /= num;
      break;
    }
  }
  console.log(count);
}
calculate(10, '+');
calculate(5, '-');
calculate(2, '/');
calculate(2, '*');

// 03
function isEven(num) {
  if (num % 2) {
    return false;
  } else {
    return true;
  }
}
console.log(isEven(7));

// 04
function sumArray(numArr) {
  return numArr.reduce((result, num) => result + num, 0);
}

console.log(sumArray([1, 2, 3])); // 6

// 05
function findMax(numArr) {
  return Math.max(...numArr);
}
console.log(findMax([1, 5, 3, 9, 2])); // 9

// 06
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('hello')); // "olleh"

// 07
function countCharacter(str, ap) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ap) {
      count += 1;
    }
  }
  return count;
}
console.log(countCharacter('banana', 'a')); // 3

// 08
function factorial(num) {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return res;
}
console.log(factorial(5));

// 09
function triangleArea(w, h) {
  return (w * h) / 2;
}
console.log(triangleArea(10, 5));

// 연습문제+
// 01
function removeChar(str, al) {
  return str.replaceAll(al, '');
}
console.log(removeChar('hello world', 'o')); // "hell wrld"

// 02
function reverseArray(numArr) {
  return numArr.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// 03
function containsNumber(numArr, num) {
  return numArr.includes(num);
}
console.log(containsNumber([1, 2, 3, 4, 5], 5)); // true
console.log(containsNumber([1, 2, 3, 4, 5], 7)); // false

// 04
function isAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const count1 = {};
  const count2 = {};

  for (let i = 0; i < str1.length; i++) {
    count1[str1[i]] = (count1[str1[i]] || 0) + 1;
    count2[str2[i]] = (count2[str2[i]] || 0) + 1;
  }
  for (const key in count1) {
    if (count1[key] !== count2[key]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagrams('listen', 'silent')); // true
console.log(isAnagrams('fluster', 'restful')); // true
console.log(isAnagrams('rat', 'car')); // false
console.log(isAnagrams('aaa', 'aaaa')); // false

// 05
function twiceSum(numArr, num) {
  const res = [];
  numArr.sort((a, b) => a - b);
  let s = 0;
  let e = numArr.length - 1;
  while (s < e) {
    let sum = numArr[s] + numArr[e];
    if (sum < num) {
      s++;
    } else if (sum > num) {
      e--;
    } else {
      res.push([s + 1, e + 1]);
      s++;
      e--;
    }
  }
  return res;
}
console.log(twiceSum([1, 2, 3, 4, 5], 5)); // [[1, 4], [2,3]]
console.log(twiceSum([1, 2, 3, 4, 5], 9)); // [[4, 5]]
console.log(twiceSum([1, 2, 3, 4, 5], 6)); // [[1, 5], [2,4]]

// 연습문제++
// 01
function countStr(str) {
  const strMap = {};
  for (let i = 0; i < str.length; i++) {
    strMap[str[i]] = (strMap[str[i]] || 0) + 1;
  }
  const res = Object.entries(strMap)
    .map(([key, value]) => `${key}${value}`)
    .join('');
  return res;
}
console.log(countStr('aaabbbccc'));
console.log(countStr('aabbaa'));
console.log(countStr('abbbffd'));
console.log(countStr('aabaa'));

// 02
function isPalindrome(str) {
  for (let i = 0; i <= Math.round(str.length / 2); i++) {
    if (!(str[i] === str[str.length - 1 - i])) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('level')); // true
console.log(isPalindrome('world')); // false

// 03
function isPalindromeSentence(str) {
  str = str.toLowerCase().replace(/[^0-9a-z]/g, '');
  for (let i = 0; i <= Math.round(str.length / 2); i++) {
    if (!(str[i] === str[str.length - 1 - i])) {
      return false;
    }
  }
  return true;
}
console.log(isPalindromeSentence('A man, a plan, a canal, Panama!')); // true
console.log(isPalindromeSentence('Was it a car or a cat I saw?')); // true
console.log(isPalindromeSentence('Hello, world!')); // false
console.log(isPalindromeSentence("No 'x' in Nixon")); // true

// 04
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log(gcd(56, 98)); // 14
console.log(gcd(101, 10)); // 1
console.log(gcd(15, 5)); // 5
console.log(gcd(100, 75)); // 25
console.log(gcd(18, 24)); // 6

// 05
function bubbleSort(numArr) {
  for (let i = 0; i < numArr.length - 1; i++) {
    for (let j = 0; j < numArr.length - i - 1; j++) {
      if (numArr[j] > numArr[j + 1]) {
        [numArr[j], numArr[j + 1]] = [numArr[j + 1], numArr[j]];
      }
    }
  }
  return numArr;
}

console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
