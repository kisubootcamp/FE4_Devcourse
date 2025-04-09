{
  //타입을 가독성있게 지정하는 별칭
  // NOTE 타입 별칭 : 나만의 타입을 지정하는 방법
  // number, string, boolean..(typescript 에 존재하는 타입)
  // 타입 별칭 규칙 : 첫글자는 항상 대문자 **
  // 한번 만들어진 별칭은 재사용할 수 있음 (실무에서 많이 사용함)
  type Level = number | string;
  let level: Level = 10;
  let level2: number = 20;

  //
  type Attributes = { weight: number; color: string };
  type ComplexType = {
    id: number;
    value: string;
    attributes: Attributes;
  };
  let complexStructure: ComplexType[] = [
    { id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
    { id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
    { id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
  ];

  //다른 타입의 재료로 사용될 수 있음
  type ComplexData = ComplexType[];

  // NOTE 재사용가능한 타입 별칭을 잘게잘게 쪼개서 서로 조합해야 할 때
  // 인터섹션으로 묶으면 모두가 묶인 합쳐진 타입으로 만들 수 있음
}
