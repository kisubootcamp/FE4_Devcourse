{
  //함수
  //매개 변수와 반환 값의 타입을 지정해주는 것
  //return
  // void -> 아무것도 반환하지 않는다
  // 함수 선언문
  // 함수 표현식
  // 화살표 함수
  // -> 함수 자체에 매개 변수와 반환 값의 타입을 지정하는 방법
  // -> 변수에 함수의 매개 변수와 반환 값의 타입을 지정하는 방법
  function greet(): void {
    console.log("Greet! ");
  }

  greet();
}

{
  //되도록이면 화살표 함수 사용
  let num: number = 10;

  const greet: () => void = () => {
    console.log("Greet!");
  };

  const sum: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;
  const sun = (n1: number, n2: number): number => n1 + n2;

  const printValue: (value: string) => void = (value) => {
    console.log(value);
  };

  const add: (...numbers: number[]) => number = (...numbers) =>
    numbers.reduce((result, num) => result + num, 0);

  const printObj: (userObj: { name: string }) => void = (userObj) => {
    console.log(userObj.name);
  };
}
