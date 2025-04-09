{
  // 옵셔널 파라미터
  // 첫 번째 파라미터만 옵션이고 두 번째 파라미터는 옵션이 아닌 경우는 불가능.
  // 모두 다 옵셔널 파라미터 or 마지막 파라미터만 옵셔널 파라미터인 경우여야 함.
  // 아래와 같이 오버로드로 정확하게 표현해줄 수 있음.
  // -> 오버로드는 매개 변수가 옵셔널 파라미터일 때 이걸 구분하는 용도로 사용 가능함.
  // 함수 호출할 때 어떤 매개 변수가 필요한지 툴바로 떠서 알 수 있음.
  function printUserInfo(name: string): void;
  function printUserInfo(name: string, age: number): void;
  function printUserInfo(name: string, age?: number): void {
    if (name && age) console.log(`${name}, ${age}`);
    else console.log(`${name}`);
  }

  printUserInfo("yubin", 26);

  // 자바스크립트에선 에러가 나지 않고 yubin이라고 출력이 제대로 됨.
  // 타입스크립트에선 2개의 매개 변수가 다 필수적으로 주어져야 하므로 에러가 남.
  printUserInfo("yubin"); // -> 매개 변수 age에 ?를 붙이면 가능하게 됨 !!
}
