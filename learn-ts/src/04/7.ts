{
  // 전역 레벨에서는 유니온 타입이어도 10.12가 할당되는 걸 명확하게 알고 있으므로 number 타입으로 추론해서 타입 에러를 일으키지 않음.
  let value: number | string = 10.12;
  console.log(value.toFixed(0));
}

{
  // 하지만, 함수도 한 번 래핑해주면 타입 에러가 발생함.
  // 타입 가드를 해주면 에러가 사라짐.
  function printValue(value: number | string) {
    // 타입 가드 -> 타입을 좁혀주는 조건문 또는 문법
    if (typeof value == "number") console.log(value.toFixed(0));

    // 타입 단언 -> 타입스크립트 컴파일러에게 타입을 명확하게 알려주는 행위
    // 타입 단언을 하면 타입스크립트 컴파일러가 타입 검사를 아예 하지 않기 때문에 주의해야 함 !!!
    // -> 즉, 런타임 때 에러가 발생할 수 있음. (개발자 책임)
    // as [단언할 타입] : 훨씬 더 많이 사용됨.
    console.log((value as number).toFixed(0));
    // <단언할 타입> : 리액트에서 사용할 수 없음. JSX 문법과 충돌나기 때문.
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
    name: "yubing",
  };

  const car: Car = {
    speed: 100,
  };

  // console.log((user as Car).speed); // 전역 레벨에서는 오류를 보여줌.

  function printValue(obj: User | Car) {
    console.log((obj as Car).speed);
  }

  printValue(user); // 함수로 래핑되면 잘못된 타입 단언을 해도 오류가 생기지 않음. BUT, undefined가 출력됨.
}

{
  // 널 아님 보장 연산자 (!)
  function printValue(value: number | null) {
    // (1) 타입 가드 사용
    if (typeof value === "number") console.log(value.toFixed(2));
    // (2) ? 연산자 사용 -> value: number | string | null 이렇게 string 타입도 생긴다면 에러 발생
    console.log(value?.toFixed(2));
    // (3) ! 연산자 사용 (타입 단언의 한 종류라서 런타임 때 에러 발생 가능성 있음) -> 절대로 null이 아니란 걸 보장해주는 것
    console.log(value!.toFixed(2));
  }
}

{
  // 이럴 때 타입 단언을 사용함
  // HTML 파일에 button이 100% 있는데, 타입스크립트에서 에러를 발생시킬 때 사용 가능
  // 단, 정말 button이 없을 경우에 생기는 문제는 개발자 책임
  const element = document.querySelector("button") as HTMLButtonElement;
  element.style.color = "red";
}
