// 1번 문제 (학점 계산기)
// 학생의 점수를 저장하는 score 변수의 값에 따라  
// 학점을 출력하는 코드를 작성해주세요.
// - score의 점수가 90점 이상이면 A
// - score의 점수가 80점 이상이면 B
// - score의 점수가 70점 이상이면 C
// - score의 점수가 60점 이상이면 D
// - score의 점수가 60점 미만이면 F
let score = 92;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log(grade);  // A


// 2번 문제 (짝수와 홀수 판별)
// - 변수 `num`에 임의의 숫자를 할당하세요.
// - `num`이 짝수인지 홀수인지 확인하고, 짝수면 "Even", 홀수면 "Odd"를 출력하세요.
let num = 6;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd")
}
// Even


// 3번 문제 (로그인 확인 및 권한 부여) 
// - 변수 `isLoggedIn`과 `isAdmin`에 각각 `true` 또는 `false`를 할당하세요.
// - 사용자가 로그인했는지 확인하고, 로그인하지 않았다면 "Please log in"을 출력하세요.
// - 사용자가 로그인했지만 관리자가 아닌 경우 "Access denied"를 출력하세요.
// - 사용자가 로그인하고 관리자일 경우 "Welcome, admin!"을 출력하세요.
const isLoggedIn = true;
const isAdmin = false;
if (isLoggedIn === false) {
    console.log("Please log in");
} else if (isLoggedIn === true && isAdmin === false) {
    console.log("Access deniedin")
} else if (isLoggedIn === true && isAdmin === true) {
    console.log("Welcome, admin!")
}
// Access deniedin


// 4번 문제 (숫자 크기 비교)
// - 변수 `a`와 `b`에 임의의 숫자를 할당하세요.
// - `a`와 `b`의 크기를 비교하고, `a`가 크면 "a is greater", `b`가 크면 "b is greater", 두 값이 같으면 "a and b are equal"을 출력하세요.
let a = 5;
let b = 16;

if (a > b) {
  console.log("a is greater");
} else if (b > a) {
  console.log("b is greater");
} else {
  console.log("a and b are equal");
}
// b is greater


// 5번 문제 (월별 계절 판별)
// 변수 `month`에 1에서 12 사이의 숫자를 할당하세요.
// `month`에 따라 해당하는 계절을 출력하세요:
//     - 12, 1, 2: "Winter"
//     - 3, 4, 5: "Spring"
//     - 6, 7, 8: "Summer"
//     - 9, 10, 11: "Fall"
let month = 8;

if (month === 12 || month === 1 || month === 2) {
  console.log("Winter");
} else if (month === 3 || month === 4 || month === 5) {
  console.log("Spring");
} else if (month === 6 || month === 7 || month === 8) {
  console.log("Summer");
} else {
  console.log("Fall");
}
// Summer


// 6번 문제 (할인율 계산)
// - 구매 금액에 따라 할인율을 적용하여 최종 금액을 계산하는 코드를 작성하시오
// - 100000원 이상 : 20% 할인
// - 50000원 이상 : 10% 할인
// - 그외 할인 없음 
let price = 70000;
let discountRate = 0;

if (price >= 100000) {
  discountRate = 0.2;
} else if (price >= 50000) {
  discountRate = 0.1;
}

let finalPrice = price * (1 - discountRate);

console.log(finalPrice);    // 63000


// 7번 문제
// 1부터 7까지의 숫자를 입력받아 해당 요일(1: 월요일, 7: 일요일)을 출력하는 코드를 작성하시오.
const day = 5;
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
    dayName = "잘못된 입력";
}

console.log(dayName);   // 금요일


// 8번 문제
// 주어진 숫자가 양수, 음수, 또는 0인지 판별하는 코드를 작성하시오.
const num2 = 10;

if (num2 > 0) {
  console.log("양수");
} else if (num2 < 0) {
  console.log("음수");
} else {
  console.log("0");
}
// 양수