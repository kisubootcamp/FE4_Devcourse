{
  // 함수
  // 함수에 타입을 붙이는 건
  // 매개변수와 반환 값의 타입을 지정해주는것
  // 반환값이 따로 없을 때 void
  // 함수 선언문
  function greet(): void {
    console.log("hi");
  }
  greet();

  // 함수의 타입 지정 예제1
  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }
  const result = sum(10, 20);

  // 함수의 타입 지정 예제2
  function printValue(value: string): void {
    console.log(value);
  }
  printValue("hihi");

  // 함수의 타입 지정 예제3
  function add(numbers: number[]): number {
    return numbers.reduce((result, num) => result + num, 0);
  }
  const res = add([1, 2, 3]);

  // 함수 매개변수 타입은 타입 추론 안됌

  // 함수 표현식
  // 1. 함수 자체에 매개 변수와 반환 값의 타입을 지정하는 방법(추천)
  const gret = function great(): void {
    console.log("great");
  };
  // 변수에 함수의 매개 변수와 반환 값의 타입을 지정하는 방법(비추)
  const greeet: () => void = function greeeet(): void {
    console.log("great");
  };

  // sum1, sum2 같은거임
  const sum1: (n1: number, n2: number) => number = function sum(
    n1: number,
    n2: number
  ): number {
    return n1 + n2;
  };
  const sum2: (n1: number, n2: number) => number = function sum(n1, n2) {
    return n1 + n2;
  };

  // 화살표 함수
  const sum3: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;
  const sum4 = (n1: number, n2: number): number => n1 + n2;

  const printValue2: (value: string) => void = (value) => {
    console.log(value);
  };

  const add2: (...numbers: number[]) => number = (...numbers) =>
    numbers.reduce((result, num) => result + num, 0);

  const printObj: (userObj: { name: string }) => void = (userObj) => {
    console.log(userObj.name);
  };
}
