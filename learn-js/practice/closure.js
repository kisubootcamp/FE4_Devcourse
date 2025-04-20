// 1. 카운터 만들기
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

// 2. 비공식적인 캐싱
function square() {
  let c = {};
  return function (n) {
    const result = n * n;
    c[n] = result;
    return result;
  };
}
const squared = square();
console.log(squared(4)); // 16
console.log(squared(4)); // 16 (캐시 사용)
console.log(squared(5)); // 25

// 3. 지연 실행
function delayExecution(ms) {
  return function (callback) {
    setTimeout(() => {
      callback();
    }, ms);
  };
}

const delayedFunc = delayExecution(1000);
delayedFunc(() => console.log('Executed after 1 second'));

// 4. 고유 ID 생성기
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

// 5. 메모이제이션
function fibonacci() {
  let c = {};

  function fib(n) {
    if (n <= 1) return n;

    if (c[n] !== undefined) {
      return c[n];
    }
    c[n] = fib(n - 1) + fib(n - 2);
    return c[n];
  }
  return fib;
}

const fibo = fibonacci();
console.log(fibo(10)); // 55
console.log(fibo(10)); // 55 (메모이제이션 사용)

// 6. 문자열 결합
function createStringCombiner() {
  let result = '';

  return function (arr) {
    result += arr;
    return result;
  };
}

const combiner = createStringCombiner();
console.log(combiner('Hello')); // Hello
console.log(combiner(' World')); // Hello World

// 7. 객체 속성 카운터
function createPropertyCounter() {
  return function (obj) {
    return Object.keys(obj).length;
  };
}

const count = createPropertyCounter();
console.log(count({ a: 1, b: 2 })); // 2
console.log(count({ a: 1 })); // 1

// 8. 배열 필터링
function createFilter(condition) {
  return function (arr) {
    return arr.filter(condition);
  };
}

const filterEven = createFilter((num) => num % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]

// 9. 다중 카운터
function createMultiCounter() {
  let counter = {};

  return function (id) {
    if (!counter[id]) {
      let count = 0;
      counter[id] = function () {
        count++;
        return count;
      };
    }
    return counter[id];
  };
}

const counters = createMultiCounter();
const counterA = counters('A');
const counterB = counters('B');

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 1
console.log(counterA()); // 3
console.log(counterB()); // 2

// 10. 고차 함수로 커스터마이징된 계산기
function createCalculator(operator) {
  return function (a, b) {
    return operator(a, b);
  };
}

const add = createCalculator((a, b) => a + b);
console.log(add(2, 3)); // 5
console.log(add(10, 5)); // 15

const multiply = createCalculator((a, b) => a * b);
console.log(multiply(2, 3)); // 6
console.log(multiply(10, 5)); // 50
