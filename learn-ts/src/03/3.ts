{
  //모든 매개변수를 전달하지 않을 때 -> ?사용 옵셔널  파라미터
  function printUserInfo(name: string, age?: number): void {
    if (name && age) {
      console.log(`${name}, ${age}`);
    } else {
      console.log(`${name}`);
    }
  }

  printUserInfo('ddd');
}
