{
  type User = {
    name: string;
    age: number;
  };

  type Developer = {
    skill: string;
  };
  type HumanDeveloper = User & Developer;

  let human: User = {
    name: "jungyu",
    age: 20,
  };

  let developer01: HumanDeveloper = {
    name: "jungyu",
    age: 20,
    skill: "Typescript",
  };
}
