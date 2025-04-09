{
  //유니온 타입
  // -> | 파이프기호를 사용해 복수개의 타입을 추가해 줄 수 있다.
  let value: number | string = 10;
  value = 20;
  value = "A";

  function printValue(value: number | string | boolean | { name: string }): void {
    if (typeof value === "number") console.log(value.toFixed(0));
    else console.log(value);
  }
  printValue(10.234);
  printValue("A");
  printValue(true);
  printValue({ name: "toto" });

  // 타입스크립트는 의심이 많고 까다롭기 때문에 확실한 number일 때만 덧셈을 하고 나머지는 문자열을 더하는 것으로 설정함.
  const sum1 = (n1: number | string, n2: number | string): number | string => {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  };
  console.log(sum1(10, 30));
  console.log(sum1(100, "B"));

  // 모든 경우의 수를 if문으로 작성했어도 마지막에 에러를 던져서 확실하게 만든다..
  const sum = (n1: number | string, n2: number | string): number | string => {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else if (typeof n1 === "number" && typeof n2 === "string") return `${n1}${n2}`;
    else if (typeof n1 === "string" && typeof n2 === "string") return `${n1}${n2}`;
    else if (typeof n1 === "string" && typeof n2 === "number") return `${n1}${n2}`;
    throw new Error("error");
  };
  console.log(sum(10, 20));
  console.log(sum(10, "B"));

  function throwError(message: string): never {
    throw new Error(message);
  }

  // hot module reload -> H.M.R
  // 지속적인 감시가 필요할 때. 사용함. 현재는 사용하지 않는것으로..
  // function infinitLoop(): never {
  //   while (true) {
  //     // ...
  //   }

  // 아래와같이 한다면 if문으로 확신을 계속해서 주어야하기 때문에 번거로워질 수 있다.
  const sum2 = (n1: number | string, n2: number | string): number | string => {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  };
  const result1 = sum2(1.2, 2.3);
  if (typeof result1 === "number") console.log(result1.toFixed(0));
  const result2 = sum("A", "B");

  // 함수 오버로드 (함수 선언문에서만 사용 가능!!!)
  // 함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능. (유니온)
  // 오버로드의 한계 : 타입이 많아졌을 때 모든 경우의 수를 작성하는 것이 아니면 에러 발생..
  function sum3(n1: number, n2: string): string;
  function sum3(n1: string, n2: string): string;
  function sum3(n1: string, n2: number): string;
  function sum3(n1: number, n2: number): number;
  function sum3(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  }
  const result3 = sum3(1.2, 2.3);
  const result4 = sum3("A", "B");
  // console.log(result3.toFixed(0));

  // 타입단언 -> 타입을 확정짓는 것
  const result5 = sum3(1.2, 2.3) as number;
  console.log(result5);

  console.log(result4);
}
