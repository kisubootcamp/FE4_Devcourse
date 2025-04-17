{
  // 범용적인 타입 지정 방법
  // 인덱스 시그니처 -> 값을 사용할 때 불편하다.

  // 객체라서 가능한 방법
  // 옵셔널 프로퍼티 -> ?
  // readonly 프로퍼티
  // 인덱스 시그니처

  type ObjType = {
    [key: string]: string | number;
  };

  const obj: ObjType = {
    name: 'su',
    age: 20,
  };

  obj.gender = 'male';
  delete obj.name;

  const obj2: {
    name: string;
    age: number;
  } = {
    name: 'su',
    age: 20,
  };

  obj.gender = 'male';
  delete obj.name;
}
