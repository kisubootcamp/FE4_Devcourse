{
  //유니온 타입 | (파이프) expr1||expr2
  //인터섹션 타입 & (엠퍼센트) expr1&&expr2 =>객체대상으로만 사용

  let value: string | number; //숫자, 문자
  let value2: string & number; //숫자면서 문자 => never
  // value2=10;
  // value2="10";
  // value2="A";

  //{name:string, readonly age?:number} 뒤에가면 왜 사용하는지 알 수 있음
  let value3: { name: string } & { readonly age?: number };
  value3 = {
    name: "sucoding",
  };
}

{
  //String, Number,Boolean(래퍼 객체 타입)
  let value: String = "A"; //String 객체 타입("A"는 원시타입이지만 래퍼객체를 통해 객체로 할당시켜줌)
  value = new String("a"); //ok
  let value2: string = "A"; //원시 string타입
  // value2=new String("a"); //xxxxx
}
