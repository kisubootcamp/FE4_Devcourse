{
  //1.
  let obj: {
    readonly name: string; //속성값 변경 불가
    age: number;
    gender?: string; //옵셔널 속성 (있어도 되고 없어도됨)
  } = {
    name: "sucoding",
    age: 20,
  };
  //obj.name = "jane"; //에러

  //추후에 동적할당
  obj.gender = "Female";
  console.log(obj.name);
  console.log(obj.age);
}
