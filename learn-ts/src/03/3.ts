{
  // 옵셔널 파라미터
  // 어떤 경우라도 값을 무조건 앞으로 전달
  // 둘다 ?를 쓰거나 앞에 하나만 쓰는건 불가
  function printUserInfo(name: string): void;
  function printUserInfo(name: string, age: number): void;
  function printUserInfo(name: string, age?: number): void {
    if (name && age) console.log(`${name}, ${age}`);
    else console.log(`${name}`);
  }

  printUserInfo("sucoding", 20);

  // 옵셔널 속성
}
