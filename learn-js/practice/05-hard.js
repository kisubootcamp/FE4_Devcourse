// 1. 피보나치 수열 계산
let n1 = 10;
let fib = [0, 1];

for (let i = 2; i < n1; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(`피보나치 수열(${n1}항): `, fib);

// 2. 소수 찾기
let start = 1;
let end = 100;
let arr = [];

for (let i = start; i < end; i++) {
  let result = true;
  if (i < 2) continue;

  for (let j = 2; j < Math.sqrt(i); j++) {
    if (i % j === 0) {
      result = false;
      break;
    }
  }
  if (result) {
    arr.push(i);
  }
}
console.log(arr);

// 3. 배열 요소의 합 구하기
const numbers = [5, 10, 15, 20, 25];
let sum = 0;

for (const num of numbers) {
  sum += num;
}
console.log(sum);

// 4. 문자열 뒤집기
const str = 'Hello, World!';
let newStr = '';

for (let i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
}
console.log(newStr);

// 5. 특정 숫자까지의 곱 계산
let n = 1;

for (let i = 1; i <= 5; i++) {
  n = n * i;
}
console.log(n);

// 6. 암스트롱수
