{
  //조건부 타입
  // T extends U ? X : Y

  type IsString1<T extends { lenght: number }> = T; // 제네릭 타입 제약
  type IsString2<T> = T extends string ? "Yes" : "No"; // "Yes"|"NO"
  type A = IsString2<string>;
  type B = IsString2<number>;

  const a: A = "Yes";
  const b: B = "No";
}

{
  // 조건부 + infer
  type ElementType<T> = T extends any[] ? "Type is Array!" : "is not Array!";
  type A = ElementType<[]>;
  type B = ElementType<number>;
  const a: A = "Type is Array!";
  const b: B = "Type is Array!";
}

{
  //조건부 + infer
  // infer 는 항상 조건부 타입에서만 쓰임
  // 아래 배열에서는
  // -> 배열 확인 ? 타입 U 의 배열 이야? -> [ok] -> U  타입 추출
  // -> 배열 확인 ? 타입 U 의 배열 이야? -> [no] -> T  타입 추출

  type ElementType<T> = T extends (infer U)[] ? U : T; //
  type A = ElementType<10>;
  type B = ElementType<[1, 2, 3]>; // number[] -> number
  type C = ElementType<["a", "b"]>; // string[] -> string
  type D = ElementType<[true, false]>; // boolean[] -> boolean
}

{
  // ReturnType : 항상 함수 형태 여야함
  type ReturnTyped<T extends (...args: any) => any> = T extends (
    ...args: any
  ) => infer R
    ? R
    : any;
  type AgeFunc = ReturnTyped<typeof getAge>;
  function getAge() {
    return "kuku";
  }
}
