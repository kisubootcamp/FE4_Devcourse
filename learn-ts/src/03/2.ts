{
  //NOTE 유니언타입(Union) - 복수개의 타입을 쉽게 나타낼 수 있음
  // | (파이프기호)로 연결
  // 소괄호를 잘 구분해서 써야함 **
  let value: number | string = 10;
  value = 20;
  value = "A";
  function printValue(value: number | string | { name: string }): void {
    console.log(value);
  }
  printValue(10);
  printValue("A");
  printValue({ name: "sucoding" });

  // (02/연습문제+)  5. 중첩된 배열, 변수타입 지정 -> union 활용
  let nestedArray: (string[] | number[])[] = [
    ["apple", "banana"],
    [1, 2, 3],
    ["cherry"],
  ];
  let nestedArray2: (string | number)[][] = [
    ["apple", "banana"],
    [1, 2, 3],
    ["cherry"],
  ];

  //(02/연습문제+) 7. 변수타입 지정
  let items: (
    | { id: number; name: string; price: number }
    | (string | number)[]
  )[] = [
    { id: 1, name: "Item1", price: 100 },
    { id: 2, name: "Item2", price: 200 },
    ["discount", 10],
  ];

  //(02/연습문제++) 4. 변수타입 지정
  let dataSet: ({ name: string; price: number } | (string | number)[])[] = [
    { name: "Item A", price: 100 },
    ["item1", 50],
    { name: "Item B", price: 200 },
    ["item2", 75],
  ];

  //NOTE type Guard : 타입을 좁혀주는 행위 (if 문을 통해서)
  if ("name" in items[0]) {
    console.log(items[0].name);
  }
  //  console.log(items[0].name); 만 쓸 경우 오류
}
{
  function printValue(value: number | string | { name: string }): void {
    if (typeof value === "number") console.log(value.toFixed(0));
    else console.log(value);
  }
  printValue(10.134);
  printValue("a");

  // n1 : number + n2:number -> number
  // n1:number + n2:string -> string
  // n1:string + n2:number -> string
  // n1:string + n2:string -> string
  const sum = (n1: number | string, n2: number | string): number | string => {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  };
  console.log(sum(10, 20));
  console.log(sum("A", "B"));

  //NOTE 함수 오버 로드 : 함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능(유니온)
  // 타입 가드의 번거로움을 없애줌
  // 함수 선언식에서만 사용할 수 있음 ****
  //오버로드의 한계 : 오버 로드를 사용하기로 했다면 모~~~~~~든 경우의 수를 다 작성해야함 (유니온 타입이 적을 때 사용하기 편함)
  //NOTE 타입 단정 : 오버로드 대신 사용할 수 있는 타입 지정
  const result1 = sum(1.2, 2.5);
  console.log(result1); //3.7
  if (typeof result1 === "number") console.log(result1.toFixed(0)); // 타입가드

  //****** 함수 오버로드  예제 *******/
  function sum2(n1: number, n2: number): number;
  function sum2(n1: number, n2: string): string;
  function sum2(n1: string, n2: number): string;
  function sum2(n1: string, n2: string): string;
  function sum2(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  }
  const result3 = sum2(1.2, 2.3) as number; // as (type) : 개발자가 타입을 단정
  const result2 = sum2("A", "B");

  console.log(result3); //3.5
  console.log(result2); // AB
}
{
  // 이런 경우가 생길 수 있음 ! **********
  const sum = (n1: number | string, n2: number | string): number | string => {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else if (typeof n1 === "string" && typeof n2 === "number")
      return `${n1}${n2}`;
    else if (typeof n1 === "number" && typeof n2 === "string")
      return `${n1}${n2}`;
    else if (typeof n1 === "string" && typeof n2 === "string")
      return `${n1}${n2}`;

    throw new Error("error");
    //NOTE throw 를 빼고 위 코드를 둘 경우 오류
    //TODO(다시 확인해보기) throw new Error 를 작성해서 오류 방지
  };
}
{
  // NOTE never : 반드시 절대로 올 수 없는 값 -> 함수에 붙으면 절대로 반환되지 않는다는 의미를 가지게 됨.
  // 굉장이 특수한 타입
  // 쓰지 않는다고 오류가 뜨진 않지만
  // 사용하므로써 명시적으로 절대 반환될 수 없음을 알 수 있게 함
  function throwError(message: string): never {
    //never:의미론적으로 절대로 반환되지 않는 값이라고 명확하게 나타내줄 수 있음
    throw new Error(message); // 반환되는 값이 없기 때문에 타입추론하면 void 가 뜸
  }

  //hot module reload : H.M.R (react 또는 vue 에서 사용)
  // 사용자가 코드를 수정하고 있는지 아닌지 계속 확인함
  // 사용자의 코드를 지속적으로 감시할 수 있는 코드
  // 지속적인 이벤트 등을 감시하기 위한 코드
  // 옛날 방식
  function infiniteLoop(): never {
    while (true) {}
  }
}
