// closure 연습문제
// 1. 카운터 만들기
// 클로저를 이용해 카운터 함수를 만드세요. 이 함수는 호출할 때마다 1씩 증가하는 값을 반환해야 한다.
{
  const createCounter = () => {
    let count = 0;
    return () => ++count;
  };
  const counter = createCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2
  console.log(counter()); // 3
}

console.log("------------------------------------------------");

// 2. 비공식적인 캐싱
// 숫자를 제곱하는 함수를 만들고, 같은 숫자가 호출될 경우 결과를 캐싱하여 효율적으로 반환하세요.
{
  function cacheSquare() {
    let cacheNum = 0;
    return (num) => {
      if (cacheNum === num) return cacheNum ** 2;
      else {
        cacheNum = num;
        return num ** 2;
      }
    };
  }
  const square = cacheSquare();
  console.log(square(4)); // 16
  console.log(square(4)); // 16 (캐시 사용)
  console.log(square(5)); // 25
}

console.log("------------------------------------------------");

// 3. 지연 실행
// 주어진 시간 후에 실행되는 함수를 반환하는 클로저를 작성하세요.

function delayExecution(ms) {
  let setTime = ms;
  return (func) => {
    setTimeout(() => {
      func();
    }, setTime);
  };
}

const delayedFunc = delayExecution(1000);
delayedFunc(() => console.log("Executed after 1 second"));

console.log("------------------------------------------------");

// 4. 고유 ID 생성기
// 고유한 ID를 생성하는 함수를 만드세요. 각 호출마다 증가하는 ID 를 반환해야 합니다.

function createIdGenerator() {
  let auto_increment = 0;
  return () => ++auto_increment;
}

const getId = createIdGenerator();
console.log(getId()); // 1
console.log(getId()); // 2
console.log(getId()); // 3

console.log("------------------------------------------------");

// 5 메모이제이션
// 피보나치 수열을 계산하는 함수를 만들고, 결과를 메모이제이션하여 성능을 개선하세요.
function fibonaccFunc() {
  let settingNum;
  let resultNum;
  return (num) => {
    if (settingNum === num) return resultNum;

    settingNum = num;
    const fibonacci = [0, 1];
    for (let i = 2; i <= settingNum; i++) {
      let value = fibonacci[i - 1] + fibonacci[i - 2];
      fibonacci.push(value);
    }
    resultNum = fibonacci[fibonacci.length - 1];
    return resultNum;
  };
}

const fibonacci = fibonaccFunc();
console.log(fibonacci(10)); // 55
console.log(fibonacci(10)); // 55 (메모이제이션 사용)

console.log("------------------------------------------------");

//6. 문자열 결합
// 문자열을 결합하는 함수를 작성하고, 이전에 결합된 문자열을 기억하게 하세요.

function createStringCombiner() {
  let memoizationStr = "";
  return (string) => (memoizationStr += string);
}

const combiner = createStringCombiner();
console.log(combiner("Hello")); // "Hello"
console.log(combiner(" World")); // "Hello World"

console.log("------------------------------------------------");

// 7. 객체 속성 카운터
// 객체의 속성 개수를 세는 함수를 작성하세요. 이 함수는 객체를 클로저로 기억해야 합니다.

function createPropertyCounter() {
  let memoizationObj;
  return (obj) => {
    memoizationObj = { ...obj };
    return Object.values(memoizationObj).length;
  };
}

const counter = createPropertyCounter();
console.log(counter({ a: 1, b: 2 })); // 2
console.log(counter({ a: 1 })); // 1

console.log("------------------------------------------------");

// 8. 배열 필터링
// 주어진 배열에서 특정 조건을 만족하는 요소만 필터링 하는 함수는 작성하세요.
function createFilter(condition) {
  let func = condition;
  return (arr) => arr.filter(func);
}

const filterEven = createFilter((num) => num % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]

console.log("------------------------------------------------");

// 9. 다중 카운터
// 여러 개의 카운터를 동시에 관리할 수 있는 함수를 작성하세요.
// 각 카운터는 별개의 값을 가지고 있어야 하며, 특정 카운터를 지정하여 그 카운터만 증가시키는 기능이 필요합니다.
function createMultiCounter() {
  // 여기에 코드를 작성하세요
  const countList = {};
  return (str) => {
    if (!countList[str]) countList[str] = 0;
    return () => {
      countList[str]++;
      return countList[str];
    };
  };
}

const counters = createMultiCounter();
const counterA = counters("A");
const counterB = counters("B");

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 1
console.log(counterA()); // 3
console.log(counterB()); // 2

console.log("------------------------------------------------");

// 10. 고차 함수로 커스터마이징된 계산기
// 기본 연산을 수행할 수 있는 계산기를 작성하세요. 이 계산기는 특정 연산을 클로저로 기억하여 그 연산만 수행할 수 있도록 한다.

function createCalculator(operator) {
  // 여기에 코드를 작성하세요
  const clac = operator;
  return (a, b) => clac(a, b);
}

const add = createCalculator((a, b) => a + b);
console.log(add(2, 3)); // 5
console.log(add(10, 5)); // 15

const multiply = createCalculator((a, b) => a * b);
console.log(multiply(2, 3)); // 6
console.log(multiply(10, 5)); // 50
