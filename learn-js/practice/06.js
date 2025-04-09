// 1.
function add(a, b) {
  console.log(a + b);
}
add(3, 5);

// 2.
function cal(a, b) {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
}
cal(5, 5);

// 3. 짝수와 홀수 판별하기
function isEven(num) {
  if (num % 2 == 0) {
    return 'true';
  } else {
    return 'false';
  }
}
const result3 = isEven(6);
console.log(result3);

// 4. 배열의 모든 요소 더하기
function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const result4 = sumArray([1, 2, 3]);
console.log(result4);

// 5. 배열의 최대값 찾기
function findMax(arrNum) {
  let maxNum = arrNum[0];

  for (let i = 1; i <= arrNum.length; i++) {
    if (maxNum < arrNum[i]) {
      maxNum = arrNum[i];
    }
  }
  return maxNum;
}
const result5 = findMax([1, 5, 3, 9, 2]);
console.log(result5);

// 6. 문자열 반전
const str = (greet) => {
  let newStr = '';

  for (let i = greet.length - 1; i >= 0; i--) {
    newStr += greet[i];
  }
  return newStr;
};
const result6 = str('hello');
console.log(result6);

// 7. 문자열에서 특정 문자 개수 세기
const countCharacter = (a, b) => {
  let count = 0;

  for (i = 1; i < a.length; i++) {
    if (b === a[i]) {
      count++;
    }
  }
  return count;
};
const result7 = countCharacter('banana', 'a');
console.log(result7);

// 8. 팩토리얼 계산하기
function factorial(num) {
  let n = 1;
  for (let i = 1; i <= num; i++) {
    n *= i;
  }
  return n;
}
const result8 = factorial(5);
console.log(result8);

// 9. 삼각형 넓이 계산하기
const triangleArea = (a, b) => {
  return (a * b) / 2;
};
const result9 = triangleArea(10, 5);
console.log(result9);
