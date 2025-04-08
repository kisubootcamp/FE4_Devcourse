// 1. 학점 계산기
const score = 88;

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

// 2. 짝수와 홀수 판별
const num = 25;

if (num % 2 == 0) {
  console.log('Even');
} else {
  console.log('Odd');
}

// 3. 로그인 확인 및 권한 부여
const isLoggedIn = true;
const isAdmin = false;

if (isLoggedIn == true) {
  if (isAdmin == false) {
    console.log('Access denied');
  } else {
    console.log('Access denied');
  }
} else {
  console.log('Please log in');
}

// 4. 숫자 크기 비교
const a = 20;
const b = 55;

if (a > b) {
  console.log('a is greater');
} else if (a == b) {
  console.log('a and b are equal');
} else {
  console.log('b is greater');
}

// 5. 월별 계절 판별
const month = 9;

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
  case 7:
    console.log('Summer');
    break;
  case 9:
  case 10:
  case 11:
    console.log('Fall');
    break;
}

// 6. 할인율 계산
const price = 65000;

if (price >= 100000) {
  console.log(price * 0.8);
} else if (price >= 50000) {
  console.log(price * 0.9);
} else {
  console.log(price);
}

// 7.
const day = 5;

switch (day) {
  case 1:
    console.log('월요일');
    break;
  case 2:
    console.log('화요일');
    break;
  case 3:
    console.log('수요일');
    break;
  case 4:
    console.log('목요일');
    break;
  case 5:
    console.log('금요일');
    break;
  case 6:
    console.log('토요일');
    break;
  case 7:
    console.log('일요일');
    break;
}

// 8.
const num8 = 10;

if (num8 > 0) {
  console.log('양수');
} else if (num8 < 0) {
  console.log('음수');
} else {
  console.log('0');
}
