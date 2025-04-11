{
  // 1.
  let obj: {
    readonly name: string;
    age: number;
    gender?: string; // 옵셔널 속성
  } = {
    name: "sucoding",
    age: 20,
  };

  // 추후에
  obj.gender = "Female";
}
