// 1. 연산자
// 1-1 산술 연산자
// +, -, *,  %, /, **

// 1-2 증감연 산자
// ++ , --

// 1-3 대입 연산자
// 1-3-1 =
// 1-3-2 +=, -=, *=, /=, %=, **=
let num = 10;
num = num + 20;
num += 20;
num %= 20;

console.log(num);

// 1-4 비교 연산자
// 1-4-1 
//  동등(==)
//  일치(===)

//  부등(!=)
//  불일치(!==)

//  ~보다 큰(>)
//  ~보다 크거나 같은(>=)

//  ~보다 작은(<)
//  ~보다 작거나 같은(<=)

// 1-5 삼항 연산자
// 피연산자1 ? 피연산자2 : 피연산자3
// condition ? expr1 : expr2

console.log(false ? 10 : 20);                  // 20
console.log(true ? (false ? 10 : 15) : 20);    // 15

// 1-6 논리 연산자
// 1-6-1 and, or, not
// and (&&)
// expr1 && expr2 = (둘 다 참이어야 참)

// or (||)
// expr1 && expr2 = 둘 중하나만 참이면 참

// not (!)
// !expr1 && expr2 = 값을 반대로 


// 조건문
// if, switch
// 표현식으로 조건을 처리할 때 -> if
// 값으로 조건을 처리할 때 -> switch

let result = 10 + 20;
// let -> 키워드
// result -> 식별자 / 키워드를 어떤것을 만났느냐에 따라서 이름이 달라진다.
// let result => 변수명
// function result => 함수명
// = -> 연산자 
// 10 + 20 -> 표현식
// 값 -> 표현식을 계산하고 더이상 계산할 수 없는 것을 값이라고 함.

// 예1) 학점 계산기
/*
학생의 점수를 저장하는 score 변수의 값에 따라  
학점을 출력하는 코드를 작성해주세요.back

1. score의 점수가 90점 이상이면 A
2. score의 점수가 80점 이상이면 B
3. score의 점수가 70점 이상이면 C
4. score의 점수가 60점 이상이면 D
5. score의 점수가 60점 미만이면 F
*/
// 값으로 조건을 처리할 것이기 때문에 switch를 사용하는 것이 아닌 if, else if를 사용하자!
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


// 배송비
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
    default:
        baesonbi += 10000;
}
console.log(baesonbi);  

// 위와 같은 코드임..
const area1 = "제주";
let baesonbi1 = 3000;
switch (area1) {
    case "서울": 
        baesonbi1 += 0;
        break;
    case "인천":
        break;
    case "경기":
        break;
    case "강북":
        break;
    case "강서":
        baesonbi1 += 1000;
        break;
    default:
        baesonbi1 += 10000;
}
console.log(baesonbi1);  