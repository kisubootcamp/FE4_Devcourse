{
  // 함수 표현식
  const greet: () => void = function greet(): void {
    console.log('Greet');
  };

  // 함수 선언문
  function greet(name: string): void {
    console.log(`Hello ${name}`);
  }

  // 함수 오버로드
  function sum(n1: number, n2: number): number;
  function sum(n1: string, n2: string): string;
  function sum(n1: string, n2: number): string;
  function sum(n1: number, n2: string): string;
  function sum(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === 'number' && typeof n2 === 'number') return n1 + n2;
    else return `${n1}${n2}`;
  }
  // 위에 모든 경우의 수를 다 적어줘야한다!

  //다른 예
  function printUserInfo(name: string): void;
  function printUserInfo(name: string, age: number): void;
  function printUserInfo(name?: string, age?: number): void {
    if (name && age) {
      console.log(`${name},${age}`);
    } else {
      console.log(`${name}`);
    }
  }
  // 위 함수는, 이름이 있거나, 이름 나이가 있을때만 출력한다.

  // 타입별칭

  // 인터섹션 타입
  let value3: { name: string } & { age: number };
  value3 = {
    name: 'sucoding',
    age: 20,
  };
}
