{
  //1. 카운터 만들기
  // 클로저를 이용해 카운터 함수를 만드세요. 이 함수는 호출할 때마다 1씩 증가하는 값을 반환해야 합니다.
  function createCounter() {
    let count = 0;
    return ++count;
  }

  const counter = createCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2
  console.log(counter()); // 3
}
