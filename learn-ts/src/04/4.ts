{
  // 1.
  // 마이크로 소프트 -> 헝가리 출신 개발자
  // 헝가리안 표기법
  // number -> nNumber
  // num -> fNumber
  // name -> strName

  type TUser = {};
  interface IUser {}

  const user: TUser = {};
  const user2: IUser = {};

  // 사용하지 않도록 권장하는 추세
  // 오늘날의 추세 -> 식별자의 이름으 ㄹ의미있게 잘 지어주는 게 추세
  type User = {};
  type Car = {};
  type Color = {};
}

{
  // 구별된 유니온 타입
  interface User {
    name: string;
  }

  interface Car {
    name: string;
    speed: number;
  }

  const user: User = { name: "kyo" };
  const car: Car = { name: "audi", speed: 100 };

  function printValue(obj: User | Car) {
    if ("speed" in obj) console.log(obj.speed); // 타입 가드
    else console.log(`${obj.name}`);
  }
  printValue(user);
  printValue(car);
}
{
  type Car = {
    name: string;
    speed: number;
  };

  type Venhicle = {
    name: string;
  };

  let car: Car = { name: "audi", speed: 100 };
  let venhicle: Venhicle = { name: "honda" };

  // 실제 값이 들어가 있음  name:string
  // speed는 못 들어감. 아예 car로 구조 자체를 바꾸는 건 아님
  venhicle = car; // car에 name이 있어서 가능

  // 구조적 타이핑 -> 구조만 놓고 비교
  //   car = venhicle;
  //   venhicle = car;

  //   function printValue(obj: Car) {
  //     console.log(`${obj.name}, ${obj.speed}`);
  //   }
  //   printValue(venhicle);
}
