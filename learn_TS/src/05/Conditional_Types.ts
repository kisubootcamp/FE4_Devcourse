{
  // 조건부 타입
  // 특정 조건에 따라서 다른 타입을 적용하게 하는 것
  // T extends U ? X:Y
  type IsString<T> = T extends string ? "Yes" : "NO";
  type A = IsString<string>; // Yes 라는 리터럴 타입으로 반환됨
  type B = IsString<number>; // NO 라는 리터럴 타입으로 반환됨

  const a: A = "Yes";
  const b: B = "NO";
}

{
  // 조건부 + infer
  type ElementType<T> = T extends (infer U)[] ? U : T;

  type A = ElementType<10>;
  type B = ElementType<[1, 2, 3]>; // number[] -> number
  type C = ElementType<["a", "b"]>; // string[] -> string
  type D = ElementType<[true, false]>; // boolean[] -> boolean
}
{
  //
  type ReturnTyped<T extends (...args: any) => any> = T extends (
    ...args: any
  ) => infer R
    ? R
    : any;

  type AgeFunc = ReturnTyped<typeof getAge>;
  function getAge() {
    return { name: "sucoding" };
  }
}
