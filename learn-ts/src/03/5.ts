{
  // 타입 별칭 -> 첫글자 대문자
  type Level = number | string;
  let level: Level = 10;

  //타입 별칭
  type Id = {
    id: number;
  };
  type Value = {
    value: string;
  };
  type Attributes = { weight: number; color: string };
  type ComplexType = Id & Value & { attributes: Attributes };
  type ComplexStructure = ComplexType[];

  let complexStructure: ComplexStructure = [
    { id: 1, value: 'apple', attributes: { weight: 1.2, color: 'green' } },
    { id: 2, value: 'banana', attributes: { weight: 0.5, color: 'yellow' } },
    { id: 3, value: 'cherry', attributes: { weight: 0.2, color: 'red' } },
  ];
}
