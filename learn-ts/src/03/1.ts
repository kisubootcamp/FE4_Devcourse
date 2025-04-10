{
  //함수
  //매개 변수와 변환 값의 타입을 지정해 주는 것
  // void -> 아무것도 반환하지 않는다.
  //함수 선언문
  function greet(): void {
    console.log("Greet!");
  }
  greet();

  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }
  const result = sum(10, 20);
  console.log(result);

  function printValue(value: string): void {
    console.log(value);
  }
  printValue("a");

  function add(...numbers: number[]): number {
    return numbers.reduce((result, num) => (result += num), 0);
  }
  const res = add(1, 2, 3);
  console.log(res);

  function printObj(userObj: { name: string }): void {
    console.log(userObj.name);
  }
  printObj({ name: "sss" });
  //매개변수의 타입은 추론이 불가능하지만 반환값이 명확한 경우 타입을 추론을 하기도 한다.
}
{
  //함수표현식
  // -> 함수 자체에 매개변수와 반환 값의 타입을 지정하는 방법
  // -> 변수에 함수의 매개변수와 반환 값의 타입을 지정하는 방법
  const greet2 = function greet2(): void {
    console.log("Greet!");
  };
  const greet3: () => void = function greet3() {
    console.log("Greet!");
  };

  const smu2 = function sum2(n1: number, n2: number): number {
    return n1 + n2;
  };
  const smu3: (n1: number, n2: number) => number = function sum3(n1, n2) {
    //타입선언 부분 매개변수와 함수 매개변수가 같은 이름일 필요는 없지만 안맞춰줄 이유도 없음
    return n1 + n2;
  };

  const printValue2 = function printValue2(value: string): void {
    console.log(value);
  };
  const printValue3: (value: string) => void = function printValue3(value) {
    console.log(value);
  };

  const add2 = function add2(...numbers: number[]): number {
    return numbers.reduce((result, num) => (result += num), 0);
  };
  const add3: (...numbers: number[]) => number = (...numbers) => {
    return numbers.reduce((result, num) => (result += num), 0);
  };

  const printObj2 = (userObj: { name: string }): void => {
    console.log(userObj.name);
  };
  const printObj3: (userObj: { name: string }) => void = (userObj) => {
    console.log(userObj.name);
  };
}
