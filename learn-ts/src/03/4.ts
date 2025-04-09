{
  // 유니온 타입 | (파이프) expr1 || expr2
  // 인터섹션 타입 & (엠퍼샌드) expr1 && expr2

  let value: string | number; // 숫자, 문자
  let valu2: string & number; // string & number 참

  // { name: string, age: number }
  let value4: { name: string; age?: number };
  let value3: { name: string } & { readonly age?: number };
  value3 = {
    name: 'sucoding',
  };
}
