{
  // 함수의 타입 지정
  // 매개 변수와 반환 값의 타입을 지정해주는 것
  // void -> 아무것도 반환하지 않는다.
  // 반환되는 값의 타입이 존재하지 않는다

  // 함수 선언문 방식
  const greet = function greet(): void {
    // const greet: () => void = function greet(): void
    // 함수에 타입이 지정되어있기 때문에 선언문에 타입이 지정되어있는 상태
    // 함수는 소괄호 옆에 반환값의 타입을 지정함
    console.log("Greet!");
  };

  greet();

  function sum(n1: number, n2: number): number {
    // 매개 변수와 반환 값의 타입을 number로 지정함
    return n1 + n2;
  }

  const reult = sum(10, 20); // 타입 지정으로 타입 추론이 가능해져 오류가 발생하지 않는다.
  console.log(reult); // 함수에 타입이 지정되지 않으면 타입 추론이 정상적으로 이루어지지 않아 오류가 발생함

  function printValue(value: string): void {
    console.log(value);
  }

  printValue("A");

  function add(numbers: number[]): number {
    return numbers.reduce((result, num) => result + num, 0);
  }

  const res = add([1, 2, 3]);
  console.log(res);
  // 함수의 매개변수는 타입 추론이 되지 않는다.

  function printObj(userObj: { name: string }): void {
    // 반환되는 값이 명확하지 않다면 반환 값이 any로 추론된다.
    // 하지만 반환되는 값이 명확하다면 타입이 추론되기는 한다.
    // 그래도 함수의 매개변수는 절대 타입 추론이 되지 않는다.
    console.log(userObj.name);
  }
  printObj({ name: "ji" });

  // 함수 표현식
  // -> 함수 자체에 매개 변수와 반환 값의 타입 값을 지정하는 방법
  // -> 변수에 함수의 매개 변수와 반환 값의 타입을 지정하는 방법
  // 변수에 타입을 지정해주고 함수는 화살표 함수로 사용한 후 타입 지정
  // let num: number = 10;
  // const num: () => void;
  const sum1: (a: number, b: number) => number = function sum1( // 이렇게도 표현이 가능하다
    n1 /*: number*/,
    n2 /*: number*/
  ) /*: number */ {
    return n1 + n2;
  };
  // 함수의 정의에 타입을 지정했다면 함수 자체에는 타입을 지정하지 않아도 문제 없다.
  // 매개변수를 다르게 바꿀 수 있지만 함수의 매개변수명과 같게 사용하는 것이 관례
  const sum3: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;
  const sum4 = (n1: number, n2: number): number => n1 + n2;

  const printObj2: (userObj: { name: string }) => void = (userObj) => {
    console.log(userObj.name);
  };
  // 거의 화살표 함수로 선언함
}
