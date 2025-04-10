// 반복문

// 연습문제 쉬움
// 1. 1부터 9까지 출력
for (let i = 1; i <= 9; i++) {
  console.log(i);
}

// 2. 음수 걸러내기
let numArr = [10, -10, 20, -30, 40];
let positive = 0;

for (let i = 0; i <= numArr.length - 1; i++)
  if (numArr[i] >= 0) {
    positive += numArr[i];
  }
console.log(numArr[i]);
