// 피보나치 수열 계산
{
  let n = 10; // 원하는 항의 수
  let result = [0, 1];
  for (let i = 2; i < n; i++) {
    result[i] = result[i - 2] + result[i - 1];
    // 피포나치 수열 로직
    console.log(`피보나치 수열(${n}항):`, result); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  }
}

// 소수찾기
{
  let start = 1,
    end = 100; // 범위
  let num = 0;
  let results = [];

  for (let i = start; i <= end; i++) {
    let arr = [];
    let arrLoc = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        arr[arrLoc] = j;
        arrLoc++;
      }
    }

    if (arr.length === 2) {
      results[num] = i;
      num++;
    }
  }
  // 소수 찾기 코드
  console.log(results); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
}

{
  // 3. 배열 요소의 합 구하기
  const numbers = [5, 10, 15, 20, 25]; // 배열
  let results = 0;
  for (let i = 0; i < numbers.length; i++) {
    results += numbers[i];
  }
  // 합 계산 코드
  console.log(results); // 75
}
{
  const numbers = [5, 10, 15, 20, 25]; // 배열
  let results = 0;
  let i = 0;
  do {
    results += numbers[i];
    i++;
  } while (i < numbers.length);
  console.log(results); // 75
}

{
  // 문자열 뒤집기
  const str = "Hello, World!";
  let reversedArr = [];
  let reversed;

  for (let i = str.length; i > 0; i--) {
    reversedArr[str.length - i] = str[i - 1];
  }

  reversed = reversedArr.join("");

  // 문자열 뒤집기 로직
  console.log("뒤집힌 문자열:", reversed); // "!dlroW ,olleH"
}

{
  //특정 숫자까지의 곱 계산
  let n = 5; // 예시 숫자
  let factorial = 1;
  for (let i = n; i >= 1; i--) {
    factorial *= i;
  }
  // 팩토리얼 로직
  console.log(`${n}의 팩토리얼:`, factorial); // 출력 120
}
{
  // 암스트롱수
  /*
    [연습문제 - 암스트롱 수 구하기]
    난이도 ★★★★★

    100부터 999까지 암스트롱 수를 구하세요

    &암스트롱 수란?

    암스트롱의 수는 세 자리의 정수 중에서 각 자리의 수를 세 제곱한 수의 합과 자신이 같은 수를 말합니다. 
    예를 들어 153 = 1 + 125 + 27 입니다. 
    이와 같은 수를 암스트롱의 수라고 말합니다.
*/
  let results = [];
  for (let i = 100; i <= 999; i++) {
    let n = i % 10;
    let nn = (i % 100) - n;
    let nnn = i - nn - n;

    let n2 = nn / 10;
    let n3 = nnn / 100;

    if (i === n ** 3 + n2 ** 3 + n3 ** 3) {
      console.log(i);
      results[results.length] = i;
    }
  }

  console.log(results);
}
