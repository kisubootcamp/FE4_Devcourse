{
  //NOTE 옵셔널 파라미터('?')
  // 주의점 : 1번째, 2번째 파라미터 옵셔널 ok
  // 1번째 파라미터 옵셔널, 2번째 파라미터  no -> 어떤 경우에라도 첫번째로 전달되기 마련인데 첫번째 파라미터부터 옵셔널이면 문맥적으로 맞지 않음
  // -> 첫번째 파라미터는 옵셔널 파라미터 불가능.

  function printUserInfo(name: string): void;
  function printUserInfo(name: string, age: number): void;
  function printUserInfo(name: string, age?: number): void {
    if (name && age) {
      console.log(`${name},${age}`);
    } else console.log(`${name}`);
  }
  printUserInfo("sucoding");
  printUserInfo("sucoding");
}

//NOTE
// 함수 : 매개변수와 반환값에 타입 지정
//(1) 화살표 타입으로 지정 가능
// 유니온 타입을 사용하면 유니온 타입으로 묶여 여러개의 조건이 생길 수 있음
// 유니온의 조건에 따라 로직이 복잡해 질 수 있음
// 그런 유니온 타입을 적용해 주기 위한 오버로드(함수 선언식에서만 사용 가능) 사용
// 유니온 타입에 따른 타입가드가 추가될 수 있음
