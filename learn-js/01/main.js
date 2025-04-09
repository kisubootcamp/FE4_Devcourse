// document.querySelector('h1').style.color = 'red';

// var, let, const
// let은 재할당이 가능한 변수
// const 재할당이 불가능한 변수

const numArr = [10];
numArr.push(20);
console.log(numArr);

// 기본 자료형
// 문자, 숫자, 논리, undefined, null, symbol, bigint

// 64비트 부동 소수점 방식으로 숫자를 다루고있음
console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740991);
console.log(9007199254740995);
console.log(9007199254740995n); // bigint사용하는이유

// 참조 자료형
// 배열, 함수, 객체

// 1. 연산자
// 1.1 산술 연산자
// +,-,*,/,%,**
console.log(2 ** 3); //2의 3승 = 8

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

// 동등은 값만보지만 일치는 타입까지 비교해서본다.
// 동등(==),
// 일치(===)

// 부등(!=),
// 불일치(!==)

// ~보다 큰(>),
// ~보다 크거나 같은(>=),
//  ~보다 작은(<),
// ~보다 작거나 같은(<=)

// 1.5 삼항 연산자
// 피연산자1 ? 피연산자2 : 피연산자3
// condition ? expr1 : expr2
// 1중첩 이상할것이면 -> if문쓰자
console.log(true ? 10 : 20);

// 1.6 논리 연산자
// 1.6.1 and,or,not
// expr1 && expr2 = true 둘다 true이여야 true
// expr1 || expr2 = true 하나만 true이면 true

// not !

// .... 비트 연산자(x) -> FE에서 배우지않음, 쓸일이없다.

// 조건문
// if, switch
// 표현식으로 조건처리할때 -> if
// 값으로 조건 처리할떄 -> switch

// 반복문
// do..while, while, for
// for..in, for..of

// for..in -> 배열(인덱스)와 객체(키),
// for..of -> 배열(값)

// 함수
// 함수선언문
function sum() {}

// 함수표현식
const sum = function sum() {};

// 화살표함수
const sum3 = (a, b) => {
    return a + b;
};

const sum4 = (a, b) => a + b;
// 위의 코드와 같다.
