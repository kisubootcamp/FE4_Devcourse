{
  //조건부
  //T extends U ? X:Y
  type IsString<T> = T extends string ? "Yes" : "No"; //"Yes"|"No"

  type A = IsString<string>; //"Yes"
  type B = IsString<number>; //"No"

  const a: A = "Yes"; //a의 타입 ="Yes"
  const b: B = "No"; //b의 타입="No"
}
{
  //조건부+infer
  //타입의 일부분을 떼어내고 싶을때(ex) number [] 에서 number만 추출)
  type ElementType<T> = T extends any[] ? any : T; //배열이 아니면 값 그 자체가 리터럴 타입이됨
  type A = ElementType<10>; //type A=10;
  type B = ElementType<[1, 2, 3]>; //type B=any; number[]=>number로
  type C = ElementType<["a", "b"]>; // string[]=>string으로 하고 싶다면?=>infer사용!

  type ElementType2<T> = T extends (infer U)[] ? U : T;
  type D = ElementType2<10>; //type D=10;
  type E = ElementType2<[1, 2, 3]>; //type E=3|1|2
  type F = ElementType2<["a", "b"]>; // type F="a"|"b" 리터럴 타입(배열이아닌)
}
{
  //??????????
  type ReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
  ) => infer R
    ? R
    : any;
  type AgeFunc = ReturnType<typeof getAge>;
  function getAge() {
    return { name: "sucoding" };
  }
}
