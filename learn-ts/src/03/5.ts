{
  // 타입 별칭
  // type -> 나만의 타입을 지정하는 방법
  type Level = number;
  let level: Level = 10;

  type Attributes = {
    weight: number;
    color: string;
  };
  type ComplexType = {
    id: number;
    value: string;
    attributes: Attributes;
  };

  type ComplexStructure = ComplexType[];

  let complexStructure: ComplexStructure = [
    { id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
    { id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
    { id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
  ];
}
