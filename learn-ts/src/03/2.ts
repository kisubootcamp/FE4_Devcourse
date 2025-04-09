{
  // 유니온(언) 타입
  // | -> 파이프 기호

  let value: number | string = 10;
  value = 20;
  value = "A";

  function printValue(value: number | string): void {
    if (typeof value === "number") {
      console.log(value.toFixed(0));
    } else {
      console.log(value);
    }
  }
  printValue(10);
  printValue("A");

  //함수 오버로드 => 함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능
  function sum(n1: string, n2: string): string;
  function sum(n1: string, n2: number): string;
  function sum(n1: number, n2: string): string;
  function sum(n1: number, n2: number): number;
  function sum(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  }
  console.log(sum(10, 20));

  //함수
  //never
  let obj: Record<string, never> = {};
  function throwError(message: string): never {
    throw new Error(message);
  }

  // hot module reload -> H.M.R
  function infinityLoop(): never {
    while (true) {}
  }
  const result1 = sum(1.2, 2.3);
  console.log(result1.toFixed(2));

  const result2 = sum("A", "B");
}
