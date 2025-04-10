//피보나치 수열 계산
{
  function fibonacci(n) {
    if (n <= 1) return n;
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= n; i++) {
      [prev, curr] = [curr, curr + prev];
    }
    return curr;
  }
}

//소수 찾기
{
  let start = 1;
  let end = 100;

  function isPrimeNumber(n) {
    if (n === 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = start; i <= end; i++) {
    if (isPrimeNumber(i)) {
      console.log(i);
    }
  }
}

//배열 요소의 합 구하기
{
  function add(n) {
    let cnt = 0;
    for (let i = 0; i < n.length; i++) {
      cnt += add[i];
    }
    return cnt;
  }
}

//문자열 뒤집기
{
  let str = "Hello, world";
  function strReverse(str) {
    let temp = [];
    str = str.split("");
    for (let i = str.length - 1; i >= 0; i--) {
      temp.push(str[i]);
    }
    return temp.join("");
  }

  console.log(strReverse(str));
}

//특정 숫자까지의 곱 계산
{
  let n = 5;
  function factorial(n) {
    let answer = 1;
    for (let i = 1; i <= n; i++) {
      answer *= i;
    }
    return answer;
  }

  console.log(factorial(n));
}

//암스트롱 수
