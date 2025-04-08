{
  let obj: {
    name: string;
    age: number;
    gender?: string; // 옵셔널 속성 : 변수에 할당될 값이 있어도 없어도 가능
  } = {
    name: "sucoding",
    age: 20,
  };

  console.log(obj.name);
  console.log(obj.age);

  //추후
  obj.gender = "Female"; //name과 age만 올 수 있음
}
