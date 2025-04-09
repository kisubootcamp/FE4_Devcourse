/*
[연습문제 - 학점 계산기]

학생의 점수를 저장하는 score 변수의 값에 따라  
학점을 출력하는 코드를 작성해주세요.back

1. score의 점수가 90점 이상이면 A
2. score의 점수가 80점 이상이면 B
3. score의 점수가 70점 이상이면 C
4. score의 점수가 60점 이상이면 D
5. score의 점수가 60점 미만이면 F
*/

let score = 0;
if (score >= 90) {
  return 'A';
} else if (score >= 80) {
  return 'B';
} else if (score >= 70) {
  return 'C';
} else if (score >= 60) {
  return 'D';
} else {
  return 'F';
}

/*
2. 변수 `num`에 임의의 숫자를 할당하세요.
  `num`이 짝수인지 홀수인지 확인하고, 짝수면 "Even", 홀수면 "Odd"를 출력하세요.
*/
let num = 20;
if (num % 2 === 0) {
  return 'Even';
} else {
  return 'Odd';
}

/*
3. 로그인 확인 및 권한 부여 

- 변수 `isLoggedIn`과 `isAdmin`에 각각 `true` 또는 `false`를 할당하세요.
- 사용자가 로그인했는지 확인하고, 로그인하지 않았다면 "Please log in"을 출력하세요.
- 사용자가 로그인했지만 관리자가 아닌 경우 "Access denied"를 출력하세요.
- 사용자가 로그인하고 관리자일 경우 "Welcome, admin!"을 출력하세요.
*/
let isLoggedIn = true;
let isAdmin = false;
if (isLoggedIn) {
  if (isAdmin) {
    return 'Welcome, admin!';
  } else {
    return 'Access denied';
  }
} else {
  return 'Please log in';
}

/*
4. 숫자 크기 비교 
변수 `a`와 `b`에 임의의 숫자를 할당하세요.
`a`와 `b`의 크기를 비교하고, `a`가 크면 "a is greater", 
`b`가 크면 "b is greater", 
두 값이 같으면 "a and b are equal"을 출력하세요.
*/
let a = 3;
let b = 4;
if (a > b) {
  return 'a is greater';
} else if (a < b) {
  return 'b is greater';
} else {
  return 'a and b are equal';
}

/*
5. 월별 계절 판별
    1. 변수 `month`에 1에서 12 사이의 숫자를 할당하세요.
    2. `month`에 따라 해당하는 계절을 출력하세요:
        - 12, 1, 2: "Winter"
        - 3, 4, 5: "Spring"
        - 6, 7, 8: "Summer"
        - 9, 10, 11: "Fall"
*/
let month = 10;
let Winter = [12, 1, 2];
let Spring = [3, 4, 5];
let Summer = [6, 7, 8];
let Fall = [9, 10, 11];

if (Winter.includes(month)) {
  return 'Winter';
}
if (Spring.includes(month)) {
  return 'Spring';
}
if (Summer.includes(month)) {
  return 'Summer';
}
if (Fall.includes(month)) {
  return 'Fall';
}

/*
6 할인율 계산
1. 구매 금액에 따라 할인율을 적용하여 최종 금액을 계산하는 코드를 작성하시오
2. 100000원 이상 : 20% 할인
3. 50000원 이상 : 10% 할인
4. 그외 할인 없음
*/
let total = 100000;
if (total >= 10000) {
  return total - total * 0.2;
} else if (total >= 50000) {
  return total - total * 0.1;
} else {
  return total;
}

/*
7. 1부터 7까지의 숫자를 입력받아 해당 요일(1: 월요일, 7: 일요일)을 출력하는 코드를 작성하시오.
*/
let days = [
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
  '일요일',
];
let day = 3;
if (day) {
  return days[day - 1];
}

/*
8. 문제: 주어진 숫자가 양수, 음수, 또는 0인지 판별하는 코드를 작성하시오.
*/
const num2 = 10;
if (num2 >= 0) {
  return 'plus';
} else if ((num = 0)) {
  return 'zero';
} else {
  return 'minus';
}

//반복분 연습문제

/*
//[연습문제1 - 1부터 9까지 출력하기]
*/
for (let i = 1; i <= 9; i++) {
  return i;
}

/*
[연습문제2 - 음수 걸러내기]

배열에 음수값이 섞여있습니다. 
음수는 제외하고 양수들만 골라내어 합을 구하세요.

*/

let numArr = [10, -10, 20, -30, 40];
let count = 0;
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] >= 0) {
    count += numArr[i];
  }
}
console.log(count);

