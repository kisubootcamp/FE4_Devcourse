{
  // 범용적인 타입 지정 방법
  // 인덱스 시그니처

  // 객체라서 가능한 방법
  // 옵셔널 프로퍼티 -> ?
  // readonly 프로퍼티->readonly
  // 인덱스 시그니처

  type ObjType = {
    //추가된 내용
    name: string;
    age: number; //타입의 모호함 보완
    [key: string]: string | number;
  }; //인터페이스도 똑같이 가능

  const obj: ObjType = {
    name: "sucoding",
    age: 20,
  };
  obj.gender = "male";

  //유니온이면 타입 모호하게 생각하지 않나?=>맞음
  const name = obj.name;

  name.toUpperCase(); //=>타입이 모호/추가,삭제 어려움

  const obj2: {
    name: string;
    age: number;
  } = {
    name: "sucoding",
    age: 20,
  };

  const name2 = obj2.name;
  name2.toUpperCase();
}
