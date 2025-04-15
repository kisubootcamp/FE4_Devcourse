{
  // 조건부
  // T extends U ? X : Y
  type isString<T> = T extends string ? "Yes" : "No";
  type A = isString<string>;
  type B = isString<number>;

  const a: A = "Yes";
  const b: B = "No";
}
{
  // 조건부 + inder
  type ElementType<T> = T extends (infer U)[] ? U : T;

  type A = ElementType<10>;
  type B = ElementType<[1, 2, 4]>;
  type C = ElementType<["v", "k"]>;
  type D = ElementType<[true, false]>;
}
{
  type ReturnTyped<T extends (...arg: any) => any> = T extends (...arg: any) => infer R ? R : any;
  type AgeFunc = ReturnTyped<typeof getAge>;
  function getAge() {
    return { name: "sucoding" };
  }
}
