{
  //유니온 타입 | (파이프) expr1 || expr2
  //인터섹션 타입 & (앰퍼샌드) expr1 $ expr2

  let value: string | number; //숫자, 문자
  let value2: string[] & number[]; // ?? string & number cka

  // {name : string, age ? : number}
  let value4: { name: string; age?: number };
  let value5: { name: string } & { readonly age?: number };
  value3 = {
    name: "sucoding",
  };
}

{
  //String Number Boolean
  //string number boolean  둘이 다름
  let value: String = "A"; //String 객체 타입
  value = new String("a");

  let value2: string = "A"; //string 타입
}

//타입 별칭 -> 첫 글자 대문자
// 타입 재사용 , 나만의 타입 지정 가능
{
  // number, string, boolean ....
  type Level = number | string;
  let level: Level = 10;
  let level2: number = 10;

  // 타입 별칭
  // type -> 나만의 타입을 지정하는 방법
  type Id = {
    id: number;
  };
  type Value = {
    value: string;
  };
  type Attributes = { weight: number; color: string };
  type ComplexData = Id &
    Value & {
      attributes: Attributes;
    };
  type ComplexStructure = ComplexData[];

  let complexStructure: ComplexStructure = [
    { id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
    { id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
    { id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
  ];
}
