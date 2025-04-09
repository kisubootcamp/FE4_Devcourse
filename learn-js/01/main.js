// document.querySelector("h1").style.color = "red";

// var, let, const
// let 변수를 선언하는 키워드 (o)
// const 상수를 선언하는 키워드
// ------

// let 재할당이 가능한 변수
// const 재할당이 불가능한 변수

const numArr = [10];
numArr.push(20);
console.log(numArr);

// 기본 자료형
// 문자, 숫자, 논리, undefined, null, symbol, bigint

// 64비트 부동 소수점 방식으로 숫자를 다루고 있음
console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740991);
console.log(9007199254740995n); // bigint (Number.MAX_SAFE_INTEGER 값 보다 큰 값을 다룰때 사용)

// 참조 자료형
// 배열, 함수, 객체

// 1. 연산자
// 1.1 산술 연산자
// +, -, *, /, %, **
console.log(2 ** 3);

// 1.2 증감 연산자
// 1.2.1 ++
// 1.2.2 --

// 1.3 대입 연산자
// 1.3.1 =
// 1.3.2 +=, -=, *=, /=, %=, **=
let num = 10;
num += 20;

// 1.4 비교 연산자
// 1.4.1  동등(==), 일치(===), 부등(!=), 불일치(!==), ~보다 큰(>), ~보다 크거나 같은(>=), ~보다 작은(<), ~보다 작거나 같은(<=)

// 1.5 삼항 연산자
// 피연산자1 ? 피연산자2 : 피연산자3
// condition ? expr1 : expr2
// 1중첩 이상 할거면 -> 그냥 if문 쓴다

// 1.6 논리 연산자
// 1.6.1 and, or, not
// and &&
// or ||
// not !

// .... 비트 연산자 (x) -> 프런트엔드에서 배우지 않음. 왜? 쓸 일이 없음

// 조건문
// if, switch
// 표현식으로 조건 처리할 때 -> if
// 값으로 조건 처리할 때 -> switch
// 학점 계산기 연습문제

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

const score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// 서울
// 인천, 경기, 강북, 강서 -> 1000
const area = "강북";
let baesonbi = 3000;
// switch (area) {
//     case "서울":
//       baesonbi += 0;
//       break;
//     case "인천":
//       baesonbi += 1000;
//       break;
//     case "경기":
//       baesonbi += 1000;
//       break;
//     case "강북":
//       baesonbi += 1000;
//       break;
//     case "강서":
//       baesonbi += 1000;
//       break;
//   }
switch (area) {
  case "서울":
    baesonbi += 0;
    break;
  case "인천":
  case "경기":
  case "강북":
  case "강서":
    baesonbi += 1000;
    break;
  default:
    baesonbi += 10000;
}
console.log(baesonbi);

// 반복문
// do...while, while, for
// for...in, for...of
// for, for...in, for...of 를 가장 많이 사용

// for...in -> 배열(인덱스)과 객체(키)
// for...of -> 배열(값)

// 함수
// 함수 선언문
function sum() {}

// 함수 표현식
const sum = function sum2() {};

// 화살표 함수
const sum3 = (a, b) => {
  return a + b;
};

const sum4 = (a, b) => a + b;

// 호이스팅, 컨텍스트, 클로저
