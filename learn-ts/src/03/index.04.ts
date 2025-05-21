{
  // 유니온 타입 | (파이프)  expr1 || expr2 TS와 JS의 차이
  // 인터섹션 타입 & (앰퍼샌드) expr1 && expr2

  let value: string | number; // 숫자, 문자
  let value2: string & number; // string이면서 number 인터섹션 타입은 기본 타입간에는 사용하지 않음
  // 객체에 대한 타입을 지정할 때 씀
  let value3: { name: string } & { age: number }; // 양쪽의 타입을 모두 만족해야 참
  // = {name:string, age: number}
  // 옵셔널, reeadonly 모두 사용 가능
  value3 = {
    name: "lee",
    age: 29,
  };
}
// String: 객체 타입
// string: 원시 타입
let value: String = "A"; // 레퍼 객체여서 필요할 때 string으로 지정할 수 있음.
value = new String("A");
let value2: string = "a";
// value2 = new string("A"); // 오류
// string, number, boolean -> 원시 타입으로 적기
