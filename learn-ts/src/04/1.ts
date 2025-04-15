/* eslint-disable no-unused-vars */
{
  // 1
  let num: number = 10;
  let str: string = "A";
  let bool: boolean = true;

  const sum = (a: number, b: number): number => a + b;
  sum(10, 20);
}

{
  // 2
  // 2-1. 가독성
  // 2-2. 유지보수성 증가 -> 타입을 재사용할 수 있기 때문

  let userId: string | number | null = "hulk";
  let productId: number = 1;

  type ID = string | number | null;
  let userId2: ID = "hulk";
  let productId2: ID = 1;

  // 리터럴 타입도
  type Status = "error" | "succes";
  const status: Status = "error";
}

{
  type User = {
    name: string;
    age: number;
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
  // 함수
  type SumFunc = (n1: number, n2: number) => number;
  const sum: SumFunc = function sum(n1, n2) {
    return n1 + n2;
  };
}

{
  // 4. 튜플
  type Point = [number, number];
  const point: [number, number] = [10, 15];
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

  // type User = typeof user; 여기 있어도 맞음

  const user = {
    name: "kyo",
    age: 25,
  };

  type User = typeof user;

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
    subCategory: (
      | {
          name: string;
          subCategory?: undefined;
        }
      | {
          name: string;
          subCategory: {
            name: string;
          }[];
        }
    )[];
  };

  type Category2 = {
    name: string;
    subCategory: [{ name: string; subCategory?: { name: string }[] }];
  };

  type Category3 = {
    name: string;
    subCategory: { name: string; subCategory?: { name: string }[] }[];
  };

  // 재귀 티입 별칭 -> 무한 확장 x. 함수가 아니라서
  type Category4 = {
    name: string;
    subCategory?: Category4[];
  };

  const category: Category = {
    name: "Electronics",
    subCategory: [
      {
        name: "Phones",
        // subCategory: [
        //   {
        //     name: "Gaming Laptops",
        //   },
        // ], ----------> 이게 없으니까 옵셔널 사용
      },
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
  // 9
  type Tree = {
    value: string;
    Children: {
      value: string;
      Children: {
        value: string;
      }[];
    }[];
  };

  type Tree2 = {
    value: string;
    Children: [{ value: string; children: [{ value: string }] }];
  };

  type Tree3 = {
    value: string;
    Children?: Tree3[];
  };

  const tree: Tree = {
    value: "root",
    Children: [
      {
        value: "child1",
        Children: [
          {
            value: "child2",
          },
        ],
      },
    ],
  };
}
