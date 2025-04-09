// 1. 논리 연산자 기본
const a = true;
const b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);

// 2. 여러 조건 결합
const x = 20;
const y = 6;
const z = 1;

console.log(x > 10 && y < 5);
console.log(x > 10 || z > 3);
console.log(y !== 0);

// 3. 사용자 로그인 및 권한 확인
const isLoggedIn = true;
const isAdmin = false;

console.log(isLoggedIn ? 'Welcome' : 'Please log in');
console.log(isAdmin ? 'Admin access granted' : 'Admin access denied');
console.log(
  isLoggedIn && isAdmin ? 'Full access granted' : 'Restricted access'
);

// 4. 값의 존재 확인
const value1 = '서영';
const value2 = 25;

console.log(value1 || value2 ? '값이 존재한다.' : '값이 존재하지 않는다.');
console.log(!value1 && !value2 ? '값이 존재하지 않는다.' : '값이 존재한다.');

// 5. 범위 확인
const num = 25;
console.log(num >= 0 && num <= 100 ? '범위 안' : '범위 밖');
console.log(num < 0 || num > 100 ? '범위 밖' : '범위 안');
