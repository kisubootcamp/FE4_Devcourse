{
  let value: number | string = 10.12;
  console.log(value.toFixed(0)); // toFixed(0) 소숫점 삭제
}

{
  function printValue(value: number | string) {
    // 타입을 좁혀주는 조건문 또는 문법 -> 타입 가드
    // if (typeof value === "number") console.log(value.toFixed(0));

    // 타입 단언 -> 타입스크립트 컴파일러에게 타입을 명확하게 알려주는 행위
    // 타입 단언 -> as [단언할 타입]
    // 단점 : 타입 검사를 아예 안함. 개발자의 타입 선언을 믿음.
    // 런타임 때 오류 생길 수 있음
    console.log((value as number).toFixed(0));
    // <단언할타입> -> 리액트에서 사용할 수 없다. JSX 문법과 충돌
    console.log((<number>value).toFixed(0));
  }
  printValue(3.14);
}

{
  // 타입 단언에 Interface나 type으로 정의한 타입도 가능
  type User = {
    name: string;
  };
  type Car = {
    speed: number;
  };

  const user: User = {
    name: "kyo",
  };
  const car: Car = {
    speed: 100,
  };

  function printValue(obj: User | Car) {
    console.log((obj as Car).speed); // 얘는 무조건 Car 타입이야 -> 타입 단언
  }
  printValue(user); //undefined -> user에 없는 speed 속성에 접근하니까
}

{
  // 널 아님 보장 연산자 (!) -> 런타임 때 오류 생길 수 있음
  // 타입을 좁혀주진 않음. 단언하는 것
  function printValue(value: number | null) {
    // if (typeof value === "number")
    console.log(value?.toFixed(2)); // null 아니면  number 밖에 없음
    console.log(value!.toFixed(2)); // 절대로 null 아님을 보장. 단언.
  }
  printValue(null);
}

{
  const element = document.querySelector("button") as HTMLButtonElement;
  element.style.color = "red";
}
