{
  // 01. 변수
  // 1
  let x, y;
  x = 10;
  y = 20;

  let sum = x + y;
  console.log(sum);

  // 2
  let name = "Alice";
  name = "Bob";
  console.log(name);

  // 3
  const PI = 3.14;
  console.log(PI);

  // 4
  let a = 5;
  let b = 10;

  let temp = a;
  a = b;
  b = temp;
  console.log(a, b);
}

{
  // 02. 자료형
  // 1
  let num = 42;
  let name = "John";
  let isTrue = true;
  let person = { name: "Alice", age: 30 };
  let fruits = ["apple", "banana", "orange"];

  console.log(typeof num); // number
  console.log(typeof name); // string
  console.log(typeof isTrue); // boolean
  console.log(typeof person); // object
  console.log(typeof fruits); // object

  // 2
  let length = 16; // number
  let lastName = "Brown"; // string
  let score = [10, 20]; // object
  let x = {
    firstName: "Nick",
    lastName: "Doe",
  }; // object
}

{
  // 03. 연산자
  // 1
  let a = 10;
  let b = 5;

  const add = a + b;
  const sub = a - b;
  const mul = a * b;
  const div = a / b;
  const rem = a % b;

  console.log(add, sub, mul, div, rem);

  // 2
  // a
  let y = 7;

  // b
  console.log(`증가하기 전 y: ${y}`);
  y++;
  console.log(`증가한 후 y: ${y}`);

  // c
  console.log(`감소하기 전 y: ${y}`);
  y--;
  console.log(`감소한 후 y: ${y}`);

  // d
  ++y;
  console.log(`증가한 후 y: ${y}`);

  //e
  --y;
  console.log(`감소한 후 y: ${y}`);

  // 3
  let x = 20;
  const res1 = (x += 10);
  const res2 = (x -= 5);
  const res3 = (x /= 2);
  const res4 = (x *= 3);

  console.log(res1, res2, res3, res4);

  // 4
  const age1 = 25;
  const age2 = 30;

  console.log(age1 > age2);
  console.log(age1 === age2);
  console.log(age1 > age2 ? "Older" : "Younger or Same");

  // 5-1
  const num = 0;
  console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative");

  // 5-2
  const a_ = 16;
  const b_ = 3;
  const c_ = 25;
  console.log(a_ > b_ ? (a_ > c_ ? a_ : c_) : b_ > c_ ? b_ : c_);

  // 5-3
  const number = 9;
  console.log(number % 2 === 0 ? "Even" : "Odd");

  // 5-4
  const isLoggedIn = true;
  console.log(isLoggedIn ? "Welcome" : "Please log in");

  // 5-5
  const age = 18;
  console.log(age >= 18 ? "Adult" : "Minor");

  // 6-1
  const a__ = true;
  const b__ = false;

  console.log(a__ && b__);
  console.log(a__ || b__);
  console.log(!a__);

  // 6-2
  const x_ = 8;
  const y_ = 3;
  const z_ = 10;

  console.log(x_ > 10 && y_ < 5);
  console.log(x_ > 10 || z_ > 3);
  console.log(y_ !== 0);

  // 6-3
  const isLoggedIn_ = true;
  const isAdmin_ = false;

  console.log(isLoggedIn_ ? "Welcome" : "Please log in");
  console.log(isAdmin_ ? "Admin access granted" : "Admin access denied");
  console.log(
    isLoggedIn_ && isAdmin_ ? "Full access granted" : "Restricted access"
  );

  // 6-4
  const value1 = "yubin";
  const value2 = null;

  console.log(value1 || value2 ? "값이 존재함" : "값이 존재하지 않음");
  console.log(
    !value1 && !value2 ? "값이 존재하지 않음" : "값이 하나 이상 존재함"
  );

  // 6-5
  const num_ = 26;
  console.log(num_ >= 0 && num_ <= 100 ? "0 ~ 100 범위 안" : "0 ~ 100 범위 밖");
  console.log(num_ < 0 || num_ > 100 ? "0 ~ 100 범위 밖" : "0 ~ 100 범위 안");

  // 7-1. 2번 배열

  // 7-2.
  let obj = {
    name: "철수",
    age: 20,
    gender: "male",
  };

  // 7-3. 4번 =

  // 7-4. 1번 % 나누기 연산자

  // 7-5.
  const myLevel = 99;
  const status = myLevel >= 99 ? "축하합니다. 만렙입니다" : "";

  console.log(status); // 축하합니다. 만렙입니다

  // 7-6.
  console.log(10 == "10"); // true
  console.log(10 === "10"); // false
  console.log(10 * "20"); // 200
  console.log(10 * 20); // 200

  // 7-7. 1번 score += 10;

  // 7-8. 2번 30

  // 7-9.
  const num__ = 12;
  const isEven = num__ % 2 === 0 ? "짝수" : "홀수";
  console.log(isEven);
}

