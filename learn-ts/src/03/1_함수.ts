{
  //함수
  // 매개 변수와 반환 값의 타입을 지정해주는 것
  function greet(): void {
    // void : 아무것도 반환하지 않는다.
    console.log('Greet!');
  }
  greet();

  // 매개변수와 return 값의 타입을 지정해주지 않으면, any 타입으로 추론된다.
  function sum(n1: number, n2: number): number {
    // return 값도 보통 여기에 추가한다.
    return n1 + n2;
  }

  function printValue(value: string): void {
    console.log(value);
  }

  function add(numbers: number[]) {
    return numbers.reduce((result, num) => result + num, 0);
  }

  const res = add([1, 2, 3]);
  console.log(res);

  function printObj(userObj: { name: string }): void {
    console.log(userObj.name);
  }
  printObj({ name: 'sucoding' });

  // 함수 선언문 : 함수를 정의
  // 함수 표현식 : 함수 선언문으로 정의된 함수를 변수에 담아주는 것

  let num: number = 10;
  const greet: () => void = function greet(): void {
    console.log('Greet');
  };
  const sum: (n1: number, n2: number) => number = function sum(n1, n2) {
    return n1 + n2;
  };
}
