// 타입스크립트 복습
{
  //1.
  let num: number = 10;
  let str: string = "A";
  let bool: boolean = true;

  const sum = (a: number, b: number): number => a + b;
  sum(19, 1);
}
{
  //2. 타입별칭 의 장점
  // 1 - 가독성이 좋아짐
  // 2- 유지보수성이 증가 -> 타입을 재사용할 수 있기 때문
  type ID = string | number;

  let userId: ID = "aloh";
  let productId: ID = 123;

  let userId2: ID = "gep";
  let productId2: ID = 11;

  // 리터럴 타입도 타입별칭으로 사용할 수 있다.
  type Status = "error" | "success";
  const status: Status = "success";
}
{
  // 타입별칭을 이용하면 코드의 가독성이 좋아짐.
  type User = {
    name: string;
    age: number;
  };

  const user: User = {
    name: "Alice",
    age: 20,
  };
  const user2: User = {
    name: "Alice",
    age: 20,
  };
  const user3: User = {
    name: "Alice",
    age: 20,
  };
}
{
  //3. 함수
  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }
  sum(10, 20);

  type SumFunc = (n1: number, n2: number) => number;
  const sum1: SumFunc = function sum(n1, n2) {
    return n1 + n2;
  };

  // 4. 튜플
  type Point = [number, number];
  const point: Point = [10, 20];

  //5. 인터섹션
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

  // Person안에 있는 키 값을 알려줌
  type PersonOfKeys = keyof Person; // "name" | "age" | "gender"
  const key: PersonOfKeys = "gender";
}
{
  //7. 객체 선택 타입별칭

  // 만들어진 객체의 타입이 자동으로 지정됨
  // 타입스크립트는 컴파일을 진행하고 실행하기 때문에 상단에 위치해도 읽을 수 있음.
  type User = typeof user;

  // 첫번째 객체에는 사용할 수 없음
  const user = {
    name: "sucoding",
    age: 30,
  };

  const user2: User = {
    name: "시루",
    age: 7,
  };

  console.log(user);
  console.log(user2);
}
{
  //8.
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
  // 재귀 타입 별칭
  type Category3 = {
    name: string;
    subCategory?: Category3[];
  };

  const category = {
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

  console.log(tree.children?.[0].children?.[0].value);
}
