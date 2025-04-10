{
  let value: number | string = 10.12;
  console.log(value.toFixed(0));
}
{
  function printValue(value: number | string) {
    //타입을 좁혀주는 조건문 또는 문법 -> 타입가드
    if (typeof value === "number") console.log(value.toFixed(0));
    console.log((value as number).toFixed(0));
    //타입 단언 -> 타입스크립트 컴파일러에게 타입을 명확하게 알려주는 행위
    // 타입 단언 -> as [단언할 타입]
    //<단언할 타입> -> 리액트에서 사용할 수 없다. JSX 문법과 충돌
    console.log((<number>value).toFixed(0));
  }
  printValue("aaa");

  //NOTE 타입단언을 하면 타입 스크립트 컴파일러는 타입 검증을 하지 않고 진행
  // 컴파일할때 에러를 발생하지 못하고 런타임할때 에러가 나타날 수 있음
  // 타입스크립트의 장점이 컴파일할때 미리 에러를 찾아 런타임 에러를 방지하기 위함인데
  // 타입단언을 잘하지 못하면 런타임에서 에러가 나고... 이건 개발자 책임
}
{
  type User = {
    name: string;
  };
  type Car = {
    speed: number;
  };
  const user: User = {
    name: "sucoding",
  };
  const car: Car = {
    speed: 100,
  };
  console.log((user as Car).speed);
}

{
  //null 아님 보장 연산자 (!) ----------NOTE
  function printValue(value: number | null) {
    // if (typeof value === "number") console.log(value.toFixed(2));
    console.log(value!.toFixed(2)); // value 값이 null 이 아니라고 보장
  }
}

{
  // 널 아님 보장 연산자 (!)
  function printValue(value: number | null) {
    // if (typeof value === "number")
    console.log(value!.toFixed(2));
  }
  printValue(null);
}

{
  const element = document.querySelector("button") as HTMLButtonElement;
  element.style.color = "red";
}
