{
  // 타입 별칭 -> 첫 글자는 항상 대문자로 한다는 규칙 존재
  // type -> 나만의 타입을 지정하는 방법
  // 타입은 다른 타입의 재료가 될 수 있음 !
  // 타입 별칭의 장점
  // -> 내가 원하는 이름으로 나만의 타입을 정의할 수 있음
  // -> 한 번 정의한 타입을 계속 재사용할 수 있음
  type Level = number | string;
  let level: Level = 10;
  let level2: Level = "A";

  type Id = {
    id: number;
  };
  type Value = {
    value: string;
  };
  type Attributes = { weight: number; color: string };
  // 자잘하게 쪼갠 타입을 연결할 때 인터섹션 타입이 유용하게 쓰임 !!
  type ComplexType = Id &
    Value & {
      attributes: Attributes;
    };

  type ComplexStructure = ComplexType[];

  let complexStructure: ComplexStructure = [
    { id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
    { id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
    { id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
  ];
}
