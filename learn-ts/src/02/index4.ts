{
  let obj: {
    readonly name: string;
    age: number;
    gender?: string; //옵셔널 속성
  } = {
    name: "hyeju",
    age: 20,
  };
  obj.gender = "Female";
}
