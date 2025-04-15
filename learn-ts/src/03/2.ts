{
  // 유니온 타입
  // | -> 파이프 기호
  function printValue(value: number | string | { name: string }): void {
    if (typeof value === 'number') console.log(value.toFixed(0)); //Type Guard
    else console.log(value);
  }
  printValue(10.123);
  printValue('A');
  printValue({ name: 'sucoding' });

  const sum = (n1: number | string, n2: number | string): number | string => {
    if (typeof n1 === 'number' && typeof n2 === 'number') return n1 + n2;
    else return `${n1}${n2}`;
  };
  const result1 = sum(1.2, 2.3);
  if (typeof result1 === 'number') console.log(result1.toFixed(0));
  const result2 = console.log(sum('A', 'B'));

  //never void
  function throwError(message: string): never {
    throw new Error('message');
  }

  function watchHMR(): never {
    while (true) {
      //.....
    }
  }

  // 함수 오버로드 -> 함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능.
  // 타입 단언
  function sum1(n1: number, n2: number): number;
  function sum1(n1: string, n2: string): string;
  function sum1(n1: number, n2: string): string;
  function sum1(n1: string, n2: number): string;
  function sum1(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === 'number' && typeof n2 === 'number') return n1 + n2;
    else return `${n1}${n2}`;
  }
  const result3 = sum1(1.2, 2.3);
  console.log(result3.toFixed(0));
  const result4 = sum1('A', 'B');
}
{
  let nestedArray: (string[] | number[])[] = [
    ['apple', 'banana'],
    [1, 2, 3],
    ['cherry'],
  ];
}
{
  let items: (
    | { id: number; name: string; price: number }
    | (string | number)[]
  )[] = [
    { id: 1, name: 'Item1', price: 100 },
    { id: 2, name: 'Item2', price: 200 },
    ['discount', 10],
  ];
}
{
  let dataSet: ({ name: string; price: number } | (string | number)[])[] = [
    { name: 'Item A', price: 100 },
    ['item1', 50],
    { name: 'Item B', price: 200 },
    ['item2', 75],
  ];
}
