{
  // 함수
  // 매개 변수와 반환 값의 타입을 지정해주는 것
  // return
  // void -> 아무것도 반환하지 않는다는 의미
  // 함수 선언문
  function greet(): void {
    console.log("Greet!");
  }
  greet();

  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }
  // 함수에서 타입 지정을 해주면 result 변수도 number 타입으로 추론이 됨.
  // 보통 함수 호출의 반환 값까지 타입 지정을 해주지 않음 !!
  const result = sum(10, 20);
  console.log(result);

  function printValue(value: string): void {
    console.log(value);
  }
  printValue("A");

  function add(numbers: number[]): number {
    return numbers.reduce((result, num) => result + num, 0);
  }
  const res = add([1, 2, 3]);
  console.log(res);

  function add2(...numbers: number[]): number {
    return numbers.reduce((result, num) => result + num, 0);
  }
  const res2 = add2(1, 2, 3);
  console.log(res2);

  // 함수의 매개 변수는 기본적으로 타입 추론이 되지 않음 !
  // 반환 값은 타입 추론이 가능한 경우가 일부 있음 !
  // -> return이 없으면 명확하게 void
  // -> return 10이면 명확하게 number
  // -> return userObj이면 명확하지 않음.
  function printObj(userObj: { name: string }): void {
    console.log(userObj.name);
  }
  printObj({ name: "yubin" });

  // 함수 표현식 (아래의 두 방법 같이 사용해도 되지만, 보통 두 방법 중 하나만 사용하면 됨)
  // -> 함수 자체에 매개 변수와 반환 값의 타입을 지정하는 방법 (가독성이 더 좋아서 선호하는 방법)
  const greet2 = function greet2(): void {
    console.log("Greet222");
  };

  const sum2 = function sum2(n1: number, n2: number): number {
    return n1 + n2;
  };

  // -> 변수에 함수의 매개 변수와 반환 값의 타입을 지정하는 방법 (화살표 함수로 타입 지정해줌)
  const greet3: () => void = function greet3() {
    console.log("Greet222");
  };

  const sum3: (n1: number, n2: number) => number = function sum3(n1, n2) {
    return n1 + n2;
  };

  // 이렇게 매개 변수 이름을 다르게 해도 상관 없음. BUT, 굳이 다르게 하지 않고 똑같이 하는 게 문법적 관례임.
  const sum4: (a: number, b: number) => number = function sum4(n1, n2) {
    return n1 + n2;
  };

  const printValue2: (value: string) => void = function printValue2(value) {
    console.log(value);
  };

  function add3(numbers: number[]): number {
    return numbers.reduce((result, num) => result + num, 0);
  }

  function add4(...numbers: number[]): number {
    return numbers.reduce((result, num) => result + num, 0);
  }

  // 화살표 함수
  const greet4: () => void = () => {
    console.log("Greet4");
  };

  const sum5: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;
  const sum6 = (n1: number, n2: number): number => n1 + n2;

  const printValue3: (value: string) => void = (value) => {
    console.log(value);
  };

  const add5: (...numbers: number[]) => number = (...numbers) =>
    numbers.reduce((result, num) => result + num, 0);

  const printObj2: (userObj: { name: string }) => void = (userObj) => {
    console.log(userObj.name);
  };
}
