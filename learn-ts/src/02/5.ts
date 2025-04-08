{
  let obj: {
    readonly name: string; // readonly 속성 -> 추후 변경 불가
    age: number;
    gender?: string; // optional 속성 -> 있어도 되고 없어도 됨
  } = {
    name: "sucoding",
    age: 20,
  };

  // 추후에 동적으로 추가 가능
  obj.gender = "Female";
}
