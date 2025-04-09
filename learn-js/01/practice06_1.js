{
  //Q1.
  // 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
  // 매개변수의 갯수 제한은 없습니다.
  const add = (...args) => {
    let sum = 0;
    args.forEach((n) => {
      sum += n;
    });

    return sum;
  };
  console.log(add(3, 4, 5, 6, 7, 8, 9));
}

{
  // Q2. 사칙연산을 수행하는 로직을 담은 함수를 구현해주세요.  (매개변수 - 2개) (+, -, *, /)
  //구현 방법은 자율입니다.\
  const addFun = (x, y) => {
    return x + y;
  };
  const minusFun = (x, y) => {
    return x - y;
  };
  const multiplyFun = (x, y) => {
    return x * y;
  };
  const divideFun = (x, y) => {
    return x / y;
  };
  console.log(addFun(6, 8));
  console.log(minusFun(11, 8));
  console.log(multiplyFun(1, 8));
  console.log(divideFun(8, 4));
}

{
  //Q3. 숫자를 매개변수로 받아서 짝수면 true, 홀수면 false를 반환하는 함수 isEven을 작성하세요.
  //함수를 사용하여 7이 짝수인지 홀수인지 판별하고 결과를 출력하세요.

  const EvenOddFun = (x) => {
    if (x % 2 === 0) {
      console.log("짝수");
    } else {
      console.log("홀수");
    }
  };
  EvenOddFun(7);
}

{
  //Q4. 배열의 모든 요소 더하기
  //배열의 모든 요소의 합을 반환하는 함수를 작성하세요
  const sumArray = (arr) => {
    let num = 0;
    arr.forEach((a) => {
      num += a;
    });
    return num;
  };
  console.log(sumArray([1, 2, 3])); // 6
}

{
  // Q5. 배열의 최대값 찾기
  // 배열에서 최대값을 찾는 함수를 작성하세요
  const findMax = (arr) => {
    let max = 0;
    arr.forEach((a) => {
      if (a > max) {
        max = a;
      }
    });

    return max;
  };
  console.log(findMax([1, 5, 3, 9, 2])); // 9
}

{
  //Q6. 문자열 반전
  // 주어진 문자열을 반전시켜 반환하는 함수를 작성하세요
  const reverseString = (str) => {
    let arr = [...str];
    let revers = [];
    arr.forEach((a, i) => {
      revers[arr.length - i] = a;
    });

    return revers.join("");
  };
  console.log(reverseString("hello")); // "olleh"
}
{
  //Q7. 문자열에서 특정 문자 개수 세기
  // 주어진 문자열에서 특정 문자의 개수를 세는 함수를 작성하세요
  const countCharacter = (str, target) => {
    let strArr = [...str];
    let count = 0;
    strArr.forEach((s, i) => {
      if (s === target) {
        count++;
      }
    });

    return count;
  };
  console.log(countCharacter("banana", "a")); // 3
}

{
  // Q8. 팩토리얼 계산하기
  // 양의 정수를 매개변수로 받아서 그 수의 팩토리얼을 반환하는 함수 factorial을 작성하세요.
  // 함수를 사용하여 5의 팩토리얼을 계산하고 결과를 출력하세요.
  const factorial2 = (x) => {
    let result = 1;
    if (x > 0) {
      for (let i = 1; i <= x; i++) {
        result *= i;
      }
    }
    return result;
  };
  console.log(factorial2(5));
}

{
  // Q9. 삼각형 넓이 계산하기
  //삼각형의 밑변과 높이를 매개변수로 받아서 넓이를 반환하는 함수 triangleArea를 작성하세요.
  //함수를 사용하여 밑변이 10이고 높이가 5인 삼각형의 넓이를 계산하고 결과를 출력하세요.
  const triangleArea = (x, y) => {
    return (x * y) / 2;
  };
  console.log(triangleArea(10, 5));
}
