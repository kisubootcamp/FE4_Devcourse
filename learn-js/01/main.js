console.log("HELLO")

// document.querySelector("h1").style.color = "red";

// var, let, const
// let 변수를  선언 키워드 (o)
// const 상수를 선언 키워드(X)
//---------

// let 재할당이 가능한 변수
// const 재할당이 불가능한 변수
const numArr = [10];
const Arr = {
    name : "sojeong",
    age : 26
};
numArr.push(20); //가지고 있는 값은 변경이 가능하지만 재할당이 불가능
Arr["age"] = 30;
console.log(numArr);
console.log(Arr);

//---------
// 기본 자료형
// 문자, 숫자, 논리, undifined, null, symbol, bigint
console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740991);
console.log(9007199254740997n); //bigint

// 참조 자료형
// 배열, 함수, 객체

// ---------
// 연산자
// 1.1 산술 연산자
// +, - , *, /, %, **

// 1.2 증감 연산자
// 1.2.1 ++
// 1.2.2 --

// 1.3 대입 연산자
//1.3.1 = 
//1.3.2 +=, -=, *=, /=, %=. **=
let num = 10;
num = num + 20;
num+=20;

// 1.4 비교 연산자
//  1.4.1 
// 동등(==), 
// 일치(===), 타입까지 비교

// 부등(!=), 
// 불일치(!==), 타입까지 비교

// ~보다 큰(>),
//  ~보다 크거나 같은(>=), 
// ~보다 작은(<), 
// ~보다 작거나 같은(<=)


// 1.5 삼항 연산자
// 피연산자1 ? 피연산자2 : 피연산자3
// condition ? expr1 : expr2
// 중첩이 가능하지만 1중첩 이상일 경우 그냥 if문 쓰는게 좋다
console.log(true ? (false ? 13 : 15) : 20)

// 1.6 논리 연산자
// 1.6.1 and, or, not 
// and && > true && ture = true
// or ||  > true || false = true
// not !  > !true = false 

// .... 비트 연산자 (x) -> 프런트엔드에서 배우지 않음. 왜? 쓸일이 없음






// 조건문
// if, switch
// 표현식(값으로 표현 할 수 있는 식)으로 조건 처리할 때 -> if
// 값으로 조건 처리할 때 -> switch
// 학점 계산기
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
const scroe = 90;
if(scroe >= 90){
    console.log("A");
}else if(scroe >= 80){
    console.log("B");
}else if(scroe >= 70){
    console.log("C");
}else if(scroe >= 60){
    console.log("D");
}else{
    console.log("F");
}

// 서울
// 인천, 경기, 강북, 강서 -> 1000
const area = "서울";
let baesonbi = 3000;
// switch (area) {
//   case "서울":
//     baesonbi += 0;
//     break;
//   case "인천":
//     baesonbi += 1000;
//     break;
//   case "경기":
//     baesonbi += 1000;
//     break;
//   case "강북":
//     baesonbi += 1000;
//     break;
//   case "강서":
//     baesonbi += 1000;
//     break;
// }
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
  default :
    baesonbi += 10000;
}
console.log(baesonbi);



// 반복문
// do...while, while, for
// for...in, for...of

// for ...in -> 배열(인덱스)과 객체(키),
// for...of -> 배열 (값)


// 함수
// 함수 선언문
function fun1 (a,b){
    return a+b;
}
// 함수 표현식
const fun2 = function fun2(a,b){
    return a+b;
}
// 화살표 함수
const fun3 = (a,b)=>{
    return a+b;
}
const fun4=(a,b)=>a+b