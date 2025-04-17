{
  type User = {
    name: string;
    age: number;
  };

  type Developer = {
    skill: string;
  };

  //필요한 타입만 따로 사용
  let human: User = {
    name: "sucoding",
    age: 20,
  };

  //타입 합치기도 가능
  type HumanDeveloper = User & Developer;

  //가독성 좋아짐
  let developer01: HumanDeveloper = {
    name: "sucoding",
    age: 20,
    skill: "TypeScript",
  };
}
