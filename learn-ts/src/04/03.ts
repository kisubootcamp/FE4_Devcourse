{
  // 범옹적인 타입 지정 방법

  type ObjType = {
    [key: string]: string | number;
  };

  const obj: ObjType = {
    name: "jungyu",
    age: 20,
  };

  delete obj.age;
  obj.gender = "male";
}
