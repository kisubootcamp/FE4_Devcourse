{
  //옵셔널 파라미터
  function printUserInfo(name: string): void;
  function printUserInfo(name: string, age: number): void;
  function printUserInfo(name: string, age?: number): void {
    //?:쓰면 사용할수도 안할수도(undefined 타입 추가됨) 뒤쪽부분에 사용
    if (name && age) {
      console.log(`$${name},${age}`);
    } else console.log(`${name}`);
  }

  printUserInfo("sucoding", 20);
}
