{
  // 1.
  // 객체 타입을 지정할 때 readonly를 추가하면 그 값을 변경할 수 없음.
  // 객체의 모든 속성에 다 쓸 수 있음.

  // 속성에 ?를 붙여주면 옵셔널 속성으로, 있어도 되고 없어도 된다는 뜻.
  // 옵셔널 속성은 객체와 함수에서 사용 가능. (배열, 튜플은 불가능)

  // readonly와 옵셔널 속성은 타입 추론이 되지 않기 때문에 명시적으로 타입을 지정해줘야 함.
  // 한 번 정의된 타입은 나중에 바꿀 수 없음. (동적으로 추가 불가능)
  let obj: {
    readonly name: string;
    age: number;
    gender?: string;
  } = {
    name: "yubin",
    age: 26,
  };

  //obj.name = "jane"; // readonly이기 때문에 오류가 남
  obj.age = 20;

  // 옵셔널 속성이기 때문에 추후에 동적으로 추가할 수 있음.
  obj.gender = "female";

  console.log(obj.name);
  console.log(obj.age);
  console.log(obj.gender);
}
