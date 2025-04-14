// 반복문

// 연습문제
{
  // 1. 1부터 9까지 출력
  for (let i = 1; i <= 9; i++) {
    console.log(i);
  }
}
{
  // 2. 음수 걸러내기
  let numArr = [10, -10, 20, -30, 40];
  let positive = 0;

  for (let i = 0; i <= numArr.length - 1; i++)
    if (numArr[i] >= 0) {
      positive += numArr[i];
    }
  console.log(positive);
}
{
  // 3. 홀짝 구분하기
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(`${i} 짝수`);
    } else {
      console.log(`${i} 홀수`);
    }
  }
}

// 연습문제 +
