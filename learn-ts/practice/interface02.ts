// 01
{
  type Person = { name: string; age: number };

  function person(name: Person, age: Person) {
    return { name, age };
  }

  // const human = person("John", 20);
}

// 02
{
  type Config = { host: string; port: number; ssl: boolean };

  function createConfig = (host: string, port: number, ssl: boolean): Config => ({
    host,
  })

  const config = createConfig("localhost", 8080, true);
  console.log(config);
}

{
  type TUser = {
    name: string;
    age: number;
  };

  function printUser(user: TUser): string {
    return `Name: ${user.name}, Age: ${user.age}`;
  }

  const user = printUser("ji", 20);
  console.log(user);
}
