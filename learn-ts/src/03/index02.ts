{
  // 함수의 매개변수와 반환값의 타입을 명시!!!
  // 유니온 타입
  // | -> 파이프 기호 사용. 연산자로 볼 수 있다.
  // 유니온 타입의 단점:
  let value: number | string = 10; // 유니온 타입으로 지정할 수 있는 타입의 개수는 제한이 없고, 같은 타입을 똑같이 적을 필요는 없다
  value = "A";

  function printValue(value: number | string | { name: string }): void {
    // value가 number 또는 string임을 나타냄
    if (typeof value === "number") console.log(value.toFixed(0));
    else console.log(value);
  }

  printValue(10);
  printValue("A");
  printValue({ name: "lee" });

  const sum = (n1: number | string, n2: number | string): number | string => {
    if (typeof n1 === "number" && typeof n2 === "number")
      return n1 + n2; // 타입 가드
    else return `${n1}${n2}`;
  };
  // n1 + n2; // 덧셈 operator는 유니온과 유니온 타입의 매개변수에는 사용할 수 없다.
  console.log(10 + 20);
  console.log("A" + "B"); // 덧셈이 문자열 연결 연산자의 역할을 함

  sum(10, 20);
  sum("A", "B");
}

{
  const sum = (n1: number | string, n2: number | string): number | string => {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2; // if문으로 특정한 상황을 지정해주고 나머지를 리턴하면 에러가 발생하지 않는다. <- 타입 가드라고 한다
    return `${n1}${n2}`; // 위 조건 이외라면 `${n1}${n2}`를 반환함을 명시함으로 에러를 막음
  };
  // n1 + n2; // 덧셈 operator는 유니온과 유니온 타입의 매개변수에는 사용할 수 없다.
  console.log(10 + 20);
  console.log("A" + "B"); // 덧셈이 문자열 연결 연산자의 역할을 함

  sum(10, 20);
  sum("A", "B");

  // 함수
  // never void
  // void
  // never: 의미론적으로 절대로 반환되지 않음을 더 명확히 표시(특수한 타입). 대부분의 경우에서 사용하지 않아도 에러가 발생하지는 않음. 사용함으로서 얻을 수 있는 이점: 함수의 반환값을 개발자에게 명시적으로 알릴 수 있음
  let obj: Record<string, never> = {};

  function throwError(message: string): never {
    // never: 반드시 절대로 반환되지 않는 값
    throw new Error(message);
  } // 에러를 처리하는 별도의 함수임으로 이해

  // 무한 루프 함수를 사용하는 케이스
  // hot module reload -> H.M.R
  // 사용자가 모듈을 수정하고 있는지를 반복적으로 검사함
  // 지속적인 감시가 필요할 때 작성
  function infinitLoop(): never {
    while (true) {}
  } // 메모리를 많이 잡아먹는 방식으로 지금은 웹 소켓 방식을 사용함
}

{
  const sum = (n1: number | string, n2: number | string): number | string => {
    // 개발자가 명시적으로 표기해도 만일의 가능성으로 선언된 타입 이외의 타입이 들어올 수 있다는 가정을 타입스크립트가 하기 때문에 오류가 발생
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else if (typeof n1 === "number" && typeof n2 === "string")
      return `${n1}${n2}`;
    else if (typeof n1 === "string" && typeof n2 === "string")
      return `${n1}${n2}`;

    throw new Error("error"); // void 혹은 never이기 때문에 undefined를 반환하지 않음을 확인시켜줌으로서 오류를 막음
    // -> 개발자 입장에서는 실행이 되지 않는 코드이지만, TS 입장에서는 코드의 문맥을 더 안전하게 체크할 수 있는 수단
    // 이외에도 확정값을 반환하는 형태로도 가능하다.
  };
  console.log(sum(10, 20));
  console.log(sum("A", "B"));
}

{
  // 함수 오버로드 -> 함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능
  // -> 함수의 매개변수나 반환값이 유니온일 때 사용
  function sum(n1: number, n2: number): number; // 함수 오버로드를 위해 설정
  function sum(n1: number, n2: string): string;
  function sum(n1: string, n2: number): number;
  function sum(n1: string, n2: string): string;
  function sum(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    // if문으로 특정한 상황을 지정해주고 나머지를 리턴하면 에러가 발생하지 않는다.
    else return `${n1}${n2}`; // 위 조건 이외라면 `${n1}${n2}`를 반환함을 명시함으로 에러를 막음
  }
  // n1 + n2; // 덧셈 operator는 유니온과 유니온 타입의 매개변수에는 사용할 수 없다.
  const result1 = sum(1.2, 2.3);
  console.log(result1.toFixed(0));

  const result2 = sum("A", "B"); // 오버로드중 string에 만족한다고 판단되기 때문에 string으로 작동함
  // 유니온 타입이 많을 때는 모든 조건을 구현해야 하기 때문에 쉽게 사용하기 힘들다.
}

{
  // 타입 단언
  function sum(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    // if문으로 특정한 상황을 지정해주고 나머지를 리턴하면 에러가 발생하지 않는다.
    else return `${n1}${n2}`; // 위 조건 이외라면 `${n1}${n2}`를 반환함을 명시함으로 에러를 막음
  }
  const result1 = sum(1.2, 2.3) as number; // number로 타입 단언
  const result2 = sum("A", "B") as string; // string으로 타입 단언
}

{
  // 옵셔널 파라미터
  // 두 파라미터가 옵션인 것 가능. 두번째 파라미터 옵션인 것 가능. 첫 번째 파라미터 옵션인 것 불가능
  // 이유: 어떤 경우에라도 첫 번째 파라미터로 값이 반환되는데, 2번째 파라미터는 값을 무조건 받는데 첫 번째 파라미터는 값을 받을 수도 안받을 수도 있다는 조건이 성립되지 않기 때문
  function printUserInfo(name: string): void;
  function printUserInfo(name: string, age: number): void; // 함수 오버로드는 매개변수가 옵셔널 타입일때 구분해주기 위해서도 사용할 수 있다.
  function printUserInfo(name: string, age?: number): void {
    // ?: 타입 추론
    if (name && age) {
      console.log(`${name}, ${age}`);
    } else {
      console.log(`${name}`);
    }
  }

  printUserInfo("Lee", 29);
  printUserInfo("JI"); // 에러가 나는 이유: TS는 지정된 키값들을 반드시 지정해줘야 한다.
  printUserInfo(""); // 사용하려고 할 때 자동완성으로 타입을 알려줌
}

{
  const getObject = () => {
    return {
      name: "ji",
    };
  };
}

{
  const getObject = () => ({
    name: "ji",
  });
}
