{
  // 함수
  // 타입스크립트의 함수 중요한 건 매개변수와 반환값의 타입을 지정해주는 것
  // 반환값이 따로 없을 때는 void를 넣어주기
  // 함수 선언 시에는 매개변수 타입을 꼭 명시!
  // 함수 사용하는 쪽에서는 타입 추론 동작하긴함

  // ✅ 기본 함수 정의
  // 1) 함수 선언식
  function greet(): void {
    console.log("hi");
  }
  greet(); // hi

  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }
  sum(10, 20);

  // 2) 함수 표현식
  const greet1 = function (): void {
    console.log("hi");
  };
  greet1(); // hi

  const sum1 = function (n1: number, n2: number): number {
    return n1 + n2;
  };
  sum1(10, 20);

  // 3) 화살표 함수
  const greet2 = (): void => console.log("hi");
  greet2(); //hi

  const sum2 = (n1: number, n2: number): number => n1 + n2;
  sum2(1, 2);

  // 함수 타입 지정 방법
  // 방법1. 함수 자체에 매개 변수와 반환 값의 타입을 지정하는 방법(추천)
  const gret = function (): void {
    console.log("great");
  };
  const sum4 = (n1: number, n2: number): number => n1 + n2;

  // 방법2 변수에 함수의 매개 변수와 반환 값의 타입을 지정하는 방법(비추)
  const greeet: () => void = function (): void {
    console.log("great");
  };
  const sum3: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;

  // 문자열 매개변수로 받고 반환x
  const printValue: (value: string) => void = (value) => {
    console.log(value);
  };
  const printVal = (value: string): void => {
    console.log(value);
  };

  // 여러개의 숫자를 받을 때 ... 활용
  // reduce 이용하여 총합 반환
  const add: (...numbers: number[]) => number = (...numbers) =>
    numbers.reduce((result, num) => result + num, 0);
  const add2 = (...numbers: number[]): number => {
    return numbers.reduce((result, num) => result + num, 0);
  };

  // 객체를 매개변수로 받음
  const printObj: (userObj: { name: string }) => void = (userObj) => {
    console.log(userObj.name);
  };
  const printObj2 = (userObj: { name: string }): void => {
    console.log(userObj.name);
  };

  // 타입 오퍼레이터 : 자바스크립트의 or 연산자와 and 연산자 같은 역할을 하는
  // 타입 스크립트의 오퍼레이터는 유니온 타입과 인터섹션 타입이 있다.
  // ✅ 유니온 타입 : or 연산자와 같은 역할을 하는
  // 타입스크립트 오퍼레이터로 여러 개의 타입을 결합 한 타입
  // 유니온 타입은 연결된 타입 중 1개만 만족하면 된다.
  // 사용 예시 : 다양한 타입 허용하고 싶을 때
  const uni = (value: number | string): void => console.log(value);
  uni("a");
  uni(10);

  // 🤔 유니온 타입은 여러 타입 중 어떤 타입과 일치하는지 보장할 수 없기 때문에
  // 특정 타입의 메서드를 사용하려고 하면 에러가 난다. (ex .toFixed)
  // => 타입 가드라는 개념을 사용하여, 해당 메서드를 사용할 수 있는 타입인지 명시
  function uni2(value: number | string): void {
    if (typeof value === "number") console.log(value.toFixed(0));
    else console.log(value);
  }
  uni2(10.123);
  uni2("A");

  // ✅ 인터섹션 타입 : and 연산자와 같은 역할을 하는
  // 타입스크립트 오퍼레이터를 사용하여 2개 이상의 타입을 결합한 타입
  // 인터섹션 타입은 연결된 타입을 모두 만족해야 한다.
  // 사용 예시 : 여러 타입을 하나로 합치고 싶을 때

  // 예시) 기본 타입 간에는 사용하지않는다
  let value: string | number; // 숫자 또는 문자 가능
  let value2: string & number; // 불가능. 기본 타입은 겹칠 수 없음음

  // 예시) 객체에 대한 타입에 주로 사용
  const user1: { name: string; age: number } & { title: string } = {
    name: "John",
    age: 30,
    title: "Software Engineer",
  };

  // 예시) 타입 별칭을 이용한 인터섹션
  type User = {
    name: string;
    age: number;
  };
  type Developer = {
    skill: String;
  };
  type HumonDev = User & Developer;
  let dev2: HumonDev = {
    name: "jieun",
    age: 20,
    skill: "Ts",
  };

  // ✅ 함수 오버로드
  // 함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능
  // 유니온 타입의 단점을 보완하며, 타입 안전성을 높임
  // 주로 사용하는 이유
  // - 타입스크립트에서 함수를 사용할 때 정확한 타입 추론을 위해
  // - 함수의 사용자 입장에서 다양한 호출 형태를 안전하게 처리하기 위해 (유니온 타입 불편함 보완)
  // 함수에 대해 설명을 보충해주는 느낌
  // 함수 외부에서 사용할때를 위해서 사용

  // 함수의 경우의 수들을 위에 나열하고, 구현식 하나만 있도록 하기
  // ❗함수 오버로드는 함수 선언문에서만 가능
  // ❗화살표 함수 에서는 함수 오버로드 불가능

  function sum6(n1: string, n2: string): string;
  function sum6(n1: string, n2: number): string;
  function sum6(n1: number, n2: string): string;
  function sum6(n1: number, n2: number): number;
  function sum6(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  }
  const result1 = sum6(1.2, 2.3);
  const result2 = sum6("A", "B");

  // ⚠️ 함수 오버로드의 한계
  // 함수 오버로드 사용할 때는 모든 가능한 조합을 작성해야함
  // -> 작성된 오버로드 외의 호출 에러 발생
  // 해결 방법으로 타입 단언이 나옴
  const result3 = sum6(1.2, 2.3) as number; // 타입 단언으로 타입을 명시

  // 🌟 never
  // 절대 반환되지 않는 함수에 사용하는 타입
  // 예외를 던지거나, 무한 루프에 빠져 끝나지 않는 함수
  function throwError(message: string): never {
    throw new Error(message); // 예외 발생 후 함수 종료 X
  }
  // throwError() 함수는 정상적으로 끝나지 않음
  // 에러를 던지고 종료 => 반환값 x (never)
  // 타입스크립트는 이런 함수를 never로 추론

  // ✅ 옵셔널 파라미터
  // 옵셔널 파라미터는 ? 기호로 표시
  // ? 기호로 표시된 매개변수는 생략 가능
  // ❗ 옵셔널 파라미터는 필수 매개변수 뒤에만 올 수 있음
  // 타입스크립트는 생략된 경우 undefined 로 간주
  function printUserInfo(name: string, age?: number): void {
    if (age !== undefined) {
      console.log(`${name}, ${age}`);
    } else {
      console.log(`${name}`);
    }
  }
  printUserInfo("jieun"); // jieun
  printUserInfo("jieun", 26); // "jieun, 26"

  // 이런 경우 오류
  // 필수 파라미터(name) 뒤에 옵셔널 파라미터(age)가 먼저 올 수 없음
  // function wrong(age?: number, name: string): void {}

  // 이런 경우 오류
  // 옵셔널 파라미터와 기본값을 같이 쓰면 오류
  // function greet(name?: string = "Anonymous") {
  //   console.log(`Hello, ${name}`);
  // }

  // 😎 해결 방법
  // function greet(name?: string): void {
  //   const finalName = name ?? "Anonymous";
  //   console.log(`Hello, ${finalName}`);
  // }

  // name ?? "Anonymous"
  // name이 undefined일 때만 "Anonymous"로 설정한단 뜻
  // -> 값이 들어오면 그 값을 쓰고, 안 들어오면 "Anonymous"

  // 💡 ?? 예시
  // console.log(undefined ?? "Default"); // "Default"
  // console.log(null ?? "Default");      // "Default"
  // console.log('' ?? "Default");        // "" <- 빈 문자열은 그대로 출력

  // ✅ 타입 별칭
  // type 키워드를 사용해 나만의 타입 이름을 정의할 수 있음
  // 재사용성, 가독성 굿
  // 기존 타입들을 조합해 새로운 타입 만들기 가능
  // 같은 파일 내에서만 유효
  // 💡 권장 규칙 : 첫글자 대문자로 하기
  type TUser = {
    name: string;
    age: number;
  };

  function printUser(user: TUser): string {
    return `Name: ${user.name}, Age: ${user.age}`;
  }

  // 타입 별칭은 유니온이나 인터섹션타입과 자주 사용된다
  type ID = string | number;
  type WithTimestamp = {
    createdAt: Date;
    updatedAt: Date;
  };
  type UserWithTime = TUser & WithTimestamp;

  // 타입 별칭은 중첩 타입, 재귀 타입으로도 정의 가능해서 트리 구조에 유용
  type Category = {
    name: string;
    subCategories?: Category[]; // 자기 자신을 포함할 수 있음
  };

  // 리터럴 타입
  // 값 자체를 타입으로 씀
  // 정해진 값만 허용해야할 때 사용
  let num2: 5 = 5;
  // num2 = 1; // 오류
  num2 = 5;
  // 값 자체를 타입으로 넣어서 5만 들어갈 수 있음

  // 리터럴 타입은 string, number, boolean 값 모두 가능
  // 리터럴 유니온 타입으로 자주 쓰임
  type Direction = "left" | "right" | "up" | "down";

  // 함수 매개변수에 리터럴 타입을 직접 적용 가능
  function setMode(mode: "light" | "dark") {
    console.log(`Mode: ${mode}`);
  }

  // 리터럴 타입은 as const와 함께 자주 쓰인다
  // as const 를 쓰면 객체나 배열의 모든 프로퍼티가 리터럴 타입으로 고정 ㄷㄷ
  const config = {
    theme: "dark",
    layout: "grid",
  } as const;
}
