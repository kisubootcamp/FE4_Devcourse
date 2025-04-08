{
  // 변수 연습문제
  // 1. 변수 선언과 할당
  let x = 10;
  let y = 20;
  let sum = x + y;
  console.log(sum);

  // 2. 변수 재할당
  let name = "Alice";
  name = "Bob";
  console.log(name);

  //3. 상수
  const PI = 3.14;
  console.log(PI);

  //4. 변수 스왑
  let a = 5;
  let b = 10;
  let temp = a;
  a = b;
  b = temp;
  console.log(a);
  console.log(b);
}

{
  //-----------------------------
  // 자료형 연습문제
  // 1. 변수 타입 확인
  let num = 42;
  let name = "John";
  let isTrue = true;
  let person = { name: "Alice", age: 30 };
  let fruits = ["apple", "banana", "orange"];
  console.log(typeof num);
  console.log(typeof name);
  console.log(typeof isTrue);
  console.log(typeof person);
  console.log(typeof fruits);

  // 2
  let length = 16; //  number
  let lastName = "Brown"; // string
  let score = [10, 20]; // object
  let x = {
    firstName: "Nick",
    lastName: "Doe",
  }; // object
}

{
  //-----------------------------
  // 산술연산자 연습문제
  // 1. 기본 산술 연산
  let a = 10;
  let b = 5;
  console.log(a + b);
  console.log(a - b);
  console.log(a / b);
  console.log(a * b);
  console.log(a % b);

  //-----------------------------
  // 증감연산자 연습문제
  // 1. 증가 및 감소 연산자
  let y = 7;
  console.log(`증가하기 전 y: ${y}`);
  y++;
  console.log(`증가하기 후 y: ${y}`);

  console.log(`증가하기 전 y: ${y}`);
  y--;
  console.log(`증가하기 후 y: ${y}`);

  ++y;
  console.log(`증가하기 후 y: ${y}`);
  --y;
  console.log(`감소한 후 y: ${y}`);

  //-----------------------------
  // 복합대입연산자 연습문제
  let x = 20;
  const res1 = (x += 10);
  const res2 = (x -= 5);
  const res3 = (x /= 2);
  const res4 = (x *= 3);

  console.log(res1, res2, res3, res4);

  //-----------------------------
  // 비교 연산자 연습문제
  // 나이비교
  let age1 = 25;
  let age2 = 30;
  console.log(age1 > age2);
  console.log(age1 === age2);
  let result = age1 > age2 ? "Older" : "Younger or Same";
  console.log(result);
}

{
  //-----------------------------
  // 삼항 연산자
  // 1. 숫자비교
  const num = 0;
  const result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
  console.log(result);

  // 2. 최댓값 찾기
  const a = 10;
  const b = 5;
  const c = 13;
  //(b > c ? b : c) 해주면 더 이해가 빠름
  const result1 = a > b ? (a > c ? a : c) : b > c ? b : c;
  console.log(result1);

  // 3. 짝수 홀수 확인
  const number = 7;
  const result2 = number % 2 === 0 ? "Even" : "Odd";
  console.log(result2);

  // 4. 로그인 확인
  const isLoggedIn = true;
  const result3 = isLoggedIn === true ? "Welcome" : "Please log in";
  console.log(result3);

  // 5. 성인 확인
  const age = 18;
  const result4 = age > 18 ? "Adult" : "Minor";
  console.log(result4);
}

