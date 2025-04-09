{
  // 유니온(언) 타입
  // |: 파이프 기호

  let value: number | string | boolean = 10;
  value = 10;
  value = "a";
  value = true;

  function printValue(value: number | string): void {
    if (typeof value === "number") console.log(value.toFixed(0));
    else console.log(value);
  }
  printValue(10.123);
  printValue("a");

  // 함수 오버로드
  function sum(n1: number, n2: number): number;
  function sum(n1: string, n2: number): string;
  function sum(n1: number, n2: string): string;
  function sum(n1: string, n2: string): string;
  function sum(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  }
  const res1 = sum(1.2, 2.3);
  console.log(res1); // 3.5
  console.log(res1.toFixed(0));
  // 타입 단언
  const res2 = sum("A", "B") as string;

  // 함수
  let obj: Record<string, never> = {};
  function throwError(message: string): never {
    throw new Error(message);
  }

  function infinitLoop(): never {
    while (true) {}
  }
}
