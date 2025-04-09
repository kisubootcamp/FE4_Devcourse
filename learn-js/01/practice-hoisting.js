// ## 연습문제

// 1. 변수 호이스팅
//     1. 다음 코드의 실행 결과를 예측해보세요
    console.log(myVar); // undefined
    var myVar = 10;
    console.log(myVar);  // 10
    

// 2. 변수와 함수 동시 선언
//     1. 다음 코드의 실행 결과를 예측해 보세요.
    var num = 5;
    console.log(num); // 5
    
    function num() {
      return 10;
    }
    
    console.log(num); // 5
    console.log(num()); // error
    

// 3. 변수 재할당
//     1. 다음 코드의 실행 결과를 예측해 보세요.
var x = 10;
function test() {
  console.log(x); // undefined
  var x = 5;
  console.log(x); // 5
}
test();
console.log(x); // 10