{
  //-----------------------------
  // 논리 연산자
  // 1. 논리 연산자 기본
  const a = true;
  const b = false;

  console.log(a && b);
  console.log(a || b);
  console.log(!a);

  // 2. 여러 조건 결합
  const x = 15;
  const y = 3;
  const z = 4;

  console.log(x > 10 && y < 5);
  console.log(x > 10 || z > 3);
  console.log(y !== 0);

  // 3. 사용자 로그인 및 권한 확인
  const isLoggedIn = true;
  const isAdmin = false;
  console.log(isLoggedIn ? "Welcome" : "Pelase Log in");
  console.log(isAdmin ? "Admin access granted" : "Admin access denied");
  console.log(
    isLoggedIn && isAdmin ? "Full access granted" : "Restricted access"
  );

  // 4. 값의 존재 확인
  const value1 = 23;
  const value2 = undefined;
  console.log(value1 || value2 ? "ok" : "no value");
  console.log(!value1 && !value2 ? "ok" : "no value");

  // 5. 범위 확인
  let num = 10;
  console.log(num >= 0 && num <= 100 ? "ok" : "범위가 아님");
  console.log(num < 0 || num > 100 ? "ok" : "범위가 아님");
}

{
  //-----------------------------
  console.log("조건문----------------------------");
  // 조건문 연습문제
  // 1. 학점 계산기
  let score = 65;
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else {
    console.log(F);
  }

  // 2. 짝수와 홀수 판별
  let num = 24;
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }

  // 3. 로그인 확인 및 권한 부여
  let isLoggedIn = true;
  let isAdmin = false;

  if (!isLoggedIn) {
    console.log("Please log in");
  } else if (isLoggedIn && !isAdmin) {
    console.log("Access denied");
  } else if (isLoggedIn && isAdmin) {
    console.log("Welcome, admin!");
  }

  // 4. 숫자 크기 비교
  let a = 30;
  let b = 2345;

  if (a > b) {
    console.log("a is greater");
  } else if (a < b) {
    console.log("b is greater");
  } else {
    console.log("a and b are equal");
  }

  // 5. 월별 계절 판별
  let month = 9;

  if (month === (12 || 1 || 2)) {
    console.log("winter");
  } else if (month === (3 || 4 || 5)) {
    console.log("spring");
  } else if (month === (6 || 7 || 8)) {
    console.log("Summer");
  } else {
    console.log("Fall");
  }

  // 6. 할인율 계산
  let amount = 1000000;
  if (amount >= 100000) {
    console.log(amount * 0.8);
  } else if (amount >= 50000) {
    console.log(amount * 0.9);
  } else {
    console.log("No discount");
  }

  // 7. 요일
  const day = 6;
  if (day === 7) {
    console.log("Sun");
  } else if (day === 1) {
    console.log("Mon");
  } else if (day === 2) {
    console.log("TUE");
  } else if (day === 3) {
    console.log("WED");
  } else if (day === 4) {
    console.log("THU");
  } else if (day === 5) {
    console.log("FRI");
  } else if (day === 6) {
    console.log("SAT");
  }

  // 8
  const num2 = 0;
  if (num2 > 0) {
    console.log("양수");
  } else if (num2 < 0) {
    console.log("음수");
  } else {
    console.log("0");
  }
}

{
  //-----------------------------
  console.log("반복문----------------------------");
  for (let i = 1; i < 10; i++) {
    console.log(i);
  }

  //   [연습문제 - 음수 걸러내기]
  let numArr = [10, -10, 20, -30, 40];
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > 0) {
      sum += numArr[i];
    }
  }
  console.log(sum);

  // [연습문제 - 홀짝 구분하기]
  for (let i = 0; i < 16; i++) {
    if (i % 2 === 0) {
      console.log(`${i} 짝수`);
    } else {
      console.log(`${i} 홀수`);
    }
  }
}

