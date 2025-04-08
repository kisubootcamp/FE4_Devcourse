/* 조건문 연습문제 */
/* 1번문제 학점 계산기 
    학생의 점수를 저장하는 score변수의 값에 따라 
    학점을 출력하는 코드를 작성해주세요.
*/

// 값으로 조건을 처리하는 것이 아니므로 사용하지 말 것!
// const score = 80;
// switch (true) {
//     case score >= 90:
//         console.log('A');
//         break;
//     case score >= 80:
//         console.log("B");
//         break;
//     case score >= 70:
//         console.log("C");
//         break;
//     case score >= 60:
//         console.log("D");
//         break;
//     default:
//         console.log('F');
// }

let score = 65;
if (score >=90) {
    console.log('A');
} else if(score >=80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log('F');
}

//2번문제
const num = 35;
if (num % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

//3번문제
const isLoggedIn = true;
const isAdmin = false;

if (!isLoggedIn) {
    console.log("Please log in")
} else if (isLoggedIn && !isAdmin) {
    console.log("Access denied");
} else if(isLoggedIn && isAdmin) {
    console.log("Welcome, admin!");
}

//4번문제
const a = 30;
const b = 30;

if (a > b) {
    console.log("a is greater");
} else if (a < b ){
    console.log("b is greater");
} else {
    console.log("a and b equal")
}

//5번문제
// const month = 8;
switch (true) {
    case month ==12 || month == 1 ||month == 2: {
        console.log("Winter");
        break;
    }
    case month  == 3 || month == 4 ||month == 5: {
        console.log("Spring");
        break;
    }
    case month ==6 ||month ==7 ||month ==8: {
        console.log("Summer");
        break;
    }
    case month ==9 ||month ==10 ||month ==11: {
        console.log("Fall");
        break;
    }
}

const month = 1;
if (month ==12 || month == 1 ||month == 2) {
    console.log("Winter");
} else if(month  == 3 || month == 4 ||month == 5) {
    console.log("Spring");
} else if(month ==6 ||month ==7 ||month ==8) {
    console.log("Summer");
} else if (month ==9 ||month ==10 ||month ==11) {
    console.log("Fall");
}


// 6번문제
let price = 10000;
let result = 0;

if (price >= 100000) {
    result = price * 0.8;
    console.log(result);
} else if(price >= 50000 && price < 100000) {
    result = price * 0.9;
    console.log(result);
} else {
    console.log(price);
}

// 7번문제

const day = 7;
const dayName = new Date();
const dayList = ["일", "월", "화", "수", "목", "금", "토"];
let dayIndex = dayName.getDay();

dayIndex = dayIndex === 0 ? 7 : dayIndex;
console.log(dayList[dayIndex -1]);


// 7-1 다른방식
const input = 3; // 사용자 입력이라고 가정

const dayLists = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];

if (input >= 1 && input <= 7) {
  console.log(dayLists[input - 1]); // 배열은 0부터 시작하니까 -1
} else {
    console.log("1에서 7 사이의 숫자를 입력해주세요.");
}

const num2 = -80;

if(num2 > 0) {
    console.log("양수");
} else if(num2 < 0) {
    console.log("음수")
} else {
    console.log("0");
}