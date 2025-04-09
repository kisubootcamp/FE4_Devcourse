{
  // 타입별칭
  // type 이라는 키워드를 사용해서 나만의 타입을 지정하는 방법
  // 타입별칭 첫글자는 대문자로 한다

  let Level = number;
  let level: number = 10;
  let level2: number = 10;

  type Attributes = { weight: number; color: string };
  type ComplexData = {
    id: number;
    value: string;
    attributes: Attributes;
  };
  // 이렇게도 가능하다.
  // type Id = {
  //   id:number
  // }
  // type Value = {
  //   value: string
  // }
  // type Attributes = {weight:number; color:string}
  // type ComplexData = Id &
  // Value & {
  //   attributes: Attributes;
  // };

  type ComplexStructure = ComplexData[];

  let complexStructure: {
    {id:1, value:"apple", attributes: {weight:1.2, color:"green"}}
    {id:2, value:"banana", attributes: {weight:0.5, color:"yellow"}}
    {id:3, value:"cherry", attributes: {weight:0.2, color:"red"}}
  }
}
