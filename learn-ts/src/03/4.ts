{
  //유니온 타입 | (파이프) - 자바스크립트 || 랑 비슷
  //NOTE 인터섹션 타입 & (엠퍼샌드) - 자바스크립트 && 랑 비슷
  //인터섹션은 객체에서만 타입 지정할 수 있음

  let value: string | number; // 문자열 또는 숫자
  let value2: string & number; // string이면서 number , 기본타입들끼리는 사용하지 않음
  //   value2 = 10;
  //   value2 = "10";
  //   value2 = "hello"; // error

  let value4: { name: string; age: number };
  let value3: { name: string } & { age: number };
  // 인터섹션으로 묶이게 되면 둘이 하나인 것처럼 동작
  value3 = {
    name: "sucoding",
    age: 20,
  };
}

{
  let value1: String = "A";
  value1 = new String("a"); //String 객체 타입
  let value2: string = "A"; // string 원시 타입
}
