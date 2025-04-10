// 연습 문제
// 1. 1 부터 9까지 출력하기
for (let i = 1; i < 10; i++) console.log(i);

console.log("------------------------------------------------");

// 2. 음수 걸러내기
// 음수 제외하고 양수들의 합을 구하기
let numArr = [10, -10, 20, -30, 40];
let sum = 0;
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] >= 0) sum += numArr[i];
}
console.log(sum);

console.log("------------------------------------------------");

// 3. 홀짝 구분 하기
// 0 부터 15까지 출력하면서 각각의 수가 짝수인지 홀수인지 구분
for (let i = 1; i <= 15; i++) {
  let str = "홀수";
  if (i % 2 === 0) str = "짝수";
  console.log(`${i} ${str}`);
}

console.log("------------------------------------------------");

// 연습 문제 +
// 1. 피보나치 수열
let n = 10;
const fibonacci = [0, 1];
for (let i = 2; i < n; i++) fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);

console.log(fibonacci);

console.log("------------------------------------------------");

// 2. 소수 찾기
// 1 부터 100까지의 소수를 찾아 출력하는 프로그램을 작성하시오.
let start = 1,
  end = 100;
const results = [];
for (let i = start; i <= end; i++) {
  if (i < 2) continue;

  for (let j = 2; j <= Math.sqrt(i); i++) {
    if (i % j === 0) break;
  }

  results.push(i);
}
console.log(results);

console.log("------------------------------------------------");

// 3. 배열 요소의 합 구하기
// 주어진 숫자 배열의 모든 요소의 합을 계산하는 프로그램을 작성하시오
{
  const numbers = [5, 10, 15, 20, 25]; // 배열
  let results = 0;
  for (const value of numbers) results += value;

  console.log(results); // 75
}

console.log("------------------------------------------------");

// 4. 문자열 뒤집기
// 주어진 문자열을 뒤집어서 출력하는 프로그램을 작성하시오.
const str = "Hello, World!";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

console.log("뒤집힌 문자열:", reversed); // "!dlroW ,olleH"

console.log("------------------------------------------------");

// 5. 특정 숫자까지의 곱 계산
// 주어진 정수 N의 팩토리얼을 계산하는 프로그램을 작성하시오.
{
  let n = 5; // 예시 숫자

  // 팩토리얼 로직
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  console.log(`${n}의 팩토리얼:`, factorial); // 출력 120
}

console.log("------------------------------------------------");

// 6. 암스트롱 수
// 100 부터 999까지의 세 자리 정수 중 암스트롱 수를 구해서 출력하세요.
for (let i = 100; i <= 999; i++) {
  let numToString = i.toString();
  let n1 = (+numToString[0]) ** 3;
  let n2 = (+numToString[1]) ** 3;
  let n3 = (+numToString[2]) ** 3;
  if (n1 + n2 + n3 === i) console.log(i);
}
