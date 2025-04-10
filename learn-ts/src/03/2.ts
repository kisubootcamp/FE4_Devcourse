{
  //유니온 타입
  // | -> 파이프 기호
  function printValue(value: number | string | { name: string }): void {
    console.log(value);
  }
  printValue(10);
  printValue("A");
  printValue({ name: "SSs" });
}

{
  // 4.
  let dataSet: ({ name: string; price: number } | [string, number])[] = [
    { name: "Item A", price: 100 },
    ["item1", 50],
    { name: "Item B", price: 200 },
    ["item2", 75],
  ];
  if ("name" in dataSet[0]) {
    //
    console.log(dataSet[0].name); //해당 데이터가 있는지 없는지 알수 없음
  }
}
{
  // 타입 가드
  function printValue(value: number | string): void {
    if (typeof value === "number") console.log(value.toFixed(0));
    else console.log(value);
  }
  printValue(10);
  printValue("A");

  const sum = (n1: number | string, n2: number | string): number | string => {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  };
  console.log(sum(10, 20));
  console.log(sum("A", "B"));
}
{
  const sum = (n1: number | string, n2: number | string): number | string => {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else if (typeof n1 === "number" && typeof n2 === "string")
      return `${n1}${n2}`;
    else if (typeof n1 === "string" && typeof n2 === "number")
      return `${n1}${n2}`;
    else if (typeof n1 === "string" && typeof n2 === "string")
      return `${n1}${n2}`;
    else return 0;
    // throw new Error("error");
  };
}
{
  let obj: Record<string, never> = {};
  function throwError(message: string): never {
    throw new Error(message);
  }

  //   hot module reload -> H.M.R
  function infintLoop(): void {
    while (true) {}
  }
}
{
  // 함수 오버로드 -> 함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능. (유니온일 때만 의미 있음)
  // 함수 외부를 위한 문법
  // 모든 경우의 수를 다 적어주어야 한다.
  // 타입 단언
  function sum(n1: number, n2: number): number;
  function sum(n1: number, n2: string): string;
  function sum(n1: string, n2: string): string;
  function sum(n1: string, n2: number): string;
  function sum(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  }
  const result1 = sum(1.2, 2.3);
  console.log(result1.toFixed(0));

  const result2 = sum("A", "B");
}
