// document.addEventListener("DOMContentLoaded", () => {});
// 없어도 defer가 있으면 실행되지만 쓰는걸 권장 
console.log("외부 스크립트");

document.querySelector("h1").style.color = "red";

//변수 var, let, const
// let은 변수를 선언 (o)
// const 상수를 선언
// let 재할당이 가능한 변수 
// const 재할당이 불가능한 변수
const numArr = [10];
numArr.push(20);
console.log(numArr);


//자료형
// 기본 자료형
// 문자, 숫자, 논리, undefined, null, symbol, bigint

//bigint
console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740991);
console.log(9007199254740995n);
// 참조 자료형
// 배열, 함수, 객체



// 연산자
// 산술 연산자
// +, -, *, /, %, **(거듭제곱)
console.log(2 ** 3);

// 증감 연산자
// --, ++

// 대입 연산자
// =, +=, -=, *=, /=, %=, **=
let num = 10;
num = num + 20;

num += 20;

// 비교 연산자
// 동등(==), 일치(===), 부등(!=), 불일치(!==), 
// ~보다 큰(>), ~보다 크거나 같은(>=), ~보다 작은(<), ~보다 작거나 같은(<=)

// 1.5 삼항 연산자
// 피연산자1 ? 피연산자2 : 피연산자3
// condition ? expr1 : expr2
// 1중첩 이상할것이면 -> 그냥 if문 쓴다
console.log(true ? (false ? 10 : 15) : 20);

// 1.6 논리 연산자
// 1.6.1 and, or, not (낫)
// expr1 && expr2 = true
// expr1 || expr2 = true
console.log(!(false || false)); //false ! true
console.log(!false || false); //false ! true

// 비트 연산자 (x) -> 프론트엔드에서 배우지 않음. 쓸 일이 없음


