{
  let obj: {
    readonly name: string;
    age: number;
    gender?: string; // 옵셔널 속성
  } = {
    name: "jaegeon",
    age: 20,
  };

  obj.gender = "male";

  console.log(obj.name);
  console.log(obj.age);
  console.log(obj.gender);
}
