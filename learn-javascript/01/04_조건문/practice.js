/* 1. 학점 계산기 */
// 학생의 점수를 저장하는 score 변수의 값에 따라 학점을 출력하는 코드를 작성해주세요.
// score의 점수가 90점 이상이면 A
// score의 점수가 80점 이상이면 B
// score의 점수가 70점 이상이면 C
// score의 점수가 60점 이상이면 D
// score의 점수가 60점 미만이면 F
{
    const score = 87;

    if (90 <= score) {
        console.log("A");
    }
    else if (80 <= score) {
        console.log("B");
    }
    else if (70 <= score) {
        console.log("C");
    }
    else if (60 <= score) {
        console.log("D");
    }
    else {
        console.log("F");
    }
}

/* 2. 짝수와 홀수 판별 */
// a. 변수 `num`에 임의의 숫자를 할당하세요.
// b. `num`이 짝수인지 홀수인지 확인하고, 짝수면 "Even", 홀수면 "Odd"를 출력하세요.
{
    const num = 3;

    if (num % 2 === 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}

/* 3. 로그인 확인 및 권한 부여  */
// a. 변수 `isLoggedIn`과 `isAdmin`에 각각 `true` 또는 `false`를 할당하세요.
// b. 사용자가 로그인했는지 확인하고, 로그인하지 않았다면 "Please log in"을 출력하세요.
// c. 사용자가 로그인했지만 관리자가 아닌 경우 "Access denied"를 출력하세요.
// d. 사용자가 로그인하고 관리자일 경우 "Welcome, admin!"을 출력하세요.
{
    const isLoggedIn = true, isAdmin = true;
    
    if (isLoggedIn) {
        if (isAdmin) {
            console.log("Welcome, admin!");
        }
        else {
            console.log("Access denied");
        }
    }
    else {
        console.log("Please log in");
    }
}

/* 4. 숫자 크기 비교 */
// a. 변수 `a`와 `b`에 임의의 숫자를 할당하세요.
// b. `a`와 `b`의 크기를 비교하고, `a`가 크면 "a is greater", `b`가 크면 "b is greater", 두 값이 같으면 "a and b are equal"을 출력하세요.
{
    const a = 10, b = 20;

    if (a > b) {
        console.log("a is greater");
    }
    else if (b > a) {
        console.log("b is greater");
    }
    else {
        console.log("a and b are equal");
    }
}

/* 5. 월별 계절 판별 */
// a. 변수 `month`에 1에서 12 사이의 숫자를 할당하세요.
// b. `month`에 따라 해당하는 계절을 출력하세요.
// 12, 1, 2: "Winter"
// 3, 4, 5: "Spring"
// 6, 7, 8: "Summer"
// 9, 10, 11: "Fall"
{
    const month = 4;

    switch (month) {
        case 3 :
        case 4 :
        case 5 :
            console.log("Spring");
            break;
        case 6 :
        case 7 :
        case 8 :
            console.log("Summer");
            break;
        case 9 :
        case 10 :
        case 11 :
            console.log("Fall");
            break;
        default :
            console.log("Winter");
    }
}

/* 6. 할인율 계산 */
// a. 구매 금액에 따라 할인율을 적용하여 최종 금액을 계산하는 코드를 작성하시오
// 100000원 이상 : 20% 할인
// 50000원 이상 : 10% 할인
// 그외 할인 없음
{
    const amount = 120000;

    if (amount >= 100000) {
        console.log(amount * 0.8);
    }
    else if (amount >= 50000) {
        console.log(amount * 0.9);
    }
    else {
        console.log(amount);
    }
}

/* 7. 요일 출력 */
// 1부터 7까지의 숫자를 입력받아 해당 요일(1: 월요일, 7: 일요일)을 출력하는 코드를 작성하시오.
{
    const week = 3;

    switch (week) {
        case 1 :
            console.log("월요일");
            break;
        case 2 :
            console.log("화요일");
            break;
        case 3 :
            console.log("수요일");
            break;
        case 4 :
            console.log("목요일");
            break;
        case 5 :
            console.log("금요일");
            break;
        case 6 :
            console.log("토요일");
            break;
        case 7 :
            console.log("일요일");
            break;
    }
}

/* 8. 숫자 판별 */
// 주어진 숫자가 양수, 음수, 또는 0인지 판별하는 코드를 작성하시오.
{
    const num = 0;

    if (num > 0) {
        console.log("양수");
    }
    else if (num < 0) {
        console.log("음수");
    }
    else {
        console.log("0");
    }
}