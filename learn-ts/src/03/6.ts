{
  //NOTE 타입 별칭 본질은 나만의 타입을 지정하는 것
  // 잘 쓰면 복잡한 타입을 가독성 좋게 변경시킬 수 있음
  //타입 별칭 예제
  type User = {
    name: string;
    age: number;
  };

  type Developer = {
    skill: string;
  };
  //타입별칭 묶음 **** 인터섹션으로 묶거나 유니온 타입으로 묶음
  type HumanDeveloper = User & Developer;

  let humman: User = {
    name: "sucoding",
    age: 20,
  };

  let developer01: User & Developer = {
    name: "sucoding",
    age: 20,
    skill: "TypeScript",
  };
  let developer02: HumanDeveloper = {
    name: "sucoding",
    age: 20,
    skill: "TypeScript",
  };
}
