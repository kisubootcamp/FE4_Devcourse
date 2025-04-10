// var, let, const
// let 변수를 선언 키워드
// const 상수를 선언 키워드

// let 재할당이 가능한 변수
// const 재할당이 불가능한 변수

// const numArr = [10];
// numArr.push(20);
// console.log(numArr);

// 기본 자료형
// 문자, 숫자, boolean, undefined, null, symbol, bigint

// 64비트 부동 소수점 방식으로 숫자를 다루고 있음
// bigint는 뒤에 숫자 뒤에 n을 붙임
console.log(Number.MAX_SAFE_INTEGER);
// 참조 자료형
// 배열, 함수, 객체

// 1. 연산자
// 1.1 산술 연산자
// +, -, *, / , %, **

// 1.2 증감 연산자
// 1.2.1 ++ 증가 연산자
// 1.2.2 -- 감소 연산자

// 1.3 대입 연산자
// 1.3.1 =
// 1.3.2 +=, -=. *=. /=, %=, **=
let num = 10;
num += 20;
console.log(num);

// 1.4 비교 연산자
// 1.4.1 동등(==), 일치(===), 부등(!=), 불일치(!==), ~보다 큰(>), ~보다 크거나 같은(>=), ~보다 작은(<), ~보다 작거나 같은(<=)

// 1.5 삼항 연산자
// 피연산자1 ? 피연산자2 : 피연산자3
// condition ? expr1 : expr2
// 1중첩 이상이면 그냥 if문 사용
console.log(true ? (false ? 10 : 15) : 20);

// 1.6 논리 연산자
// 1.6.1 and, or, not (낫)
// expr1 && expr2 = 모두 참이어야 참
// expr1 || expr2 = 둘중 하나만 참이면 참
// not !

// .... 비트 연산자 (x) -> 프론트엔드에서 배우지 않음. 왜? 쓸일이 없음

// 조건문
// if, switch
// 표현식으로 조건 처리할 때 -> if
// 값으로 조건 처리할 때 -> switch
// 표현식은 값으로 평가 될 수 있는 식

let result = 10 + 20;
// let 는 키워드, result 는 식별자, = 연산자, 뒤는 산술 연산자
// 피연산자
// 식별자는 키워드를 뭘 만났냐는가에 따라 달라짐 function = 함수명 var let const 는 변수명
// 학점 계산기

const score = 90;

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

// break 포인트를 생략하는 패턴

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

// 서울
// 인천, 경기, 강북, 강서 -> 1000
const area = "서울";
let baesonbi = 3000;
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
}
console.log(baesonbi);

// 반복문
// do...while, while, for
// for...in, for...of

// for...in -> 배열(인덱스)과 객체(키),
// for...of -> 배열(값)

// 함수
// 함수 선언문
function sum() {}
// 함수 표현식
const sum2 = function sum2() {};
// 화살표 함수
const sum3 = (a, b) => {
  return a + b;
};

const sum4 = (a, b) => a + b;

