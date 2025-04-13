{
  // 제네릭 타입 제약 조건
  // extends
  // length 속성이 있는 타입만 허용
  function getLength<T extends { length: number }>(value: T): number {
    return value.length;
  }

  getLength([1, 2]);
}
console.log("-------------------------------------");

{
  type Person = {
    name: string;
    age: number;
    gender: string;
  };

  type PersonOfKeys = keyof Person; // "name" | "age" | "gender"
}
