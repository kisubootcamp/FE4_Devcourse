{
  // 범용적인 타입 지정 방법
  // 인덱스 시그니처

  // 객체라서 가능한 방법
  // 옵셔널 프로퍼티 -> ?
  // readonly 프로퍼티 -> readonly

  const obj: {
    [key: string]: string | number;
  } = {
    name: "kyo",
    age: 25,
  };

  const name = obj.name;
  //name.toUpperCase();

  const obj2: {
    name2: string;
    age: number;
  } = {
    name2: "kyo",
    age: 25,
  };

  const name2 = obj2.name2;
  name2.toUpperCase();
}
