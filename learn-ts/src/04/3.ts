{
  // 범용적인 타입 지정 방법
  // 인덱스 시그니처
  // 객체라서 가능한 방법: 옵셔널프로퍼티, readonly, 인덱스 시그니처

  type objType = {
    [key: string]: string | number;
  };

  const obj: {
    [key: string]: string | number;
  } = {
    name: 'sucoding',
    age: 20,
  };

  obj.gender = 'male';
  const name = obj.name;
  // name.toUpperCase();

  const obj2: {
    name: string;
    age: number;
  } = {
    name: 'sucoding',
    age: 20,
  };

  const name2 = obj2.name;
  name2.toUpperCase();
}
