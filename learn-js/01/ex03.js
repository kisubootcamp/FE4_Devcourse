// 문제1. 기본산술 연산
let a = 10;
let b = 5;
let sum = a + b;
let sub = a - b;
let multiply = a * b;
let divide = a / b;
let mod = a % b;
console.log(sum, sub, multiply, divide, mod);

// 문제2.1. 증가 및 감소 연산자

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

// 문제3. 복합대입연산자 연습
let x = 20;
const res1 = (x += 10);
const res2 = (x -= 5);
const res3 = (x /= 2);
const res4 = (x *= 3);

console.log(res1, res2, res3, res4);

// 문제4. 나이비교
let age1 = 25;
let age2 = 30;
console.log(age1 > age2);
console.log(age1 == age2);
console.log(age1 > age2 ? 'Older' : 'Younger or Same');

// 문제5. 숫자비교
let num = 0;
console.log(num > 0 ? 'Positive' : num === 0 ? 'Zero' : 'Negative');

// 문제6. 최댓값 찾기
//위에 ab가있으므로 변수를 as,bs로 대체함
let as = 10;
let bs = 5;
let cs = 13;
console.log(as > bs ? (as > cs ? as : cs) : bs > cs ? bs : cs);

// 문제7. 짝수,홀수 확인
let number = 3;
console.log(number % 2 === 0 ? 'Even' : 'Odd');

// 문제8. 로그인확인
let isLoggedIn = false;
console.log(isLoggedIn ? 'Welcome' : 'Please Login');

// 문제9. 성인확인
let age = 26;
console.log(age >= 18 ? 'Adult' : 'Minor');

// 문제10. 논리 연산자 기본
// 여기도 a,b를 aa,bb로 변경
let aa = true;
let bb = false;
console.log(aa && bb);
console.log(aa || bb);
console.log(!aa);

// 문제11. 여러 조건 결합
// 변수가 겹치므로 xx,yy,zz로함
let xx = 1;
let yy = 2;
let zz = 3;
console.log(xx > 10 && yy < 5);
console.log(xx > 10 || zz > 3);
console.log(yy !== 0);

// 문제12. 사용자 로그인 및 권한 확인
let isLoggedIns = true;
let isAdmins = false;

console.log(isLoggedIns ? 'Welcome' : 'Pelase Log in');
console.log(isAdmins ? 'Admin access granted' : 'Admin access denined');
console.log(isLoggedIns && isAdmins ? 'Full aceess granted' : 'Resticted access');

// 문제13. 값의 존재 확인
let value1 = 'hello';
let value2 = null;

console.log(value1 || value2 ? '값이 o' : '값이 x');
console.log(!value1 && !value2 ? '값이 x' : '값이 하나라도 존재');

// 문제14. 범위확인
const nums = 26;
console.log(nums >= 0 && nums <= 100 ? '0이상 100이하' : '0보다작거나 100보다큼');
console.log(nums < 0 || nums > 100 ? '0보다작거나 100보다큼' : '0이상 100이하');
