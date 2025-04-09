{
  // 변수 호이스팅
  // 다음 코드의 실행 결과를 예측해보세요

  console.log(myVar); // undifined
  var myVar = 10;
  console.log(myVar); //10
}

{
  // 변수와 함수 동시 선언
  // 다음 코드의 실행 결과를 예측해보세요

  var num = 5;
  console.log(num); //

  function num() {
    return 10;
  }

  console.log(num); //
  console.log(num()); //

  // 변수와 함수가 같은 이름일 경우:
  // 1.변수 선언은 코드의 실행 시점에 따라 우선적으로 정의됩니다.
  // 2.함수 선언은 호이스팅 때문에 코드 실행 전에 미리 정의되어, 이후 변수를 덮어쓰게 됩니다.
  // 변수와 함수가 같은 이름일 경우, 후에 정의된 것이 앞의 것을 덮어쓰게 되며, 이로 인해 예기치 않은 동작이 발생할 수 있습니다.
  // 그래서 일반적으로는 함수명과 변수명을 다르게 사용하는 것이 좋습니다
}

{
  // 변수 재할당
  // 다음 코드의 실행 결과를 예측해보세요

  var x = 10;
  function test() {
    console.log(x); // undifined ? //var->Function Scope
    var x = 5;
    console.log(x); // 5
  }
  test();
  console.log(x); // 10
}
