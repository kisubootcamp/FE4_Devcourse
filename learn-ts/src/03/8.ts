{
  // 리터럴 타입 -> 값 자체를 타입으로 사용하는 것
  const num = 10; // const num:10 = 10; 이렇게 됨 이게 리터럴 타입

  let num2: 5 = 5;
  //   num2 = 1;
  //   num2 = 2; // 이 둘은 안됨. 타입이 5라서 5만 가능하다.
  num2 = 5;

  let bool: true = true;
  bool = true;

  const str = "A"; // 리터럴 타입으로 추론이 된다.
  const obj = { name: "sucoding" };
  const arr = [1, 2, 3];
}
