/* 1. 기본 산술 연산 */
// a. 두 숫자 10과 5를 변수 `a`와 `b`에 할당하세요.
// b. 덧셈, 뺄셈, 곱셈, 나눗셈, 나머지 연산을 수행하고 결과를 각각의 변수에 저장하세요.
// c. 각 연산의 결과를 콘솔에 출력하세요.
{
    const a = 10, b = 5;
    let add, sub, mul, div, rem;

    add = a + b;
    sub = a - b;
    mul = a * b;
    div = a / b;
    rem = a % b;
    console.log(`${a} + ${b} = ${add}`);
    console.log(`${a} - ${b} = ${sub}`);
    console.log(`${a} * ${b} = ${mul}`);
    console.log(`${a} / ${b} = ${div}`);
    console.log(`${a} % ${b} = ${rem}`);
}

/* 2. 증가 및 감소 연산자 */
// a. 변수 `y`에 숫자 7을 할당하세요.
// b. 후위 증가 연산자를 사용하여 `y`를 1 증가시키고, 증가하기 전과 후의 값을 각각 출력하세요.
// c. 후위 감소 연산자를 사용하여 `y`를 1 감소시키고, 감소하기 전과 후의 값을 각각 출력하세요.
// d. 전위 증가 연산자를 사용하여 `y`를 1 증가시키고, 증가한 값을 출력하세요.
// e. 전위 감소 연산자를 사용하여 `y`를 1 감소시키고, 감소한 값을 출력하세요.
{
    let y = 7;

    console.log(`증가하기 전 y: ${y}`);
    y++;
    console.log(`증가하기 후 y: ${y}`);

    console.log(`증가하기 전 y: ${y}`);
    y--;
    console.log(`증가하기 후 y: ${y}`);

    ++y;
    console.log(`증가하기 후 y: ${y}`);

    --y;
    console.log(`감소한 후 y: ${y}`);
}

/* 3. 복합대입연산자 연습 */
// a.변수 `x`에 숫자 20을 할당하세요.
// b.복합 대입 연산자를 사용하여 `x`에 10을 더하고, 그 결과를 출력하세요.
// c.복합 대입 연산자를 사용하여 `x`에서 5를 빼고, 그 결과를 출력하세요.
// d.복합 대입 연산자를 사용하여 `x`를 2로 나누고, 그 결과를 출력하세요.
// e.복합 대입 연산자를 사용하여 `x`를 3으로 곱하고, 그 결과를 출력하세요.
{
    let x = 20;

    x += 10;
    console.log(x);
    x -= 5;
    console.log(x);
    x /= 2;
    console.log(x);
    x *= 3;
    console.log(x);
}

/* 4. 나이비교 */
// 두 변수 `age1`과 `age2`에 각각 25와 30을 할당하세요.
// `age1`이 `age2`보다 큰지 비교하여 결과를 콘솔에 출력하세요.
// `age1`과 `age2`가 같은지 비교하여 결과를 콘솔에 출력하세요.
// 삼항 연산자를 사용하여 `age1`이 `age2`보다 큰 경우 "Older", 같거나 작은 경우 "Younger or Same"을 출력하세요.
{
    const age1 = 25, age2 = 30;

    console.log(`${age1}가 ${age2}보다 큰가요? ${age1 > age2}`);
    console.log(`${age1}와 ${age2}이 같은가요? ${age1 === age2}`);
    console.log(`${age1 > age2 ? "Older" : "Younger or Same"}`);
}

/* 5. 숫자비교 */
// a. 변수 `num`에 임의의 숫자를 할당하세요.
// b. `num`이 0보다 큰지, 0인지, 0보다 작은지 삼항 연산자를 사용하여 각각 "Positive", "Zero", "Negative"를 출력하세요.
{
    const num = 0;
    
    console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative");
}

/* 6. 최댓값 찾기 */
// a. 세 변수 `a`, `b`, `c`에 임의의 숫자를 할당하세요.
// b. 삼항 연산자를 사용하여 `a`, `b`, `c` 중 가장 큰 숫자를 찾고, 그 결과를 출력하세요.
{
    const a = 10;
    const b = 5;
    const c = 13;

    console.log(a > b ? (a > c ? a : c) : b > c ? b : c);
}

