{
  const obj: {
    name: string;
    age?: number;
  } = {
    name: "duff",
    age: 20,
  };

  delete obj.age;
}
{
  // 범용적인 타입 지정 방법
  // 인덱스 시그니처
  const obj: {
    [key: string]: string | number;
  } = {
    name: "duff",
    age: 20,
  };
}
{
  // 인덱스 시그니처 + 일반 속성 지정
  const obj: {
    name: string;
    age: number;
    [key: string]: string | number;
  } = {
    name: "duff",
    age: 20,
  };
}

// 객체라서 가능한 방법
// -> 옵셔널 프로퍼티, readonly, 인덱스 시그니처

//
