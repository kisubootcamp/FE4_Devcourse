{
  //실무에서는 타입지정된 내용과 사용하는 부분이 다를 수 있다 (대부분)
  // 1.
  //마이크로 소프트에 다니는 헝가리 출신 개발자가 아이디어 제시
  // 식별자 앞에 식별자에 맞는 네이밍(프리픽스)를 붙여주자
  // 정수는 number -> nNumber (정수구나)
  // 소수는 num -> fNumber    (float 이구나)
  // name -> strName (str 이름이구나)
  // 한때 유행처럼 사용됐었음
  // ---> 헝가리안 표기법
  //type -> TUser
  // interface -> IUser
  type TUser = {};
  interface IUser {}

  const user: TUser = {};
  const user2: IUser = {};

  // 오늘날에는 헝가리안 표기법 지양
  // 초기에 잡았던 값 타입과 추후 변경되는 타입이 다를 수 있기  때문
  let strName = "sucoding";
  //   strName = ["sucoding", "john"];

  // 오늘날에는 식별자의 이름을 의미있게 잘 지어주는 것이 추세
  type User = {};
  type Car = {};
}

{
  //구별된 유니온 타입
  //유니온 타입으로 묶였을 때 중복되지 않은 속성으로 타입가드를 작성
  interface User {
    name: string;
  }
  interface Car {
    name: string;
    speed: number;
  }

  const user: User = {
    name: "sucoding",
  };
  const car: Car = { name: "BMW", speed: 100 };

  function printValue(obj: User | Car) {
    if ("speed" in obj) {
      console.log(obj.speed);
    } else console.log(`${obj.name}`);
  }
  printValue(user);
  printValue(car);
}

{
  //구조적 타이핑   ---------------------NOTE
  // 정의가 되어져 있는 이름으로 타입으로 구분하는 것이 아니라
  // 그 안의 내용을 보고 구분 (개명을 했다고 해서 사람은 바뀌지 않음)
  // 이름은 달라도 그 안에 타입이 같으면 상호 호환 됨
  // **** 식별자나 선언 방식이 중요한 것이 아니라 구조가 중요함 *****
  //구조자체가 바뀌는 건 아니고 내용을 덮어씌운다고 이해..!
  type Car = {
    name: string;
    speed: number;
  };
  interface Vehicle {
    name: string;
    speed: number;
  }

  let car: Car = { name: "bmw", speed: 100 };
  let vehicle: Vehicle = { name: "honda", speed: 200 };

  car = vehicle;
  vehicle = car;

  let num: number = 10;
  let str: string = "a";

  function printValue(obj: Car) {
    console.log(`${obj.name}${obj.speed}`);
  }
  printValue(vehicle);
}

{
  type Car = {
    name: string;
    speed: number;
  };
  interface Vehicle {
    name: string;
  }

  let car: Car = { name: "bmw", speed: 100 };
  let vehicle: Vehicle = { name: "honda" };

  //   car = vehicle; // 할당이 되지 않음
  vehicle = car;
  console.log(vehicle); // { name: 'bmw', speed: 100 }

  function printValue(obj: Vehicle) {
    console.log(`${obj.name}`);
  }
  printValue(vehicle);
}
