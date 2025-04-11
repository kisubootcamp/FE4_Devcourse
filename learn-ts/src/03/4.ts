{
  // 유니온 타입 | (파이프)         expr1 || expr2
  // 인터섹션 타입 & (앰퍼샌드)     expr1 && expr2

  let value: string | number; // 숫자, 문자
  let value2: string & number; // ?? string&number 참

  // {name: string, age?:number}
  let value4: { name: string; age?: number };
  let value3: { name: string } & { readonly age?: number };
  value3 = {
    name: "sucoding",
    age: 20,
  };
}

{
  // String, Number, Boolean
  // string, number, boolean
  let value: String = "A"; // String 객체 타입
  value = new String("a"); // ok

  let value2: string = "A"; // string 타입
}
