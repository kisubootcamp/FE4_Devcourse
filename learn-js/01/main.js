// 01 변수
// 1-1
function p1_1() {
  const x = 10;
  const y = 20;
  const sum = x + y;
  console.log(sum);
}
p1_1();

//1-2
function p1_2() {
  let uname = "Alice";
  uname = "Bob";
  console.log(uname);
}
p1_2();

//1-3
function p1_3() {
  const PI = 3.14;
  console.log(PI);
}
p1_3();

//1-4
function p1_4() {
  let a = 5;
  let b = 10;
  let tmp = a;
  a = b;
  b = tmp;
  console.log("a:" + a + ", b:" + b);
}
p1_4();

// 02 자료형
// 2-1
function p2_1() {
  console.log("number, string, boolean, object, object");
}
p2_1();

// 2-2
function p2_2() {
  let length = 16; //number
  let lastName = "Brown"; //string
  let score = [10, 20]; //object
  let x = {
    firstName: "Nick",
    lastName: "Doe",
  }; //object
}

//03 연산자
//3-1
function p3_1() {
  const a = 10;
  const b = 5;
  console.log(a + b, a - b, a / b, a % b);
}
p3_1();

//3-2
function p3_2() {
  // a
  let y = 7;

  // b
  console.log(`증가하기 전 y: ${y}`);
  y++;
  console.log(`증가하기 후 y: ${y}`);

  // c
  console.log(`감소하기 전 y: ${y}`);
  y--;
  console.log(`감소한 후 y: ${y}`);

  // d
  ++y;
  console.log(`증가하기 후 y: ${y}`);

  //e
  --y;
  console.log(`감소한 후 y: ${y}`);
}
p3_2();

// 3-3
function p3_3() {
  let x = 20;
  const res1 = (x += 10);
  const res2 = (x -= 5);
  const res3 = (x /= 2);
  const res4 = (x *= 3);

  console.log(res1, res2, res3, res4);
}
p3_3();

//3-4
function p3_4() {
  const age1 = 25;
  const age2 = 30;
  age1 > age2 ? console.log("Older") : console.log("Younger or Same");
}
p3_4();

//3-5
function p3_5() {
  const num = 12;
  const result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
  console.log(result);
}
p3_5();

//3-6 최대값 찾기
function p3_6() {
  const a = 23;
  const b = 1;
  const c = 81;
  const res2 = a > b ? (a > c ? a : c) : b > c ? b : c;
  console.log(res2);
}
p3_6();

//3-7 짝수 홀수 확인
function p3_7() {
  const number = 11;
  const res3 = number % 2 === 0 ? "Even" : "Odd";
  console.log(res3);
}
p3_7();

// 3-8 로그인 확인
function p3_8() {
  const isLoggedIn = true;
  const message = isLoggedIn ? "Welcome" : "Please Login";
  console.log(message);
}
p3_8();

//3-9 성인 확인
function p3_9() {
  const age = 18;
  const res5 = age >= 18 ? "Adult" : "Minor";
  console.log(res5);
}
p3_9();

//논리 연산자
function p3_10() {
  const a = true;
  const b = false;

  console.log(a && b);
  console.log(a || b);
  console.log(!a);
}
p3_10();

function p3_11() {
  const x = 22;
  const y = 3;
  const z = 12;

  console.log(x > 10 && y < 5);
  console.log(x > 10 || z > 3);
  console.log(y !== 0);
}
p3_11();

function p3_12() {
  const isLoggedIn = true;
  const isAdmin = false;

  console.log(isLoggedIn ? "Welcome" : "Pelase Log in");
  console.log(isAdmin ? "Admin access granted" : "Admin access denined");
  console.log(
    isLoggedIn && isAdmin ? "Full aceess granted" : "Resticted access"
  );
}
p3_12();

function p3_13() {
  const value1 = "hyeju";
  const value2 = null;

  console.log(value1 || value2 ? "값이 존재함" : "값이 존재하지 않음");
  console.log(
    !value1 && !value2 ? "값이 존재하지 않음" : "값이 하나라도 존재함"
  );
}
p3_13();

function p3_14() {
  const num = 120;
  console.log(num >= 0 && num <= 100 ? "범위 안" : "범위 밖");
  console.log(num < 0 || num > 100 ? "범위 밖" : "범위 안");
}
p3_14();

//04 조건문
function p4_1() {
  const score = 28;
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
}
p4_1();

function p4_2() {
  const num = 12380;
  console.log(num % 2 ? "Odd" : "Even");
}
p4_2();

function p4_3() {
  const isLoggedIn = true;
  const isAdmin = false;

  console.log(isLoggedIn ? "Welcome" : "Pelase Log in");
  console.log(isAdmin ? "Admin access granted" : "Access denined");
  console.log(isLoggedIn && isAdmin ? "Welcome, admin!" : "Resticted access");
}
p4_3();

function p4_4() {
  const a = 14;
  const b = 75;
  console.log(
    a > b ? "a is greater" : b > a ? "b is greater" : "a and b are equl"
  );
}
p4_4();

function p4_5() {
  const month = 10;
  switch (month) {
    case 12:
    case 1:
    case 2:
      console.log("Winter");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Spring");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Summer");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Fall");
      break;
  }
}
p4_5();

function p4_6() {
  const price = 150000;
  if (price >= 100000) {
    console.log(price * 0.8);
  } else if (price >= 50000) {
    console.log(price * 0.9);
  } else {
    console.log(price);
  }
}
p4_6();

function p4_7() {
  const day = 4;
  switch (day) {
    case 1:
      console.log("월요일");
      break;
    case 2:
      console.log("화요일");
      break;
    case 3:
      console.log("수요일");
      break;
    case 4:
      console.log("목요일");
      break;
    case 5:
      console.log("금요일");
      break;
    case 6:
      console.log("토요일");
      break;
    case 7:
      console.log("일요일");
      break;
  }
}
p4_7();

function p4_8() {
  const num2 = -10;
  console.log(num2 > 0 ? "positive" : num2 < 0 ? "negative" : "zero");
}
p4_8();
