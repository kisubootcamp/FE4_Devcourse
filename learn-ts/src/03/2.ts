{
  // 유니온 타입
  // | -> 파이프 기호
  // 몇 개든 연결 가능함.
  // 타입을 지정할 수 있는 곳이라면 어디든지 유니온 타입으로 복수의 타입을 나타낼 수 있음.
  // 유니온 타입을 쓰면 튜플 방식을 쓸 필요가 없음.
  // 장점 : 한 번에 여러 타입을 지정할 수 있음.
  // 단점 : 변수에 담겨진 값을 사용하려고 할 때 타입 가드를 이용하여 타입을 좁혀줘야 함.

  let value: number | string | boolean = 10;
  value = 20;
  value = "A";
  value = true;

  function printValue(value: number | string | { name: string }): void {
    // 타입 가드
    if (typeof value === "number") console.log(value.toFixed(0));
    else console.log(value);
  }
  printValue(10.123);
  printValue("A");
  printValue({ name: "yubin" });

  // number + number -> number
  // string + number -> string
  // number + string -> string
  // string + string -> string
  // string 타입을 기준으로 if문을 작성하려면 위의 4가지 경우를 전부 고려해서 조건문을 달아줘야 함.
  // 따라서 아래와 같이 number 타입을 기준으로 if문을 작성하면 비교적 간단함.
  const sum = (n1: number | string, n2: number | string): number | string => {
    // 타입 가드
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  };

  console.log(10 + 20);
  console.log("A" + "B"); // 덧셈일 때만 가능 (뺄셈은 불가능)
  console.log(sum(10, 20));
  console.log(sum("A", "B"));

  // 함수 오버로드 -> 함수 선언문에서만 사용 가능 !!
  // -> 함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능. (함수의 매개 변수나 반환 값이 유니온 타입일 때만 사용 가능)
  // 오버로드를 하나라도 해줬다면 모든 경우의 수를 다 해줘야 함. 그렇지 않으면 함수를 호출할 때 에러가 남.
  // 유니온 타입의 조건이 많을수록 모든 경우의 수를 구현해주기 힘들다는 한계가 있음. (보통 2개까진 가능)
  function sum_(n1: number, n2: number): number;
  function sum_(n1: number, n2: string): string;
  function sum_(n1: string, n2: number): string;
  function sum_(n1: string, n2: string): string;
  function sum_(n1: number | string, n2: number | string): number | string {
    // 타입 가드 (오버로드를 해도 함수 안에 typeof 처리를 해줘야 함) -> 오버로드는 함수 외부의 문제!
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  }

  const result1 = sum_(1.2, 2.3);
  console.log(result1); // 3.5 -> 숫자가 담겨있음.
  // 타입스크립트는 불확실한 걸 싫어함. 안전한 걸 좋아함.
  // 개발자는 여기에 number 타입이 올 거라고 확신할 수 있지만, 타입스크립트는 number나 string 타입이 다 올 수 있다고 생각함.
  // console.log(result1.toFixed(0)); // 에러

  // 아래와 같이 typeof를 써줘야 에러가 나지 않음
  // if (typeof result1 === "number") {
  //   console.log(result1.toFixed(0));
  // }

  // sum 함수에서는 에러 O, sum_ 함수(오버로드)에서는 에러 X
  // result1에 마우스를 올려보면 명확하게 number 타입으로 지정된 것을 알 수 있음.
  console.log(result1.toFixed(0));

  const result2 = sum_("A", "B");

  // 타입 단언 (함수 오버로드의 단점을 보완해줌)
  const result1_ = sum_(1.2, 2.3) as number;
  const result2_ = sum_("A", "B") as string;

  // 함수
  // never 타입 -> 절대로 올 수 없는 값, 절대로 가질 수 없는 값
  let obj: Record<string, never> = {};
  // 절대로 값을 반환할 수 없는 함수
  // void를 써도 틀린 건 아니지만, never를 써야 반환 값이 없다고 명확하게 지정해주게 됨.
  function throwError(message: string): never {
    throw new Error(message);
  }

  // never를 안 쓴다고 문제가 되진 않음.
  // BUT, never를 쓰면 개발자나 타입스크립트에게 명시적으로 절대 반환될 수 없다고 알려줄 수 있음.
  // hot module reload -> H.M.R : 사용자의 코드(이벤트)를 지속적으로 감시하다가 코드가 변경되면 웹 브라우저에 바로 반영해줌.
  // 웹 소켓 이전의 방식. 요즘 실무에서 사용하진 않음.
  function watchHMR(): never {
    while (true) {}
  }

  // 타입스크립트 컴파일러는 의심이 매우 많음.
  // 우리 개발자 입장에서는 애초에 매개 변수를 넘길 때부터 number나 string 타입이 아니면 걸러지므로 모든 경우를 체크해준 것이지만,
  // 타입스크립트 컴파일러는 만에 하나 알 수 없는 이유로 if문을 안 거칠 때의 경우를 생각함.
  // BUT, 아래의 방식보다 위의 방식을 선호함.
  const sum2 = (n1: number | string, n2: number | string): number | string => {
    // 타입 가드
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else if (typeof n1 === "string" && typeof n2 === "number")
      return `${n1}${n2}`;
    else if (typeof n1 === "number" && typeof n2 === "string")
      return `${n1}${n2}`;
    else if (typeof n1 === "string" && typeof n2 === "string")
      return `${n1}${n2}`;

    // 이렇게 해줘야 타입스크립트 컴파일러는 undefined를 반환할 일이 없겠구나 하고 에러를 없앰.
    // 아래의 코드는 개발자 입장에서 상식적으로 실행이 되지 않는 코드임.
    throw new Error("error");
    // 어차피 위의 조건문에서 다 걸러지므로 아래와 같이 해줘도 됨.
    // return "";
  };

  const getObject = (): { name: string } => {
    return {
      name: "yubin",
    };
  };

  // 객체를 return 생략한 후 반환하고 싶으면 ()로 묶어주면 됨.
  const getObject2 = (): { name: string } => ({
    name: "yubin",
  });
}
