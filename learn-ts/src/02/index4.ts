{
  //1.
  let obj: {
    // readonly를 사용하면 값을 재할당 할 수 없다.
    readonly name: string;
    age: number;
    // ? -> 옵셔널속성 (배열에서 객체에 새로운 속성을 추가하고 싶을 때)
    gender?: string;
  } = {
    name: "sucoding",
    age: 20,
  };

  console.log(obj.name);
  console.log(obj.age);

  // obj.name = "jane";

  obj.gender = "Female";
  console.log(obj.gender);
}