{
  //-----------------------------
  // 총 합을 반환하는 덧셈 함수
  console.log("함수----------------------------");
  function sum(...num) {
    return num.reduce((a, c) => a + c, 0);
  }
  sum(2, 4, 5, 6);
  console.log(sum(2, 4, 5, 6));

  // 사칙연산
  function cal(a, b) {
    let sum = a + b;
    let sub = a - b;
    let mul = a * b;
    let div = a / b;
    return sum;
  }
  console.log(cal(10, 50));

  // 짝홀 판별
  function isEven(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  console.log(isEven(7));

  // 배열의 모든 요소 더하기
  function sumArray(arr) {
    return arr.reduce((a, c) => a + c, 0);
  }
  console.log(sumArray([1, 2, 3]));

  // 배열의 최대값
  function findMax(arr) {
    let maxNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxNum) {
        maxNum = arr[i];
      }
    }
    return maxNum;
  }
  console.log(findMax([1, 5, 3, 9, 2]));

  // 문자열 반전
  function reverseString(str) {
    let result = str.split("").reverse().join("");
    return result;
  }
  console.log(reverseString("hello"));

  //문자열에서 특정 문자 개수 세기
  function countCharacter(str, word) {
    let strArr = [...str];
    //console.log(strArr);
    let a = 0;
    for (let i = 0; i < str.length; i++) {
      if (strArr[i] === word) {
        a++;
      }
    }
    return a;
  }
  console.log(countCharacter("banana", "a"));

  // 팩토리얼 계산하기
  function factorial(num) {
    let fac = 1;
    for (let i = 1; i <= num; i++) {
      fac = fac * i;
    }
    return fac;
  }
  console.log(factorial(5));

  // 삼각형의 넓이
  function triangleArea(a, b) {
    return (a * b) / 2;
  }
  console.log(triangleArea(10, 5));
}

{
  // -----------------------------------
  // 호이스팅 연습문제
  console.log("호이스팅----------------------------");

  // 1
  console.log(myVar); // undefined
  var myVar = 10;
  console.log(myVar); // 10

  // 2
  var num1 = 5;
  console.log(num1); // 5

  function num() {
    return 10;
  }

  console.log(num1); // 5
  console.log(num()); // 10

  // 3
  var x = 10;
  function test() {
    console.log(x); //undefined
    var x = 5;
    console.log(x); // 5
  }
  test();
  console.log(x); // 10
}

{
  // -----------------------------------
  // 객체 연습문제
  console.log("객체----------------------------");
  // 1

  function mergeObjects(obj1, obj2) {
    let object = {};

    for (let key1 in obj1) {
      object[key1] = obj1[key1];
    }

    for (let key2 in obj2) {
      object[key2] = obj2[key2];
    }

    return object;
  }

  //   function mergeObjects(obj1, obj2) {
  //     return { ...obj1, ...obj2 };
  //   }

  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };
  console.log(mergeObjects(obj1, obj2)); // { a: 1, b: 3, c: 4 }

  const obj3 = { x: 10 };
  const obj4 = { y: 20 };
  console.log(mergeObjects(obj3, obj4)); // { x: 10, y: 20 }

  const obj5 = { a: 1, b: 2 };
  const obj6 = { a: 3, b: 4 };
  console.log(mergeObjects(obj5, obj6)); // { a: 3, b: 4 }

  const obj7 = {};
  const obj8 = { z: 5 };
  console.log(mergeObjects(obj7, obj8)); // { z: 5 }
}

{
  console.log("객체----------------------------");
  // 2
  function objectToArray(obj) {
    let arr = [];
    for (let key in obj) {
      // console.log(key);
      arr.push([key, obj[key]]);
    }
    return arr;
  }

  //   function objectToArray(obj) {
  //     return Object.entries(obj);
  //   }

  // Object.keys(obj)	키만 배열로 반환 → ['a', 'b', 'c']
  // Object.values(obj)	값만 배열로 반환 → [1, 2, 3]
  // Object.entries(obj)	키-값 쌍을 배열로 반환 → [['a', 1], ['b', 2], ['c', 3]]

  const obj = { a: 1, b: 2, c: 3 };
  console.log(objectToArray(obj)); // [['a', 1], ['b', 2], ['c', 3]]

  const obj2 = { x: 5, y: 10 };
  console.log(objectToArray(obj2)); // [['x', 5], ['y', 10]]

  const obj3 = { p: 3 };
  console.log(objectToArray(obj3)); // [['p', 3]]

  const obj4 = {};
  console.log(objectToArray(obj4)); // []
}

