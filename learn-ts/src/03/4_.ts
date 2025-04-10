{
  //age? 처럼 쓰는 것을 optional parameter 라고 한다.
  // 하지만, 첫번째는 option일때, 두번째가 option이 아닐 수는 없다.

  function printUserInfo(name: string): void;
  function printUserInfo(name: string, age: number): void;
  function printUserInfo(name?: string, age?: number): void {
    if (name && age) {
      console.log(`${name},${age}`);
    } else {
      console.log(`${name}`);
    }
  }
  printUserInfo('sucoding', 20);

  // JS 에서는 아래 코드가 오류 없이 실행된다 . TS에서는 오류 (위에 age?를 안쓰고 age만 썼을때)
  printUserInfo('sucoding');
}
