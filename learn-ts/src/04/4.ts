{
  // 1.
  // 마이크로 소프트 -> 헝가리 출신 개발자
  // 헝가리안 표기법
  // number(정수) -> nNumber
  // number(실수) -> fNumber
  // name -> strName

  type TUser = {};
  interface IUser {}

  const user: TUser = {};
  const user2: IUser = {};

  // 사용하지 않도록 권장하는 추세
  // 오늘날의 추세 -> 식별자의 이름을 의미있게 잘 지어주는게 추세
}

{
  // 구별된 유니온 타입
  type User = {
    name: string;
  };

  type Car = {
    name: string;
    speed: number;
  };

  const user: User = { name: "sucoding" };
  const car: Car = { name: "bmw", speed: 100 };

  function printValue(obj: User | Car) {
    if ("speed" in obj) console.log(obj.speed);
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

  interface Vehicle {
    name: string;
    // speed: number;
  }

  let car: Car = { name: "bmw", speed: 100 };
  let vehicle: Vehicle = { name: "honda" };

  // 구조적 타이핑 -> 이름/선언방식이 아닌 구조만으로 비교
  //   car = vehicle;
  vehicle = car;
  console.log(vehicle);
  console.log(vehicle.name);
  //   console.log(vehicle.speed);

  function printValue(obj: Vehicle) {
    console.log(`${obj.name}`);
  }
  printValue(vehicle);
  printValue(car);
}