/*
[연습문제3 - 홀짝 구분하기]

0부터 15까지 출력하면서 각각의 수가 짝수인지 홀수인지
구분하여 출력하도록 코드를 작성해주세요.

출력 예시 ) 
0 짝수 
1 홀수
2 짝수
3 홀수
4 짝수
... 중략 .. 
15 홀수
*/
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} 짝수`);
  } else {
    console.log(`${i} 홀수`);
  }
}

/*
### 1. 피보나치 수열 계산

피보나치 수열의 특정 항까지 계산하는 예제입니다.

- **문제**: 주어진 정수 N에 대해, 피보나치 수열의 처음 N항을 출력하는 프로그램을 작성하시오.
- **입력**: N (정수, 1 이상)
- **출력**: 피보나치 수열의 처음 N항을 배열로 출력.
- 조건: 1항은 0, 2항은 1 이라고 가정합니다.
- **예시**:
    - **입력**: 10
    - **출력**: `[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`
- **설명**: 피보나치 수열은 앞의 두 수의 합으로 다음 수를 생성하는 수열이다. 첫 두 항은 0과 1이다.
*/

//let n = 10; // 원하는 항의 수

// 피포나치 수열 로직

// console.log(`피보나치 수열(${n}항):`, result); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//for
let N = 10;
let fibo = [0, 1];
for (let i = 0; i < N - 2; i++) {
  fibo.push(fibo[i] + fibo[i + 1]);
}
console.log(fibo);

//while
let N = 2;
let fibo = [0, 1];
let i = 0;
if (N === 1) {
  console.log([0]);
} else if (N === 2) {
  console.log([0, 1]);
} else {
  while (i <= N) {
    fibo.push(fibo[i] + fibo[i + 1]);
    i++;
    if (fibo.length === N) {
      console.log(fibo);
    }
  }
}

// do...while
let N = 3;
let i = 0;
let fibo = [];

do {
  fibo.push(0);
} while (i < N);

console.log(fibo);
// 나중에 다시하기

/*
2. 소수 찾기
문제: 1부터 100까지의 소수를 찾아 출력하는 프로그램을 작성하시오.
입력: 없음
출력: 1부터 100까지의 소수를 배열로 출력.
예시:
출력: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
설명: 소수는 1과 자신만을 약수로 가지는 자연수이다. 이 프로그램은 2부터 100까지의 숫자 중 소수를 찾는다.
let start = 1, end = 100; 
*/

let numArrr = [2, 3, 5, 7];
for (let i = 8; i <= 100; i++) {
  if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
  } else {
    numArrr.push(i);
  }
}
console.log(numArrr);

/*
### 3. 배열 요소의 합 구하기

- **문제**: 주어진 숫자 배열의 모든 요소의 합을 계산하는 프로그램을 작성하시오.
- **입력**: `numbers` (배열, 예: `[5, 10, 15, 20, 25]`)
- **출력**: 배열 요소의 합.
- **예시**:
    - **입력**: `[5, 10, 15, 20, 25]`
    - **출력**: `75`
- **설명**: 이 프로그램은 배열의 각 요소를 순회하며 합을 계산한다.
*/
const numbers = [5, 10, 15, 20, 25];
let results = 0;
for (let i = 0; i < numbers.length; i++) {
  results += numbers[i];
}

console.log(results); // 75

/*
  4. 문자열 뒤집기
- **문제**: 주어진 문자열을 뒤집어서 출력하는 프로그램을 작성하시오.
- **입력**: `str` (문자열, 예: `"Hello, World!"`)
- **출력**: 뒤집힌 문자열.
- **예시**:
    - **입력**: `"Hello, World!"`
    - **출력**: `"!dlroW ,olleH"`
- **설명**: 문자열을 끝에서부터 시작하여 차례로 각 문자를 추가하여 새로운 문자열을 만든다
*/
let str = 'Hello, World';
let strArr = str.split('');

let reversed = [];
for (let i = strArr.length - 1; i >= 0; i--) {
  reversed.push(strArr[i]);
}

console.log(reversed);

/*
5. 특정 숫자까지의 곱 계산
5! → 5 * 4 * 3 * 2 * 1
4! → 4 * 3 * 2 * 1
2! ⇒ 2 * 1 
1! → 1
0! → 1
*/
let n = 0;
let result = 1;
for (let i = 1; i <= n; i++) {
  result *= i;
}
console.log(result);

/*
6. 암스트롱수 
- **문제**: 100부터 999까지의 세 자리 정수 중 암스트롱 수를 구해서 출력하세요.
- **입력**: 없음
- **출력**: 153, 370, 371, 407
*/

/*
함수 연습문제
// 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
// 매개변수의 갯수 제한은 없습니다.
*/
let sum = (a, b) => a + b;

//사칙연산을 수행하는 로직을 담은 함수를 구현해주세요.  (매개변수 - 2개) (+, -, *, /)
//구현 방법은 자율입니다.
const multiply = (a, b) => a * b;

//숫자를 매개변수로 받아서 짝수면 true, 홀수면 false를 반환하는 함수 isEven을 작성하세요.
//함수를 사용하여 7이 짝수인지 홀수인지 판별하고 결과를 출력하세요.
const isEven = function (num) {
  if (num % 2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};

isEven(2);

/*
Q4. 배열의 모든 요소 더하기
배열의 모든 요소의 합을 반환하는 함수를 작성하세요
*/
let arr = [1, 2, 3];

const sumArray = function (arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  console.log(result);
};
sumArray(arr);

/*
Q5. 배열의 최대값 찾기
배열에서 최대값을 찾는 함수를 작성하세요
*/
let arr = [1, 5, 3, 9, 2];

const findMax = function (arr) {
  let max = Math.max(...arr);
  console.log(max);
};
findMax(arr);

/*
Q6. 문자열 반전
주어진 문자열을 반전시켜 반환하는 함수를 작성하세요
*/ 111;

/*

*/

/*

*/

/*

*/