/* 7. 짝수 홀수 확인 */
// a. 변수 `number`에 임의의 숫자를 할당하세요.
// b. 삼항 연산자를 사용하여 `number`가 짝수인지 홀수인지 확인하고, "Even" 또는 "Odd"를 출력하세요.
{
    const number = 7;

    console.log(number % 2 === 0 ? "Even" : "Odd");
}

/* 8. 로그인 확인 */
// a. 변수 `isLoggedIn`에 `true` 또는 `false`를 할당하세요.
// b. 삼항 연산자를 사용하여 `isLoggedIn`이 `true`이면 "Welcome", `false`이면 "Please log in"을 출력하세요.
{
    const isLoggedIn = true;

    console.log(isLoggedIn ? "Welcome" : "Please Login");
}

/* 9. 성인 확인 */
// a. 변수 `age`에 임의의 나이를 할당하세요.
// b. 삼항 연산자를 사용하여 `age`가 18 이상이면 "Adult", 그렇지 않으면 "Minor"를 출력하세요.
{
    const age = 25;

    console.log(age >= 18 ? "Adult" : "Minor");
}

/* 10. 논리 연산자 기본 */
// a. 변수 `a`와 `b`에 각각 `true`와 `false`를 할당하세요.
// b. `a`와 `b`의 논리 AND 연산 결과를 출력하세요.
// c. `a`와 `b`의 논리 OR 연산 결과를 출력하세요.
// d. `a`의 논리 NOT 연산 결과를 출력하세요.
{
    const a = true, b = false;
    
    console.log(a && b);
    console.log(a || b);
    console.log(!a);
}

/* 11. 여러 조건 결합 */
// a. 변수 `x`, `y`, `z`에 각각 임의의 숫자를 할당하세요.
// b. `x`가 10보다 크고 `y`가 5보다 작은지 확인하는 조건을 작성하고, 결과를 출력하세요.
// c. `x`가 10보다 크거나 `z`가 3보다 큰지 확인하는 조건을 작성하고, 결과를 출력하세요.
// d. `y`가 0이 아닌지 확인하는 조건을 작성하고, 결과를 출력하세요.
{
    const x = 15, y = 3, z = 4;
    
    console.log(x > 10 && y < 5);
    console.log(x > 10 || z > 3);
    console.log(y !== 0);
}

/* 12. 사용자 로그인 및 권한 확인 */
// a. 변수 `isLoggedIn`과 `isAdmin`에 각각 `true` 또는 `false`를 할당하세요.
// b. 사용자가 로그인했는지 확인하고, 로그인했다면 "Welcome"을, 그렇지 않다면 "Please log in"을 출력하세요.
// c. 사용자가 관리자 권한을 가지고 있는지 확인하고, 관리자라면 "Admin access granted"를, 그렇지 않다면 "Admin access denied"를 출력하세요.
// d. 로그인 여부와 관리자 권한을 모두 확인하여, 로그인하고 관리자라면 "Full access granted"를, 그렇지 않다면 "Restricted access"를 출력하세요.
{
    const isLoggedIn = true, isAdmin = false;
    
    console.log(isLoggedIn ? "Welcome" : "Pelase Log in");
    console.log(isAdmin ? "Admin access granted" : "Admin access denined");
    console.log(isLoggedIn && isAdmin ? "Full aceess granted" : "Resticted access");
}

/* 13. 값의 존재 확인 */
// a. 변수 `value1`과 `value2`에 각각 임의의 값을 할당하세요. (예: 숫자, 문자열, `null`, `undefined`)
// b. 두 변수 중 하나라도 값이 존재하는지 확인하는 조건을 작성하고, 결과를 출력하세요.
// c. 두 변수 모두 값이 존재하지 않는지 확인하는 조건을 작성하고, 결과를 출력하세요.
{
    const value1 = "hello", value2 = null;
    
    console.log(value1 || value2 ? "값이 존재함" : "값이 존재하지 않음");
    console.log(!value1 && !value2 ? "값이 존재하지 않음" : "값이 하나라도 존재함");
}

/* 14. 범위 확인 */
// a. 변수 `num`에 임의의 숫자를 할당하세요.
// b. `num`이 0 이상 100 이하인지 확인하는 조건을 작성하고, 결과를 출력하세요.
// c. `num`이 0 미만이거나 100 초과인지 확인하는 조건을 작성하고, 결과를 출력하세요.
{
    const num = 50;
    
    console.log(num >= 0 && num <= 100 ? "범위 안" : "범위 밖");
    console.log(num < 0 || num > 100 ? "범위 밖" : "범위 안");
}