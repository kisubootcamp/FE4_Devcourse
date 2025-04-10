{
  // 함수
  // 매개 변수와 반환 값의 타입을 지정해주는 것

  // 함수 옆에 반환값에 대한 타입을 지정한다.
  // void -> 아무것도 반환하지 않는다.
  // 함수 선언식
  function greet(): void {
    console.log("greet");
  }

  greet();

  // 함수의 매개변수는 함수의 선언만으로는 어떤 값이 올지 알 수 없으므로 any로 추론
  // 그래서 매개변수는 직접 타입을 지정 해줘야 함
  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }

  const result = sum(10, 20);
  console.log(result);

  // 매배겸수 string 으로 타입 지정
  // 반환값은 타입 추론으로 void
  // 보통 return 문이 없으면 void
  function printValue(value: string) {
    console.log(value);
  }

  printValue("A");

  // number[] 로 타입 지정
  // 이렇게 하자마자 reduce 안쪽 매개변수 자동으로 추론됨
  // 반환값은 타입 추론으로 인해 number 로 추론
  // 직접 지정 해줘도 됨
  function add(numbers: number[]) {
    return numbers.reduce((result, num) => result + num, 0);
  }

  const res = add([1, 2, 3]);
  console.log(res);

  // 배열이 아닌 값을 전달 한다면 스프레드 연산자를 이용해 바꿔줄 수 있음.
  function add1(...numbers: number[]) {
    return numbers.reduce((result, num) => result + num, 0);
  }

  const res1 = add1(1, 2, 3);
  console.log(res);

  function printObj(userObj: { name: string }) {
    console.log(userObj.name);
  }

  const res2 = printObj({ name: "PSY" });
}

console.log("------------------------------");

{
  // 함수 표현식
  // -> 함수 자체에 매개 변수와 반환값의 타입을 지정하는 방법
  const greet = function greet(): void {
    console.log("greet");
  };

  greet();

  // -> 변수에 함수의 매개 변수와 반환값의 타입을 지정하는 방법
  const sum: (n1: number, n2: number) => number = function sum(n1, n2) {
    return n1 + n2;
  };
  // 내가 보통 하는 방법
  // return 값은 API 데이터 받아오는 거 아니면 추론에 맡기는 편
  const sum1 = (n1: number, n2: number) => n1 + n2;

  const result = sum(10, 20);
  console.log(result);
}

console.log("------------------------------");

{
  // 유니온 타입
  // | -> 파이프 기호
  function printValue(value: number | string | { name: string }): void {
    console.log(value);
  }

  printValue(10);
  printValue("A");
  printValue({ name: "PSY" });
}

console.log("------------------------------");

{
  // 타입 가드
  // 타입을 좁혀 주는 행위
  function printValue(value: number | string | { name: string }): void {
    if (typeof value === "number") console.log(value.toFixed(0));
    else console.log(value);
  }

  printValue(10);
  printValue("A");

  // 유니온 타입과 유티온 타입엔 + 연산자를 사용할수 없다 !
  // 이럴때 타입 가드를 사용하여 사용하려는 타입을 좁혀줘야 한다.
  // 매우 중요
  const sum = (n1: number | string, n2: number | string): number | string => {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  };

  sum(10, 20);
  sum("Hello", "World");

  // 함수 오버로드
  // 함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능. 매개변수, 반환값이 유니온 일떄. -> 반대로 유니온이 아니면 안써도 됢
  // 유니온 타입일때 반환값에 대한 정보를 보충해주는 기법
  // 타입 단언 -> 이 타입은 뭐다! 하는 개발자가 지정해주는 방법 (as Type)
  // 이 방법은 타입이 확실할때 사용
  function sum1(n1: number, n2: number): number;
  function sum1(n1: string, n2: number): string;
  function sum1(n1: number, n2: string): string;
  function sum1(n1: string, n2: string): string;
  function sum1(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  }
  const result1 = sum1(1.2, 2.3);
  console.log(result1.toFixed(0));

  const result2 = sum1("A", "B");

  // never
  // 절대 발생하지 않는 값을 의미하는 타입
  // 함수 반복문이나 에러 핸들링으로 인해 함수의 끝에 절대 도달하지 않는 경우에 never 타입 사용
  function throwError(message: string): never {
    throw new Error(message);
  }
  // hot module reload -> H.M.R
  function infinitLoop(): never {
    while (true) {}
  }
}

console.log("------------------------------");

{
  // 옵셔널 파라미터
  // ? 를 활용하여 있어도 되고 없어도 되는 매개변수를 지정
  // 혹은 기본값 지정
  // 단, 첫 번째 매개변수가 옵셔널인데 두 번째 매개변수는 필수이면 안됨
  // 함수 오버로드도 작성 가능. 하지만 굳이.. ?
  function printUserInfo(name: string, age?: number) {
    if (name && age) console.log(`${name}, ${age}`);
    else console.log(name);
  }

  printUserInfo("PSY");
}

console.log("------------------------------");

{
  // 유니온 타입 | (파이프) expr1 || expr2
  // 인터섹션 타입 & (앰퍼샌드) expr1 && expr2

  let value: string & number; // never 타입

  // { name: string, age: number }
  let value3: { name: string } & { age?: number };
  // 타입 선언한 두개의 객체의 항목들이 모두 만족해야 한다.
}

console.log("------------------------------");

{
  // 타입 별칭
  // type -> 나만의 타입을 지정하는 방법
  // 권장 규칙 -> 첫 글자는 항상 대문자
  // 이점 1. 나만의 이름 타입
  // 이점 2. 재사용성 증가
  type Level = number;
  let level: Level = 10;
  let level2: Level = 20;

  type Attributes = { weight: number; color: string };
  type ComplexType = {
    id: number;
    value: string;
    attributes: Attributes;
  };

  let complexStructure: ComplexType[] = [
    { id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
    { id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
    { id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
  ];
}

console.log("------------------------------");

{
  // 타입 별칭으로 선언한 타입음 마우스를 올리면 어떤 값의 어떤 타입인지 볼 수 있음.
  // interface 는 안됨..

  type User = {
    name: string;
    age: number;
  };

  type Developer = {
    skill: string;
  };

  let human: User = {
    name: "PSY",
    age: 20,
  };

  let developer01: User & Developer = {
    name: "PSY",
    age: 20,
    skill: "TypeScript",
  };
}

console.log("------------------------------");

{
  type Greet = (name: string) => string;
  const greet: Greet = (name) => `Hello, ${name}!`;

  let point = [10, 20]; // x좌표, y좌표

  type BookData = {
    readonly id: number;
    name: string;
    price: number;
    relaseDate?: Date;
  };

  type OrderData = {
    orderId: string;
    items: BookData[];
  };

  let myOrder: OrderData = {
    orderId: "ord-123",
    items: [
      {
        id: 1,
        name: "123",
        price: 28000,
      },
      {
        id: 2,
        name: "1234",
        price: 28000,
      },
    ],
  };
}

console.log("------------------------------");

{
  // 리터럴 타입
  const num = 10; // const 는 재할당이 불가능한 키워드. 그래서 타입값이 할당된 값으로 지정된다.
  // Or
  let str: "Hello" = "Hello";
}
