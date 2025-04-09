// const로 데이터를 정의하게 되면 거기에 할당된 데이터는 특별한 데이터로 할당된다.
{
  const num = 10; // 재할당이 안되기 때문에 자신 고유값으로 타입이 추론된다.
  // -> 이러한 타입을 리터럴 타입이라고 한다. -> 리터럴 타입은 값 자체를 타입으로 사용하는 것을 말함.
  const str = "A";
  const obj = { name: "Lee" }; // obj.name로 값이 바뀔 수 있기 때문에 {name: string}
  const arr = [1, 2, 3]; // 배열은 push로 값이 바뀔 수 있기 때문에 number[]
}
{
  let bool: true = true;
  // bool = false 리터럴 타입이 지정되어서 지정 불가
  // let에도 리터럴 타입을 선언해서 고유값 지정 가능
}