{
  console.log("객체----------------------------");
  // 3

  function filterByThreshold(obj, threshold) {
    let object = {};

    for (let key in obj) {
      if (obj[key] > threshold) {
        object[key] = obj[key];
      }
    }
    return object;
  }

  const obj = { a: 1, b: 5, c: 3 };
  const threshold = 2;
  console.log(filterByThreshold(obj, threshold)); // { b: 5, c: 3 }

  const obj2 = { x: 1, y: 2, z: 3 };
  const threshold2 = 2;
  console.log(filterByThreshold(obj2, threshold2)); // { y: 2, z: 3 }

  const obj3 = { a: 10, b: 5, c: 1 };
  const threshold3 = 6;
  console.log(filterByThreshold(obj3, threshold3)); // { a: 10 }

  const obj4 = { m: -1, n: 0, o: 1 };
  const threshold4 = 0;
  console.log(filterByThreshold(obj4, threshold4)); // { n: 0, o: 1 }
}

{
  console.log("객체----------------------------");
  // 4

  function squareValues(obj) {
    let object = {};

    for (let key in obj) {
      object[key] = obj[key] ** 2;
    }

    return object;
  }

  const obj = { a: 1, b: 2, c: 3 };
  console.log(squareValues(obj)); // { a: 1, b: 4, c: 9 }

  const obj2 = { x: 2, y: 3 };
  console.log(squareValues(obj2)); // { x: 4, y: 9 }

  const obj3 = { p: 0, q: -2 };
  console.log(squareValues(obj3)); // { p: 0, q: 4 }

  const obj4 = {};
  console.log(squareValues(obj4)); // {}
}

{
  console.log("객체----------------------------");
  // 5
  function deleteKey(obj, keyToDelete) {
    let answer = {};
    for (let key in obj) {
      if (key !== keyToDelete) {
        answer[key] = obj[key];
      }
    }
    return answer;
  }

  const obj = { a: 1, b: 2, c: 3 };
  const keyToDelete = "b";
  console.log(deleteKey(obj, keyToDelete)); // { a: 1, c: 3 }

  const obj2 = { x: 10, y: 20, z: 30 };
  const keyToDelete2 = "y";
  console.log(deleteKey(obj2, keyToDelete2)); // { x: 10, z: 30 }

  const obj3 = { a: 5 };
  const keyToDelete3 = "a";
  console.log(deleteKey(obj3, keyToDelete3)); // {}

  const obj4 = { m: 1, n: 2, o: 3 };
  const keyToDelete4 = "p";
  console.log(deleteKey(obj4, keyToDelete4)); // { m: 1, n: 2, o: 3 }
}

{
  console.log("객체----------------------------");
  // 6

  function removeDuplicateValues(obj) {
    let answer = {};
    let check = {};
    for (let key in obj) {
      let value = obj[key];

      if (check[value] === undefined) {
        check[value] = 0;
      }

      check[value] = check[value] + 1;
    }

    for (let key in obj) {
      if (check[obj[key]] === 1) {
        answer[key] = obj[key];
      }
    }
    return answer;
    //console.log(check);
  }

  const obj = { a: 1, b: 2, c: 1, d: 3 };
  console.log(removeDuplicateValues(obj)); // { b: 2, d: 3 }

  const obj2 = { x: 5, y: 5, z: 10 };
  console.log(removeDuplicateValues(obj2)); // { z: 10 }

  const obj3 = { p: 1, q: 1, r: 1 };
  console.log(removeDuplicateValues(obj3)); // {}

  const obj4 = { m: 3, n: 4, o: 3 };
  console.log(removeDuplicateValues(obj4)); // { n: 4 }
}

{
  console.log("객체----------------------------");
  // 7

  function findKeyByValue(obj, num) {
    for (let key in obj) {
      if (obj[key] === num) {
        return key;
      }
    }
    return null;
  }
  const obj = { a: 1, b: 2, c: 3 };
  console.log(findKeyByValue(obj, 2)); // 'b'
  console.log(findKeyByValue(obj, 4)); // null
  console.log(findKeyByValue(obj, 1)); // 'a'
  console.log(findKeyByValue({}, 1)); // null
}

