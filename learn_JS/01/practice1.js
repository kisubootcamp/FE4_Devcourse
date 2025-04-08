{
  // 변수 연습문제
  // 1. 변수 선언과 할당
  let x = 10;
  let y = 20;
  let sum = x + y;
  console.log(sum);

  // 2. 변수 재할당
  let name = "Alice";
  name = "Bob";
  console.log(name);

  //3. 상수
  const PI = 3.14;
  console.log(PI);

  //4. 변수 스왑
  let a = 5;
  let b = 10;
  let temp = a;
  a = b;
  b = temp;
  console.log(a);
  console.log(b);
}

{
  //-----------------------------
  // 자료형 연습문제
  // 1. 변수 타입 확인
  let num = 42;
  let name = "John";
  let isTrue = true;
  let person = { name: "Alice", age: 30 };
  let fruits = ["apple", "banana", "orange"];
  console.log(typeof num);
  console.log(typeof name);
  console.log(typeof isTrue);
  console.log(typeof person);
  console.log(typeof fruits);

  // 2
  let length = 16; //  number
  let lastName = "Brown"; // string
  let score = [10, 20]; // object
  let x = {
    firstName: "Nick",
    lastName: "Doe",
  }; // object
}

{
  //-----------------------------
  // 산술연산자 연습문제
  // 1. 기본 산술 연산
  let a = 10;
  let b = 5;
  console.log(a + b);
  console.log(a - b);
  console.log(a / b);
  console.log(a * b);
  console.log(a % b);

  //-----------------------------
  // 증감연산자 연습문제
  // 1. 증가 및 감소 연산자
  let y = 7;
  console.log(`증가하기 전 y: ${y}`);
  y++;
  console.log(`증가하기 후 y: ${y}`);

  console.log(`증가하기 전 y: ${y}`);
  y--;
  console.log(`증가하기 후 y: ${y}`);

  ++y;
  console.log(`증가하기 후 y: ${y}`);
  --y;
  console.log(`감소한 후 y: ${y}`);

  //-----------------------------
  // 복합대입연산자 연습문제
  let x = 20;
  const res1 = (x += 10);
  const res2 = (x -= 5);
  const res3 = (x /= 2);
  const res4 = (x *= 3);

  console.log(res1, res2, res3, res4);

  //-----------------------------
  // 비교 연산자 연습문제
  // 나이비교
  let age1 = 25;
  let age2 = 30;
  console.log(age1 > age2);
  console.log(age1 === age2);
  let result = age1 > age2 ? "Older" : "Younger or Same";
  console.log(result);
}

{
  //-----------------------------
  // 삼항 연산자
  // 1. 숫자비교
  const num = 0;
  const result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
  console.log(result);

  // 2. 최댓값 찾기
  const a = 10;
  const b = 5;
  const c = 13;
  //(b > c ? b : c) 해주면 더 이해가 빠름
  const result1 = a > b ? (a > c ? a : c) : b > c ? b : c;
  console.log(result1);

  // 3. 짝수 홀수 확인
  const number = 7;
  const result2 = number % 2 === 0 ? "Even" : "Odd";
  console.log(result2);

  // 4. 로그인 확인
  const isLoggedIn = true;
  const result3 = isLoggedIn === true ? "Welcome" : "Please log in";
  console.log(result3);

  // 5. 성인 확인
  const age = 18;
  const result4 = age > 18 ? "Adult" : "Minor";
  console.log(result4);
}

{
  //-----------------------------
  // 논리 연산자
  // 1. 논리 연산자 기본
  const a = true;
  const b = false;

  console.log(a && b);
  console.log(a || b);
  console.log(!a);

  // 2. 여러 조건 결합
  const x = 15;
  const y = 3;
  const z = 4;

  console.log(x > 10 && y < 5);
  console.log(x > 10 || z > 3);
  console.log(y !== 0);

  // 3. 사용자 로그인 및 권한 확인
  const isLoggedIn = true;
  const isAdmin = false;
  console.log(isLoggedIn ? "Welcome" : "Pelase Log in");
  console.log(isAdmin ? "Admin access granted" : "Admin access denied");
  console.log(
    isLoggedIn && isAdmin ? "Full access granted" : "Restricted access"
  );

  // 4. 값의 존재 확인
  const value1 = 23;
  const value2 = undefined;
  console.log(value1 || value2 ? "ok" : "no value");
  console.log(!value1 && !value2 ? "ok" : "no value");

  // 5. 범위 확인
  let num = 10;
  console.log(num >= 0 && num <= 100 ? "ok" : "범위가 아님");
  console.log(num < 0 || num > 100 ? "ok" : "범위가 아님");
}

