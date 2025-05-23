{
  // 유니온 타입 (| (파이프)) -> 여러 조건 중 하나만 만족하면 통과
  // JS의 or 연산자 : expr1 || expr2 -> 둘 중 하나만 true면 true

  // 인터섹션 타입 : & (앰퍼샌드) 기호를 사용해 타입을 나타내는 것 -> 여러개의 타입 중 모든 타입 만족해야 통과
  // JS의 and 연산자 : expr1 && expr2 -> 두개가 모두 true여야 true

  let value1: string | number; // 숫자, 문자
  let value2: string & number; // ?? string이면서 number여야 참임
  // value2 = 10; // 숫자 넣어도 에러
  // value2 = "10"; // 숫자처럼 생긴 문자 넣어도 에러
  // value2 = "a"; // 그냥 문자 넣어도 에러
  // 이런 값을 만족시킬 수 있는건 js에는 없음 -> 💡 인터섹션 타입은 기본 타입들 간에 사용하지 않음 ! -> 객체의 타입 지정할 때 사용

  // {name: string, age: number}
  let value3: {name: string} & {readonly age?: number}; // optional이나 readonly 적용 가능
  value3 = {
    name: "sucoding",
  };

  let value4: {name: string; age: number};
}
{
  let value1: String = "A"; // String 객체 타입
  value1 = new String("a"); // String 객체를 의미하기 때문에, 값을 할당하는 것 가능
  let value2: string = "A"; // string 타입
  // value2 = new String("a"); // 원시 타입, 즉 기본 자료형의 string을 의미하기 때문에 값 할당 불가능
}
