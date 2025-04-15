/*
//01. 변수
// var, let, const
// let 변수 선언 키워드 (o)
// const 상수 선언 키워드 (x)

// let : 재할당이 가능한 변수
// const : 재할당이 불가능한 변수

const numArr = [10];
numArr.push(20);
console.log(numArr);


//02. 자료형
// 2.1 기본 자료형
// 뮨자, 숫자, 논리, undefined, null, symbol, bigint
// 64비트 부동 소수점 방식으로 숫자를 다루고 있음
console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740991);
console.log(9007199254740995n);

// 2.2 참조 자료형
// 배열, 함수, 객체


// 03. 연산자
// 3.1 산술 연산자
// +, -, *, /, %, **
console.log(2 ** 3); // 거듭제곱

// 3.2 증감 연산자
// ++ -> 1증가
// -- -> 1감소

// 3.3 대입 연산자
// =
// +=, -=, *=, /=, %=, **=
let num = 10;
num = num + 20;
num += 20;

// 3.4 비교 연산자
// 동등(==)
// 일치(===) -> O

// 부등(!=) 
// 불일치(!==) -> O

// ~보다 큰(>)
// ~보다 크거나 같은(>=)
// ~보다 작은(<)
// ~보다 작거나 같은(<=)

// 3.5 삼항 연산자
// 피연산자1 ? 피연산자2 : 피연산자3
// condition ? expr1 : expr2
// 1중첩 이상 할거라면 -> 그냥 if문 쓴다
console.log(true ? 10 : 20); // 10

// 3.6 논리 연자
// and, or, not
// expr1 && expr2 = true
// expr1 || expr2 = true
console.log(!(false || false)); // ()안에 연산을 먼저
console.log(!false || false); // false를 true로 바꿈

// 3.7 비트 연산자 x -> 프론트에서 안 배움. 쓸 일 없음.


// 04. 조건문
// if, switch
// 표현식으로 조건 처리할 때 -> if
// 값으로 조건 처리할 때 -> switch

// [연습문제 - 학점 계산기]
// 학생의 점수를 저장하는 score 변수의 값에 따라  
// 학점을 출력하는 코드를 작성해주세요.back

// 1. score의 점수가 90점 이상이면 A
// 2. score의 점수가 80점 이상이면 B
// 3. score의 점수가 70점 이상이면 C
// 4. score의 점수가 60점 이상이면 D
// 5. score의 점수가 60점 미만이면 F

const score = 90;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else if (score < 60) {
    console.log("E");
}
 
// 서울 
// 인천, 경기, 강북, 강서 -> +1000원
const area = "서울";
let baesonbi = 3000;
switch (area) {
  case "서울":
    baesonbi += 0;
    break;
  case "인천":
    baesonbi += 1000;
    break;
  case "경기":
    baesonbi += 1000;
    break;
  case "강북":
    baesonbi += 1000;
    break;
  case "강서":
    baesonbi += 1000;
    break;
}
console.log(baesonbi);
// 같음
const area1 = "강북";
let baesonbi1 = 3000;
switch (area1) {
  case "서울":
    baesonbi1 += 0;
    break;
  case "인천":
  case "경기":
  case "강북":
  case "강서":
    baesonbi1 += 1000;
    break;
}
console.log(baesonbi1);


// 05. 반복문
// do...while, while, for
// for...in, for...of

// for...in : 배열(인덱스)과 객체(키)
// for...of : 배열(값)

do {
    // 한 번은 실행됨
    console.log("한 번은 실행됨");
} while(false);


// 06. 함수
// 함수 선언문
function sum() {};

// 함수 표현식
const sum2 = function sum2() {};

//화살표 함수
const sum3 = (a, b) => {
    return a + b;
};
const sum4 = (a, b) => a + b;

*/
