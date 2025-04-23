{
  //유니온(언) 타입
  // | => 파이프 기호

  let value: number | string = 10;
  value = 20;
  value = "A";
  function printValue(value: number | string | { name: string }): void {
    if (typeof value === "number") console.log(value.toFixed(0));
    else console.log(value);
  }
  printValue(10.123);
  printValue("A");

  const sum1 = (n1: number | string, n2: number | string): number | string => {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else if (typeof n1 === "number" && typeof n2 === "string")
      return `${n1}${n2}`;
    else if (typeof n1 === "string" && typeof n2 === "number")
      return `${n1}${n2}`;
    else if (typeof n1 === "string" && typeof n2 === "string")
      return `${n1}${n2}`; // if문 없으면 유니온끼리의 덧셈으로 생각해서 에러처리됨(덧셈처리는 명확한 타입을 인지했을때로)
    //더이상 예외사항이 없음에도 if문에서 포함시키지 못한 반환되지 않는 경우가 있지 않을까 의심함
    // 에러 처리해줌
    throw new Error("error"); //return "";로 해도됨
  };

  const sum = (n1: number | string, n2: number | string): number | string => {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  };
  const result1 = sum(1.2, 2.3);
  console.log(result1); //3.5
  //console.log(result1.toFixed(0)); // 반환값이 아무리 number여도 유니온때문에 모호하다고 판단함->에러발생
  if (typeof result1 === "number") console.log(result1.toFixed(0)); //명확하나 번거로움
  console.log(sum("A", "B"));

  //sum함수를 함수선언문 형식으로 바꾸기
  //함수 오버로드 -> 함수가 다양한 타입의 인자에 대해 다른 동작할 수 있도록 하는 기능(유니온에 대한 보완)
  function sun(n1: number, n2: number): number; //반환값에 대한 조건 추가
  function sun(n1: string, n2: number): string; //모든 반환값에 대해 표시해줘야함
  function sun(n1: number, n2: string): string;
  function sun(n1: string, n2: string): string;
  function sun(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === "number" && typeof n2 === "number")
      return n1 + n2; //타입가드
    else return `${n1}${n2}`;
  }
  //타입 단언
  const result2 = sum(1.2, 2.3) as number;
  const result3 = sum("A", "B") as string;

  //함수
  //never: 내부에 절대 반환될수 없는 무언가를 실행중(의미적으로 반환x 표현할때 사용) /
  //void: 단순히 반환값 없음
  let obj: Record<string, never> = {};
  function throwError(message: string): never {
    //never:절대 반환되지 않는 값
    throw new Error(message);
  }

  function infiniteLoop(): never {
    while (true) {}
  } //반환하고싶어도 절대할 수 없는 경우우
  //hot module reload->H.M.R
  function watchHMR(): never {
    while (true) {
      //....
    }
  } // 계속 돌면서 이벤트 감시할때 무한루프 사용되기도 함
}
