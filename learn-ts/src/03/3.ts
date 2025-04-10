{
  // 옵셔널 파라미터
  // ?를 이용해 설정한다. -> 있을 수도 있고 없을 수도 있다(생략가능 하다는 뜻)
  // 주의! 첫번째 파라미터에만 옵셔널 파라미터 설정을 주는 것은 불가함.
  function printUserInfo(name: string): void;
  function printUserInfo(name: string, age: number): void;
  function printUserInfo(name: string, age?: number): void {
    if (name && age) {
      console.log(`내 이름은 ${name}, 무려 ${age}살이다.`);
    } else console.log(`내 이름은 ${name}.`);
  }

  printUserInfo("bomin", 20);
}
