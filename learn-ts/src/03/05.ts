{
  // 타입 별칭 -> 첫 글자는 대문자
  // tpye -> 나만의 타입을 지정

  type Level = number | string;
  let level: Level = 10;
  let level2: number = 10;

  type ComplexType = {
    id: number;
    value: string;
    attributes: { weight: number; color: string };
  };
  let complexStructure: ComplexType[] = [
    { id: 1, value: 'apple', attributes: { weight: 1.2, color: 'green' } },
    { id: 2, value: 'banana', attributes: { weight: 0.5, color: 'yellow' } },
    { id: 3, value: 'cherry', attributes: { weight: 0.2, color: 'red' } },
  ];
  console.log(complexStructure);
}
