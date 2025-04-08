// document.addEventListener("DOMContentLoaded") //<- 만일을 위해 꼭 사용하는것을 권장;
// document.querySelector("h1").style.color = "red";

// var <- 2015년도부터 사용되지 않음
// let <- 변수를 선언하는 키워드(O) 재할당이 가능한 변수 선언
// const <- 상수를 선언하는 키워드(X) 재할당이 불가능한 변수 선언

const numArr = [10];
numArr.push(20);
console.log(numArr); // 상수라고 하기엔 변경은 가능하기 때문에 변수로 표현

// 자료형
// 기본 자료형
// 문자, 숫자, 논리(true, false), undefined, null, symbol(특수값), bigint(숫자 + n) <- ES2020에서 추가됨
// symbol은 정말 가끔 사용하긴 하는데 리액트에서 거의 사용한다.
// 참조 자료형
// 배열, 함수, 객체

// JS는 64비트 부동 소수점 방식으로 숫자를 다룸
console.log(Number.MAX_SAFE_INTEGER); // 부동 소수점에서 다룰 수 있는 가장 큰 숫자
console.log(9007199254740995n); // 가장 큰 숫자를 넘어가서 정확한 값을 다룰 수 없다. 그렇기 때문에 뒤에 n을 붙여 bigInt형식으로 숫자를 안전하게 다루기 위해 bigInt가 개발되었다.
// bigInt를 다룰만한 가장 대표적 예: 금융권, 매출이 엄청난 쇼핑몰

// 연산자
// 1. 산술 연산자
// +, -, *, /, %, ** <- 거듭제곱
// 2. 증감 연산자
// ++(증가 연산자), --(감소 연산자)
// 3. 대입 연산자
// =
// +=, -=, *=, /=, %=, **= 산술 연산자와 복합적으로 사용함
let num = 10;
num += 20; // num = num + 20
// 본인이 가독성이 더 좋다고 느끼는 방식을 골라서 사용하면 된다.
// 4. 비교 연산자
// 동등(==), 일치(===) 부등(!=), 불일치(!==), >, >=, <, <=
// 반드시 일치, 불일치만 사용해야 한다
// 동등과 부등은 타입을 확인하지 않기 때문에 많은 오류를 일으킬 수 있다.
// 5. 삼항 연산자
// 피연산자 ? 피연산자2 : 피연산자3
// condition ? expr1 : expr2 참이면 expr1 false면 expr2
console.log(true ? (false ? 10 : 15) : 20);
// 1중첩 이상이 되면 코드가 지저분해지기 때문에 if문을 사용하는 것이 낫다
// 6. 논리 연산자
// and(&&) 모두 참이어야 참
// or(||) 둘 중 하나가 참이어도 참
// not(!) 참 -> 거짓, 거짓 -> 참
console.log(!false || false); // => true || false
console.log(!(false || false)); // => result false => true
// ... 비트 연산자 <- 보통 프론트엔드에서는 사용하지 않기 때문에 프론트엔드에서는 배우지 않음.

// 조건문
// if, switch
// 표현식으로 조건 처리할 때 -> if
// 표현식: 값으로 표현할 수 있는 식
// 값으로 조건 처리할 때 -> switch
// switch는 값만 비교
// breakpoint를 의도적으로 생략하는 패턴으로도 사용됨.
// 원하는 값이 같다면 case의 break를 생략해서 원하는 부분까지 바로 진행되도록 설정이 가능하다.
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
  // default
  // baesonbi += 10000; : 위 case가 아니면 10000원을 추가한다.
}
console.log(baesonbi);
// default가 필요할 때는 default를 사용하기도 함
let result = 10 + 20; // 10 + 20: 표현식, 30: 값 // let: 키워드, result: 식별자, 피연산자, +: 연산자, =: 할당 연산자, 10, 20: 피연산자
// 예) 학점 계산기
const score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  // 90 > score && score >= 80: 맞긴 하지만 필요가 없는 문법임. 이미 첫 번째 if문에서 조건이 맞지 않음을 확인했기 때문에 중복되는 연산이 있어 비효율적이다.
  console.log("B");
} //...
// logic에 문제가 없다면 if문을 따로 써도 가능함
// 하지만 따로 사용한다면 필요한 연산이 늘어난다. 결국 불필요한 연산이 늘어날 수 있다. 하지만
// 식별자는 만나는 키워드의 종류에 따라 명명이 바뀜
//let, const: 변수명, function: 함수명

// 반복문
// do...while, while, for
// for...in, for...of
// do...while과  while은 실무적으로 많이 사용하지 않는 편

// for...in -> 배열(index)과 객체(key)
// for...of -> 배열(값)

do {
  // 한 번은 실행됨
  console.log("한번은 실행됨");
} while (false);

// 함수
// 함수 선언문
function sum() {}

// 함수 표현식

const sum1 = function sum2() {};

// 화살표 함수
const sum2 = (a, b) => {
  return a + b;
};

const sum3 = (a, b) => a + b;

// 호이스팅 -> 선언과 할당을 분리
// JS는 풀스택에 실행 컨텍스트를 쌓아 실행
// 실행 컨텍스트는 record와 outer로 구성
// record는 실행에 관한 환경정보를 기록
console.log(sum);
var sum = 10;
// undefined로 sum이 먼저 기록되고 이후 실행될 때 sum에 10이 할당되기 때문에 위 코드에서는 sum이 undefined로 출력된다.

console.log(sum1);
let sum = 10;
// 일시적 사각지대(TDZ)에 빠져 sum1이 불러와지지 않는다.

// 클로저 -> 메모리에서 제거되지 않고 남아있는 현상
