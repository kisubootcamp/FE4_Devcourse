{
  // 연습문제 ++ 5번

  // 타입 별칭 -> 첫 글자 대문자 (소문자도 가능하긴 함)
  // 모든 파일에서 전역적으로 사용하려면 글로벌 -> 이건 나중에 배움
  // number, string, boolean ...
  type Level = number;
  let level: Level = 10;
  let level2: number = 10;

  // 타입 별칭
  // type -> 나만의 타입을 지정하는 방법
  // 타입은 다른 타입 별칭의 재료로 쓰일 수 있음
  type Id = { id: number };
  type Value = { value: string };
  type Attributes = { weight: number; color: string };
  type ComplexType = Id & Value & { attributes: Attributes };

  type ComplexStructure = ComplexType[];

  let complexStructure: ComplexStructure = [
    { id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
    { id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
    { id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
  ];
}

// 장점
// 나만의 타입 별칭
// 재사용 가능
// 가독성이 좋아짐
