{
  let value: number | string = 10.12;
  console.log(value.toFixed(0));
}
{
  function printValue(value: number | string) {
    // 타입을 좁혀주는 조건문 또는 문법 -> 타입가드
    // if (typeof value === "number") console.log(value.toFixed(0));
    console.log((value as number).toFixed(0)); // 타입 단언 -> 타입스크립트 컴파일러에게 타입을 명확하게 알려주는 행위 as [단언할 타입] as를 사용한 방법을 가장 많이 사용함
    //<단언할 타입> -> 리액트에서는 사용할 수 없더. JSX 문법(리액트에서 사용하는 문법)과 충돌
    // console.log((<number>value).toFixed(0));

    // 타입 단언에는 interface나 타입 별칭으로 정의한 타입도 가능하다

    // 타입 단언 주의사항!! 타입스크립트가 해당 요소의 타입을 검사하지 않음
  }
  printValue(3.14);
  printValue("aaa"); // 런타임 전에 에러를 확인할 수 없다.
}

{
  type User = {
    name: string;
  };
  type Car = {
    speed: number;
  };

  const user: User = {
    name: "Lee",
  };

  const car: Car = {
    speed: 100,
  };

  // console.log((user as Car).speed); // 전역에서는 타입 단언으로 정상적으로 출력 불가
  function printValue(obj: User | Car) {
    console.log((obj as Car).speed); // 원래는 실행이 안되는 코드인데 타입 단언으로 실행됨
  }
  // car 객체 속성에 접근하기에 에러는 나지 않는데 user를 반환하기 때문에 user에 없는 speed값에 접근하려고 해서 undefined가 출력된다.
  printValue(user); // user 타입에는 없는 speed 속성에 접근해서 undefined
}

{
  // 널 아님 보장 연산자 (!)
  function printValue(value: number | null) {
    // if(typeof value === "number")
    console.log(value!.toFixed(2)); // number와 null만 있을 때는 null이 아니면 number이기에 ?를 통과
    // !: null이 아님을 "단언", 타입 가드가 아니다.
    // 타입 가드를 사용하면 확실히 null이 아니가 때문에 널  아님보장 연산자를 굳이 쓸 이유는 없다
    // null과 함께 다른 타입이 하나 더 있을 때 사용
    // console.log(value?.toFixed(2))
    // string이 포함되면 number라는 보장이 없기 때문에 결국 타입가드를 사용해줘야 한다.
    // !: 절대로 null이 아님을 보장
    // 타입 단언은 개발자가 타입을 확실하지만 타입스크립트 문법적으로 확실하지 않을 때에는 유용하지만, 그렇지 않을 때에는 오류의 위험이 크기 때문에 그 부분을 유념해야 한다.
    // dom 요소에 접근할 때 많이 사용된다
  }
  printValue(null); // null 보장 연산자에 null을 반환하면 런타임에 오류가 일어난다
}

{
  const element = document.querySelector("button") as HTMLButtonElement; // 타입 단언
  element.style.color = "red";
}
