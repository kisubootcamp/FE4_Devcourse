{
  // ========== 심각... 코드 보고 이해하는 수준만 ========== //

  // 조건부
  // T extends U ? X : Y
  type IsString<T> = T extends string ? "yes" : "no"; //  "yes" : "no"

  type A = IsString<string>; // "yes"
  type B = IsString<number>; //  "no"

  const a: A = "yes";
  const b: B = "no";
}

{
  // 조건부 + infer
  // infer : 조건부에서만 사용 가능
  type ElementType<T> = T extends any[] ? "Type Is Array!" : "Is not Array!";
  type A = ElementType<[]>; // "Type Is Array!"
}
{
  type ElementType<T> = T extends any[] ? any : T;
  type A = ElementType<10>;
  type B = ElementType<[1, 2, 3]>;
  type C = ElementType<["a", "B"]>; // 문자열이라도 배열이라면 number로 인식
}
{
  type ElementType<T> = T extends (infer U)[] ? U : T;
  type A = ElementType<10>;
  type B = ElementType<[1, 2, 3]>; // number[] -> number
  type C = ElementType<["a", "B"]>; // string[] -> string
  type D = ElementType<[true, false]>; // boolean[] -> boolean
}

{
  // 예시
  // (...args:any) 함수 형식
  type ReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
  ) => infer R
    ? R
    : any;

  type AgeFunc = ReturnType<typeof getAge>; // typeof: 타입 추출, 안쓰면 그냥 참조값이 넘어가서 안됨.
  function getAge() {
    return { name: "kyo" };
  }
}
