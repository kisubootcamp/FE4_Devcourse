{
  // 함수
  // 매개 변수와 반환 값의 타입을 지정해주는 것
  // void -> 아무것도 반환하지 않는다
  // 함수 선언문
  function greet(): void {
    console.log("Greet!");
  }

  // 함수 표현식
  // -> 함수 자체에 매개 변수와 반환 값의 타입을 지정하는 방법
  const sum = function (n1: number, n2: number): number {
    return n1 + n2;
  };

  // -> 변수에 함수의 매개 변수와 반환 값의 타입을 지정하는 방법
  const printValue: (value: string) => void = function (value) {
    console.log(value);
  };

  // 화살표 함수
  const add = (...numbers: number[]): number => {
    return numbers.reduce((result, num) => result + num, 0);
  };

  // return의 유무와 반환값의 종류에 따라 타입추론이 가능할 때가 있다.
  // 매개변수는 불가능
  function printObj(userObj: { name: string }) {
    console.log(userObj.name);
  }

  printObj({ name: "sucoding" });
}
