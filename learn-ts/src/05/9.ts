{
  // 조건부 
  // T extends U ? X : Y
  // 꺽쇠 안에 쓰는 extends는 타입 제약이고 꺽쇠 밖에 쓰는 extends는 조건부 타입.
  type IsString<T /*여기에 쓰면 타입 제약*/> = /* 여기에 쓰면 조건부 타입 */ T extends string ? "Yes" : "No"; // "Yes" | "No"
  type A = IsString<string>; // "Yes"
  type B = IsString<number>; // "No"

  const a: A = "Yes";
  const b: B = "No";

}
{
  // 조건부 + infer
  type ElementType<T> = T extends any[] ? "Type is Array!" : "is not Array!";
  type A = ElementType<[]> //"Type is Array!"
  const a: A = "Type is Array!"; // is not Array!
}
{
  type ElementType<T> = T extends any[] ? any : T;
  type A = ElementType<10> // 10이 A에 할당됨
  type B = ElementType<[1, 2, 3]> // any가 B에 할당됨
}
{
  type ElementType<T> = T extends any[] ? number : T;
  type A = ElementType<10> // 10이 A에 할당됨
  type B = ElementType<[1, 2, 3]> //                    -> string[] -> string
  type C = ElementType<["a", "b"]> // number이 C에 할당됨  -> number[] -> number
  type D = ElementType<[true, false]>; //                  boolean[] -> boolean

  // 해결
  // infer는 조건부 타입에서만 쓸 수 있고
  // 타입을 떼어내서 사용할 수 있게 해줌.
  type ElementType1<T> = T extends (infer U)[] ? U : T;
  type A1 = ElementType1<10> // 10이 A에 할당됨
  type B1 = ElementType1<[1, 2, 3]> //                    -> string[] -> string
  type C1 = ElementType1<["a", "b"]> // number이 C에 할당됨  -> number[] -> number
  type D1 = ElementType1<[true, false]>; //                  boolean[] -> boolean
}
{
  // 
  type ReturnType<T extends(...args: any) =>  any> = T extends (
    ...args: any 
  ) =>  infer R 
  ? R
  : any;

  type AgeFunc = ReturnType<typeof getAge>;
  function getAge() {
    return {name: "ys"};
  }
}