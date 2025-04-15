// 함수

// 연습문제
{
  // 1. 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수
  function sum(a, b) {
    return a + b;
  }
  console.log(sum(2, 3)); // 5
}
{
  // 2. 사칙연산
  function calculate(a, b, operator) {
    if (operator === "+") {
      return a + b;
    } else if (operator === "-") {
      return a - b;
    } else if (operator === "*") {
      return a * b;
    } else if (operator === "/") {
      if (b === 0) throw new Error("error");
      return a / b;
    } else {
      throw new Error("Invalid operator");
    }
  }
  console.log(calculate(6, 2, "+")); // 8
  console.log(calculate(6, 2, "-")); // 4
  console.log(calculate(6, 2, "*")); // 12
  console.log(calculate(6, 2, "/")); // 3
}
{
  // 3. 짝수와 홀수 판별하기
  function isEven(num) {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isEven(7)); // false
}
{
  // 4.  배열의 모든 요소 더하기
  function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sumArray([1, 2, 3])); // 6
}
{
  // 5. 배열의 최대값 찾기
  function findMax(arr) {
    return arr.Math.max(...arr);
  }
  console.log(findMax([1, 5, 3, 9, 2])); // 9
}
{
  // 6. 문자열 반전
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  console.log(reverseString("hello")); // "olleh"
}
{
  // 7. 문자열에서 특정 문자 개수 세기
  function countCharacter(str, char) {
    return str.split(char).length - 1;
  }
  console.log(countCharacter("banana", "a")); // 3
}
{
  // 8. 팩토리얼 계산
  function factorial(num) {
    let sum = 1;
    for (let i = 1; i <= num; i++) {
      sum = sum * i;
    }
    return sum;
  }
  console.log(factorial(5)); // 120
}
{
  // 9. 삼각형 넓이 계산
  function triangleArea(num, h) {
    return (num * h) / 2;
  }
  console.log(triangleArea(10, 5)); // 25
}
