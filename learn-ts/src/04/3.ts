{
  // 범용적인 타입 지정 방법
  // 인덱스 시그니처
  // 객체의 추가, 삭제가 가능하지만 객체의 타입이 불분명함
  // 따라서 확실한건 그냥 적고 불확실한 것은 인덱스 시그니처 사용

  const obj: {
    name: string;
    age: number;
    [key: string]: string | number;
  } = {
    name: 'qq',
    age: 20,
  };

  obj.gender = 'male';
  console.log(obj);
}

//객체라서 사용가능한 방법
//옵셔널 프로퍼티 -> ?
// readonly 프로퍼티 -> readonly
// 인덱스 시그니처
