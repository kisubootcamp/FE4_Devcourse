// 01
const a = true;
const b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);

// 02
const x = 10;
const y = 15;
const z = 20;

console.log(x > 10 && y < 5);
console.log(x > 10 || z > 3);
console.log(y != 0);

// 03
const isLoggedIn = true;
const isAdmin = false;
console.log(isLoggedIn ? "Welcome" : "Please log in");
console.log(isAdmin ? "Admin access granted" : "Admin access denined");
console.log(
  isLoggedIn === true && isAdmin === true
    ? "Full access granted"
    : "Restricted access"
);

// 04
const value1 = 100;
const value2 = "휴대폰";

console.log(value1 || value2 ? "값이 존재함" : "값이 존재하지 않음");
console.log(!value1 && !value2 ? "값이 존재하지 않음" : "값이 하나라도 존재함");

// 05
const num = 5;

console.log(num >= 0 && num <= 100 ? "범위 안 입니다" : "범위 밖 입니다");
console.log(num < 0 || num > 100 ? "범위 안 입니다" : "범위 밖 입니다");
