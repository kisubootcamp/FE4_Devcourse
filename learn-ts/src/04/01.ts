{
  //1
  let num: number | string = 10;
  let str: string = 'A';
  let bool: boolean = true;

  const sum = (a: number, b: number): number => a + b;
  sum(10, 20);
}

{
  //2 타입별칭
  // 가독성이 좋아지고, 재사용이 되기 때문에 유지보수성이 증가한다.
  let userId: string | number | null = 'hulk';
  let productId: number | number | null = 1;

  type ID = string | number;
  let productId: number = 1;
}

{
  type User = {
    name: string;
    age: number;
  };
  const user1: User = {
    name: 'alice',
    age: 20,
  };
}

{
  //3 함수
  type sumFunc = (n1: number, n2: number) => number;
  const sum: SumFunc = function sum(n1, n2) {
    return n1 + n2;
  };
}

{
  // 4 튜플
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

  // keyof : 해당 대상의 키 값을 추출한다.
  type PersonOFKeys = keyof Person; // name | age | gender

  const key: PersonOFKeys = 'gender';
}

{
  // 7. 객체 선택 타입 별칭
  type User = typeof user;

  const user: User = {
    name: 'sucoding',
    age: 20,
  };

  const user2: User = {
    name: 'a',
    age: 30,
  };
}

{
  // 7.
  // Category 1,2,3 셋 다 가능한데, 점점 갈수록 간단해진다!
  type Category = {
    name: string;
    subCategory: (
      | {
          name: string;
          subCategory?: undefined;
          //116번 줄에는 subCategory가 안쓰였기 때문!
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
    subCategory: [{ name: string; subCategory?: { name: string }[] }[]];
  };

  type Category3 = {
    name: string;
    subCategory?: { name: string; subCategory?: { name: string }[] }[];
  };

  type Category4 = {
    name: string;
    subCategory?: Category4[];
  };
  const category: Category = {
    name: 'Electronics',
    subCategory: [
      {
        name: 'Phones',
      },
      {
        name: 'Laptops',
        subCategory: [
          {
            name: 'Gaming Laptops',
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
    children: [
      {
        value: string;
        children: Tree2[];
      }
    ];
  };

  const tree: Tree = {
    value: 'root',
    children: [
      {
        value: 'child1',
        children: [{ value: 'child2' }],
      },
    ],
  };
}
