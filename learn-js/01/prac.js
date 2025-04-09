{
  //01.변수
  //1.
  const x = 10;
  const y = 20;
  const sum = x + y;
  console.log(sum);

  //2.
  let name = "Alice";
  name = "Bob";
  console.log(name);

  //3.
  let PI = 3.14;
  console.log(PI);

  //4.
  let a = 5;
  let b = 10;
  let c = a;
  a = b;
  b = c;
}

{
  //02.자료형
  //1.
  let num = 42;
  let name = "John";
  let isTrue = true;
  let person = { name: "Alice", age: 30 };
  let fruits = ["apple", "banana", "orange"];
  console.log(num, name, isTrue, person, fruits);

  //2.
  let length = 16; //number
  let lastName = "Brown"; //string
  let score = [10, 20];
  let x = {
    firstName: "Nick",
    lastName: "Doe",
  }; // 객체
}

{
  //03.연산자
  //1.산술연산자
  const a = 10;
  const b = 5;
  const add = a + b;
  const sub = a - b;
  const multi = a * b;
  const div = a / b;
  const res = a % b;

  console.log(add, sub, multi, div, res);

  //2.증감연산자
  let y = 7;
  console.log(`y:${y}`);
  y++;
  console.log(`y:${y}`);

  console.log(`y:${y}`);
  y--;
  console.log(`y:${y}`);

  console.log(`y:${y}`);
  ++y;
  console.log(`y:${y}`);

  console.log(`y:${y}`);
  --y;
  console.log(`y:${y}`);

  //3. 대입연산자
  let x = 20;
  x += 10;
  console.log(x);
  x -= 5;
  console.log(x);
  x /= 2;
  console.log(x);
  x *= 3;
  console.log(x);

  //4. 비교연산자
  let age1 = 25;
  let age2 = 30;
  console.log(age1 > age2);
  console.log(age1 === age2);
  const res1 = age1 > age2 ? "Older" : "Younger or Same";
  console.log(res1);

  //5. 삼항연산자
  //1)
  const num = 4;
  const res2 = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
  console.log(res2);

  //2)
  const d = 11;
  const e = 5;
  const f = 7;
  console.log(d < e ? (e < f ? f : e) : d < f ? f : d);

  //3)
  const number = 9;
  console.log(number % 2 === 0 ? "Even" : "Odd");

  //4)
  const isLoggedIn = true;
  console.log(isLoggedIn === true ? "Welcome" : "Please log in");

  //5)
  const age = 25;
  console.log(age >= 18 ? "Adult" : "Minor");

  //6. 논리연산자
  //1)
  const a1 = true;
  const b1 = false;
  console.log(a1 && b1);
  console.log(a1 || b1);
  console.log(!a1);

  //2)
  const x1 = 15;
  const y1 = 20;
  const z1 = 30;
  console.log(x > 10 && y < 5);
  console.log(x > 10 || z > 3);
  console.log(y !== 0);

  //3)
  const isLogged = false;
  const isAdmin = true;

  console.log(isLogged ? "Welcome" : "Please log in");
  console.log(isAdmin ? "Admin access granted" : "Admin access denied");
  console.log(isLogge && isAdmin ? "Full access granted" : "Restricted access");

  //4)
  const value1 = 20;
  const value2 = undefined;
  console.log(value || value2 ? "값이 존재" : "값이 존재x");
  console.log(value1 && value2 ? "값이 존재o" : "값이 존재x");

  //5)
  const num2 = 2;
  console.log(num2 >= 0 && num2 <= 100 ? "0~100" : "벗어납니다");
  console.log(num < 0 || num > 100 ? "0미만이고 100초과입니다" : "0~100");

  //7.부록
  var obj = {
    name: "철수",
    age: 20,
    gender: "male",
  }; //var=>let,const로

  //5)
  const myLevel = 99;
  const status = myLevel >= 99 ? "축하합니다. 만렙입니다" : "";

  console.log(status); // 축하합니다

  //6)
  console.log(10 == "10"); //  true
  console.log(10 === "10"); // false
  console.log(10 * "20"); // false
  console.log(10 * 20); // true

  //9)
  const num3 = 10;
  const isEven = num3 % 2 === 0 ? "짝수" : "홀수";
  console.log(isEven);
}

{
  //04. 조건문
  //1)
  const score = 75;
  if (score >= 90) console.log("A");
  else if (score >= 80) console.log("B");
  else if (score >= 70) console.log("C");
  else if (score >= 60) console.log("D");
  else console.log("F");

  //2)
  const num = 4;
  if (num % 2 === 0) console.log("Even");
  else console.log("Odd");

  //3)?
  const isLoggedIn = true;
  const isAdmin = false;
  if (isLoggedIn && isAdmin) console.log("Welcome,admin!");
  else if (isLoggedIn) console.log("Access denied");
  else console.log("Please login");

  //4)
  const a = 3;
  const b = 20;
  if (a > b) console.log("a is greater");
  else if (a < b) console.log("b is greater");
  else console.log("a and b are equal");

  //5)
  const month = 4;
  if (month === 12 || month === 1 || month === 2) console.log("Winter");
  else if (month === 3 || month === 4 || month === 5) console.log("Spring");
  else if (month === 6 || month === 7 || month === 8) console.log("Summer");
  else console.log("Fall");

  //6)
  const price = 40000;
  if (price >= 100000) price *= 0.8;
  else if (price >= 50000) price *= 0.9;
  else;

  //7)
  const day = 5;
  const dayName = [월, 화, 수, 목, 금, 토, 일];
  console.log(dayName[day]);

  //8)
  const num2 = 10;
  if (num2 > 0) console.log("양수");
  else if (num2 < 0) console.log("음수");
  else console.log("0");
}

