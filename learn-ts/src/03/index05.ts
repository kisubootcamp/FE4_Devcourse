// const로 데이터를 정의하게 되면 거기에 할당된 데이터는 특별한 데이터로 할당된다.
{
  const num = 10; // 재할당이 안되기 때문에 자신 고유값으로 타입이 추론된다.
  // -> 이러한 타입을 리터럴 타입이라고 한다. -> 리터럴 타입은 값 자체를 타입으로 사용하는 것을 말함.
  const str = "A";
  const obj = { name: "Lee" }; // obj.name로 값이 바뀔 수 있기 때문에 {name: string}
  const arr = [1, 2, 3]; // 배열은 push로 값이 바뀔 수 있기 때문에 number[]
}
{
  let bool: true = true;
  // bool = false 리터럴 타입이 지정되어서 지정 불가
  // let에도 리터럴 타입을 선언해서 고유값 지정 가능
}

{
  // 1.
  let num: number | string = 10;
  let str: string = "A";
  let bool: boolean = true;

  const sum = (a: number, b: number): number => a + b;
  sum(10, 20);
}

{
  // 2. 타입 별칭
  // 2.1. 가독성이 좋아지고.
  // 2.2. 유지보수성이 증가함. -> 타입을 재사용할 수 있기 때문
  let userId: string | number | null = "hulk";
  let productId: number | number | null = 1;

  type ID = string | number | null;
  let userId2: ID = "hulk";
  let productId2: ID = 1;

  // 리터럴 타입도 타입 별칭으로 가능하다
  type Status = "error" | "success";
  const status: Status = "success";
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
  type User = typeof user;

  const user = {
    name: "sucoding",
    age: 20,
  };

  const user2: User = {
    name: "a",
    age: 30,
  };
}

{
  // 7.
  type Category = {
    name: string;
    subCategory: (
      | {
          name: string;
          subCategory?: undefined; // Phones에는 없고 Laptops에는 있어서 옵셔널
        }
      | {
          name: string;
          subCategory: {
            name: string;
          }[];
        }
    )[];
  }; // 타입 추론된 내용

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
  // 7.
  // type Category = {
  //   name: string;
  //   subCategory: { name: string; subCategory?: { name: string }[] }[];
  // };

  // 재귀 타입 별칭
  type Category = {
    name: string;
    subCategory?: Category[]; // 함수가 아니기 때문에 무한히 확장하지 않는다.
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
  // [number, number, number] = number[]

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
    children: [{ value: string; children: [{ value: string }] }];
  };

  type Tree3 = {
    value: string;
    children?: Tree3[];
  };

  const tree: Tree3 = {
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
