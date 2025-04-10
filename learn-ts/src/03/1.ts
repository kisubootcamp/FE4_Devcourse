{
  // 함수
  // 매개 변수와 반환 값의 타입을 지정해주는 것
  // 반환값 -> return
  // void -> 아무것도 반환하지 않는다
  // 함수 선언문
  // 함수 표현식
  // -> 함수 자체에 매개 변수와 반환 값의 타입을 지정하는 방법
  // -> 변수에 함수의 매개 변수와 반환 값의 타입을 지정하는 방법(함수 부분에는 정의 안해도 됨)
  let num: number = 10;

  const greet: () => void = () => {
    console.log("Greet!");
  };

  const sum: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;
  const sun = (n1: number, n2: number): number => n1 + n2;

  const result = sum(10, 20); // 함수 반환 값이 담긴 변수에는 굳이 타입 명시X

  const printValue: (value: string) => void = (value) => {
    console.log(value);
  };

  const add: (...numbers: number[]) => number = (...numbers) =>
    numbers.reduce((result, num) => result + num, 0);
  //   const res = add([1, 2, 3]);
  const res = add(1, 2, 3);

  // 함수의 매개변수는 타입 추론되지 않음
  // 반환값은 타입 추론 될 수도 있음. return 다음에 오는 값의 타입을 보고,,
  const printObj: (userObj: { name: string }) => void = (userObj) => {
    console.log(userObj.name);
    // return userObj.name;
    // return 10;
  };
  printObj({ name: "sucoding" });
}
