// 01
const num = 7;
const result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log(result);

// 02
const a = 10;
const b = 20;
const c = 30;

const result2 = a > b ? (a > c ? a : c) : b > c ? b : c;

console.log(result2);

// 03
const number = 10;
const result3 = number % 2 === 0 ? "Even" : "Odd";
console.log(result3);

// 04
const isLoggedIn = false;
const alert = isLoggedIn ? "Welcome" : "Please log in";
console.log("alert");

// 05
const age = 29;
const st = age >= 18 ? "Adult" : "Minor";
console.log(st);
