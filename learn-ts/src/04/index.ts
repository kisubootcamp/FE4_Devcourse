{
  // 1.

  let num: number = 10;
  let str: string = "A";
  let bool: boolean = true;

  const sum = (a: number, b: number): number => a + b;
  sum(10, 20);
}

console.log("-------------------------------------");

{
  // 2. ts 장점
  // 2.1 가독성이 좋아짐
  // 2.2 유지보수성 증가 -> 타입 재활용가능

  let userId: string = "hulk";
  let productId: number = 123;

  type ID = string | number;
  let userId1: ID = "hulk";
  let productId1: ID = 123;

  type Status = "error" | "success"; // 이렇게 하면 타입값이 아닌 고정 값이 들어가기 떄문에 저 두개의 값 제외 어떤값도 안됨.
  const status: Status = "error";
}

console.log("-------------------------------------");

{
  type User = {
    name: string;
    age: number;
  };

  const user1: User = {
    name: "",
    age: 20,
  };

  const user2: User = {
    name: "",
    age: 20,
  };

  const user3: User = {
    name: "",
    age: 20,
  };

  const user4: User = {
    name: "",
    age: 20,
  };
}

console.log("-------------------------------------");

{
  // 3. 함수
  type SumFunc = (n1: number, n2: number) => number;
  const sum: SumFunc = function (n1, n2) {
    return n1 + n2;
  };
}

console.log("-------------------------------------");

{
  // 5. 튜플
  type XandY = [number, number];
  const point: XandY = [0, 2];
}

console.log("-------------------------------------");

{
  // 6. 인터섹션
  // 보통 API 반환값이 객체들의 조합이라서 이런식으로 쪼개서 사용하는 경우가 많음.
  type Nameable = {
    name: string;
  };

  type Ageable = {
    age: number;
  };

  type Person = Nameable & Ageable;
}

console.log("-------------------------------------");

{
  // 6. 키 선택 타입 별칭
  type Person = {
    name: string;
    age: number;
    gender: string;
  };

  // Person 타입의 "키" 값을 리터럴로 반환
  type PersonOfKeys = keyof Person; // "name" | "age" | "gender"
  const key: PersonOfKeys = "age";
}

console.log("-------------------------------------");

{
  // 7. 객체 선택 타입 별칭
  // 타입 추론 의존
  const user = {
    name: "PSY",
    age: 20,
  };

  // user 객체의 타입을 가져와서 새로운 타입 별칭으로 만듬
  // 가져올 변수가 해당 타입을 선언하면 오류 남
  type User = typeof user;

  const user2: User = {
    name: "",
    age: 1,
  };
}

console.log("-------------------------------------");

{
  // 7.
  type Category = {
    name: string;
    subCategory: {
      name: string;
      subCategory?: {
        name: string;
      }[];
    }[];
  };

  // 재귀 타입 별칭
  type Category3 = {
    name: string;
    subCategory?: Category3[];
  };

  const category: Category = {
    name: "Electoronics",
    subCategory: [
      {
        name: "Phones",
      },
      {
        name: "Laptops",
        subCategory: [
          {
            name: "Faming Laptops",
          },
        ],
      },
    ],
  };
}

console.log("-------------------------------------");

{
  // 8.

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
    children: Tree2[];
  };

  const tree = {
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
