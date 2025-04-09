// Q1
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

// Q2  ***********
{
  function square() {
    const cached = {};
    return function (num) {
      if (cached[num]) cached[num];
      const result = num ** 2;
      cached[num] = result;
      return result;
    };
  }

  console.log(square(4)); // 16
  console.log(square(4)); // 16 (캐시 사용)
  console.log(square(5)); // 25
}

// Q3
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

// Q4
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

// Q5 **********
function fibonacci() {
  const fibo = [0, 1];

  return function (num) {
    if (fibo[num + 1 !== undefined]) fibo[num + 1];
    const result = fibo[num - 2] + fibo[num - 1];
    fibo.push(result);
    return result;
  };
}
const getfibonacci = fibonacci();
console.log(getfibonacci(10)); // 55
console.log(getfibonacci(10)); // 55 (메모이제이션 사용)

// Q6
function createStringCombiner() {
  let strMemo = "";

  return function (str) {
    strMemo += str;
    return strMemo;
  };
}

const combiner = createStringCombiner();
console.log(combiner("Hello")); // "Hello"
console.log(combiner(" World")); // "Hello World"

// Q7
function createPropertyCounter() {
  const closureObject = [];

  return function (obj) {
    closureObject.push(obj);
    const length = Object.keys(obj).length;
    return length;
  };
}

const counter = createPropertyCounter();
console.log(counter({ a: 1, b: 2 })); // 2
console.log(counter({ a: 1 })); // 1

// Q8
function createFilter(condition) {
  return function (arr) {
    return arr.filter(condition);
  };
}

const filterEven = createFilter((num) => num % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]

// Q9 *************
function createMultiCounter() {
  const counterClosure = {};

  return function (str) {
    if (!counterClosure[str]) counterClosure[str] = 0;
    else counterClosure[str]++;
    return counterClosure;
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

// Q10
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
