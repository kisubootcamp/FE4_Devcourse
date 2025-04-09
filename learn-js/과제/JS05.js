// 쉬움 1 - 1부터 9까지 출력하기]
for (let i = 1; i <= 9; i++) {
  console.log(i);
}
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// 쉬움 2  - 음수 걸러내기
let numArr = [10, -10, 20, -30, 40];
let newArr = [];

for (let num of numArr) {
  if (num < 0) {
    continue;
  } else if (num > 0) {
    newArr.push(num);
  }
}
console.log(newArr); //[ 10, 20, 40 ]

// 쉬움 3 - 홀짝 구분하기
// 0부터 15까지 출력하면서 각각의 수가 짝수인지 홀수인지
// 구분하여 출력하도록 코드를 작성해주세요.
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log("짝수");
  } else {
    console.log("홀수");
  }
}
// 짝수
// 홀수
// 짝수
// 홀수
// 짝수
// 홀수
// 짝수
// 홀수
// 짝수
// 홀수
// 짝수
// 홀수
// 짝수
// 홀수
// 짝수
// 홀수

// 어려움 1
