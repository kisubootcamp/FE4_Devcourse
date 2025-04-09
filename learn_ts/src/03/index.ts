{
  //함수 타입

  //함수 선언문
  // function name(arg:type, arg:type...):returnType {}

  //함수 표현식
  //let value = function name(arg:type, arg:type...):returnType {}
  //let value:(arg:type, arg:type...) => returnType = function name(arg, arg) {}

  //화살표 함수
  //let valueName = (arg:type, arg:type...):returnType => {}

  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }
  let sumResult = sum(1, 2);
  console.log(sumResult);

  function add(numbers: number[]): number {
    return numbers.reduce((acc, number) => acc + number, 0);
  }
  const addResult = add([1, 2, 3]);
  console.log(addResult);
  //함수의 매개변수는 타입 추론이 되지 않는다.
}

{
  // 유니온 타입
  // | 파이프 기호 사용
  // 여러 타입을 지정해줄 수 있다
  // 타입 가드(조건문)를 필수적으로 사용해야하는 단점이 존재한다
  function name(value: number | string): void {
    console.log(value);
  }
  name("이준호");
  name(28);

  function printValue(value: number | string): void {
    if (typeof value === "number") console.log(value.toFixed(0));
    else console.log(value);
  }
  printValue(10.123);
  printValue("A");

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

  // 함수
  // never void
  // never : 반환 될 수 없는 값
  let obj: Record<string, never> = {};
  function throwError(message: string): never {
    throw new Error(message);
  }

  function infinitLoop(): never {
    while (true) {}
  }
  //함수 오버로드는 함수 선언문에서만 사용 가능하다.
  //*유니온 타입일 때만* 함수 오버로드를 사용한다.
  //오버로드 작성시 타입 가드를 사용할 필요가 없어진다.
  //함수 오버로드는 내부를 위한 것이 아닌 외적인 요인들로 인하여 사용한다.
  function overLoad(n1: number, n2: number): number;
  function overLoad(n1: string, n2: number): string;
  function overLoad(n1: string, n2: string): string;
  function overLoad(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  }
  overLoad(1.5, 1.8); //외적인 호출 / 타입 가드를 쓸 필요가 없다

  //타입 단언 (as type)
  overLoad("이", "준호") as string;

  // 옵셔널 파라미터(?:type)
  // 전달 되지 않을 수 있는 데이터(?)에 사용
  // 함수의 파라미터에 들어가는 값은 자동으로 첫번째 값에 전달 되기 때문에 첫번째 인자에는 사용 할 수 없다.
  function optionalPram(n1: string, n2?: number | string): void {
    console.log(n1);
  }
  optionalPram("옵셔널 파라미터");
}

{
  // 인터섹션 타입 type & type
  // 객체에서만 사용 가능하다
  let value1: { name: string; age?: number };
  let value2: { name: string } & { age?: number }; //위 코드와 같다
  value1 = {
    name: "이준호",
  };
  value2 = {
    name: "이준호",
  };
}

{
  //타입 별칭
  //첫 글자 대문자
  //사용자가 타입의 이름을 지어주는 것
  type Level = number; //Level이라는 타입은 number 대신 사용 가능하다.
  let lever1: Level = 30;
  let lever2: number = 30;

  // 타입 별칭
  // type -> 나만의 타입을 지정하는 방법
  type Id = {
    id: number;
  };
  type Value = {
    value: string;
  };
  type Attributes = { weight: number; color: string };
  //객체 타입 별칭을 활용한 엔퍼센드 활용 &
  type ComplexData = Id &
    Value & {
      attributes: Attributes;
    };
  type ComplexStructure = ComplexData[];

  let complexStructure: ComplexStructure = [
    { id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
    { id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
    { id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
  ];

  // type 별칭 활용하여 코드 깔끔하게 만들기
  type Greet = (name: string) => string;
  const greet: Greet = (name) => `hello, ${name}`;
}

{
  //리터럴 타입 -> 값 자체를 타입으로 사용하는 것
  let num5: 5 = 5;
  //num5 = 3; <- 값이 5만 들어갈 수 있는데 3이 들어가서 에러가 뜬다.
}
