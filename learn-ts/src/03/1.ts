{
  // 함수
  // 매개 변수와 반환 값의 타입을 지정해주는 것
  // return
  // void -> 아무것도 반환하지 않는다.
  // 함수 선언문
  // 함수 표현식
  // -> 함수 자체에 매개 변수와 반환 값의 타입을 지정하는 방법: 1번
  // -> 변수에 함수의 매개 변수와 반환 값의 타입을 지정하는 방법: 2번
  const greet1: () => void = function greet1(): void {
    console.log("Greet!"); // 1번
  };
  const greet2: () => void = function greet2() {
    console.log("Greet!"); // 2번
  };
  const greet3: () => void = () => {
    console.log("Greet!"); // 화살표 함수
  };

  const sum: (n1: number, n2: number) => number = function sum(
    n1: number,
    n2: number
  ): number {
    return n1 + n2;
  };
  const sum2: (n1: number, n2: number) => number = function sum2(n1, n2) {
    return n1 + n2;
  };
  const sum3: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;
  const sum4 = (n1: number, n2: number): number => n1 + n2;

  const printValue: (value: string) => void = function printValue(
    value: string
  ): void {
    console.log(value);
  };
  const printValue2: (value: string) => void = function printValue2(value) {
    console.log(value);
  };
  const printValue3: (value: string) => void = (value) => {
    console.log(value);
  };

  function add(...numbers: number[]): number {
    return numbers.reduce((result, num) => result + num, 0);
  }
  const add3: (...numbers: number[]) => number = (...numbers) =>
    numbers.reduce((result, num) => result + num, 0);

  function printObj(userObj: { name: string }): void {
    // 매개변수는 절대 타입추론이 되지 않음.
    console.log(userObj.name);
  }
  const printObj2: (userObj: { name: string }) => void = (userObj) => {
    console.log(userObj.name);
  };
}
