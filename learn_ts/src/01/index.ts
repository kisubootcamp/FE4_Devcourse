//타입스크립트
{
  let name: string = "이준호";
  let age: number = 28;
  let bool: boolean = true;
  let obj: object = {};
  let arr: [] = [];
  let sym: symbol = Symbol("a");
  let und: undefined = undefined; // 작성할 일 없다.
  let nul: null = null; //null은 null 값만 가질 수 있다.
  let big: bigint = 100n;
}
//타입스크립트는 모든 파일을 점검하기 때문에 다른 파일에 같은 변수명을 선언하면 오류가 난다. 그렇기 때문에 이번 ts 공부를 진행 할 때 블럭 안에서 타입스크립트 코드를 치고 있는 것이다.
