{
  // 헝가리안 표기법
  type TUser = {};
  interface IUser {}

  const user1: TUser = {};
  const user2: IUser = {};
  // 오늘날에는 권장 X

  // 오늘날에는 이름을 의미있게 지어주는 것이 추세
  type User = {};
  type Car = {};
}
{
  type User = {
    name: string;
  };
  type Car = {
    speed: number;
  };

  const user: User = { name: "jaegeon" };
  const car: Car = { speed: 1000 };

  function printValue(obj: User | Car) {
    if ("name" in obj) console.log(obj.name);
    else console.log(`${obj.speed}`);
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
  };

  let car: Car = { name: "MBW", speed: 100 };
  let vehicle: Vehicle = { name: "HONDA" };

  vehicle = car;
  console.log(vehicle);
  //   console.log(vehicle.speed);

  //   function printValue(obj: Car) {
  //     console.log(`${obj.name}, ${obj.speed}`);
  //   }

  //   printValue(vehicle);
  //   vehicle = car;
  //   car = vehicle;
}
