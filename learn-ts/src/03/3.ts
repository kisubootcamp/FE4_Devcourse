{
  function printUserInfo(name: string, age: number): void {
    if (name && age) console.log(`${name}, ${age}`);
    else console.log(`${name}`);
  }

  //printUserInfo("sucoding"); //매게 변수를 함수 정의와 다르면 오류가 됨 // js는 되는데 ts는 안됨

  //옵셔널 파라미터로 해결가능
  function printUserInfo_WithOpt(name: string, age?: number): void {
    //파라미터 뒤에 ? 붙여서 옵션 설정
    if (name && age) console.log(`${name}, ${age}`);
    else console.log(`${name}`);
  }

  printUserInfo_WithOpt("sucoding"); // 이러면 가능

  //그러나 첫번째 파라미터가 옵 , 나머지 옵 X 는 안됨 => 마지막 파라미터만 옵 or 전체다 옵
}
