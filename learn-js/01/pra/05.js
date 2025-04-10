// 05. 반복문
// 쉬움
// 1
for (let i = 1; i < 10; i++) {
  console.log(i);
}

// 2
let sum = 0;
let numArr = [10, -10, 20, -30, 40];
for (const num of numArr) {
  if (num > 0) {
    sum += num;
  }
}
console.log(sum);

// 3
for (let i = 0; i < 16; i++) {
  if (i % 2) {
    console.log(i + '홀수');
  } else {
    console.log(i + '짝수');
  }
}

//어려움
// 1
let n = 9;
let n1 = 0;
let n2 = 1;
let res = 0;
const resArr = [];
for (let i = 1; i < n + 1; i++) {
  resArr.push(n1);
  res = n1 + n2;
  n1 = n2;
  n2 = res;
}
console.log(`피보나치 수열(${n}항):`, resArr);

// 2
let start = 1;
let end = 100; // 범위
const prime = [];
function isPrime(n) {
  if (n < 2) return false;
  const sqrt = Math.sqrt(n);
  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
for (let i = start; i <= end; i++) {
  if (isPrime(i)) {
    prime.push(i);
  }
}
console.log(prime);

// 3
const numbers = [5, 10, 15, 20, 25]; // 배열
let sum3 = 0;
numbers.forEach((a) => (sum3 += a));
console.log(sum3);

// 4
const str = 'Hello, World!';
let reversed = '';
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log('뒤집힌 문자열:', reversed); // "!dlroW ,olleH"

// 5
let n5 = 5; // 예시 숫자
let factorial = 1;
for (let i = 1; i <= n5; i++) {
  factorial *= i;
}

console.log(`${n5}의 팩토리얼:`, factorial); // 출력 120

// 6
const armArr = [];
for (let i = 100; i < 1000; i++) {
  const one = Math.floor(i / 100);
  const two = Math.floor((i % 100) / 10);
  const three = i % 10;
  if (i === one ** 3 + two ** 3 + three ** 3) {
    armArr.push(i);
  }
}
console.log(armArr);
