{
  // 유니온 타입
  // | -> 파이프 기호
  // 타입을 정하는 곳이면 몇개든지 상관없음

  let value: number | string | boolean = 10;
  value = 20;
  value = "A";
  value = true;

  function printValue(value: number | string | { name: string }): void {
    if (typeof value === "number") console.log(value.toFixed(0));
    else console.log(value);
  }
  printValue(10);
  printValue("A");
  printValue({ name: "sucoding" });

  //n1: number, n2: number -> number
  //n1: number, n2: string -> string
  //n1: string, n2: number -> string
  //n1: string, n2: string -> string

  //   const sum = (n1: number | string, n2: number | string): number | string => {
  //     if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
  //     else if (typeof n1 === "number" && typeof n2 === "string")
  //       return `${n1}${n2}`;
  //     else if (typeof n1 === "string" && typeof n2 === "number")
  //       return `${n1}${n2}`;
  //     else if (typeof n1 === "string" && typeof n2 === "string")
  //       return `${n1}${n2}`;

  //     // throw new Error("error");
  //     // return "";
  //     // 컴파일러: 혹시라도 외부에서 다른 타입이 들어오면 어캄
  //     // 개발자: 그럴일이 없지만 이해. throw new Error("error");
  //   };

  // 함수 오버로드 -> 함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능(유니온)
  // 외부에서 보기엔 멀짱
  function sum(n1: number, n2: number): number;
  function sum(n1: number, n2: string): string;
  function sum(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  }
  const result1 = sum(1.2, 2.3);
  if (typeof result1 === "number") console.log(result1.toFixed(0));

  // 타입 단언
  function sum2(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  }
  const result2 = sum2(1.2, 2.3) as number;

  // 함수
  // never: 절대 가질수없는 값, 올수없는 값, 반환될수없는 값
  //void랑 헷갈리지 말기
  let obj: Record<string, never> = {};
  function threowError(message: string): never {
    throw new Error(message);
  }

  // hot module reload -> H.M.R
  // 사용자를 감시
  function infinitLoop(): never {
    while (true) {}
  }
}
