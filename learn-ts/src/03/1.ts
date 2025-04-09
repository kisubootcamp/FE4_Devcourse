{
  // 타입스크립트의 함수
  // -> 매개변수와 반환값의 타입을 지정해주는 것
  // return = 반환값
  // void -> 아무것도 반환하지 않는다.

  // 함수의 타입지정은 두가지 방법이 있다.

  // 첫번째 방법
  // 함수 선언문
  // -> 함수 자체에 매개변수와 반환값의 타입을 지정하는 방법
  const greet = function greet(): void {
    console.log("Greet!");
  };

  // number를 더해서 반환하는 함수
  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }
  const result = sum(10, 20);
  console.log(result);

  // 문자열을 출력하는 함수 (반환값없음)
  function printValue(value: string): void {
    console.log(value);
  }
  printValue("A");

  // 배열 안의 수의 총합을 구해서 반환하는 함수
  function add(numbers: number[]): number {
    return numbers.reduce((result, num) => result + num, 0);
  }
  const res = add([1, 2, 3]);
  console.log(res);

  // 객체의 문자열을 출력하는 함수(반환값없음)
  function printObj(userObj: { name: string }): void {
    console.log(userObj.name);
  }
  printObj({ name: "sucoding" });
}
{
  //두번째 방법
  // 함수표현식
  // -> 변수에 함수의 매개변수와 반환값의 타입을 지정하는 방법
  let num: number = 10;
  const greet: () => void = function greet(): void {
    console.log("Greet!");
  };

  const sum: (n1: number, n2: number) => number = function sum(n1, n2): number {
    return n1 + n2;
  };
}

{
  // 화살표 함수
  const sum: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;
  const sum1 = (n1: number, n2: number) => n1 + n2;

  const add: (numbers: number[]) => number = (numbers) =>
    numbers.reduce((result, num) => result + num, 0);

  const printObj: (userObj: { name: string }) => void = (userObj) => {
    console.log(userObj.name);
  };
}
