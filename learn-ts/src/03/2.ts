{
  // 유니온(언) 타입
  // | -> 파이프 기호
  function printValue(value: number | string): void {
    //타입가드
    if (typeof value === 'number') console.log(value.toFixed(0));
    else console.log(value);
  }
  printValue(10.123);
  printValue('A');

  // n1: number, n2: number -> number
  // n1: string, n2: number -> string
  // n1: number, n2: string -> string
  // n1: string, n2: string -> string
  // 함수 오버로드: 함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능. (유니온) 함수 외부를 위한 기능
  function sum(n1: string, n2: string): string;
  function sum(n1: string, n2: number): string;
  function sum(n1: number, n2: string): string;
  function sum(n1: number, n2: number): number;
  function sum(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === 'number' && typeof n2 === 'number') return n1 + n2;
    else return `${n1}${n2}`;
  }
  const reseult1 = sum(1.2, 1.3);
  console.log(reseult1.toFixed(0));
  console.log(sum(10, 20));
  // 함수
  // never void
  let obj: Record<string, never> = {};
  function throwError(message: string): never {
    throw new Error(message);
  }

  function infinitLoop(): never {
    while (true) {}
  }
}
