{
  // 타입 별칭 -> 첫 글자 대문자
  // number, string, boolean ....
  type Level = number;
  let level: Level = 10;
  let level2: number = 10;

  // 타입 별칭
  // type -> 나만의 타입을 지정하는 방법
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
