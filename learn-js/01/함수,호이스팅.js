// 함수
// 함수 선언문
function sum() {}
// 함수 표현식
const sum2 = function sum2() {};
// 화살표 함수
const sum3 = (a, b) => {
  return a + b;
};
// 코드가 한 줄이라면 줄일 수 있음.
const sum4 = (a, b) => a + b;

// 호이스팅 -> 선언과 할당을 분리

console.log(sum); //undefined
var sum = 10;

var sum;
console.log(sum);
sum = 10;

console.log(sum);
let sum = 10;
