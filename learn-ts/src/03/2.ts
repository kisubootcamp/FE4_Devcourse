{
  // 유니온(언) 타입
  // | -> 파이프 기호
  function printValue(value: number | string): void {
    if (typeof value === "number") console.log(value.toFixed(0));
    else console.log(value);
  }
  printValue(10.123);
  printValue("A");

  const add = (a: number, b: number): number => a + b;

  const getObject = () => ({
    name: "sucoding",
  });

  // n1: number, n2: number -> number
  // n1: string, n2: number -> string
  // n1: number, n2: string -> string
  // n1: string, n2: string -> string
  // 함수 오버로드 -> 함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능. (유니온)
  // 타입 단언
  function sum(n1: string, n2: string): string;
  function sum(n1: string, n2: number): string;
  function sum(n1: number, n2: string): string;
  function sum(n1: number, n2: number): number;
  function sum(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  }

  const result1 = sum(1.2, 2.3);
  const result2 = sum("A", "B");
}
