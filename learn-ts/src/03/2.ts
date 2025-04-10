{
  // 유니온(언) 타입
  // | -> 파이프 기호

  let value: number | string | boolean = 10;
  value = 20;
  value = "A";
  value = true;

  function printValue(value: number | string): void {
    if (typeof value === "number") console.log(value.toFixed(0));
    else console.log(value);
  }
  printValue(10.123);
  printValue("A");
  //   printValue({ name: "sucoding" });

  // n1: number, n2: number -> number
  // n1: string, n2: number -> string
  // n1: number, n2: string -> string
  // n1: string, n2: string -> string

  //   const sum = (n1: number | string, n2: number | string): number | string => {
  //     if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
  //     else if (typeof n1 === "string" && typeof n2 === "number")
  //       return `${n1}${n2}`;
  //     else if (typeof n1 === "number" && typeof n2 === "string")
  //       return `${n1}${n2}`;
  //     else if (typeof n1 === "string" && typeof n2 === "string")
  //       return `${n1}${n2}`;

  //     // undefined가 반환되지 않는다는 확신을 줌으로써 에러 해결
  //     throw new Error("error");
  //     // return 0;
  //   };

  // 함수 오버로드 -> 함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능. (유니온)
  // -> 함수 선언문에서만 사용 가능
  // 함수 내부가 아닌 외부를 위한 문법

  //   function sum(n1: string, n2: string): string;
  //   function sum(n1: string, n2: number): string;
  //   function sum(n1: number, n2: string): string;
  //   function sum(n1: number, n2: number): number;
  function sum(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  }

  // 타입 단언
  const result1 = sum(1.2, 2.3) as number;
  //   console.log(result1); // 3.5
  //   if (typeof result1 === "number") console.log(result1.toFixed(0));
  console.log(result1.toFixed(0)); // 오버로드 없으면 에러

  console.log(sum(10, 20));
  console.log(sum("A", "B") as string);

  // 함수
  // never, void
  let obj: Record<string, never> = {};
  function throwError(message: string): never {
    throw new Error(message);
  }

  // hot module reload -> H.M.R
  function watchHMR(): never {
    while (true) {
      // ...
    }
  }
}
