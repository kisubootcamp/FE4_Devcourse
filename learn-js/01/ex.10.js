// 10. 클로저 연습문제

// 문제 1: 카운터 만들기
// 설명: 클로저를 이용해 카운터 함수를 만드세요. 이 함수는 호출할 때마다 1씩 증가하는 값을 반환해야 합니다.
{
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }

  const counter = createCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2
  console.log(counter()); // 3
}

// 문제 2: 비공식적인 캐싱
// 설명: 숫자를 제곱하는 함수를 만들고, 같은 숫자가 호출될 경우 결과를 캐싱하여 효율적으로 반환하세요.
{
  const square = (() => {
    const cache = {};

    return function (num) {
      if (!cache[num]) {
        cache[num] = num ** 2;
      }

      return cache[num];
    };
  })();

  console.log(square(4)); // 16
  console.log(square(4)); // 16 (캐시 사용)
  console.log(square(5)); // 25
}

// 문제 3: 지연 실행
// 설명: 주어진 시간 후에 실행되는 함수를 반환하는 클로저를 작성하세요.
{
  function delayExecution(ms) {
    return function (callback) {
      setTimeout(() => {
        callback();
      }, ms);
    };
  }

  const delayedFunc = delayExecution(1000);
  delayedFunc(() => console.log("Executed after 1 second"));
}

// 문제 4: 고유 ID 생성기
// 설명: 고유한 ID를 생성하는 함수를 만드세요. 각 호출마다 증가하는 ID를 반환해야 합니다.
{
  function createIdGenerator() {
    let id = 0;
    return function () {
      id++;
      return id;
    };
  }

  const getId = createIdGenerator();
  console.log(getId()); // 1
  console.log(getId()); // 2
  console.log(getId()); // 3
}

// 문제 5: 메모이제이션
// 설명: 피보나치 수열을 계산하는 함수를 만들고, 결과를 메모이제이션하여 성능을 개선하세요.
{
  function fibonacci() {
    // 여기에 코드를 작성하세요
  }

  console.log(fibonacci(10)); // 55
  console.log(fibonacci(10)); // 55 (메모이제이션 사용)
}

// 문제 6: 문자열 결합
// 설명: 문자열을 결합하는 함수를 작성하고, 이전에 결합된 문자열을 기억하게 하세요.
{
  function createStringCombiner() {
    const cache = [];

    return function (str) {
      cache.push(str);
      return cache.join("");
    };
  }

  const combiner = createStringCombiner();
  console.log(combiner("Hello")); // "Hello"
  console.log(combiner(" World")); // "Hello World"
}
