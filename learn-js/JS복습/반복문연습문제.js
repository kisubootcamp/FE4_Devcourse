// 반복문

//  while: 표현식이 참이면 블록 안의 코드를 실행
// while (표현식) {
//   실행문;
// }

// do..while 어떤 내용을 한번은 실행시키고 반복함

// do {
//     //무조건 한번은 실행
//     // 이후 조건이 참이면 실행
// } while();

//for문 : 기본적인 반복문
// for(초기문; 조건문; 증감문;) {
//     실행문
// }

/*
1. 초기문을 실행
2. 조건의 참 거짓 판별
3. 조건문의 조건이 참이면 싱행문을 실행하고 거짓일 경우 반복문 종료
4. 증감문 실행
5. 증가시키고 다시 조건판별..증감..반복하면서 조건을 만족시킬때 까지 진행
*/

// for~in : 배열이나 객체 반복
let arr = ["banana", "apple", "orange"];
let obj = { name: "보민", age: 23 };

for (let index in arr) {
  console.log(index);
}

for (let key in obj) {
  console.log(obj[key]);
}

//for~of: 배열을 반복할 때 사용
let arr2 = ["banana", "apple", "peach", "pineapple"];
// let obj = {name: "관용", age: 34};

for (let index in arr2) {
  console.log(index);
}

// 연습문제 (쉬움)

//1번
for (let i = 1; i <= 9; i++) {
  console.log(i);
}

//2번
//배열에 음수값이 섞여있다. 음수는 제외하고 양수들만 골라내어 합을 구하기
let numArr = [10, -10, 20, -30, 40];
let sum = 0;

for (let j = 0; j < numArr.length; j++) {
  if (numArr[j] < 0) continue;
  sum += numArr[j];
}
console.log(sum);

// 3번 홀짝구분하기

for (let i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log(`${i} : "짝수"`);
  } else {
    console.log(`${i} : "홀수"`);
  }
}

// 연습문제(어려움)

//1번
let n = 5;
let fibo = [0, 1];
for (let i = 2; i < n; i++) {
  fibo[i] = fibo[i - 2] + fibo[i - 1];
  console.log(fibo);
}

// 문제 : 주어진 정수 N에 대해, 피보나치 수열의 처음 N항을 출력하는 프로그램을 작성하시오
// 입력: N(정수1이상)
// 출력 : 피보나치 수열의 처음 N항을 배열로 출력
// 조건 : 1항은 0, 2항은 1이라고 가정합니다

let num = 10;
let fibo1 = [0, 1];

for (let i = 2; i < num; i++) {
  fibo1[i] = fibo1[i - 2] + fibo1[i - 1];
  console.log(fibo1[i]);
}

// 소수찾기
// 문제 : 1~100의 소수를 찾아 출력하는 프로그램을 작성하시오
// 입력: 없음
// 출력: 1~100까지의 소수를 배열로 출력
// 소수 = 1과 자기 자신만을 약수로 가지는 자연수
let startNum = 1;
let endNum = 100;

for (let i = startNum; i <= endNum; i++) {
  if (i < 2) continue;

  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(i);
}
