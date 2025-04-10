{
  // 범용적인 타입 지정 방법
  // 인덱스 시그니처

  // 객체라서 가능한 방법
  // 옵셔널 프로퍼티 => ?
  // readonly 프로퍼티 => readonly
  // 인덱스 시그니처

  interface ObjType {
    name: string;
    age: number;
    [key: string]: string | number;
  }
  const obj: ObjType = {
    name: "sucoding",
    age: 20,
  };

  obj.gender = "male";
  const name = obj.name;
  name.toUpperCase();
}

{
  type ID = string | number;
  let userId2: ID = "hulk";
  console.log(userId2.toUpperCase()); // narrowing
}
