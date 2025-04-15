{
  // 주건부
  // T extends U ? X : Y

  type IsString<T> = T extends string ? "Yes" : "No";
  type A = IsString<string>; // "Yes"
  type B = IsString<number>; // "No"

  const a: A = "Yes";
  const b: B = "No";
}

{
  // 조건부 + infer
  type ElementType<T> = T extends (infer U)[] ? U : T;
  type A = ElementType<10>; //
  type B = ElementType<[1, 2, 3]>;
  type C = ElementType<[true, false]>;
}
{
  //
  type ReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
  ) => infer R
    ? R
    : any;
  type AgeFunc = ReturnType<typeof getAge>;
  function getAge() {
    return { name: "jungyu" };
  }
}
