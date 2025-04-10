{
  // 함수
  // 매개 변수와 반환 값의 타입을 지정해주는 것
  // return
  // void -> 아무것도 반환하지 않는다
  // 함수 선언문
  // 함수 표현식: 함수 선언문을 변수에 담아주기만 하면 함수 표현식이 됨
  // -> 함수 자체에 매개 변수와 반환 값의 타입을 지정하는 방법
  // -> 변수에 함수의 매개 변수와 반환 값의 타입을 지정하는 방법
  const greet: () => void = function greet() {
    console.log("Greet!");
  };

  //   const sum: (n1: number, n2: number) => number = function sum(n1, n2) {
  //     return n1 + n2;
  //   };
  const sum: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;
  const sun = (n1: number, n2: number): number => n1 + n2;

  function printValue(value: string): void {
    console.log(value);
  }

  function add(...numbers: number[]): number {
    return numbers.reduce((result, num) => result + num, 0);
  }
  // const res = add([1,2,3]);
  //const res = add(1, 2, 3);

  function printObj(userObj: { name: string }): void {
    console.log(userObj.name);
  }
  printObj({ name: "sucoding" });
}
