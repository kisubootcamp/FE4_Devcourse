{
  //Q1.[연습문제 - 1부터 9까지 출력하기]
  for (let i = 1; i < 10; i++) {
    console.log(i);
  }

  /*
    Q2.[연습문제 - 음수 걸러내기]

    배열에 음수값이 섞여있습니다. 
    음수는 제외하고 양수들만 골라내어 합을 구하세요.

*/
  let numArr = [10, -10, 20, -30, 40];
  let sum = 0;
  for (num of numArr) {
    if (num > 0) {
      sum += num;
    }
  }
  console.log(sum);

  // Q3.[연습문제 - 홀짝 구분하기]
  // 0부터 15까지 출력하면서 각각의 수가 짝수인지 홀수인지
  // 구분하여 출력하도록 코드를 작성해주세요.
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i, "짝수");
    } else if (i % 2 === 1) {
      console.log(i, "홀수");
    }
  }
}
