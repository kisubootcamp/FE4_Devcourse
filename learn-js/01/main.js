document.querySelector('h1').style.color = 'red';

// var, let, const
// let 변수 선언 키워드 (o)
// const 상수 선언 키워드

// let 재할당 가능한 변수
// const 재할당 불가한 변수

const numArr = [10];
numArr.push(20);
console.log(numArr);

// 기본 자료형
// 문자, 숫자, 논리, undefined, null, symbol, bigint

// 64비트 부동 소수점 방식으로 숫자를 다루고 있음
console.log(Number.MAX_SAFE_INTEGER);

// 참조 자료형
// 배열, 함수, 객체

// 1. 연산자
// 1.1 산술 연산자 +, -, *, /, %, **
// 1.2 증감 연산자 ++, --
// 1.3 대입 연산자 =, +=, -=, *=, /=, %=, **=
// 1.4 비교 연산자 ==, ===, !=, !==, >, >=, <, <=
// 1.5 삼항 연산자 condition ? expr1 : expr2
// 1.6 논리  && ,||, !

//조건문
// if, switch
// 표현식으로 조건 처리할 때 -> if
// 값으로 조건 처리할 때 -> switch
/*
[연습문제 - 학점 계산기]

학생의 점수를 저장하는 score 변수의 값에 따라  
학점을 출력하는 코드를 작성해주세요.back

1. score의 점수가 90점 이상이면 A
2. score의 점수가 80점 이상이면 B
3. score의 점수가 70점 이상이면 C
4. score의 점수가 60점 이상이면 D
5. score의 점수가 60점 미만이면 F
값으로 조건처리 x if문으로 풀어야 함
*/
let result = 10 + 20;

const area = '강북';
let baesonbi = 3000;

switch (area) {
  case '서울':
    baesonbi += 0;
    break;
  case '인천':
  case '경기':
  case '강북':
  case '강서':
    baesonbi += 1000;
    break;
} //break point 파괴: 코드 간결
console.log(baesonbi);

// 반복문
// do... while, while, for
// for...in, for...of

//for...in -> 배열(인덱스)과 객체(키)
//for...of -> 배열(값)

do {
  console.log('한 번은 실행됨');
} while (false);

//함수
//함수 선언문
function sum() {}
//함수 표현식
const sum = function sum() {};
//화살표 함수
const sum = (a, b) => {
  a + b;
};

//호이스팅 -> 선언과 할당을 분리
