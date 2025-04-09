{
  // 1.
  let obj: {
    readonly name: string;
    age: 20;
    gender?: string; // 옵셔널 속성
  } = {
    name: "jungyu",
    age: 20,
  };

  // obj.name = "park" // readonly는 읽기전용 수정 불가
  console.log(obj.name);

  // 추후에 동적으로 추가
  obj.gender = "Female";
}

{
  // 타입 별칭 -> 첫 글자 대문자
  // number, string, boolean ....
  type Level = number | string;
  let level: Level = 10;
  let level2: number = 10;

  // 타입 별칭
  // type -> 나만의 타입을 지정하는 방법
  type CompleyType = {
    id: number;
    value: string;
    attributes: { weight: number; color: string };
  };

  let compleyStructure: CompleyType[] = [
    { id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
    { id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
    { id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
  ];
}
