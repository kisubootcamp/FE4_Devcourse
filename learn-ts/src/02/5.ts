{
  // 1.
  let obj: { readonly name: string; age: number; gender?: string } = {
    name: "sucoding",
    age: 20,
  };

  // 객체에 readonly가 붙으면 변경할 수 없어짐
  //obj.name = "jane";
  // ?(optional 속성): 필수로 받아오지 않아도 되는 파라미터에 사용하면
  // 해당 파라미터에 인자를 전달하지 않아도 정상작동이 됨

  obj.gender = "Female";

  console.log(obj.name);
  console.log(obj.age);
}
