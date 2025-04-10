// var, let, const
// let 변수 선언 키워드 (o)
// const 상수 선언 키워드 (x)
// -----

// let 재할당이 가능한 변수
// const 재할당이 불가능한 변수
// -> 이미 할당한 것에서 추가할 수는 있지만 재할당은 불가능.
// -> 면접 질문 !

const numArr = [10];
numArr.push(20);
console.log(numArr);

// 기본 자료형
// 문자, 숫자, 논리, undefined, null, symbol, bigint(숫자에 n을 붙임)

// 자바스크립트는 64비트 부동 소수점 방식으로 숫자를 다루고 있음
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// 9007199254740991 보다 큰 숫자는 안정적으로 처리할 수 없음
console.log(9007199254740995); // 9007199254740996
// 따라서 더 큰 숫자를 안전하게 사용하기 위해 bigint가 나옴 -> 금융권, 굉장히 매출이 많은 쇼핑몰 등
console.log(9007199254740995n); // 9007199254740995n

// 참조 자료형
// 배열, 함수, 객체

// 1. 연산자
// 1.1 산술 연산자
// +, -, *, /, %, **(거듭제곱)
console.log(2 ** 3); // 8

// 1.2 증감 연산자
// 1.2.1 ++
// 1.2.2 --

// 1.3 대입 연산자
// 1.3.1 =
// 1.3.2 +=, -=, *=, /=, %=, **=
let num = 10;
num = num + 20;
num += 20;

// 1.4 비교 연산자
// 1.4.1

// 동등(==),
// 일치(===),

// 부등(!=),
// 불일치(!==),

// 타입까지 비교하는 일치(===)와 불일치(!==) 연산자만 사용해야 함.
// 그렇지 않으면 엄청난 오류를 일으킬 수 있음.

// ~보다 큰(>),
// ~보다 크거나 같은(>=),
// ~보다 작은(<),
// ~보다 작거나 같은(<=)

// 1.5 삼항 연산자
// 피연산자1 ? 피연산자2 : 피연산자3
// condition ? expr1 : expr2
console.log(true ? 10 : 20);

// 중첩도 가능하지만, 중첩할 거면 삼항 연산자 쓰지 마~!
// 1중첩 이상할 거면 그냥 if문 씀. -> 가독성이 너무 떨어지기 때문
console.log(true ? (false ? 10 : 15) : 20);

// 1.6 논리 연산자
// 1.6.1 and, or, not
// and &&
// or ||
// not !

// ... 비트 연산자 (x) -> 프론트엔드에서 배우지 않음. 왜? 쓸 일이 없음.

// 조건문
// if, switch문이 중요.
// 표현식으로 조건 처리할 때 -> if
// 값으로 조건 처리할 때 -> switch

let result = 10 + 20;
// 키워드(let) 식별자(result) 대입 연산자(=) 산술 연산자(+)
// 피연산자 = 피연산자 / 피연산자 + 피연산자
// var, let 다음의 식별자는 변수명, function 다음의 식별자는 함수명

// 학점 계산기 예제 -> if문
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

// 서울
// 인천, 경기, 강북, 강서 -> 1000
const area = "강북";
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
  default:
    baesonbi += 10000;
}
console.log(baesonbi);
// break를 만날 때까지 실행하기 때문에
// 위와 같이 의도적으로 break를 생략하는 break 파기문 사용 가능.

// 반복문
// do...while, while, for(실무에서 가장 높은 비율로 사용됨. 비교적 직관적임.)
// for...in, for...of (실무에서 많이 사용됨.)

// for...in -> 배열(인덱스), 객체(키)
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

// 호이스팅 -> 선언과 할당을 분리
console.log(a);
var a = 10; // undefined

console.log(b);
let b = 10; // ReferenceError: Cannot access 'b' before initialization
