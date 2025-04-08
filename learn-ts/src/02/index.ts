// 코드 블럭
// {} 중괄호
{
  // 1. string - 문자
  let name: string = "Alice";
  let greeting: string = `Hello ${name}`;
  let single: string = "Single Quote";
  let multiLine: string = `This is
  a multiline string`;

  // 2. number - 숫자
  let age: number = 10; // 10진수
  let hex: number = 0xff; // 16진수
  let binary: number = 0b1010; // 2진수
  let float: number = 3.14; // 실수

  // 3. boolean - 논리형
  // truthy, falsy
  let bool1: boolean = true;
  let bool2: boolean = false;
  let bool3: boolean = !0;
  let bool4: boolean = 10 > 20;

  // 4. null
  let nothing: null = null;

  // 5. undefined
  let notDefined: undefined = undefined;

  // 6. any - 모든 타입을 허용
  // 타입을 검사하지 않는다.
  // 타입 검사를 무력화 하는 타입이기 때문에 남용을 피해야 한다.
  // 타입 문제가 발생하면 개발자 책임
  let anything: any = 10;
  anything = 1;
  anything = "";
  anything = true;
  anything = null;

  // 7. unkonwn - any 순한맛
  // 타입 검사를 하지 않음
  // 단, 그 값을 사용하려고 할 때는 타입을 검증해야 함
  // 어떤 타입의 값이든 다 저장 가능
  // 어떤 연산에도 참여할 수 없으며 어떤 메서드도 사용할 수 없다
  // 단순히 이야기 하면 값만 저장 하는 행위밖에 못한다.
  let input: unknown = "Hello";
  input = true;
  input = null;
  input = undefined;
  input = 3.14;

  // 이를 활용하기 위해선 검증을 거쳐야 한다.
  if (typeof input === "number") console.log(input.toFixed(2));

  // 8. Array
  let arr: (string | number)[] = [];
  arr = [10, 20, ""];
  // 제네릭 표기법
  let arr1: Array<string> = ["", ""]; // 옛날 표기법 요즘음 [] 이렇게 선언

  let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  let matrix1: Array<Array<number>> = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  // 9. 튜플 - tuple
  // 특정 형태를 갖는 배열을 의미
  let arr2: [number, string, boolean] = [10, "", true];
  let arr3: [number, number[]] = [10, [1, 2, 3]];
  let arr4: [number, {}, []] = [10, {}, []];
  let mixTuple: [number, string, {}][] = [
    [1, "", {}],
    [1, "", {}],
  ];

  // 개선 사항
  let arr5: (number | string)[] = [10, "", 111];

  // 10. bigint
  // js 의 최대 범위가 -2^53 - 1 ~ 2^53 - 1 까지 표현 가능
  // 그 이상의 값을 계산하기 위해서 사용하는 방법
  // 100n 은 정수 100과 같지만 타입 자체가 달라서 100 과 100n 은 다른 값이다.

  const bigNumber: bigint = 9007199254740992n;
  console.log(100n + 10n); // 게산 가능

  // 10. object 객체
  let obj: object = {};
  // 원시타입을 제외한 모든 함수, 배열, 객체 등은 객체에 파생되어 나온 타입
  // 그래서 object 는 부모 타입으로 이해할 수 있다.
  obj = [];
  obj = function () {};

  let obj2: {} = {};
  // null 과 undefined 를 제외한 모든 타입이 선언 가능하다.
  let obj3: Record<string, never> = {};

  interface UserType {
    name: string;
    age: number;
  }

  type UserType2 = {
    name: string;
    age: number;
  };

  let user: UserType | UserType2 = {
    name: "PSY",
    age: 30,
  };

  let person: {
    name: string;
    address: { street: string; city: string };
    likesFood: string[];
  } = {
    name: "PSY",
    address: {
      street: "",
      city: "",
    },
    likesFood: ["apple", "banana"],
  };

  interface JsonDataType {
    id: number;
    name: string;
    username: string;
    email: string;
    address: AddressType;
    phone: string;
    website: string;
    company: CompanyType;
  }

  interface CompanyType {
    name: string;
    catchPhrase: string;
    bs: string;
  }

  interface AddressType {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoType;
  }

  interface GeoType {
    lat: string;
    lng: string;
  }

  let jsonData: JsonDataType[] = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    // 더 있는데 너무 길어서 지움
  ];
  // 타입 선언을 하면 자동완성이 지원된다.
  // 접근할 수 있는 항목의 타입을 선언해줬기 떄문에
}