{
  //05.반복문
  //쉬움
  //1.
  for (let i = 1; i <= 9; i++) {
    console.log(i);
  }
  //2.
  let numArr = [10, -10, 20, -30, 40];
  let sum = 0;
  for (num of numArr) {
    if (num > 0) {
      sum += num;
    }
  }
  console.log(sum);

  //3.
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(`${i} 짝수`);
    } else console.log(`${i} 홀수`);
  }

  //어려움
  //1.
  let n = 10; // 원하는 항의 수
  let result = [];
  if (n === 1) result.push(0);
  else if (n === 2) {
    result.push(0, 1);
  } else {
    result.push(0, 1);
    for (let i = 2; i < n; i++) {
      result.push(result[i - 2] + result[i - 1]);
    }
  }
  console.log(`피보나치 수열(${n}항):`, result); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

  //2.
  let start = 1,
    end = 100;
  let results = [];
  results.push(2, 3, 5, 7);
  for (let i = 11; i <= end; i++) {
    if (i % 2 === 0) continue;
    else if (i % 3 === 0) continue;
    else if (i % 5 === 0) continue;
    else if (i % 7 === 0) continue;
    else results.push(i);
  }
  console.log(results);

  //3.
  const numbers = [5, 10, 15, 20, 25];
  let results2 = 0;
  for (num of numbers) {
    results2 += num;
  }
  console.log(results2);

  //4.
  const str = "Hello, World!";
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log("뒤집힌 문자열:", reversed);

  //5.
  let n1 = 5;
  let factorial = 1;
  for (let i = 1; i <= n1; i++) {
    factorial *= i;
  }
  console.log(`${n1}의 팩토리얼:`, factorial);

  //6.
  //1 2 3 4 5 6 7 8 9
  //1 8 27 64 125 216 343 512 729
  for (let i = 1; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      for (let k = 0; k <= 9; k++) {
        let result = i * i * i + j * j * j + k * k * k;
        if (result >= 100 && result <= 999 && result === i * 100 + j * 10 + k)
          console.log(result);
      }
    }
  }
}

{
  //06. 함수
  //연습문제
  //1.
  const q1 = (a, b, c) => {
    return a + b + c;
  };
  //2.
  function q2(a, b) {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    return;
  }
  //3.
  function q3(a) {
    if (a % 2 === 0) return true;
    else return false;
  }
  q3(7);

  //4.
  const sumArray = (arr) => {
    let result = 0;
    for (let i of arr) {
      result += i;
    }
    return result;
  };
  console.log(sumArray([1, 2, 3])); // 6

  //5.
  const findMax = (arr) => {
    let max = -9999999;
    for (let i of arr) {
      if (max < i) max = i;
    }
    return max;
  };

  //6.
  function reverseString(str) {
    let res = "";
    for (s of str) {
      res = s + res;
    }
    return res;
  }
  console.log(reverseString("hello"));

  //7.
  const countCharacter = (a, b) => {
    let cnt = 0;
    for (s of a) {
      if (s === b) cnt++;
    }
    return cnt;
  };
  console.log(countCharacter("banana", "a"));

  //8.
  const factorial = (n) => {
    let num = 1;
    for (let i = 2; i <= n; i++) {
      num *= i;
    }
    return num;
  };
  console.log(factorial(5));

  //9.
  const triangleArea = (a, b) => {
    return (a * b) / 2;
  };
  console.log(triangleArea(10, 5));
}

{
  //06.함수 연습문제+
  //1.
  const removeChar = (a, b) => {
    let str = "";
    for (s of a) {
      if (s === b) continue;
      else str += s;
    }
    return str;
  };
  console.log(removeChar("hello world", "o"));

  //2.
  const reverseArray = (arr) => {
    return arr.reverse();
  };
  console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

  //3.
  const containsNumber = (arr, a) => {
    let bool = false;
    for (let i of arr) {
      if (i === a) bool = true;
    }
    console.log(bool);
    return bool;
  };
  containsNumber([1, 2, 3, 4, 5], 5); // true
  containsNumber([1, 2, 3, 4, 5], 7); // false

  //4.?
  const isAnagrams = (str1, str2) => {
    const astr1 = str1.split("").sort().join("");
    const astr2 = str2.split("").sort().join("");

    return astr1 === astr2;
  };
  isAnagrams("listen", "silent"); // true
  isAnagrams("fluster", "restful"); // true
  isAnagrams("rat", "car"); // false
  isAnagrams("aaa", "aaaa"); // false

  //5.?
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
}
