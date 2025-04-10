{
  // 유니온 타입 | (파이프)     expr1 || expr2  or
  // 인터섹션 타입 & (엠퍼샌드) expr1 && expr2  and

  let value: string | number; // 숫자, 문자 둘중 하나만 만족 O
  let value2: string & number; // 숫자이면서 문자, 기본 타입들간에는 사용 x , 객체들의 타입들간에는 사용 O
  //   value2 = 10; //에러
  //   value2 = "10";
  //   value2 = "a";

  //  { name: string, age?: number }
  let value4: { name: string; age?: number };
  let value3: { name: string } & { readonly age?: number };
  value3 = {
    name: "sucoding",
  };
}

{
  let value1: String = "A"; // String 객체 타입
  value1 = new String("a");

  let value: string = "A"; // string 원시 타입
}
