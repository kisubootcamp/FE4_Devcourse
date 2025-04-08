// 1. 숫자비교
const num1 = 9;
const result1 = num > 0 ? 'Positive' : num === 0 ? 'Zero' : 'Negative';
console.log(result1);

// 2. 최댓값 찾기
const a = 10;
const b = 20;
const c = 5;

const max = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log(max);

// 3. 짝수 홀수 확인
const num3 = 21;
const result3 = num % 2 === 0 ? 'Even' : 'Odd';
console.log(result3);

// 4. 로그인 확인
const isLoggedIn = true;
const message = isLoggedIn ? 'Welcome' : 'Please log in';
console.log(message);

// 5. 성인 확인
const age = 25;
const result = age >= 18 ? 'Adult' : 'Minor';
console.log(result);
