{
  //1.
  let num: number = 10;
  let str: string = "A";
  let bool: boolean = true;

  const sum = (a: number, b: number): number => a + b;
  sum(10, 20);
}

{
  //2.타입 별칭
  //2-1. 가독성이 좋아지고,
  //2-2. 유지보수성이 증가함. -> 타입을 재사용할 수 있기 떄문에
  let userId: string = "hulk";
  let productId: number = 1;

  type ID = string | number | null;
  let userId2: ID = "hulk";
  let productId2: ID = 1;
}

{
  type User = {
    readonly name: string;
    age?: number;
  };
  type Status = "error" | "success";
  const status: Status = "error"; //error랑 success만 작성 가능
  const user1: Readonly<User> = {
    //타입 전체를 readonly로 생성가능=>뒤에서설명
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
  //3.함수
  type SumFunc = (n1: number, n2: number) => number;
  const sum: SumFunc = function sum(n1, n2) {
    return n1 + n2;
  }; //함수도 타입별칭 가능
}

{
  //4.튜플
  type Point = [number, number];
  const point: Point = [10, 15];
}

{
  //5.인터섹션
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
  //6. 키 선택 타입 별칭
  type Person = {
    name: string;
    age: number;
    gender: string;
  };

  type PersonOfKeys = keyof Person; //"name"|"age"|"gender" 타입이 리터럴로 변경(키값)
  const key: PersonOfKeys = "gender";
}

{
  //7. 객체 선택 타입 별칭
  const user = {
    name: "sucoding",
    age: 20,
  };

  type User = typeof user; //객체의 타입 추출해서 타입별칭 생성
  //맨 위에 있어도 가능=>compile후 실행
  //runtime :javascript,html 위에서 아래로 run하면서 실행
  //compile: 실행할 코드 전체 한번 훑은 후 실행
  const user2: User = {
    name: "a",
    age: 30,
  };
  console.log(user);
}

{
  //7.
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
    subCategory: { name: string; subCategory?: { name: string }[] }[];
  };

  //재귀 타입 별칭
  type Category3 = {
    name: string;
    subCategory?: Category3[]; //함수가 아니므로 실행시킨다고 무한으로 호출되는건 아님(그냥 표현식)
  };

  const category: Category = {
    name: "Electronics",
    subCategory: [
      {
        name: "Phones",
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
  //
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

  const tree: Tree2 = {
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
