{
  // 타입 별칭
  // number, stringm, boolean...
  // type 키워드를 사용해서 나의 별칭 생성
  // type 별칭을 중괄호 안에 안넣어도 페이지 내에서만 적용이 됨
  // 타입 별칭의 장점: 재사용하고싶은 타입을 지정하여 재사용할 수 있다.
  type Level = number; // 유니온, 인터섹션도 사용할 수 있음
  let level: Level = 10;
  let level2: number = 10;

  // type -> 나만의 타입을 지정하는 방법
  // type: 첫 문자는 대문자로 오는 것이 좋음(파스칼 방식)
  type ComplexType = {
    id: number;
    value: string;
    attributes: { weight: number; color: string };
  };

  let complexStructure: ComplexType[] = [
    { id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
    { id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
    { id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
  ];
}

{
  // 타입 별칭
  // number, stringm, boolean...
  // type 키워드를 사용해서 나의 별칭 생성
  // type 별칭을 중괄호 안에 안넣어도 페이지 내에서만 적용이 됨
  type Level = number; // 유니온, 인터섹션도 사용할 수 있음
  let level: Level = 10;
  let level2: number = 10;

  // type -> 나만의 타입을 지정하는 방법
  // type: 첫 문자는 대문자로 오는 것이 좋음(파스칼 방식)
  type Attributes = { weight: number; color: string };
  type ComplexType = {
    id: number;
    value: string;
    attributes: Attributes;
  };

  type ComplexData = ComplexType[];

  let complexStructure: ComplexData = [
    { id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
    { id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
    { id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
  ];
}

{
  // 타입 별칭
  // number, stringm, boolean...
  // type 키워드를 사용해서 나의 별칭 생성
  // type 별칭을 중괄호 안에 안넣어도 페이지 내에서만 적용이 됨
  type Level = number; // 유니온, 인터섹션도 사용할 수 있음
  let level: Level = 10;
  let level2: number = 10;

  // type -> 나만의 타입을 지정하는 방법
  // type: 첫 문자는 대문자로 오는 것이 좋음(파스칼 방식)
  type ID = {
    id: number;
  };
  type Value = {
    value: string;
  };
  type Attributes = { weight: number; color: string };
  type ComplexType = ID & Value & { attributes: Attributes };

  type ComplexData = ComplexType[];

  let complexStructure: ComplexData = [
    { id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
    { id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
    { id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
  ];
}

{
  type User = {
    name: string;
    age: number;
  };

  type Developer = {
    skill: string;
  };

  type HumanDeveloper = User & Developer; // 타입은 기존에 선언된 타입 + 타입으로도 지정이 가능하다

  let human: User = {
    name: "Lee",
    age: 29,
  };

  let developer01: User & Developer = {
    name: "Lee",
    age: 29,
    skill: "TypeScript",
  };

  let developer02: HumanDeveloper = {
    name: "Ji",
    age: 29,
    skill: "JavaScript",
  };
}

{
  type Greet = (name: string) => string;
  const greet: Greet = (name) => `Hello, ${name}`; // 화살표 함수에도 사용 가능하다
  //  const greet: (name: string) => string = (name) => `Hello, ${name}`;

  type Point = [number, number, number];
  let point: [number, number] = [10, 20]; // x좌표, y좌표 튜플로 배열의 요소 개수 지정
  let point2: number[] = [10, 20];
  let point3: Point = [10, 20, 30];
  let point4: Point = [10, 20, 30]; // 타입이 일괄적으로 변경되기 때문에 유지보수에도 편리하다

  type BookItem = {
    readonly id: number; // 객체에 대한 타입을 정의하는 것이라면 readonly와 ? 옵셔널 프로퍼티를 지정할 수 있다.
    name: string;
    price: number;
    releaseDate?: Date;
  };

  type UserOrder = {
    readonly orderId: string;
    items: BookItem[];
  };
}

let myOrder = {
  orderId: "ord-123",
  items: [
    {
      id: 1,
      name: "코딩",
      price: 20000,
    },
    {
      id: 2,
      name: "CSS",
      price: 30000,
    },
    {
      id: 3,
      name: "HTML",
      price: 10000,
      releaseDate: "2024 - 05 - 05",
    },
  ],
};
