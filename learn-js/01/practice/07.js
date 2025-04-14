// 호이스팅

// 연습문제
{
  // 1. 변수 호이스팅
  console.log(myVar); // undefinde : 변수가 선언되기 전에 참조
  var myVar = 10;
  console.log(myVar); // 10
}
{
  // 2. 변수와 함수 동시 선언
  var num = 5;
  console.log(num); // 5

  function num() {
    return 10;
  }

  console.log(num); // [Function: num] : 함수 자체를 출력
  console.log(num()); // 10 : 함수 실행
}
{
  // 3. 변수 재할당
  var x = 10;
  function test() {
    console.log(x); // undefined : 값이 할당되지 않음
    var x = 5;
    console.log(x); // 5
  }
  test();
  console.log(x); // 10 : test()함수가 끝나고 전역에서 선언된  var x = 10;을 출력
}
