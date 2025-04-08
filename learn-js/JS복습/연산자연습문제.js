/* 연산자 연습문제 */
let a = 10;
let b = 5;

let plus = a + b;
let minus = a - b;
let multiple = a * b;
let divide = a / b;
let remainder = a % b;

console.log(plus);
console.log(minus);
console.log(multiple);
console.log(divide); //나눗셈
console.log(remainder); //나눗셈의 나머지


/* 전치, 후치연산자 계산법 */
let num1 = 10;
num2 = ++num1;
console.log(num2); //11

let num3 = 10;
num4 = num3++;
console.log(num4); //10 - num4에 할당을 하고 나서 num3의 값이 1더해진다
console.log(num3); //11


/* 증감연산자 연습문제 */
//a
let y = 7;
//b
console.log(`증가 전 : ${y}`);  //7
y++;
console.log(`증가 후 : ${y}`);  //8
// c
console.log(`증가 전 : ${y}`); //8
y--; 
console.log(`증가 후 : ${y}`); //7
//d
++y;
console.log(`증가 후 : ${y}`); //8
//e
--y;
console.log(`증가 후 : ${y}`); //7


/* 대입연산자 연습문제 */
let x = 20;
const res1 = x += 10;
console.log(res1);   //30

const res2 = x-= 5;
console.log(res2)   //25

const res3 = x /= 2;
console.log(res3);  //12.5

const res4 = x *= 3;
console.log(res4); //37.5


/* 비교 연산자 
== 동등 : 데이터가 같은면 참을 반환 (자료형검사 X)
=== 일치 :데이터와 자료형이 같으면 참을 반환(자료형검사 O)
!= 부등 : 데이터가 다르면 참을 반환(자료형검사 X)
!== 불일치 : 데이터와 자료형이 다르면 참을 반환(자료형검사 O)
> 큰 : 좌변의 데이터가 우변보다 크면 참을 반환
>= 크거나 같은: 좌변의 데이터가 우변보다 크거나 같으면 참을 반환
< 작은 : 좌변의 데이터가 우변보다 작으면 참을 반환
<= 작거나 같은 : 좌변의 데이터가 우변보다 작거나 같으면 참을 반환
*/



/* 비교연산자 연습문제 */
let age1 = 25;
let age2 = 30;

let result1 = age1 > age2  ? "Older" :  "Younger or Same";

console.log(age1 > age2);   //false
console.log(age1 === age2);
console.log(result1);


/* 삼항연산자 연습문제 */

// 1번문제
const num = 30;
const result2 = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log(result2);
// 삼항연산자에서 else if처럼 조건문을 여러번 사용할 수 있다.

//2번 문제
const numA = 10;
const numB = 20;
const numC = 3;

const maxNum = 
    numA > numB 
    ? (numA > numC ? {value: numA, name: "numA"} : {value: numC, name: "numC"}) 
    : (numB > numC ? {value: numB, name: "numB"} : {value: numC, name: "numC"});

console.log(`가장 큰 값은 ${maxNum.name}이며, 값은 ${maxNum.value}입니다. `);


//3번 문제
const number1 = 12;
const number2 = 15;
const result3 = number1 % 2 == 0 ? "Even" : "Odd";
const result4 = number2 % 2 == 0 ? "Even" : "Odd";


console.log(result3);
console.log(result4);


// 4번 문제
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome" : "Please log in";

console.log(message);

//5번 문제
const age = 31;
const result5 = age >= 18 ? "Adult" : "Minor";

console.log(result5);

/* 논리 연산자 */
// &&(and) : 좌변과 우변이 둘 다 참이면 참
// ||(or) : 좌변과 우변 둘 중 하나가 참이면 참 
// !(not) : 단일 피연산자를 반대의 논리형 데이터로 반환합니다.

//1번문제
const AA = true;
const BB = false;

console.log(AA && BB);  // 둘 중 하나라도 false라면 false를 출력함
console.log(AA || BB);  // 둘 중 하나만 true여도 true를 출력함
console.log(BB || AA);  // 위와 같음
console.log(!AA);       // true의 반대값은 false

//2번문제
const xx = 14;
const yy = 20;
const zz = 2;

console.log(xx > 10 && yy < 5); // false
console.log(xx > 10 || zz > 3); // true
console.log(yy !== 0);          // true

//3번문제
const isLogin = true;
const isAdmin = false;

console.log(isLogin ? "Welcome" : "Please log in");
console.log(isAdmin ? "Admin access granted" : "Admin access denied");
console.log(isLogin && !isAdmin ? "Full access granted" : "Restricted access");

//4번문제
const value1 = "Odin";  //값이 있으므로 true
const value2 = null;    //값이 없으므로 false

console.log(value1 || value2 ? "값이 존재함" : "갑싱 존재하지 않음");
console.log(!value1 && !value2 ? "값이 존재하지 않음" : "값이 하나라도 존재함");

//5번문제
const num00 = 0;

console.log(num00 >= 0 && num00 <= 100 ? "0이상이고 100이하 입니다." : "0이상도 100이하도 아닙니다.");
console.log(num00 < 0 || num00 > 100 ? "0미만이거나 100이상입니다." : "0미만이 아니거나 100이상이 아닙니다")

const myLevel = 99;
const status = myLevel >= 99 ? "축하드립니다, 만렙입니다." : "";

console.log(status);

console.log(10 =="10");     //true
console.log(10 === "10");   //false
console.log(10 * "20");     // 문자형이 숫자형으로 변환되어서 200
console.log(10 * 20);       //200

const num10 = 10;
const isEven = num10 % 2 === 0 ? "짝수" : "홀수";
console.log(isEven);