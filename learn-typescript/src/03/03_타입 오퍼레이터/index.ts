/* 유니온 타입 */
// 파이프기호(|)를 사용해서 타입을 연결하는 연산자
// 장점 : 하나의 값에 여러 타입을 지정해줄 수 있다.
// 단점 : 타입 가드와 같은 기법을 통해 사용하려는 값의 범위를 좁혀줘야 한다.
{
    function printValue(value: number | string | { name: string }): void {
        console.log(value);
    }
    printValue(10);
    printValue("A");
    printValue({ name: "Hayoung" });
}
{
    // 유니온(언) 타입
    // | -> 파이프 기호
    function printValue(value: number | string): void {
      if (typeof value === "number") console.log(value.toFixed(0));
      else console.log(value);
    }
    printValue(10.123);
    printValue("A");
  
    // n1: number, n2: number -> number
    // n1: string, n2: number -> string
    // n1: number, n2: string -> string
    // n1: string, n2: string -> string
    const sum = (n1: number | string, n2: number | string): number | string => {
      if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
      else return `${n1}${n2}`;
    };
    console.log(sum(10, 20));
    console.log(sum("A", "B"));
  
    // 함수
    // never void
    let obj: Record<string, never> = {};
    function throwError(message: string): never {
      throw new Error(message);
    }
  
    function infinitLoop(): never {
      while (true) {}
    }
  }

  {
    // 타입 별칭 -> 첫 글자 대문자
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