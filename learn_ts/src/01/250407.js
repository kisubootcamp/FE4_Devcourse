//변수 연습 문제
{
  // 1
  const x = 10;
  const y = 20;
  const sum = x + y;
  console.log(sum);

  //2
  let name = "Alice";
  name = "Bob";
  console.log(name);

  //3
  const PI = 3.14;
  console.log(PI);

  //4
  let a = 5;
  let b = 10;
  let temp = null;
  temp = a;
  a = b;
  b = temp;
}

//자료형 연습 문제
{
  //1
  let num = 42;
  let name = "John";
  let isTrue = true;
  let person = { name: "Alice", age: 30 };
  let fruits = ["apple", "banana", "orange"];

  [num, name, isTrue, person, fruits].forEach((el) => console.log(typeof el));

  //2
  let length = 16; //숫자형(기본형)
  let lastName = "Brown"; //문자형(기본형)
  let score = [10, 20]; //배열(참조형)
  let x = {
    firstName: "Nick",
    lastName: "Doe",
  }; //객체(참조형)
}

// 연산자 연습 문제
{
  //산술
  let a = 10;
  let b = 5;

  let sum = a + b;
  let difference = a - b;
  let product = a * b;
  let quotient = a / b;

  [sum, difference, product, quotient].forEach((el) => console.log(el));

  //증감
  const y = 7;

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

  //대입
  let x = 20;
  const result1 = (x += 10);
  const result2 = (x -= 5);
  const result3 = (x /= 2);
  const result4 = (x *= 3);

  console.log(result1, result2, result3, result4);

  //비교, 삼항
  const age1 = 25;
  const age2 = 30;

  console.log(age1 > age2);
  console.log(age1 === age2);
  console.log(age1 > age2 ? "Older" : "Younger or Same");
}

//조건문 연습 문제
{
  const randomNum = (Math.random() * 100).toFixed(0);
  //1
  const score = randomNum;
  if (score >= 90) console.log("A");
  if (score >= 89 && score >= 80) console.log("B");
  if (score >= 79 && score >= 70) console.log("C");
  if (score >= 69 && score >= 60) console.log("D");
  if (score < 60) console.log("F");

  //2
  const num = randomNum;
  console.log(num / 2 === 0 ? "Even" : "Odd");

  //3
  const isLoggedIn = Math.round(Math.random().toFixed(1));
  const isAdmin = Math.round(Math.random().toFixed(1));
  if (!isLoggedIn) console.log("Please log in");
  if (isLoggedIn && !isAdmin) console.log("Access denied");
  if (isLoggedIn && isAdmin) console.log("Welcome, admin!");

  //4
  const a = (Math.random() * 100).toFixed(0);
  const b = (Math.random() * 100).toFixed(0);
  if (a > b) console.log("a is greater");
  if (a < b) console.log("b is greater");
  if (a === b) console.log("a and b are equal");

  //5
  let month = 4; // 1 ~ 12 중 원하는 숫자 입력

  let season;

  if (month === 12 || month === 1 || month === 2) {
    season = "Winter";
  } else if (month >= 3 && month <= 5) {
    season = "Spring";
  } else if (month >= 6 && month <= 8) {
    season = "Summer";
  } else if (month >= 9 && month <= 11) {
    season = "Fall";
  }

  console.log(season);

  //6
  let allPrice = 1000000;
  if (allPrice >= 100000) allPrice * 0.8;
  if (allPrice >= 50000) allPrice * 0.9;
  console.log(allPrice);

  //7
  const day = 7;
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
    default:
      dayName = "잘못된 숫자입니다";
  }

  console.log(dayName);

  //8
  const num2 = 10;
  if (num2 < 0) console.log("음수");
  if (num2 > 0) console.log("양수");
  if (num2 === 0) console.log("0");
}

//반복문 쉬움 문제
{
  // 1번 문제
  for (let i = 1; i < 10; i++) {
    console.log(i);
  }

  // 2번 문제
  let numArr = [10, -10, 20, -30, 40];
  numArr.forEach((num) => {
    if (num > 0) console.log(num);
  });

  for (let i = 0; i <= 15; i++) {
    if (2 % i === 0) {
      console.log(i + "짝수");
      continue;
    }
    console.log(i + "홀수");
  }
}

//반복문 어려움 문제

{
  //1 피보나치 수열
}
