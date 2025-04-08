{
  let obj: {
    readonly name: string;
    age: number;
    gender?: string /* 옵셔널 속성을 이용하여 추후 추가하려는 속성도 지정할 수 있다. 배열에서는 사용 불가. */;
  } = {
    // readonly(읽기 전용): 속성 변경 불가하도록 설정
    name: "ji",
    age: 20,
  };

  // obj,name = "yoon" 읽기 전용 변수이므로 변경 불가

  // 추후에 추가하려는 속성
  obj.gender = "Male";

  console.log(obj.name);
  console.log(obj.age);
}
// readonly
// ? 옵셔널
// 옵셔널을 있을 수도, 없을 수도 있는 변수를 저장하기 위해 있다.
