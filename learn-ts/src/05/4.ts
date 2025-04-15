{
  // 제네릭 타입 제약 조건
  // extends
  function getLength<T extends { length: number }>(value: T): number {
    return value.length;
  }

  getLength([1, 2]);
}

{
  // 6. 키 선택 타입 별칭
  type Person = {
    name: string;
    age: number;
    gender: string;
  };
  // 객체의 타입을 가지고 key 값을 가져옴
  type PersonOfKeys = keyof Person; // "name" | "age" | "gender"
  const key: PersonOfKeys = "gender";

  const car = {
    speed: 100,
  };
  //객체의 값을 가지고 타입을 가져옴
  type CarOfKeys = typeof car;
}
