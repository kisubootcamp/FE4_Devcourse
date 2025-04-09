{
  // 유니온 타입
  // | -> 파이프 기호
  function printValue(value: number): void {
    console.log(value);
  }
  printValue(10);
  printValue('A');

  let value: number = 10;

  // 7
  let items: (
    | { id: number; name: string; price: number }
    | [string, number]
  )[] = [
    { id: 1, name: 'Item1', price: 100 },
    { id: 2, name: 'Item2', price: 200 },
    ['discount', 10],
  ];

  // 조건문을 써주면 에러가 안난다
  // 이런걸 타입 가드라고 한다. (타입을 좁혀주는 행위) 
  if ('name' in items[0]) {
    console.log(items[0], name);
  }

  // 이렇게 쓰면 에러가 난다. string일때는 toFixed가 안되기 때문
  function printValue(value: number | string): void {
    console.log(value.toFixed(0));
  }
  printValue(10.123;)

  // 이렇게 쓴다 (type guard)
  function printValue(value: number | string): void {
    if (typeof value === "number") console.log(value.toFixed(0));
    else console.log(value);
  }
  printValue(10.123;

  const sum = (n1:number | string, n2:number | string) :number | string => {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`
  }

  /*
  void : return 값이 없음
  never : 절대로 값을 반환할 수 없게 한다.

  이 둘이 엄청 헷갈린다.

  */
 function throwError(message: string) : never{
  throw new Error(message);
 }
}