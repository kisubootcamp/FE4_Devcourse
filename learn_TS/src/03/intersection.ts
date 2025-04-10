{
  // union | ex1 || ex2
  // Intersection Type & ex1 && ex2
  // 객체에서만 타입을 지정할 때 사용

  //  똑같은 의미 { name: string, age: number }
  let value: { name: string } & { age: number };
  value = { name: "홍길동", age: 20 };
}

{
  // 타입 별칭 (첫 글자는 대문자)
  // type : 나만의 타입을 지정하는 방법
  // 가독성이 좋아지고
  // 유지보수성이 증가 (타입 재사용 가능이기때문)

  type ComplexType = {
    id: number;
    value: string;
  };

  let complexStructures: ComplexType[] = [
    { id: 1, value: "apple" },
    { id: 2, value: "banana" },
  ];

  type Id = {
    id: number;
  };
  type Value = {
    value: string;
  };
  type Attributes = { weight: number; color: string };
  type ComplexData = Id &
    Value & {
      attributes: Attributes;
    };
  type ComplexStructure = ComplexData[];

  let complexStructure: ComplexStructure = [
    { id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
    { id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
    { id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
  ];

  // 함수에서의 타입별칭
  type SumFunc = (n1: number, n2: number) => number;
  const sum: SumFunc = function sum(n1, n2) {
    return n1 + n2;
  };

  // 키 선택 타입 별칭
  type Person = {
    name: string;
    age: number;
    gender: number;
  };

  type PersonOfkeys = keyof Person; // 리터럴로 반환 "name"|"age"|"gender"
  const key: PersonOfkeys = "gender";

  // 객체 선택 타입별칭
  const me = {
    name: "su",
    age: 32,
  };

  type Me = typeof me; // 타입을 추출해주는 것    name: string, age: number,

  const me2: Me = {
    name: "a",
    age: 43,
  };
  console.log(me2);
}

{
  // 리터럴 타입 : 값 자체를 타입으로 사용하는 것
  // const로 선언하면 그냥 그 값 자체가 되어버림
}

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
  type Category1 = {
    name: string;
    subCategory?: Category1[];
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
