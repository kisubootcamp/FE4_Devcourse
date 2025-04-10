{
  // 범용적인 타입 지정 방법
  // 인덱스 시그니처
  const obj1: {
    [key: string]: string | number;
  } = {
    name: "jaegeon",
    age: 26,
  };

  const name1 = obj1.name;
  //   name1.toUpperCase();

  const obj2: {
    name: string;
    age?: number;
  } = {
    name: "jaegeon",
    age: 26,
  };
  const name2 = obj2.name;
  name2.toUpperCase();
  //   원래 객체라서, 옵셔널 + readonly + 인덱스 시그니처를 사용할 수 있음
}
