{
  let obj: {
    readonly name: string;
    readonly age: number; //읽기전용
    gender?: string; //선택적
  } = {
    name: "sucoding",
    age: 20,
  };

  obj.gender = "Female";
}