{
  // 04. 조건문
  // 1
  const score = 95;
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }

  // 2
  const num = 5;
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }

  // 3
  const isLoggedIn = true;
  const isAdmin = false;
  if (!isLoggedIn) {
    console.log("Please log in");
  } else if (!isAdmin) {
    console.log("Access denied");
  } else {
    console.log("Welcome, admin!");
  }

  // 4
  const a = 1;
  const b = 21;
  if (a > b) {
    console.log("a is greater");
  } else if (b > a) {
    console.log("b is greater");
  } else {
    console.log("a and b are equal");
  }

  // 5
  const month = 1;
  if (month >= 3 && month <= 5) {
    console.log("Spring");
  } else if (month >= 6 && month <= 8) {
    console.log("Summer");
  } else if (month >= 9 && month <= 11) {
    console.log("Fall");
  } else if (month <= 2 || month >= 12) {
    console.log("Winter");
  }

  // 6
  let price = 50000;
  if (price >= 100000) {
    price *= 0.8;
  } else if (price >= 50000) {
    price *= 0.9;
  }
  console.log(price);

  // 7
  const day = 6;
  let dayName;
  switch (day) {
    case 1:
      dayName = "월요일";
      break;
    case 2:
      dayName = "화요일";
      break;
    case 3:
      dayName = "수요일";
      break;
    case 4:
      dayName = "목요일";
      break;
    case 5:
      dayName = "금요일";
      break;
    case 6:
      dayName = "토요일";
      break;
    case 7:
      dayName = "일요일";
      break;
  }
  console.log(dayName);

  // 8
  const num2 = 10;
  if (num2 > 0) {
    console.log("양수");
  } else if (num2 < 0) {
    console.log("음수");
  } else {
    console.log("0");
  }
}

{
  // 05. 반복문
  // 쉬움-1
  for (let i = 1; i <= 9; i++) {
    console.log(i);
  }

  // 쉬움-2
  let numArr = [10, -10, 20, -30, 40];
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > 0) {
      sum += numArr[i];
    }
  }
  console.log(sum);

  // 쉬움-3
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i, "짝수");
    } else {
      console.log(i, "홀수");
    }
  }

  // 어려움-1
  let n = 10; // 원하는 항의 수
  let result = [0, 1];

  for (let i = 2; i < n; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }

  console.log(`피보나치 수열(${n}항):`, result); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

  // 어려움-2
  let start = 1;
  let end = 100; // 범위
  let results = [];

  for (let i = start + 1; i <= end; i++) {
    results.push(i);
  }

  for (let i = start + 1; i <= end; i++) {
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        results = results.filter((v) => v !== i);
        break;
      }
    }
  }

  console.log(results); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

  // 어려움-3
  const numbers = [5, 10, 15, 20, 25]; // 배열
  let results_ = 0;

  for (const num of numbers) {
    results_ += num;
  }

  console.log(results_); // 75

  // 어려움-4
  const str = "Hello, World!";
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  console.log("뒤집힌 문자열:", reversed); // "!dlroW ,olleH"

  // 어려움-5
  let n_ = 5; // 예시 숫자
  let factorial = 1;

  for (let i = 2; i <= n_; i++) {
    factorial *= i;
  }

  console.log(`${n_}의 팩토리얼:`, factorial); // 120

  // 어려움-6
  for (let i = 100; i <= 999; i++) {
    let str = "" + i;
    if (i === str[0] ** 3 + str[1] ** 3 + str[2] ** 3) {
      console.log(i);
    }
  }
}

