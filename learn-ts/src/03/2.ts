{
  // 유니온 타입 -> 연산자
  // | -> 파이프 기호
  function printValue(value: number | string): void {
    if (typeof value === 'number') {
      console.log(value.toFixed(0));
    } else {
      console.log(value);
    }
  }
  printValue(10.123);
  printValue('A');

  // n1: number, n2: number => number
  // n1: number, n2: string => string
  // n1: string, n2: number => string
  // n1: string, n2: string => string
  const sum = (n1: number | string, n2: number | string): number | string => {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
      return n1 + n2;
    } else {
      return `${n1}${n2}`;
    }
  };
  const result1 = sum(1.2, 2.3);
  if (typeof result1 === 'number') {
    console.log(result1.toFixed(0));
  }
  const result11 = sum('A', 'B');

  // 함수 오버로드
  // 함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능. (유니온)
  // 타입 단언
  function sum2(n1: string, n2: string): string;
  function sum2(n1: string, n2: number): string;
  function sum2(n1: number, n2: string): string;
  function sum2(n1: number, n2: number): number;
  function sum2(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === 'number' && typeof n2 === 'number') return n1 + n2;
    else return `${n1}${n2}`;
  }
  const result2 = sum2(1.2, 2.3);
  console.log(result2.toFixed(0));
  const result22 = sum('A', 'B');

  // 함수
  let obj: Record<string, never> = {};
  function throwError(message: string): never {
    throw new Error(message);
  }
}
