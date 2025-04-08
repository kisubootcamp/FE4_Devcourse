// ✅ 타입스크립트에서 모듈이 아닌 파일들은 전역 스코프를 공유하는 스크립트로 취급된다.
// 따라서 서로 다른 파일이라도 변수명이 중복되면 에러가 발생할 수 있다
// => 해결방법1. {} 중괄호를 이용하여 블록 스코프를 분리하여 같은 이름의 변수 선언 허용가능
// => 해결방법2. import 또는 export 를 추가해 파일을 모듈로 만들면,
// 각 파일이 독립적인 스코프를 가져서 전역 변수 충돌이 발생하지 않는다.

{
  // ✅ 타입스크립트 기본타입 정리
  // 1. string - 문자열
  let name: string = "Alice";
  let greeting: string = `Hello, ${name}`;
  let single: string = "Single Quote";
  let multiLine: string = `This is
  a multi`;

  // 2. number - 숫자형 (정수, 소수 등)
  let age: number = 10; //10진수
  let hex: number = 0xff; //16진수
  let binary: number = 0b1010; //2진수
  let float: number = 3.14; //실수

  // 3. boolean - 논리형
  // truthy : 조건문에서 true 처럼 평가되는 값 (falsy 제외한 모든 값)
  // falsy : 조건문에서 false 처럼 평가되는 값
  // (false, 0, -음수, 0n빅인트, ""빈문자열, null, undefined, NaN)
  let bool1: boolean = true;
  let bool2: boolean = false;
  let bool3: boolean = !0;
  let bool4: boolean = 10 > 20;

  // 4. null
  // 5. undefined
  // 특수 자료형
  // 일반 변수에는 거의 안 쓰고, 옵셔녈 타입이나 초기화 안 된 상태 표현할 때 주로로 사용
  let something: null = null;
  let nothing: undefined = undefined;

  // 6. any - 아무 타입의 값이든 허용
  // 타입스크립트의 타입 검사를 무력화하는 특수 타입
  // 가능한 남용 피하기
  let anything: any = 10;
  anything = "A";
  anything = true;
  anything = null;
  anything = undefined;

  // 타입 스크립트는 오류 잡아주지 않음
  anything.toFixed(2);
  // .toFixed 는 숫자에만 사용가능한데도 오류 없음 -> 런타임에서 오류
  // any 는 타입 검사기가 뭐든지ok 하게 되서 => 안전성 낮음
  // => ide의 자동완성, 경고, 에러 메시지 전부 무력화

  // 7. unknown
  // any 처럼 모든 타입의 값을 허용하지만, 실제로 사용할 때 타입 먼저 확인하는 특수 타입
  let input: unknown = "hi";
  input = 20;
  input = true;
  input = null;
  input = undefined;
  input = 3.14;
  // unknown 을 쓰려면 타입 좁히기가 필요
  // 💡 타입 좁히기 : 타입이 여러 가능성이 있을 때,
  // 조건문 등을 사용해서 실제 타입을 좁혀가는 과정
  if (typeof input === "number") {
    console.log(input.toFixed(0)); // 타입 검사 없으면 에러
  }

  // 💡 any와 unknown 차이
  // 둘다 모든 타입을 담을 수 있지만, 안전성 측면에서 차이가 있음
  // any는 무조건 허용, unknown은 허용하되 사용 전에 검사 필수.

  // 8. array 배열
  let arr: [] = [];
  let numArr: number[] = [10, 20]; // 숫자배열일때는 number[]
  let numArr2: Array<number> = [10, 20]; //구버전, 이런게 있구나 정도

  let strArr: string[] = ["a", "b"]; // 문자배열일때는 string[]
  let strArr2: Array<string> = ["a", "b"];
  let boolArr: boolean[] = [true, false]; // 논리배열일때는 boolean[]

  // 다차원 배열 예제
  let cube: number[][][] = [
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ],
  ];

  // 9. tuple 튜플
  // 특정 형태를 갖는 배열을 의미
  // 고정된 개수 + 순서에 따른 타입
  let mixArr: [number, string] = [10, "a"]; // 튜플 ( 고정된 길이, 요소별 타입 정해져 있음 )
  let mixAtt: (number | string)[] = [10, "a"]; // 일반 배열 ( 모든 요소가 number 또는 string이면 된다, 순서상관x )
  let mixArr2: [number, number[]] = [10, [20, 30]];
  let mixArr3: [number, [], {}] = [10, [], {}];

  // 10. bigint : 숫자의 n 을 붙이면 bigint
  //   Number.MAX_SAFE_INTEGER;
  // 자바스크립트에서 정교하게 표현해줄수있는 수에서 더 표현해주기 위해 쓰는 bigint
  const bigNumber: bigint = 90000000000000000n;
  // 빅인트끼리 연산도 가능하다
  const a = 1n + 2n;

  // 11. 객체
  let obj: {} = {};
  // {} : null 과 undefined 를 제외한 모든 값을 허용

  let obj2: object = {};
  // object : 원시값을 제외한 진짜 객체 타입만 허용
  // -> {}, 배열, 함수 등 가능 (숫자, 문자, 문자열 불가)

  // 💡 유틸리티 타입 (= 유틸리티 함수)
  // 이미 정의된 타입을 재사용하거나 변형할 수 있도록 도와주는
  // 타입스크립트에서 제공하는 기본 타입 도구

  // Record<string, never> - 사실상 빈 객체만 허용
  // 객체 키는 있을 수 있지만, 키 마다 값은 절대 존재할 수 없다!(never 타입)
  // => 결과적으로 어떤 키도 가질 수 없어서 빈 객체만 가능!

  // ✔️ 근데 일반적인 의미의 완벽한 빈객체는 아님
  // -> 굉장히 특수한 타입으로, 타입 시스템 상에서 빈 객체를 강제할 때 사용

  // 왜 특수한가?
  // key는 string 만 가능하다고 해놓고
  // 값은 never로 설정 -> 어떤 속성도 실질적으로 정의x
  // 모순적인 조합을 통해 빈 객체를 표현
  let obj1: Record<string, never> = {};

  // 🌟 object, {} 는 되도록 지양하고, 구체적인 타입 작성을 권장

  let user: object = {
    name: "jieun",
    age: 20,
  };

  // 권장방식
  // , 로 구분 지어도 되지만 권장은 ;
  let user1: { name: string; age: number } = {
    name: "jieun",
    age: 20,
  };

  let person: {
    name: string;
    likesFood: string[];
    address: {
      street: string;
      city: string;
    };
  } = {
    name: "john",
    likesFood: ["apple", "banana"],
    address: {
      street: "gang",
      city: "seoul",
    },
  };

  // -------------------------------//
  // 타입 추론
  // 개발자가 명시적으로 타입을 지정하지 않아도
  // 타입스크립트가 변수, 함수의 반환값, 매개변수 등을 기반으로
  // 타입을 자동으로 추론하는 기능 ( 타입이 단순한 경우에만 사용하는걸 추천 )
  let num = 10; // num: number로 추론됨
  let str = "hello"; // str: string
  let isLoggedIn = true; // isLoggedIn: boolean
  // 함수 매개변수에는 타입 추론이 거의 일어나지 않는다. (any 타입으로 추론됨)
  // 명시적으로 타입을 지정해주는게 좋다

  // let과 const 의 차이가 있음
  // let 은 일반적인 타입(string)으로 추론
  // const 는 값 자체를 타입으로 추론함 (리터럴 타입: "hi")
  let a1 = "hi"; // a1: string
  const b1 = "hi"; // b1: "hi" (리터럴 타입으로 추론)

  // 타입 추론의 장점
  // 코드가 더 짧고 간결해짐
  // 명시적 타입 지정이 필요 없는 경우에도 타입 안정성 유지
  // IDE 자동완성 및 경고 기능을 살릴 수 있음

  // readonly 속성
  // 객체의 속성 값을 수정하지 못하도록 읽기 전용으로 만드는 키워드
  // optional 속성 (?)
  // 객체 속성이 있을 수도, 없을 수도 있다는 것을 명시
  const user2: {
    readonly name: string;
    age?: number;
  } = {
    name: "minji",
  };

  user2.age = 23; // age는 옵셔널이지만 존재하므로 수정 가능
  //   user2.name = "yuna"; // 오류 name은 readonly라 값 수정 불가능
}
