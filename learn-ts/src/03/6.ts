{
  type User = {
    name: string;
    age: number;
  };

  type Developer = {
    skill: string;
  };

  let human: User = {
    name: "jaegeon",
    age: 26,
  };

  let developer01: User & Developer = {
    name: "jaegeon",
    age: 20,
    skill: "TypeScript",
  };
}
