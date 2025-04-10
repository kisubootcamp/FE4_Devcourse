{
  function printUserInfo(name: string): void; // 오버로드설정
  function printUserInfo(name: string, age: number): void; // 오버로드설정

  function printUserInfo(name: string, age?: number): void {
    if (name && age) {
      console.log(`${name}, ${age}`);
    } else {
      console.log(`${name}`);
    }
  }
  printUserInfo("jieun");
}
