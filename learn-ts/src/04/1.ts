{
  //1.
  let num: number = 10;
  let str: string = "A";
  let bool: boolean = true;

  const sum = (a: number, b: number): number => a + b;
  sum(10, 20);
}

{
  // 2. 타입 별칭
  // 2.1. 가독성이 좋아지고
  // 2.2. 유지보수성이 증가함. -> 타입을 재사용할 수 있기 떄문

  let userId: string = "hulk";
  let productId: number = 1;

  type ID = string | number;
  let userId2: ID = "hulk";
  let productId2: ID = 1;

  // 리터럴 타입도 타입 별칭으로 가능하다.
  type Status = Error | "String";
  let status: Status = "String";

  console.log(userId2.toUpperCase()); // 타입추론??
}

{
  // 3. 함수
  type SumFunc = (n1: number, n2: number) => number;
  const sum: SumFunc = function (n1, n2) {
    return n1 + n2;
  };
}

{
  // 4. 튜플
  type Point = [number, number];
  const point: Point = [10, 15];
}

{
  // 5. 인터섹션
  type Nameable = {
    name: string;
  };

  type Ageable = {
    age: number;
  };

  type Person = Nameable & Ageable;
  type PersonOther = {
    name: String;
  } & {
    age: number;
  };
}

{
  //6. 키 선택 타입 별칭
  type Person = {
    name: string;
    age: number;
    gender: string;
  };

  type PersonOfKeys = keyof Person; // "name" | "age" | "gender"
  const key: PersonOfKeys = "gender";
}

{
  // 7. 객체 선택 타입 별칭
  type User = typeof user;

  const user = {
    name: "sucoding",
    age: 20,
  };

  const user2: User = {
    name: "a",
    age: 30,
  };

  console.log(user);
}

{
  // 8.
  type Category = {
    name: string;
    subCategory: { name: string; subCategory?: { name: string }[] }[];
  };

  //재귀 타입 별칭
  type Category3 = {
    name: string;
    subCategory?: Category3[];
  };

  const category: Category3 = {
    name: "Electronics",
    subCategory: [
      { name: "Phones" },
      {
        name: "Laptops",
        subCategory: [
          {
            name: "Gaming Laptops",
          },
        ],
      },
    ],
  };
}

{
  //
  type Tree = {
    value: string;
    children?: Tree[];
  };

  type Tree2 = {
    value: string;
    children: { value: string; children?: { value: string }[] }[];
  };

  const tree: Tree2 & Tree = {
    value: "root",
    children: [
      {
        value: "child1",
        children: [
          {
            value: "child2",
          },
        ],
      },
    ],
  };
}
