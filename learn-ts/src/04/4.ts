{
  // 헝가리안 표기법
  // 사용하지 않도록 권장하는 추세
  type TUser = {};
  interface IUser {}

  const user: TUser = {};
  const user2: IUser = {};
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

  const user: User = { name: 'su' };
  const car: Car = { name: 'bmw', speed: 100 };

  function printValue(obj: User | Car) {
    // 타입 가드 -> 공통된 것이 있으면 오류 발생
    if ('speed' in obj) console.log(obj.speed);
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

  type Vehicle = {
    name: string;
    speed: number;
  };

  let car: Car = { name: 'bmw', speed: 100 };
  let vehicle: Vehicle = { name: 'honda', speed: 200 };

  // 구조적 타이핑
  car = vehicle;
  vehicle = car;

  function printValue(obj: Car) {
    console.log(`${obj.name}, ${obj.speed}`);
  }
  printValue(vehicle);
}
