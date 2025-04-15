{
  // 1.

  //헝가리안 표기법
  type TUser = {};
  interface IUser {}

  const user: TUser = {};
  const user2: IUser = {};

  // 사용하지 않도록 권장
  // 오늘날 -> 식별자의 이름을 의미있게
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

  const user: User = { name: 'sucoding' };
  const car: Car = { name: 'bmw', speed: 100 };

  function printValue(obj: User | Car) {
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
  };

  let car: Car = { name: 'bmw', speed: 100 };
  let vehicle: Vehicle = { name: 'honda' };
  vehicle = car;
  console.log(vehicle);

  function printValue(obj: Vehicle) {
    console.log(`${obj.name}`);
  }

  printValue(vehicle);
}
