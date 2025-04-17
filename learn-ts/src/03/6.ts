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
    name: 'sucoding',
    age: 20,
  };

  let developer01: HumanDeveloper = {
    name: 'sucoding',
    age: 20,
    skill: 'TypeScript',
  };
}
