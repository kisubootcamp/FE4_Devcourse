//NOTE 함수 타입 지정
//함수
// 매개변수와 반환값의 타입을 지정해주는 것
// return
// void -> 아무것도 반환하지 않는다
// NOTE 함수 선언식
{
  function greet(): void {
    // 반환값에 대한 타입 지정
    console.log("Greet!");
  }
  greet();
}

{
  //NOTE 함수 타입 지정법 매개변수: type, func 함수명() : 반환값 type
  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }
  const result = sum(10, 20);
  console.log(sum(10, 20));
}

{
  function printValue(value: string): void {
    console.log(value);
  }
  printValue("A");
}
{
  function add(...numbers: number[]): number {
    return numbers.reduce((result, num) => result + num, 0);
  }
  //   const res = add([1, 2, 3]);
  const res = add(1, 2, 3);
  console.log(res);
}
//NOTE 함수의 매개변수는 자동으로 타입추론이 되지 않음 !! , 반환값에 대한 타입추론은 될 때도 있음(함수의 반환값이 담긴 변수는 보통 타입을 지정하지 않음)
{
  function printObj(userObj: { name: string }): void {
    console.log(userObj.name);
  }
  printObj({ name: "sucoding" });
}

//NOTE 함수 표현식 -> 타입을 지정하는 형식 2가지. (1)함수 선언문처럼 표현 (2)변수에 함수의 매개변수와 반환값의 타입을 지정하는 방법
// 강사님 기준 (1) 선호
{
  const greet = function greet(): void {
    // 반환값에 대한 타입 지정
    console.log("Greet!");
  };
  greet();
}
{
  //NOTE (1) 함수 선언문 처럼 함수 자체에 매개변수와 반환값의 타입을 지정하는 방법
  //함수 타입 지정법 -  func 함수명(매개변수: type) : 반환값 type
  const sum = function sum(n1: number, n2: number): number {
    return n1 + n2;
  };
  const result = sum(10, 20);
  console.log(sum(10, 20));
}
{
  // NOTE (2)변수에 함수의 매개변수와 반환값의 타입을 지정하는 방법
  //화살표 함수 형태로 타입 지정
  let num: number = 10;

  const greet: () => void = function greet() {
    console.log("Greet!");
  };
  greet();

  const sum: (n1: number, n2: number) => number = function sum(n1, n2) {
    return n1 + n2;
  };
  const result = sum(10, 20);
  console.log(sum(10, 20));
}

{
  //화살표함수로 (1) 타입지정 방법을 사용했을 때
  const sum = (n1: number, n2: number): number => n1 + n2;

  const result = sum(10, 20);
  console.log(sum(10, 20));
}