{
  console.log("객체----------------------------");
  // 8
  function multiplyValues(obj) {
    let answer = 1;
    for (let key in obj) {
      answer = answer * obj[key];
    }
    return answer;
  }

  const obj = { a: 1, b: 2, c: 3 };
  console.log(multiplyValues(obj)); // 6

  const obj2 = { x: 2, y: 3, z: 4 };
  console.log(multiplyValues(obj2)); // 24

  const obj3 = { a: 1, b: 0, c: 3 };
  console.log(multiplyValues(obj3)); // 0

  const obj4 = {};
  console.log(multiplyValues(obj4)); // 1 (곱셈의 항등원)
}

{
  console.log("클로저----------------------------");
  // 1
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

{
  console.log("클로저----------------------------");
  // 2
  function square(num) {
    let answer = num ** 2;
    // 여기에 코드를 작성하세요
    return answer;
  }

  console.log(square(4)); // 16
  console.log(square(4)); // 16 (캐시 사용)
  console.log(square(5)); // 25
}

{
  console.log("클로저----------------------------");
  // 3
  function delayExecution(ms) {
    // 여기에 코드를 작성하세요
    return function (callback) {
      setTimeout(callback, ms);
    };
  }

  const delayedFunc = delayExecution(1000);
  delayedFunc(() => console.log("Executed after 1 second"));
}

{
  console.log("클로저----------------------------");
  // 4
  function createIdGenerator() {
    // 여기에 코드를 작성하세요
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

{
  console.log("클로저----------------------------");
  // 5
  function memoize(fn) {
    const cache = {};
    return function (n) {
      const key = JSON.stringify(n); // n을 문자열로 변환해서 키로 사용
      if (cache[key]) return cache[key]; // 캐시에 있으면 바로 반환
      const result = fn(n); // 계산
      cache[key] = result; // 결과 저장
      return result;
    };
  }
  const fibonacci = memoize(function (n) {
    // 여기에 코드를 작성하세요
    // 피보나치 수열 공식
    // F(0) = 0
    // F(1) = 1
    // F(n) = F(n - 1) + F(n - 2)  (n >= 2)
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    let answer = fibonacci(n - 1) + fibonacci(n - 2);
    return answer;
  });

  console.log(fibonacci(10)); // 55
  //console.log(fibonacci(100));
  //console.log(fibonacci(100)); // 55 (메모이제이션 사용)
}

{
  console.log("클로저----------------------------");
  // 6
  function createStringCombiner() {
    // 여기에 코드를 작성하세요
    let answer = "";
    return function (str) {
      return (answer = answer + str);
    };
  }

  const combiner = createStringCombiner();
  console.log(combiner("Hello")); // "Hello"
  console.log(combiner(" World")); // "Hello World"
}

{
  console.log("클로저----------------------------");
  // 7
  function createPropertyCounter() {
    // 여기에 코드를 작성하세요
    return function (obj) {
      let count = Object.keys(obj);
      return count.length;
    };
  }

  const counter = createPropertyCounter();
  console.log(counter({ a: 1, b: 2 })); // 2
  console.log(counter({ a: 1 })); // 1
}

{
  console.log("클로저----------------------------");
  // 8

  function createFilter(condition) {
    // 여기에 코드를 작성하세요
    return function (arr) {
      return arr.filter(condition);
    };
  }

  const filterEven = createFilter((num) => num % 2 === 0);
  console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]
}

{
  console.log("클로저----------------------------");
  // 9
  function createMultiCounter() {
    // 여기에 코드를 작성하세요
    let counter = {}; // 저장

    return function (x) {
      if (!counter[x]) {
        counter[x] = 0; // 안나온 이름이면 0으로 셋팅
      }
      return function () {
        counter[x]++;
        return counter[x];
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
}

{
  console.log("클로저----------------------------");
  // 10
  function createCalculator(operator) {
    // 여기에 코드를 작성하세요
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
}
