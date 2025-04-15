{
  // 조건부
  // T extends U ? X : Y
  // extends의 후위와 비교하여 참과 거짓에 따른 타입 제시
  type IsString<T> = T extends string ? "YES" : "NO";
  type A = IsString<string>; // "YES"
  type B = IsString<number>; // "NO"

  const a: A = "YES";
  const b: B = "NO";
}
{
  // 조건부 + Infer 적용 전
  type ElementType<T> = T extends any[] ? any : T;
  type A = ElementType<10>; // 10
  type B = ElementType<[10, 20, 30]>; // any
  type C = ElementType<["10", "20", "30"]>; // any
}
{
  // 조건부 + Infer 적용 후
  type ElementType<T> = T extends (infer U)[] ? U : T;
  type A = ElementType<10>; // 10
  type B = ElementType<[10, 20, 30]>; // 10 | 20 | 30
  type C = ElementType<["10", "20", "30"]>; // "10" | "20" | "30"
}
{
  type ReturnTyped<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
  type AgeFunc = ReturnTyped<typeof getAge>;
  function getAge() {
    return { age: 20 };
  }
}
