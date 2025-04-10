{
  let value: number | string = 10.12;
  console.log(value.toFixed(0));
}

{
  function printValue(value: number | string) {
    // 타입을 좁혀주는 조건문 또는 문법 -> 타입가드
    // if (typeof value === "number") console.log(value.toFixed(0));

    // 타입 단언 -> 타입스크립트 컴파일러에게 타입을 명확하게 알려주는 행위
    // 타입 단언 -> as [단언할 타입]
    console.log((value as number).toFixed(0));
    // <단언할 타입> -> 리액트에서는 사용할 수 없다. JSX 문법과 충돌
    console.log((<number>value).toFixed(0));
  }
  printValue(3.14);
  // 문자열 또한 강제로 number 타입으로 단언되기 떄문에 타입스크립트에서는 괜찮지만, 런타임에서 오류가 발생
  // 사용할 떄 주의가 필요하다
  printValue("aaaa");
}
{
  type User = {
    name: string;
  };

  type Car = {
    speed: Number;
  };

  const user: User = {
    name: "sucoding",
  };

  const car: Car = {
    speed: 100,
  };

  function printValue(obj: User | Car) {
    console.log((obj as Car).speed);
  }

  printValue(user);
}
{
  // 널 아님 단언 연산자 (!)
  function printValue(value: number | null) {
    console.log(value?.toFixed(2));
  }
  printValue(2);
}
{
  const element = document.querySelector("button"); // as HTMLButtonElement;
  element!.style.color = "red";
}
