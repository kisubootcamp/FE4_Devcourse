// 조건문

// 1. 학점 계산기
const score = 82;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else if (score < 60) {
  console.log("F");
} // B

// 2. 짝수와 홀수 판별
const num = 25;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
} // Odd

// 3. 로그인 확인 및 권한 부여
let isLoggedIn = true;
let isAdmin = false;

if (!isLoggedIn) {
  console.log("Please log in");
} else if (!isAdmin) {
  console.log("Access denied");
} else {
  console.log("Welcome, admin!");
}

// 4. 숫자 크기 비교
const a = 3;
const b = 8;

if (a > b) {
  console.log("a is greater");
} else if (a < b) {
  console.log("b is greater");
} else {
  console.log("a and b are equal");
}

// 5. 월별 계절 판별
const month = 4;

if (month === 12 || month === 1 || month === 2) {
  console.log("Winter");
} else if (month >= 3 && month <= 5) {
  console.log("Spring");
} else if (month >= 6 && month <= 8) {
  console.log("Summer");
} else if (month >= 9 && month <= 11) {
  console.log("Fall");
} else {
  console.log("Invalid month");
}

// 6. 할인율 계산
const cost = 150000;

if (cost >= 100000) {
  console.log(cost * 0.8);
} else if (cost >= 50000) {
  console.log(cost * 0.9);
} else {
  console.log("할인 없음");
}

// 7. 1부터 7까지의 숫자를 입력받아 해당 요일(1: 월요일, 7: 일요일)을 출력
const day = 4;
let dayName;

if (day === 1) {
  dayName = "월요일";
} else if (day === 2) {
  dayName = "화요일";
} else if (day === 3) {
  dayName = "수요일";
} else if (day === 4) {
  dayName = "목요일";
} else if (day === 5) {
  dayName = "금요일";
} else if (day === 6) {
  dayName = "토요일";
} else if (day === 7) {
  dayName = "일요일";
}
console.log(dayName);

// 8. 양수, 음수, 또는 0인지 판별
const num2 = 10;
if (num2 > 0) {
  console.log("양수");
} else if (num2 < 0) {
  console.log("음수");
} else if (num2 === 0) {
  console.log(0);
}
