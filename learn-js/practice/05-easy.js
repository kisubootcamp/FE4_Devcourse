// 1. 1부터 9까지 출력하기
for (let i = 1; i < 10; i++) {
  console.log(i);
}

// 2. 음수 걸러내기
let numArr = [10, -10, 20, -30, 40];
let sum = 0;
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] > 0) {
    sum += numArr[i];
  }
}
console.log(sum);

// 3. 홀짝 구분하기
for (let i = 0; i < 16; i++) {
  if (i % 2 == 0) {
    console.log(i, ' 짝수');
  } else {
    console.log(i, ' 홀수');
  }
}
