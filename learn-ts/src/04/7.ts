{
  let value: number | string = 10.12;
  console.log(value.toFixed(0));
}
{
  function printValue(value: number | string) {
    // 타입을 좁혀주는 조건문 또는 문법 -> 타입가드
    if (typeof value === "number") console.log(value.toFixed(0));

    // 타입 단언: tsc에게 타입을 명확하게 알려주는 행위
    // 타입 단언 1: as [단언할 타입]
    console.log((value as number).toFixed(0));
    // 타입 단언 2: <단언할 타입>, 리액트에서 사용할 수 없음 (JSX 문법 충돌)
    console.log((<number>value).toFixed(0));
  }
  printValue(3.14);
}
{
  type User = {
    name: string;
  };
  type Car = {
    speed: number;
  };
  const user: User = {
    name: "jaegeon",
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
