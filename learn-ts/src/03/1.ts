{
  // 함수
  // 매가 변수와 반환 값의 타입을 지정해주는 것

  // void -> 반환값이 없음

  // function greet(): void {
  //   console.log('Greet!');
  // }
  const greet: () => void = () => {
    console.log('Greet!');
  };
  greet();

  // function sum(n1: number, n2: number): number {
  //   return n1 + n2;
  // }
  const sum: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;
  const sun = (n1: number, n2: number): number => n1 + n2;
  console.log(sum(1, 4));

  // function printValue(value: string): void {
  //   console.log(value);
  // }
  const printValue: (value: string) => void = (value) => {
    console.log(value);
  };
  printValue('a');

  function add(...numbers: number[]): number {
    return numbers.reduce((reseult, num) => reseult + num, 0);
  }
  console.log(add(1, 2, 3, 4));

  // function printObj(userObj: { name: string }): void {
  //   console.log(userObj.name);
  // }
  const printObj: (userObj: { name: string }) => void = (userObj) => {
    console.log(userObj.name);
  };
  const ww = (userObj: { name: string }) => {
    console.log(userObj.name);
  };

  printObj({ name: 'yyy' });
  ww({ name: 'qweqwe' });
}
