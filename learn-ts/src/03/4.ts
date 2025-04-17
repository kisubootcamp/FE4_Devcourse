{
  // 유니온 타입 | (파이프) expr1 || expr2
  // 인터섹션 타입 & (앰퍼샌드) expr1 && expr2
  // 인터섹션 타입은 기본 타입들 간에는 사용하지 않음 -> 객체에서만 사용 가능

  let value: string | number; // 숫자, 문자
  let value2: string & number; // ?? string & number 참

  // { name: string, age?: number }
  let value3: { name: string } & { readonly age?: number };
  value3 = {
    name: "jungyu",
    age: 20,
  };
}


{
  interface Book {
    title: string;
    author: string;
    publishedYear: number;

    Author: {
      name: string;
      birthYear: number;
    };
  }
}