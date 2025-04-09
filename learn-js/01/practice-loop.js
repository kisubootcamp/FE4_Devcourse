// Q1.
//[연습문제 - 1부터 9까지 출력하기]
{
  for (let i = 1; i < 10; i++) {
    console.log(i);
  }
}

// Q2.
// [연습문제 - 음수 걸러내기]
// 배열에 음수값이 섞여있습니다.
// 음수는 제외하고 양수들만 골라내어 합을 구하세요.
{
  let numArr = [10, -10, 20, -30, 40];
  let result = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > 0) result += numArr[i];
  }
  console.log(result);
}

{
  let numArr = [10, -10, 20, -30, 40];
  const result = numArr
    .filter((el) => el > 0)
    .reduce((acc, num) => acc + num, 0);
  console.log(result);
}

// Q3.
// [연습문제 - 홀짝 구분하기]
// 0부터 15까지 출력하면서 각각의 수가 짝수인지 홀수인지
// 구분하여 출력하도록 코드를 작성해주세요.

// 출력 예시 )
// 0 짝수
// 1 홀수
// 2 짝수
// 3 홀수
// 4 짝수
// ... 중략 ..
// 15 홀수

{
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) console.log(`${i} 짝수`);
    else console.log(`${i} 홀수`);
  }
}

// 어려움 문제
// 1. 피보나치 수열

{
  let num = 10;
  const result = [0, 1];

  for (let i = 2; i < num; i++) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }

  console.log(result);
}

// 2. 소수 찾기
{
  let start = 1;
  let end = 100;
  const result = [];

  for (let i = start; i <= end; i++) {
    if (primeNum(i)) result.push(i);
  }

  function primeNum(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  console.log(result);
}

// 3. 배열 요소의 합 구하기

{
  const numbers = [5, 10, 15, 20, 25];
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }

  console.log(result);
}
{
  const numbers = [5, 10, 15, 20, 25];
  const result = numbers.reduce((acc, num) => acc + num, 0);
  console.log(result);
}

// 4. 문자열 뒤집기

{
  const str = "Hello, World!";
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  console.log(result);
}

{
  const str = "Hello, World!";
  const reversedStr = str.split("").reverse().join("");
  console.log(reversedStr);
}

// 5. 특정 숫자까지의 곱 계산
{
  let n = 5;
  let result = 1;

  for (let i = n; i > 0; i--) {
    result *= i;
  }
  console.log(result);
}

// 6. 암스트롱수

{
  const result = [];
  for (let i = 100; i <= 999; i++) {
    if (
      i.toString()[0] ** 3 + i.toString()[1] ** 3 + i.toString()[2] ** 3 ===
      i
    )
      result.push(i);
  }
  console.log(result)
}
