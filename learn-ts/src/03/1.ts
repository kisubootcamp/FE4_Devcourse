{
  // 함수
  // 매개 변수와 반환 값(return)의 타입을 지정해주는 것
  // void -> 아무것도 반환하지 않는다
  // 함수 선언문
  function greet(): void {
    console.log("Greet!");
  }

  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }

  function printValue(value: string): void {
    console.log(value);
  }

  function add(...numbers: number[]): number {
    return numbers.reduce((result, num) => result + num, 0);
  }

  function printObj(userObj: { name: string }): void {
    console.log(userObj.name);
  }

  // 함수 표현식
  // -> 함수 자체에 매개 변수와 반환 값의 타입을 지정하는 방법
  // -> 변수에 함수의 매개 변수와 반환 값의 타입을 지정하는 방법법
  const greet2 = function greet(): void {
    console.log("Greet!");
  };

  const sum2 = function sum2(n1: number, n2: number): number {
    return n1 + n2;
  };

  const greet3: () => void = function greet(): void {
    console.log("Greet!");
  };

  const sum3: (n1: number, n2: number) => number = function sum2(n1, n2) {
    return n1 + n2;
  };

  // 화살표 함수
  const sum4: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;
  const sum5 = (n1: number, n2: number): number => n1 + n2;
}
