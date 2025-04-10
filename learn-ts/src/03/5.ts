{
  //타입별칭 -> 첫 글자 대문자
  //기존에 존재하는 타입에 나만의 별칭을 붙이는것.
  type Level = number;
  let level: Level = 10;

  // 타입 별칭
  // type -> 나만의 타입을 지정하는 방법
  //   type ComplexType = {
  //     id: number;
  //     value: string;
  //     attributes: { weight: number; color: string };
  //   };
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
    { id: 2, value: "apple", attributes: { weight: 1.2, color: "green" } },
    { id: 3, value: "apple", attributes: { weight: 1.2, color: "green" } },
  ];
}

{
  type Goods = {
    name: string;
    price: number;
  };

  type Sale = {
    discount: number;
  };

  let Toy: Goods & Sale = {
    name: "doll",
    price: 10000,
    discount: 0.1,
  };
}
