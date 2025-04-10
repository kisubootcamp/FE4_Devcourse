{
  // 옵셔널 파라미터
  // -> 첫 파라미터 옵션 & 뒷 파라미터 필수는 안됨
  function printUserInfo(name: string): void;
  function printUserInfo(name: string, age: number): void;
  function printUserInfo(name: string, age?: number): void {
    if (name && age) console.log(`${name}, ${age}`);
    else console.log(`${name}`);
  }

  printUserInfo("sucoding", 20);
  printUserInfo("sucoding");
  printUserInfo("");
}
