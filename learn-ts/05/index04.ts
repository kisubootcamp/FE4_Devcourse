{
  // 조건부 타입
  // T extends U ? X : Y

  type IsString<T> = T extends string ? "Yes" : "No"; // "Yes" | "No"
  // <T extends string> <- 타입 제약
  type A = IsString<string>; // Yes
  type B = IsString<number>; // "No"

  const a: A = "Yes";
  const b: B = "No";
}

{
  // 조건부 + infer
  type ElementType<T> = T extends any[] ? "Type is Array" : "is not Array";
  type A = ElementType<[]>;
  const a: A = "Type is Array";
}
{
  // 조건부 + infer
  type ElementType<T> = T extends (infer U)[] ? U : T;
  type A = ElementType<10>;
  type B = ElementType<[1, 2, 3]>; // number[] -> number
  type C = ElementType<["a", "b"]>; // string[] -> string
  type D = ElementType<[true, false]>; // boolean[] -> boolean
  // 배열에서 타입을 예쁘게 뽑아낼 수 있는 방법
}

{
  type ReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
  ) => infer R
    ? R
    : any;

  type AgeFunc = ReturnType<typeof getAge>;
  function getAge() {
    return { name: "me" };
  }
}

{
  type ElementType<T> = T extends (infer U)[] ? U : T;
  type B = ElementType<[1, 2, 3]>; // number[] -> number
  console.log(B)
}
