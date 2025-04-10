{
  // 유니언 타입 |
  // 인터섹션 타입 &

  let value: string | number; // 숫자, 문자
  let value2: string[] & number[]; // ?? string & number 참

  let value4: { name: string; age?: number };
  let value3: { name: string } & { readonly age?: number };
  value3 = {
    name: "jaegeon",
  };
}
{
  // String, Number, Boolean
  // string, number, boolean
  let value: String = "A"; // String 객체 타입
  value = new String("a"); // ok
  let value2: string = "A"; // 문자열 타입
}
