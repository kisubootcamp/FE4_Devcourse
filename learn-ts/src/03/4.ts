{
  // 유니온 타입 |
  // 인터섹션 타입 &
  let value: string | number; //숫자, 문자
  let value2: string & number; //객체 타입
  let value3: { name: string } & { age: number };
  value3 = {
    name: 'sucoding',
    age: 20,
  };
}
