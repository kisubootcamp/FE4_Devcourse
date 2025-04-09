{
  // 타입 별칭
  // 소문자로 해도 되나 첫글자는 대문자로 하는 걸 권장
  // number, string, boolean ...
  type Level = number | string;
  let level: Level = 10;
  let level2: number = 10;

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
  // id: number;
  // value: string;
  // attributes: { weight: number; color: string };

  type ComplexStructure = ComplexData[];
  // type은 다른 type의 재료가 될 수 있다 !

  // 연습문제++ 5번
  let complexStructure: ComplexData[] = [
    { id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
    { id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
    { id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
  ];

  // 타입 재사용을 하고 싶을 때 타입 별칭을 사용한다
}
