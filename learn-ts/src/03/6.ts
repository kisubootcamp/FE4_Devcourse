{
  // 타입 별칭
  // 실무에서는 작게 타입을 쪼개서 재사용을 많이 함
  // 유니온 타입이나 인터섹션 타입을 연결해서 많이 사용함
  // 복잡한 타입을 더 단순한 타입으로 가독성 있게 변경시켜줄 수 있음
  type User = {
    name: string;
    age: number;
  };

  type Developer = {
    skill: string;
  };

  type HumanDeveloper = User & Developer;

  let human: User = {
    name: "yubin",
    age: 26,
  };

  let developer01: HumanDeveloper = {
    name: "yubin",
    age: 26,
    skill: "TypeScript",
  };
}
