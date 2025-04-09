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
}

{
  // 리터럴 타입 : 값 자체를 타입으로 사용하는 것
  // const로 선언하면 그냥 그 값 자체가 되어버림
}
