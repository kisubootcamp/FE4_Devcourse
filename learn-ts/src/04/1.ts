{
  // 1.
  let num: number = 10;
  let str: string = "A";
  let bool: boolean = true;

  const sum = (a: number, b: number): number => a + b;
  sum(10, 20);
}
{
  // 2. 타입 별칭
  // 가독성이 좋아지고, 유지보수성 증가 -> 타입 재사용 가능
  type ID = string | number | null;
  let userId: ID = "hulk";
  let productId: ID = 1;

  type Status = "error" | "success";
  const status: Status = "error";
}
{
  type User = {
    name: string;
    readonly age?: number;
  };
  const user1: User = {
    name: "alice",
    age: 20,
  };
  const user2: User = {
    name: "alice",
    age: 20,
  };
  const user3: User = {
    name: "alice",
    age: 20,
  };
}
{
  // 3. 함수
  type SumFunc = (n1: number, n2: number) => number;
  const sum: SumFunc = function sum(n1, n2) {
    return n1 + n2;
  };
}
{
  // 4. 튜플
  type Point = [number, number];
  const point: Point = [10, 15];
}
{
  // 5. 인터 섹션
  type Nameable = {
    name: string;
  };

  type Ageable = {
    age: number;
  };

  type Person = Nameable & Ageable;

  type PersonOther = {
    name: string;
  } & {
    age: number;
  };
}
{
  // 6. 키 선택 타입 별칭
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
    name: "jaegeon",
    age: 20,
  };

  const user2: User = {
    name: "a",
    age: 30,
  };

  console.log(user);
}
{
  type Category1 = {
    name: string;
    subCategory?: { name: string; subCategory?: { name: string }[] }[];
  };

  // 재귀 타입 별칭
  type Category2 = {
    name: string;
    subCategory?: Category2[];
  };

  const category: Category1 = {
    name: "Electronics",
    subCategory: [
      {
        name: "Phones",
      },
      {
        name: "Laptops",
        subCategory: [
          {
            name: "Phones",
          },
        ],
      },
    ],
  };
}
{
  type Tree = {
    value: string;
    children: {
      value: string;
      children: {
        value: string;
      }[];
    }[];
  };
  type Tree2 = {
    value: string;
    children?: Tree2[];
  };
  const tree: Tree = {
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
