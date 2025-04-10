{
  type User = {
    name: string;
    age: number;
  };

  type Developer = {
    skill: string;
  };

  let humon: User = {
    name: 'ww',
    age: 11,
  };

  let devel: User & Developer = {
    name: 'qq',
    age: 11,
    skill: 'JS',
  };

  console.log(devel);
}
