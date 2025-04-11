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
  // 장점 1. 가독성이 좋아짐
  // 장점 2. 유지보수성이 증가함 -> 타입을 재사용할 수 있기 때문
  let userId: string = "hulk";
  let productId: number = 1;

  type ID = string | number | null;
  // 타입 별칭으로 인해 이 변수에 들어가는 건 ID와 관련이 있겠구나 하고 알 수 있음 !!
  // 세부적으로 타입을 알고 싶으면 타입에 마우스를 올려보면 됨
  let userId2: ID = "hulk";
  let productId2: ID = 1;

  // 리터럴 타입도 타입 별칭으로 가능함
  type Status = "error" | "success";
  const status: Status = "success"; // fn + ctrl + space : 입력 가능한 값들을 보여줌
}

{
  // 기본 타입, 객체 모두 타입 별칭으로 나타낼 수 있음
  // 객체에서 readonly와 ? 속성 모두 사용 가능함
  type User = {
    name: string;
    readonly age?: number;
  };

  // Readonly<> : readonly로 지정되지 않은 모든 속성이 readonly로 바뀜
  const user1: Readonly<User> = {
    name: "bin",
    age: 20,
  };
  // user1.name = "bingg"; // 에러

  const user2: User = {
    name: "bin",
    age: 20,
  };

  const user3: User = {
    name: "bin",
    age: 20,
  };
}

{
  // 3. 함수
  // 함수도 타입 별칭으로 분리 가능
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
  // 타입 별칭은 위치가 상관이 없음 !
  const person: Person = {
    name: "bing",
    age: 26,
  };

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

  // keyof를 쓰면 객체로 지정되어있는 타입의 키가 리터럴로 반환됨
  type PersonOfKeys = keyof Person; // "name" | "age" | "gender"
  const key: PersonOfKeys = "gender";
}

{
  // 7. 객체 선택 타입 별칭
  // API 요청 받은 객체의 속성이 너무 많을 때 사용하면 좋음.
  // 고정적으로 데이터가 들어가있을 때.
  type User = typeof user; // 여기에 위치해도 가능 !! 타입스크립트는 정적 언어이기 때문에 모든 코드가 컴파일된 후에 실행됨 !
  // 자바스크립트는 런타임 기반 언어라서 코드를 실행하면서 그때그때 실행하는 언어임. BUT, 타입스크립트는 컴파일 후 실행함.
  // 런타임 : 코드를 그때그때 필요할 때마다 실행함. e.g. JS, HTML
  // 컴파일 : 내가 실행할 코드를 쭉 훑어보고 정리한 후, 순서를 계산해서 실행함. e.g. TS

  // 즉, 타입 별칭은 위치가 별 상관이 없음 ! -> 컴파일 과정에서 올바르게 해석해주기 때문.

  const user = {
    name: "bin",
    age: 20,
  };

  const user2: User = {
    name: "a",
    age: 30,
  };

  console.log(user);
}

{
  // 7.
  // 타입 추론된 것
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

  // 우리가 간단하게 수정한 것
  type Category2 = {
    name: string;
    subCategory: { name: string; subCategory?: { name: string }[] }[];
  };

  // 재귀 타입 별칭
  // 재귀 함수가 아니라 무한히 호출(확장)되는 건 아님.
  type Category3 = {
    name: string;
    subCategory?: Category3[];
  };

  const category: Category3 = {
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
