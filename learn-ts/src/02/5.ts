{
  //리터럴 타입->값 자체를 타입으로 사용하는 것
  const num = 10; //const쓰면 10으로 타입이 지정됨
  // const num:10=10;
  const str = "A";

  let num2: 5 = 5; //리터럴 타입
  //num2 = 1; //에러
  //num2 = 2; //에러
  num2 = 5; //가능
  let bool: true = true;
  bool = true; //가능
  //bool = false; //에러
  const obj = { name: "sucoding" };
  obj.name = "kisu";
  const arr: number[] = [1, 2, 3];
  //객체,배열은 const 사용해도 리터럴 타입으로 지정 x
}
