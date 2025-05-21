{
  // 재할당이 일어나지 않을 경우 const
  // 재할당이 될 경우 let
  // 수업시간에 의도적으로 let 사용

  // const 에 값을 할당할 경우 값이 특별하게 변함
  // const
  // NOTE 리터럴 타입 : 값 자체를 타입으로 사용
  const num: 10 = 10;
  let bool: true = true;
  bool = true; // false x , 리터럴 타입으로 true 를 넣었기때문
  const obj = { name: "sucoding" };
  const arr = [1, 2, 3];
}
