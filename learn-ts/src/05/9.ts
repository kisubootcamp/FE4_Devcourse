// 조건부 타입
{
  // T extends U ? X : Y;
  // 제네릭 선언부에 extends 를 사용하면 타입 제약
  // 타입 결과에 extends 를 사용하면 조건부 타입으로 들어감
  type IsString<T> = T extends string ? "Yes" : "No";
  type A = IsString<string>; // Yes
  type B = IsString<number>; // No
}

{
  // 조건부 + infer
  type ElementType<T> = T extends any[] ? "Type is Array" : "is not Array";
  type A = ElementType<[]>; // Type is Array
  const a: A = "Type is Array"; // 리터럴 타입으로 딴 값 못들어옴
  type B = ElementType<"a">; // is Not Array

  type ElementType1<T> = T extends any[] ? any : T;
  type C = ElementType1<10>; // 10
  type D = ElementType1<[1, 2, 3]>; // any
}

{
  type ElementType<T> = T extends (infer U)[] ? U : T;
  type C = ElementType<["a", "b"]>; // string[] => string
  type D = ElementType<[1, 2, 3]>; // number[] => number
}

{
  // ex)
  // ReturnType
  // T extends (...arg: any) => any T 는 함수 형태의 값이어야 함.
  // T extends (...args: any) => infer R 받은 함수 타입의 리턴값의 타입이 있으면
  // type R
  // else never
  type ReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
  ) => infer R
    ? R
    : never;

  function test() {}

  type A = ReturnType<typeof test>; // never
}
