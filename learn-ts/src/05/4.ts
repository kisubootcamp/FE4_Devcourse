{
  //제네릭 타입 제약 조건
  //extends
  function getLength<T extends { length: number }>(value: T): number {
    return value.length;
  } //length속성이 number타입인 타입의 매개변수만 length 허용
  getLength([1, 2]); //ok
  //getLength<number[]>([1,2]);와 동일 /length 속성 갖는 타입이라면 치환되도록(?)
  getLength("abc"); //ok, 래퍼 객체
  getLength(10); //not ok 숫자는 length 사용 불가이므로
}

{
  //6. 키 선택 타입 별칭
  type Person = {
    name: string;
    age: number;
    gender: string;
  };
  type PersonOfKeys = keyof Person;
  const key: PersonOfKeys = "gender";

  const car = {
    speed: 100,
  };

  type CarOfKeys = typeof car;
  console.log(typeof car); //objeect
} /////////////////////////??????????????
{
  function returnTuple<T, U>(a: U, b: T): [U, T] {
    return [a, b];
  }
  const r1 = returnTuple(1, 2); //[1,2]->[number,number]
  const r2 = returnTuple(1, "a"); //[1,'a']->[number,string]
}
