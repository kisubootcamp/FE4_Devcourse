{
  // 범용적인 타입 지정 방법
  // 인덱스 시그니처
  const obj: {
    [key: string]: string | number;
  } = {
    name: "sucoding",
    age: 20,
  };

  obj.gender = "male";
  delete obj.name;

  const name = obj.name;
}
