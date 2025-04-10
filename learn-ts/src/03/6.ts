{
  type User = {
    name: string;
    age: number;
  };

  type Developer = {
    skill: String;
  };
  let humon: User = {
    name: "jieun",
    age: 20,
  };

  let dev1: User & Developer = {
    name: "jieun",
    age: 20,
    skill: "Ts",
  };

  type HumonDev = User & Developer;

  let dev2: HumonDev = {
    name: "jieun",
    age: 20,
    skill: "Ts",
  };
}
