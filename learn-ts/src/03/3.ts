{
  function printUserInfo(name: string): void;
  function printUserInfo(name: string, age: number): void;
  function printUserInfo(name: string, age?: number): void {
    if (name && age) console.log(`${name}, ${age}`);
    else console.log(`${name}`);
  }

  printUserInfo("jaegeon", 26);
  printUserInfo("jeongsue");
}
