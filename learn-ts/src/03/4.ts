{
  // 유니온 타입 | (파이프) expr1 || expr2
  // 인터섹션 타입 & (앰퍼샌드) expr1 && expr2

  let value: string | number; // 숫자, 문자
  let value2: string & number; // ??

  // {name: string, age: number}
  let value4: { name: string; age?: number };
  let value3: { name: string } & { readonly age?: number };
  value3 = {
    name: "sucoding",
  };
}
