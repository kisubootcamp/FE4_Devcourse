{
  // 유니온 타입 | (파이프)
  // 인터섹션 타입 & (앤퍼센트) => 객체를 대상으로만 사용

  let value: string | number; //숫자, 문자
  let value2: string & number; // string & number 참

  //   {name : string, age ?: number}
  let value3: { name: string } & { readonly age?: number };
  value3 = {
    name: "sss",
  };
}

{
  let value: String = "A"; //String 객체 타입
  value = new String("a"); //ok

  let value2: string = "A"; //string 타입
  value2 = new String("a"); //not ok
}
