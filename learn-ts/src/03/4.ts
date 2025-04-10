{
  // 유니온 타입 | 파이프
  // 인터섹션 타입 & 앰퍼샌드

  let value: string | number; // 숫자 또는 문자
  let value2: string & number; // 숫자면서 문자 여야 참 ..
  // 인터섹션 타입
  // - 기본 타입간에는 사용하지않는다
  // - 객체에 대한 타입에 주로 사용
  let value3: { name: string } & { readonly age?: number };
  value3 = { name: "jieun" };
  let value4: { name: string; age?: number };
}
{
  // String, Number, Boolean
  // string, number, boolean
  let value: String = "A"; // String 객체 타입
  value = new String("a"); // ok

  let value2: string = "A"; // string 타입
}