{
  //-----------------------------
  console.log("조건문----------------------------");
  // 조건문 연습문제
  // 1. 학점 계산기
  let score = 65;
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else {
    console.log(F);
  }

  // 2. 짝수와 홀수 판별
  let num = 24;
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }

  // 3. 로그인 확인 및 권한 부여
  let isLoggedIn = true;
  let isAdmin = false;

  if (!isLoggedIn) {
    console.log("Please log in");
  } else if (isLoggedIn && !isAdmin) {
    console.log("Access denied");
  } else if (isLoggedIn && isAdmin) {
    console.log("Welcome, admin!");
  }

  // 4. 숫자 크기 비교
  let a = 30;
  let b = 2345;

  if (a > b) {
    console.log("a is greater");
  } else if (a < b) {
    console.log("b is greater");
  } else {
    console.log("a and b are equal");
  }

  // 5. 월별 계절 판별
  let month = 9;

  if (month === (12 || 1 || 2)) {
    console.log("winter");
  } else if (month === (3 || 4 || 5)) {
    console.log("spring");
  } else if (month === (6 || 7 || 8)) {
    console.log("Summer");
  } else {
    console.log("Fall");
  }

  // 6. 할인율 계산
  let amount = 1000000;
  if (amount >= 100000) {
    console.log(amount * 0.8);
  } else if (amount >= 50000) {
    console.log(amount * 0.9);
  } else {
    console.log("No discount");
  }

  // 7. 요일
  const day = 6;
  if (day === 7) {
    console.log("Sun");
  } else if (day === 1) {
    console.log("Mon");
  } else if (day === 2) {
    console.log("TUE");
  } else if (day === 3) {
    console.log("WED");
  } else if (day === 4) {
    console.log("THU");
  } else if (day === 5) {
    console.log("FRI");
  } else if (day === 6) {
    console.log("SAT");
  }

  // 8
  const num2 = 0;
  if (num2 > 0) {
    console.log("양수");
  } else if (num2 < 0) {
    console.log("음수");
  } else {
    console.log("0");
  }
}

{
  //-----------------------------
  console.log("반복문----------------------------");
  for (let i = 1; i < 10; i++) {
    console.log(i);
  }

  //   [연습문제 - 음수 걸러내기]
  let numArr = [10, -10, 20, -30, 40];
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > 0) {
      sum += numArr[i];
    }
  }
  console.log(sum);

  // [연습문제 - 홀짝 구분하기]
  for (let i = 0; i < 16; i++) {
    if (i % 2 === 0) {
      console.log(`${i} 짝수`);
    } else {
      console.log(`${i} 홀수`);
    }
  }
}

{
  //-----------------------------
  // 총 합을 반환하는 덧셈 함수
  console.log("함수----------------------------");
  function sum(...num) {
    return num.reduce((a, c) => a + c, 0);
  }
  sum(2, 4, 5, 6);
  console.log(sum(2, 4, 5, 6));

  // 사칙연산
  function cal(a, b) {
    let sum = a + b;
    let sub = a - b;
    let mul = a * b;
    let div = a / b;
    return sum;
  }
  console.log(cal(10, 50));

  // 짝홀 판별
  function isEven(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  console.log(isEven(7));

  // 배열의 모든 요소 더하기
  function sumArray(arr) {
    return arr.reduce((a, c) => a + c, 0);
  }
  console.log(sumArray([1, 2, 3]));

  // 배열의 최대값
  function findMax(arr) {
    let maxNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxNum) {
        maxNum = arr[i];
      }
    }
    return maxNum;
  }
  console.log(findMax([1, 5, 3, 9, 2]));

  // 문자열 반전
  function reverseString(str) {
    let result = str.split("").reverse().join("");
    return result;
  }
  console.log(reverseString("hello"));
}
