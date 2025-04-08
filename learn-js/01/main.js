// - 웹 브라우저는 위에서부터 아래로 파싱함
// - 그러다 Js 를 발견하면 파일을 다운 받고, 실행 후 파싱을 이어서 한다.
// - 헤더 태그 사이에 넣는거는 굉장히 안좋음. -> html 파싱 하다가 다운 받아서 진행 하기 때문에 html 태그가 안보임

// - 바디 태그가 끝나기 직전 -> html 파싱은 끝남 -> 막바지에 js 다운 후 실행

//   - 프로젝트 규모가 커지면 바디 태그가 많아지므로 힘들어짐

// - 헤더 태그 안에 넣어주되 async, defer 추가
//   - 파싱중 js 파일을 병렬로 다운후 파싱 멈추고 실행 -> 끝나면 다시 파싱
//   - 치명적인 문제 - 다운로드를 병렬이지만 실행 서순은 보장하지 않음
// - 그래서 등장한 defer
//   - 병렬로 다운로드 받고 파싱이 끝났을때 a,b,c 를 순서대로 실행해줌
//   - 이렇게 선언하는게 가장 일반적인 선언법

// console.log("외부 스크립트");

// document.querySelector("h1").style.color = "red";

// var, let, const
// let 변수를 선언하는 키워드 - o
// const 상수를 선언하는 키워드
// ---

// let 은 재할당이 가능한 변수
// const 는 재할당이 불가능한 변수

// const numArr = [10];
// console.log(numArr);

// numArr.push(20);
// console.log(numArr);

// 기본 자료형
// 문자, 숫자, 논리, undefined, null, bigint, symbol

// 64 비트 부동소수점
// console.log(Number.MAX_SAFE_INTEGER); // 9,007,199,254,740,991
// console.log(9007199254740995); // 9007199254740996

// 참조 자료형
// array, object, function

// 연산자
// 산술 연산자
// +, -, *, /, %, **
// 증감 연산자
// ++, --
// 대입 연산자
// =, +=, -=, *=, /=, %=, **=
// 비교 연산자
// (동등)==, (일치)===, (부등)!=, (불일치)!==, (~보다 큰)>, (~보다 작은)<, (~보다 크거나 같은)>=, (~보다 작거나 같은)<=
// 삼항 연산자
// 1중첩 이상 할거면 그냥 if 문 쓰는걸로 -> 가독성이 너무 안좋아짐
// condition ? expr1(true) : expr2(false)
// 논리 연산자
// and &&, or ||, not !
// 비트 연산자 -> 프론트 엔드에서 배우지 않음. 쓸일이 없음.
// <<, >> 였나

// 조건문
// if, else if, else, switch
// 표현식으로 조건 처리 할때 -> if
// 값으로 조건 처리 할때 -> switch
// let result = 10 + 20;
// let -> keyword
// result -> 식별자
// = -> 대입 연산자
// 10 + 20 -> 산술 연산자

// switch
// const area = "강북";
// let baesonbi = 3000;
// switch (area) {
//   case "서울":
//     baesonbi += 0;
//     break;
//   case "인천":
//   case "경기":
//   case "강북":
//   case "강서":
//     baesonbi += 1000;
//     break;
// }
// console.log(baesonbi);

// 반복문
// do...while, while,
// for, for...in, for...of

// for...in -> 객체(key), 배열(index)
// for...of -> 배열(값)

// 함수
// 함수 선언식
function sum() {}
// 함수 표현식
const sum2 = function () {};
// 화살표 함수
const sum3 = () => {};
