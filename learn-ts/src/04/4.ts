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
  let vehicle: Vehicle = { name: 'hoda', speed: 200 };

  // 구조적 타이핑
  car = vehicle;
  vehicle = car;
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

  const user: User = { name: 'sucoding' };
  const car: Car = { name: 'bmw', speed: 100 };

  function printValue(obj: User | Car) {
    if ('speed' in obj) console.log(obj.speed);
    else console.log(`${obj.name}`);
  }
  printValue(user);
  printValue(car);
}
