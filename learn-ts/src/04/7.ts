{
  let value: number | string = 10.12;
  console.log(value.toFixed(0)); //자동 추론
}

{
  function printValue(value: number | string) {
    //타입 가드 : 타입을 좁혀주는 조건문 또는 문법
    //if(typeof value==="number") console.log(value.toFixed(0));

    //타입 단언 : 타입스크립트 컴파일러에게 타입을 명확하게 알려주는 행위위
    //타입 단언 -> as [단언할 타입] 문법 검사하지 않음 /객체에서 없는 속성 사용하면 undefined가 됨(원래 객체의 특징임)
    console.log((value as number).toFixed(0));
    //<단언할타입>->리액트에서 사용할 수 없다. JSX 문법과 충돌
    console.log((<number>value).toFixed(0));
  }
  printValue("aaaa");
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
  // 널 보장 연산자 (!)
  function printValue(value: number | null) {
    //if(typeof value==="number")/ value에 경우가 3개 이상이면 if로도 해결 불가가
    console.log(value!.toFixed(2)); //널 아님 보장 연산자(!) ; 만약 number가 아니라면 typeerror발생
  }
  printValue(null);
}

{
  const element = document.querySelector("button") as HTMLButtonElement; //존재하지 않을리 없음, 타입단언
  element.style.color = "red";
}
