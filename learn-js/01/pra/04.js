// 04. 조건문
// 1
const score = 55;
if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else if (score >= 70) {
  console.log('C');
} else if (score >= 60) {
  console.log('D');
} else {
  console.log('F');
}

// 2
const num = 12;
if (num % 2) {
  console.log('Odd');
} else {
  console.log('Even');
}

// 3
const isLoggedIn = false;
const isAdmin = true;

if (isLoggedIn) {
  if (isAdmin) {
    console.log('Welcome, admin!');
  } else {
    console.log('Access denied');
  }
} else {
  console.log('Please log in');
}

// 4
const a = 14;
const b = 10;
if (a > b) {
  console.log('a is greater');
} else if (a < b) {
  console.log('b is greater');
} else {
  console.log('a and b are equal');
}

// 5
const month = 2;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log('Winter');
    break;
  case 3:
  case 4:
  case 5:
    console.log('Spring');
    break;
  case 6:
  case 7:
  case 8:
    console.log('Summer');
    break;
  case 9:
  case 10:
  case 11:
    console.log('Fall');
    break;
}

// 6
const bill = 60000;
if (bill >= 100000) {
  console.log(bill * 0.8);
} else if (bill >= 50000) {
  console.log(bill * 0.9);
} else {
  console.log(bill);
}

// 7
const day = 7;
const dayArr = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
console.log(dayArr[day - 1]); // 일요

// 8
const num2 = 0;
if (num2 > 0) {
  console.log('양수입니다');
} else if (num2 < 0) {
  console.log('음수입니다');
} else {
  console.log('0 입니다');
}
