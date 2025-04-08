{
  //1.
  let obj: {
    readonly name: string; // readonly - 값을 재할당할 수 없음
    age: number;
    gender?: string; //옵셔널 속성( '?' -  옵셔널 연산자 라고도 함)
  } = {
    name: "sucoding",
    age: 20,
  };

  obj.age = 30;
  console.log(obj.name);
  console.log(obj.age);

  //추후에 추가되는 속성이 있을 수 있음 , 어떻게 해줄 수 있을까
  obj.gender = "female";

  // "?" 옵셔널 연산자를 넣은 속성이 있다면 동적으로 값을 추가할 수 있음
  // *** 타입을 동적으로 추가할 수는 없음
}
