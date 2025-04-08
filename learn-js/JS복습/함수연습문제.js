// 연습문제 (쉬움)

// 1번
//매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요
// 매개변수의 개수 제한은 없습니다.

//배열 반복문
function sum(...arg) {
  let result = 0;
  for (let i = 0; i < arg.length; i++) {
    result += arg[i];
  }
  console.log(result);
}
sum(1, 2, 3, 4, 8);

// reduce 활용
function sum2(...arg) {
  return arg.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum2(3, 4, 5, 6));

const result1 = sum(19, 20, 21, 22);
console.log(result1);

// 2번
// 사칙연산을 수행하는 로직을 담은 함수를 구현하기
// switch 구문
const calculator = function (a, b) {
  const cal = "/";
  switch (cal) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;
    case "%":
      console.log(a % b);
      break;
    default:
      console.log("사용 가능한 기호가 아닙니다.");
  }
};
calculator(50, 2);

// 2번 if ~ else if 구문
const calculator1 = function (a, b) {
  let str = "+";
  if (str === "+") {
    return a + b;
  } else if (str === "-") {
    return a - b;
  } else if (str === "*") {
    return a * b;
  } else if (str === "/") {
    return a / b;
  } else if (str === "%") {
    return a % b;
  }
};
console.log(calculator1(-10, 2));

// 3번 짝수와 홀수 판별
function num(a) {
  if (a % 2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
num(41);

// 4번 배열의 모든 요소 더하기
function sumArray(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumArray([2, 55, 3]));
console.log(sumArray([1, 2, 3]));

// 5번 배열의 최대값 찾는 함수 작성하기

// Math.max
function findMax(n) {
  return Math.max(...n);
}
console.log(findMax([2, 33, 24, 15]));

// sort
function findMax1(n) {
  n.sort((a, b) => a - b);
  console.log(n[n.length - 1]);
}
findMax1([43, 550, 66, -7]);

// reduce
// 최대값을 음수끼리 비교할 수도 있으므로 0이 아닌 -Infinity를 넣어주기로 함.
function findMax2(n) {
  let max = n.reduce((acc, cur) => (acc > cur ? acc : cur), -Infinity);
  console.log(max);
}
findMax2([22, 52, 6, 2, -44]);

// 6번 주어진 문자열을 반전시켜 반환하는 함수를 작성하세요
function reverseStr(str) {
  return str.split("").reverse().join("");
}

console.log(reverseStr("Hello"));

//7번 주어진 문자열에서 특정 문자의 개수를 세는 함수를 작성하세요
function countCharacter(str, alp) {
  // str.includes(alp);
  const result = str.split("").filter((str) => str === alp).length;
  console.log(result);
}
countCharacter("banana", "a"); // 3

//8번 팩토리얼 계산하기
//양의 정수를 매개변수로 받아서 그 수의 팩토리얼을 반환하는 함수 `factorial`을 작성하세요.
//함수를 사용하여 5의 팩토리얼을 계산하고 결과를 출력하세요.

// 팩토리얼이란?
// -> 1부터 n까지의 모든 정수를 곱한 값
function factorial(n) {
  let result = n;
  for (let i = 1; i < n; i++) {
    result *= i;
  }
  console.log(result);
}

factorial(5);

// 9번
//삼각형의 밑변과 높이를 매개변수로 받아서 넓이를 반환하는 함수 triangleArea를 작성하세요.
//함수를 사용하여 밑변이 10이고 높이가 5인 삼각형의 넓이를 계산하고 결과를 출력하세요.

function triangleArea(w, h) {
  return (w * h) / 2;
}

console.log(triangleArea(10, 5));
