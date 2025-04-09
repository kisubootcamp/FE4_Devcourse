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
    name: "hyeju",
    age: 20,
  };

  let developer1: HumanDeveloper = {
    name: "hyeju",
    age: 20,
    skill: "TypeScript",
  };
}
