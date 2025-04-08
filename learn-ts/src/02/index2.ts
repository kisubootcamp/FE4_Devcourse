{
  // 타입 추론
  // 변수에 할당 되는 값을 보고 타입스크립트 컴파일러가 타입을 추론해주는 현상
  //   초기값을 생략하게 되면 변수의 타입은 any 타입으로 추론된다.
  let num = 10;
  let name = "hhi";
  let bool = true;

  let unde = undefined;
  let nul = null;

  let symbol = Symbol("a");
  let numArr = [1, 2, 3];
  let obj = { name: "sd", age: 14 };
  let big = 100n;
}

{
  //객체 타입에서는 readonly와 옵셔널 속성을사용할 수 있다. => 타입 추론이 되지 않기때문에 타입을 선언해줘야하고
  // 타입을 지정하면 추후에 속성을 추가 할 수 없다.
  let obj: {
    readonly name: string;
    age: number;
    gender?: string; //옵션널 속성 -> 값이 있을 수도 없을 수도 있는 변수를 만드는것
  } = {
    name: "sssss",
    age: 49,
  };
}

// 옵셔널을 사용하여 if문을 사용할 경우 추가적인 선언이 필요하다
