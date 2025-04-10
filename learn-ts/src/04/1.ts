{
  //1.
  let num: number = 10;
  let str: string = "a";
  let bool: boolean = true;

  const sum = (a: number, b: number): number => a + b;
  sum(10, 20);
}

{
  //2. 타입 별칭 : 나만의 타입을 지정 NOTE
  // 타입별칭 이점 :
  // (1) 가독성 좋아짐 -> 같은 타입이 계속 반복될 때 타입 별칭을 지정해서 코드의 가족성을 좋아지게 함
  // (2) 유보수성이 좋아짐 -> 타입을 재사용할 수 있기 때문, 타입이 갑자기 변경(추가, 삭제)될 경우 이미 여러개의 데이터에 사용하고 있던 타입이라면 타입별칭에서 한번만 바꿔주면 쉽게 변경 가능,
  let userId: string = "hulk";
  let productId: number = 1;

  type ID = string | number; // 타입에 마우스오버해서 타입을 알 수 있어서 혼동될 원인을 없앰
  let userId2: ID = "hulk";
  let productId2: ID = 1;
}

{
  type User = { name: string; age: number };
  type Status = "error" | "success";

  // 리터럴 타입도 타입 별칭으로 가능하다 ** 리터럴 타입은 해당 문자가 그대로 들어가야함 NOTE
  const status: Status = "error";

  const user: {
    name: string;
    age: number;
  } = {
    name: "Alice",
    age: 20,
  };
  const user1: User = {
    name: "Alice",
    age: 20,
  };
  const user2: User = {
    name: "Alice",
    age: 20,
  };
  const user3: {
    name: string;
    age: number;
  } = {
    name: "Alice",
    age: 20,
  };
}

{
  //3. 함수
  // NOTE 함수도 타입별칭으로 분리할 수 있다
  const sum = function sum(n1: number, n2: number): number {
    return n1 + n2;
  };
  const sum1: (n1: number, n2: number) => number = function sum(n1, n2) {
    return n1 + n2;
  };

  type SumFunc = (n1: number, n2: number) => number;
  const sum2: SumFunc = function sum(n1, n2) {
    return n1 + n2;
  };
}

{
  // 3. 함수 ***********************************강사님 NOTE
  type SumFunc = (n1: number, n2: number) => number;
  const sum: SumFunc = function sum(n1, n2) {
    return n1 + n2;
  };
}
{
  //4. 튜플
  const point: [number, number] = [10, 20];
  const point1: number[] = [10, 20];

  type Point = [number, number];
  const point2: Point = [10, 20];
}
{
  //5. 인터섹션
  const person: Person = {
    name: "su",
    age: 20,
  };
  type Nameable = {
    name: string;
  };
  type Ageable = {
    age: number;
  };

  type Person = Nameable & Ageable; // 이게 더 가독성이 좋음
  type personOther = {
    name: string;
  } & {
    age: number;
  };
}

{
  //6. 키 선택 타입 별칭  => keyof "타입 별칭"
  type Person = {
    name: string;
    age: number;
    gender: string;
  };

  type PersonOfKeys = keyof Person; // "name" |"age"| "gender" => 리터럴 + 유니온 타입으로 반환
  const key: PersonOfKeys = "gender";
}

//NOTE run time : 그떄그때 필요할 때마다 위에서 아래서 쭊쭊 코드를 실행 (통역)
// compile : 내가 실행할 코드를 한번 쭉 - 훑어보고 나서 실행 (번역)

{
  //7. 객체 선택 타입 별칭 , 이미 갖고 있는 객체의 타입을 구할 때 [type 별칭 = typeof 객체 이름]
  // API 응답을 받았는데 데이터의 객체 속성이 많은 상태 + 고정적으로 데이터가 들어가 있는 상태
  // 그 속성들의 타입을 하나하나 지정하기 어려울 때 typeof 를 사용하면 쉽게 추측할 수 있음

  type User = typeof user; // 자체로 타입별칭이 됨, 특정 데이터를 기점으로 해서 사용 가능 (반드시 객체가 먼저 선언되어야하지만 ...? 끌어 올려 가능함 -> typescript 는 정적 언어이기 때문에 가능)

  const user = {
    name: "sucoding",
    age: 20,
  };

  const user1: User = {
    name: "kkk",
    age: 30,
  };
}

{
  //8. CHECK
  type Category2 = {
    nmae: string;
    subCategory: { name: string; subCategory?: { name: string }[] }[];
  };
  //재귀타입 별칭
  type Category3 = {
    name: string;
    subCategory?: Category3[];
  };

  const category: {
    nmae: string;
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
  } = {
    nmae: "Electronics",
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
  // 재귀타입 별칭 예제

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
    childern: [{ value: string; children: [] }];
  };
  type Tree3 = {
    value: string;
    childern?: Tree3[];
  };

  const tree = {
    value: "root",
    children: [{ value: "child1", children: [{ value: "child2" }] }],
  };
}
