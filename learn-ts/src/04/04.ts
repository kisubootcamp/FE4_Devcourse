{
  // 1.
  // 마이크로 소프트 -> 헝가리 출신 개발자
  // 헝가리안 표기법
  // number -> nNumber
  // num -> fNumber
  // name -> strName
  type TUser = {};
  interface IUser {}

  const user1: IUser = {};
  const user2: TUser = {};

  // 사용하지 않도록 권장하는 추세
  // 오늘날의 추세 -> 식별자의 이름을 의미있게 잘 지어주는 게 추세
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

  const user: User = { name: "jungyu" };
  const car: Car = { name: "benz", speed: 100 };

  function printValue(obj: User | Car) {
    if ("speed" in obj) console.log(obj.speed);
    else console.log(`${obj.name}`);
  }

  printValue(user);
  printValue(car);
}

{
  // 구조적 타이핑
  type Car = {
    name: string;
    speed: number;
  };

  type Vehicle = {
    name: string;
    speed: number;
  };

  let car: Car = { name: "bmw", speed: 100 };
  let vehicle: Vehicle = { name: "benz", speed: 200 };

  function printValue(obj: Car) {
    console.log(`${obj.name}, ${obj.speed}`);
  }

  printValue(vehicle);
  car = vehicle;
  vehicle = car;
}
