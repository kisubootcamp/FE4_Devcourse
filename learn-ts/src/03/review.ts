{
  //함수

  //함수의 타입을 지정하지 않고 매개변수, 반환값의 타입만 지정
  //함수 선언문
  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }
  const result = sum(10, 20);

  function printObj(userObj: { name: string }): void {
    console.log(userObj.name);
  }
  printObj({ name: "sucoding" });

  //함수 표현식
  // -> 함수 자체에 매개변수와 반환값의 타입을 지정하는 방법
  // -> 변수에 함수의 매개변수와 반환값의 타입을 지정하는 방법

  //sum변수와 sum함수의 매개변수,리턴의 타입 중 하나만 지정해주면됨
  const sum2: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;
  const sun = (n1: number, n2: number): number => n1 + n2;
  // 변수의 매개변수와 함수의 매개변수 이름이 같지 않아도됨 (하지만 거의 일치시켜줌)
  // =>const sum1:(a:number,b:number)=>number=function sum1(n1,n){}

  const add1: (...numbers: number[]) => number = (...numbers) =>
    numbers.reduce((result, num) => result + num, 0);
  //스프레드 연산자: 숫자들을 배열로 처리 ; 함수 호출에는 배열->숫자, 함수 정의에는 숫자->배열
}

{
  //유니온(언) 타입
  //| =>파이프기호
  function printValue(value: number | string | { name: string }): void {
    if (typeof value === "number") console.log(value.toFixed(0));
    else console.log(value);
  }
  printValue(10.123);
  //if문 없으면 value의 타입이 명확하지 않아서 toFixed()사용 x=>에러

  //함수 오버로드 -> 함수가 다양한 타입의 인자에 대해 다른 동작할 수 있도록 하는 기능(유니온에 대한 보완)
  function sun(n1: number, n2: number): number; //반환값에 대한 조건 추가
  function sun(n1: string, n2: number): string; //모든 반환값에 대해 표시해줘야함
  function sun(n1: number, n2: string): string;
  function sun(n1: string, n2: string): string;
  function sun(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  }
  //타입 단언
  const result2 = sun(1.2, 2.3) as number;
  const result3 = sun("A", "B") as string;

  //함수
  //never 타입: 내부에 절대 반환될수 없는 무언가를 실행중(의미적으로 반환x 표현할때 사용)
  //=> throw new Error(message);, 무한루프 등등...
  //void: 단순히 반환값 없음
}
{
  //옵셔널 파라미터 ? : 사용할수도 안할수도(undefined 타입) 매개변수 뒤쪽에 사용
  //?와 readonly는 객체타입에서 어디서든 사용가능
  //유니온 | 인터섹션 &
  //ex) let value:string|number; => never 타입
  //인터섹션 객체대상으로만 사용
}
{
  //타입별칭=>첫글자 대문자
  type Level = number | string;
  let level: Level = 10;
  //사용이유: 나만의 타입 지정, 중복해서 사용하는 타입 따로 효율적으로 지정하여 사용
  //서로 다른 타입별칭들 &로 묶어 사용
}
