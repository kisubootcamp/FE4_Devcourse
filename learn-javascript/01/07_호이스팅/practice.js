/* 다음 코드의 실행 결과를 예측해보세요 */

// 1. 변수 호이스팅
console.log(myVar); // undefined
var myVar = 10;
console.log(myVar); // 10

// 2. 변수와 함수 동시선언
var num = 5;
console.log(num); // 5

function num() {
  return 10;
}

console.log(num); // 5
console.log(num()); // num is not a function (함수 선언이 변수 선언보다 먼저 호이스팅됨)

// 3. 변수 재할당
var x = 10;
function test() {
  console.log(x); // undefined
  var x = 5;
  console.log(x); // 5
}
test();
console.log(x); // 10