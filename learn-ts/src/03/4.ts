{
  // 유니온 타입 | (파이프)
  // 인터섹션 타입 & (앰퍼샌드) -> 객체에 대한 타입을 지정할 때만 사용 !!

  let value: string | number; // 문자 or 숫자
  let value2: string & number; // 문자 and 숫자 -> 자바스크립트에서 이를 만족하는 값은 없음.

  // { name: string, age: number } 와 같은 의미
  // readonly, ? 속성 다 사용 가능
  let value3: { name: string } & { age: number };
  value3 = {
    name: "yubin",
    age: 26,
  };
}

{
  // String, Number, Boolean
  // string, number, boolean
  let value: String = "A"; // String 객체 타입 (표준 내장 객체) -> 실무에서 쓰이지 않음 !
  value = new String("a"); // ok

  let value2: string = "A"; // string 타입 (원시 타입)
  // value2 = new String("a"); // not ok -> error 발생
}
