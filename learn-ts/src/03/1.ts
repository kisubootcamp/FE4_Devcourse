{
  //함수
  //매개 변수와 반환 값의 타입을 지정해주는 것
  // const func:function=()=>{} //처럼 함수의 타입을 지정하지 않음 매개변수,내용으로 함수 타입임을 선언함
  // return 타입을 ":" 뒤에 작성하여 지정
  // void-> 아무것도 반환하지 않는다.
  // 함수 선언문

  function greet(): void {
    console.log("Greet!");
  }

  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }

  const result = sum(10, 20);
  console.log(result);

  function printValue(value: string): void {
    console.log(value);
  }
  printValue("A");

  function add(...numbers: number[]): number {
    //스프레드 연산자: 숫자들을 배열로 처리 ; 함수 호출에는 배열->숫자, 함수 정의에는 숫자->배열
    return numbers.reduce((result, num) => result + num, 0);
  }
  //const res=add([1,2,3]);
  const res = add(1, 2, 3);
  console.log(res);

  function printObj(userObj: { name: string }): void {
    console.log(userObj.name);
    //return userObj; //userObj 매개변수의 타입 명확하지 않아서 에러
    //return 10; // 리턴값이 명확하므로 리턴타입 추론 o (일부 추론 가능)
  }
  printObj({ name: "sucoding" });

  // 함수 표현식
  // -> 함수 자체에 매개변수와 반환값의 타입을 지정하는 방법
  // -> 변수에 함수의 매개변수와 반환값의 타입을 지정하는 방법
  const greet2: () => void = function greet2(): void {
    console.log("Greet!");
  };

  const sum1: (n1: number, n2: number) => number = function sum1(
    n1: number,
    n2: number
  ): number {
    return n1 + n2;
  }; //sum1변수와 sum1함수의 매개변수,리턴의 타입 중 하나만 지정해주면됨
  // 변수의 매개변수와 함수의 매개변수 이름이 같지 않아도됨 (하지만 거의 일치시켜줌)
  // =>const sum1:(a:number,b:number)=>number=function sum1(n1,n){}
  const sum2: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;
  const sun = (n1: number, n2: number): number => n1 + n2;

  const printValue1: (value: string) => void = (value) => {
    console.log(value);
  };

  const add1: (...numbers: number[]) => number = (...numbers) =>
    numbers.reduce((result, num) => result + num, 0);

  const printObj1: (userObj: { name: string }) => void = (userObj) => {
    console.log(userObj.name);
  };
}
