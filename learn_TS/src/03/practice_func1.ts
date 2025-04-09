{
  console.log("함수 연습문제--------------------------------");
  // 문제 1: 두 수의 합을 구하는 함수
  // 함수 정의
  const add = function (a: number, b: number): number {
    return a + b;
  };

  // 함수 호출
  const result = add(10, 5);
  console.log(result); // 15
}
{
  // 문제 2: 이름을 받아 인사하는 함수
  // 함수 정의
  const greet = function (name: string): string {
    return `Hello ${name}!`;
  };

  // 함수 호출
  const greeting = greet("Alice");
  console.log(greeting); // "Hello, Alice!"
}

{
  // 문제 3: 숫자 배열을 받아 합을 구하는 함수
  // 함수 정의
  const sumAll = function (...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
  };

  // 함수 호출
  const total = sumAll(1, 2, 3, 4);
  console.log(total); // 10
}

{
  // 문제 4: 기본값을 설정한 덧셈 함수
  // 함수 정의
  const sum = (num1: number, num2: number = 0): number => {
    return num1 + num2;
  };

  // 함수 호출
  const result = sum(5);
  console.log(result); // 5
}

{
  // 문제 5: 두 수를 곱하는 함수
  const multiply = (a: number, b: number): number => {
    return a * b;
  };

  // 함수 호출
  const product = multiply(4, 5);
  console.log(product); // 20
}

{
  // 문제 6: 문자열과 숫자를 결합하는 함수
  // 함수 정의
  const concatStringAndNumber = (str: string, num: number): string => {
    return str + num;
  };

  // 함수 호출
  const result = concatStringAndNumber("Hello", 10);
  console.log(result); // "Hello10"
}

{
  // 문제 7: 옵셔널 파라미터를 사용한 인사 함수
  // 함수 정의
  const greet = (name: string, message?: string): string => {
    if (!message) {
      return `Welcome, ${name}`;
    } else {
      return `${message},${name}!`;
    }
  };

  // 함수 호출
  const greeting1 = greet("Alice", "Hello");
  const greeting2 = greet("Bob");
  console.log(greeting1); // "Hello, Alice!"
  console.log(greeting2); // "Welcome, Bob!"
}

{
  // 문제 8: 숫자 배열의 최대값을 구하는 함수
  const findMax = (arr: number[]): number => {
    // let maxnum = arr[0];
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] > )
    // }
    let result = Math.max(...arr);
    return result;
  };

  // 함수 호출
  const max = findMax([10, 20, 30, 40]);
  console.log(max); // 40
}

{
  // 문제 9: 단일 숫자를 두 배로 만드는 함수// 함수 정의
  const double = (num: number): number => {
    return num * 2;
  };

  // 함수 호출
  const doubled = double(10);
  console.log(doubled); // 20
}
