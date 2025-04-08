{
  // 1.
  let obj: {
    readonly name: string;
    age: 20;
    gender?: string; // 옵셔널 속성
  } = {
    name: "jungyu",
    age: 20,
  };

  // obj.name = "park" // readonly는 읽기전용 수정 불가
  console.log(obj.name);

  // 추후에 동적으로 추가
  obj.gender = "Female";
}
