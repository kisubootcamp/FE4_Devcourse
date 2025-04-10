{
  // 유니온(언) 타입
  // | -> 파이프 기호

  let value: number | string | boolean = 10;
  value = 20;
  value = "A";
  value = true;

  function printValue(value: number | string | { name: string }): void {
    if (typeof value === "number") console.log(value.toFixed(0));
    else console.log(value);
  }

  printValue(10.123);
  printValue("A");

  // 타입 가드
  // 함수 오버로드
  // 함수 오버로드는 함수 선언문에서만 사용 가능함
  // 함수 오버로드 -> 함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능. (유니온)
  // 오버로드를 사용하기로 마음 먹었다면 모든 경우의 수를 처리 해줘야함
  // 타입 단언 as 타입

  function sum(n1: string, n2: string): string;
  function sum(n1: string, n2: number): string;
  function sum(n1: number, n2: string): string;
  function sum(n1: number, n2: number): number;
  function sum(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  }

  const result1 = sum(1.2, 2.3);
  console.log(result1.toFixed(0));
  const result2 = sum("A", "B");
  console.log(result2);

  // 함수
  // never void
  let obj: Record<string, never> = {};
  function throwError(message: string): never {
    throw new Error(message);
  }

  // hot module reload -> H.M.R
  function infinitLoop(): never {
    while (true) {}
  }
}
