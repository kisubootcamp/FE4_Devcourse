{
  // 인덱스 시그니처 NOTE
  // 범용적으로 타입 지정하는 방법
  // 편하게 속성 추가가 쉬움
  // 어떤 키가 어떤 값의 타입을 갖고 있는지 모르게됨 -> 키의 값을 활용한 추가 동작을 하지 못함(ex. string.toUpperCase())
  // -> 해결 \ 속성이 확실한 부분만 정확하게 타입을 지정하고 나머지 추가되는 부분에 대해서는 인텍스 시그니처 사용
  // ***객체라서 사용가능한 방법 ****************CHECK
  // 옵셔널 프로퍼티 -> '?' 사용
  // readonly 프로퍼티 를 사용해서 정의
  // 인덱스 시그니처

  type ObjType = {
    [key: string]: string | number;
  };
  interface ObjType1 {
    [key: string]: string | number;
  }

  const obj: {
    [key: string]: string | number;
  } = {
    name: "sucoding",
    age: 20,
  };
  const name = obj.name;
  if (typeof obj.name === "string") {
    obj.name.toUpperCase();
  } // 이렇게 쓰면 작동하긴 하는데 지저분해지는 듯..
  name.toUpperCase(); // 인덱스 시그치너로 타입지정이 된 것은 타입지정이 되어 있지 않아 특정 데이터타입에 사용가능한 메서드는 사용하지 못함 CHECK
  delete obj.age;
  obj.gender = "male";

  const obj2: {
    name: string;
    age: number;
  } = {
    name: "sucoding",
    age: 20,
  };
}
