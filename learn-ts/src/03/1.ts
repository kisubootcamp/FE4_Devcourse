{
  // 함수
  // 매개 변수와 반환 값의 타입을 지정해주는 것
  // 함수 선언문
  // 함수 표현식 : 변수에만 담아주면 된다.
  // 화살표 함수
  // -> 함수 자체에 매개 변수와 반환 값의 타입을 지정하는 방법 : 자주 쓰임
  // -> 변수에 함수의 매개 변수와 반환 값의 타입을 지정하는 방법

  const greet = function greet(): void {
    console.log('Greet!');
  };

  const greet2: () => void = function greet() {
    console.log('Greet!');
  };

  const greet3: () => void = () => {
    console.log('Greet!');
  };

  const sum = function sum(n1: number, n2: number): number {
    return n1 + n2;
  };

  const sum2: (n1: number, n2: number) => number = function sum(n1, n2) {
    return n1 + n2;
  };

  const sum3: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;

  const printValue: (value: string) => void = function printValue(value) {
    console.log(value);
  };

  function add(numbers: number[]): number {
    return numbers.reduce((result, num) => result + num, 0);
  }

  function printObject(userObj: { name: string }): void {
    console.log(userObj.name);
  }

  const printObject2: (userobj: { name: string }) => void = (userObj) => {
    console.log(userObj.name);
  };
}
