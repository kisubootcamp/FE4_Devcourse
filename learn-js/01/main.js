// var, let const
// let 재할당이 가능한 변수
// const 재할당이 불가능한 변수

const numArr = [10];
numArr.push(20);
console.log(numArr);

// 기본자료형
//문자, 숫자, 논리, undefined, null, symbol, bigint(금융권, 굉장히 큰 쇼핑몰에서 사용)
// Symbol('a'); //유니크한 값을 만들때

//64비트 부동 소수점 방식으로 다룰 수 있는 최대 숫자
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(9007199254740995); //9007199254740996 <- 이와 같은 실수가 나와서 bigint 탄생
console.log(9007199254740995n); //9007199254740995 정확하게 나옴

// 참조자료형
//배열, 함수, 객체

// 1. 연산자
// 1.1 산술 연산자
//  +, -, *, /, %, **

// 1.2 증감연산자
// 1.2.1 ++ : 숫자를 1 증가
// 1.2.2 -- : 숫자를 1 감소

// 1.3 대입연산자
// 1.3.1 =
// 1.3.2 +=, -=, *=, /=, %=, **=
let num = 10;
num = num + 20;
num += 20;

// 1.4 비교 연산자
// 1.4.1 동등(==), 일치(===), 부동(!=), 불일치(!==), > ...

// 1.5 삼항 연산자
// 피연산자1 ? 피연산자 2 : 피연산자3
//condition ? expr1 : expr2

console.log(true ? 10 : 20);

// 1.6 논리 연산자
// 1.6.1 and, or, not
// &&, ||, !
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

// not !

// 조건문
// if, switch
// 표현식으로 조건처리할 때 -> if
// 값으로 조건처리할 때 -> switch

let result = 10 + 20;

//학점계산기
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
const area = "서울";
let baesongbi = 3000;
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
console.log(baesongbi);

const city = "서울";
let baesonbi = 3000;
switch (city) {
  case "서울":
    baesonbi += 0;
    break;
  case "인천":
  case "경기":
  case "강북":
  case "강서":
    baesonbi += 1000;
    break;
    defualt: baesonbi += 10000;
}
console.log(baesonbi);

//반복문
//do..while, while, for     (do..while, while 은 잘 쓰지 않음, for 많이 씀, for가 더 직관적)
// for...in, for...of
// for..in -> 배열(인덱스), 객체(키)
// for..of -> 배열(값)
