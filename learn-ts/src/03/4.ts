{
  // 유니온 타입 | (파이프)
  // 인터섹션 타입 & (앰퍼샌드)
  let value: string | number; //숫자 또는 문자
  let value2: string & number; //?? string & number 둘다 참이면 참

  // { name: string, age: number }
  let value3: { name: string } & { age: number };
  let value4: { name: string } & { readonly age?: number };
  value3 = {
    name: "sucoding",
    age: 20,
  };
}
{
  let value: String = "A"; // String 객체타입
  value = new String("a"); // 가능
  let value2: string = "A"; // string 원시타입
  // value2 = new String("a"); // 불가능
}