{
  // 06. 함수
  // 연습문제 1
  function sum(...numbers) {
    let res = 0;
    for (let i = 0; i < numbers.length; i++) {
      res += numbers[i];
    }
    return res;
  }
  console.log(sum(1, 2, 3, 4, 5));

  // 연습문제 2
  function calc(n1, n2) {
    console.log(n1 + n2, n1 - n2, n1 * n2, n1 / n2);
  }
  calc(10, 5);

  // 연습문제 3
  function isEven(num) {
    if (num % 2 === 0) return true;
    else return false;
  }
  console.log(isEven(7));

  // 연습문제 4
  function sumArray(nums) {
    return nums.reduce((sum, num) => sum + num, 0);
  }
  console.log(sumArray([1, 2, 3])); // 6

  // 연습문제 5
  function findMax(nums) {
    return Math.max(...nums);
  }
  console.log(findMax([1, 5, 3, 9, 2])); // 9

  // 연습문제 6
  function reverseString(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
      rev += str[i];
    }
    return rev;
  }
  console.log(reverseString("hello")); // "olleh"

  // 연습문제 7
  function countCharacter(str, c) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === c) count++;
    }
    return count;
  }
  console.log(countCharacter("banana", "a")); // 3

  // 연습문제 8
  function factorial(num) {
    let res = 1;
    for (let i = 2; i <= num; i++) {
      res *= i;
    }
    return res;
  }
  console.log(factorial(5)); // 120

  // 연습문제 9
  function triangleArea(x, y) {
    return (x * y) / 2;
  }
  console.log(triangleArea(10, 5)); // 25

  // 연습문제+ 1
  function removeChar(str, c) {
    let newStr = [...str].filter((v) => v !== c).join("");
    console.log(newStr);
  }
  removeChar("hello world", "o"); // "hell wrld"

  // 연습문제+ 2
  function reverseArray(nums) {
    console.log(nums.reverse());
  }
  reverseArray([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]

  // 연습문제+ 3
  function containsNumber(nums, n) {
    console.log(nums.includes(n));
  }
  containsNumber([1, 2, 3, 4, 5], 5); // true
  containsNumber([1, 2, 3, 4, 5], 7); // false

  // 연습문제+ 4
  function isAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
      console.log(false);
      return;
    }
    let newStr1 = [...str1].sort();
    let newStr2 = [...str2].sort();

    for (let i = 0; i < str1.length; i++) {
      if (newStr1[i] !== newStr2[i]) {
        console.log(false);
        return;
      }
    }
    console.log(true);
  }
  isAnagrams("listen", "silent"); // true
  isAnagrams("fluster", "restful"); // true
  isAnagrams("rat", "car"); // false
  isAnagrams("aaa", "aaaa"); // false

  // 연습문제+ 5
  function twiceSum(arr, n) {
    let res = [];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === n) {
          res.push([arr[i], arr[j]]);
        }
      }
    }
    console.log(res);
  }
  twiceSum([1, 2, 3, 4, 5], 5); // [[1, 4], [2,3]]
  twiceSum([1, 2, 3, 4, 5], 9); // [[4, 5]]
  twiceSum([1, 2, 3, 4, 5], 6); // [[1, 5], [2,4]]

  // 연습문제++ 1

  // 연습문제++ 2

  // 연습문제++ 3

  // 연습문제++ 4

  // 연습문제++ 5
}

{
  // 07. 호이스팅
  // 1
  console.log(myVar); // undefined
  var myVar = 10;
  console.log(myVar); // 10

  // 2
  var num = 5;
  console.log(num); // 5

  function num() {
    return 10;
  }

  console.log(num); // 5
  console.log(num()); // TypeError: num is not a function

  // 3
  var x = 10;
  function test() {
    console.log(x); // 10? undefined?
    var x = 5;
    console.log(x); // 5
  }
  test();
  console.log(x); // 10
}

{
  // 09. 객체
  // 1
}

{
  // 10. 클로저
  // 1
}
