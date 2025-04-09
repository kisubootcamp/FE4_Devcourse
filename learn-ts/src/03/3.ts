{
  // 옵서녈 파라미터
  function printUserInfo(name: string, age?: number): void {
    if (name && age) console.log(`${name},${age}`);
    else console.log(`${name}`);
  }
  printUserInfo("youjin");
}
