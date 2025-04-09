{
  // 함수
  // 매개 변수와 반환 값의 타입을 지정해주는 것
  // 함수 표현식
  //   함수 자체에 매개 변수와 반환값의 타입을 지정
  //   변수에 함수의 매개변수와 반환값의 타입을 지정하는 방법

  const greet: () => void = function greet(): void {
    console.log("hi");
  };

  const sum: (n1: number, n2: number) => number = function sum(n1, n2) {
    return n1 + n2;
  };
  console.log(sum(1, 2));

  // 화살표 함수
  const sum1: (n1: number, n2: number) => number = (n1, n2) => {
    return n1 + n2;
  };
  console.log(sum1(1, 2));

  const printValue: (value: string) => void = function printValue(value) {
    console.log(value);
  };

  // 함수 선언문
  function add(...number: number[]): number {
    return number.reduce((result, num) => result + num, 0);
  }
  console.log(add(4, 5, 6));

  // 함수 표현식
  const add1 = function (...number: number[]): number {
    return number.reduce((result, num) => result + num, 0);
  };

  console.log(add1(4, 5, 6));

  // 화살표 함수
  const add2 = (...number: number[]): number =>
    number.reduce((result, num) => result + num, 0);

  console.log(add2(4, 5, 6));
}

{
  // union type
  // | -> 파이프 기호
  function printValue(value: number | string | { name: string }): void {
    console.log(value);
  }
  printValue(10);
  printValue("A");
  printValue({ name: "jeong" });

  // type guard : 타입을 좁혀주는 행위
  let dataSet: ({ name: string; price: number } | (string | number)[])[] = [
    { name: "phone", price: 255555 },
    { name: "pad", price: 984225 },
    ["phone1", 50],
    ["phone2", 500],
  ];

  if ("name" in dataSet[0]) {
    console.log(dataSet[0].name);
  }

  // n1: number, n2: number -> number
  // n1: string, n2: number -> string
  // n1: number, n2: string -> string
  // n1: string, n2: string -> string
  const sum = (n1: number | string, n2: number | string): number | string => {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  };
  console.log(sum(10, 20));
  console.log(sum("A", "B"));
}

{
  // never vs void
  // 절대 반환되지 않는 값을
  // 함수 내부에서 설정하고 있구나라는걸 좀 더 직관적으로 알 수 있음
  // 반환 타입을 명시적으로 알 수 있음..
  function throwError(message: string): never {
    throw new Error(message);
  }

  // hot module reload :
  // 사용자의 행동을 지속적으로 감시하는 것...
  // (값을 변경하는지, 저장하는지 뭐 그런것)
  function infinitLoop(): never {
    while (true) {}
  }
}

{
  // 함수 오버로딩 : 함수 선언문에서만 쓸 수 있음
  // 함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능 (union)
  // 유니온 타입이 많을 때는 쉽게 사용하지 못할 수도 있음.
  function sum(n1: number, n2: number): number;
  function sum(n1: number, n2: string): string;
  function sum(n1: string, n2: number): string;
  function sum(n1: string, n2: string): string;
  function sum(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  }
  const result = sum(1.2, 2.4);
  // console.log(result);
  console.log(result.toFixed(0));
  const result1 = sum("a", "b");
  console.log(result1);
}

{
  // optional parameter : 안올수도 있고 올수도 있는 파라미터에 붙여주는 것
  // 맨 앞 파라미터에는 써주면 안되고 마지막에만 써줘야 함
  function prinUserInfo(name: string, age?: number): void {
    if (name && age) {
      console.log(`${name}, ${age}`);
    } else {
      console.log(`${name}`);
    }
  }
  prinUserInfo("Jeong");
}
