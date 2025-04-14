{
  // 조건부 타입
  // 특정 조건에 따라 타입을 결정하게 하는 것
  // T extends U ? X : Y
  // -> extends의 위치가 타입 제약과 다름 (왼쪽: 타입 제약, 오른쪽: 조건부 타입)
  // -> <>안이면 타입 제약, <>밖이면 조건부 타입

  type IsString<T> = T extends string ? "Yes" : "No"; // "Yes" | "No"

  type A = IsString<string>; // Yes
  type B = IsString<number>; // No

  const a: A = "Yes";
  const b: B = "No";
}

{
  // 조건부 + infer
  type ElementType<T> = T extends any[] ? "Type is Array!" : "is not Array!";

  type A = ElementType<[]>; // type A = "Type is Array!"
  type B = ElementType<10>; // type B = "is not Array!"

  const a: A = "Type is Array!";
  const b: B = "is not Array!";

  type ElementType2<T> = T extends any[] ? number : T;
  type A2 = ElementType2<10>; // type A2 = 10
  type B2 = ElementType2<[1, 2, 3]>; // type B2 = number
  type C2 = ElementType2<["A", "B"]>; // type C2 = number
  type D2 = ElementType2<[true, false]>; // type D2 = number

  // 무슨 배열일지는 모르겠지만 넘어오는 게 배열이라면, infer라는 키워드로 U와 []를 분리시켜서 U를 사용할 수 있게 해줌...
  // infer는 모양을 가지고 노는 것...
  type ElementType3<T> = T extends (infer U)[] ? U : T;
  type A3 = ElementType3<10>;
  type B3 = ElementType3<[1, 2, 3]>; // number[] -> number
  type C3 = ElementType3<["A", "B"]>; // string[] -> string
  type D3 = ElementType3<[true, false]>; // boolean[] -> boolean
}

{
  //
  type ReturnTyped<T extends (...args: any) => any> = T extends (
    ...args: any
  ) => infer R
    ? R
    : any;

  // 유틸리티 타입인 ReturnType<T>과 동일한 타입을 구현해본 것.
  type AgeFunc = ReturnTyped<typeof getAge>;
  function getAge() {
    return { name: "yubin" };
  }
}
