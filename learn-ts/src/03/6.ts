{
  type User = {
    name: string;
    age: number;
  };

  type Developer = {
    skill: string;
  };

  let humon: User = {
    name: "eunseo",
    age: 25,
  };

  let dev01: User & Developer = {
    name: "eunseo",
    age: 20,
    skill: "sleep",
  };
}
