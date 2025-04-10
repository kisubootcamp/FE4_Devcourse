{
  // 1.
  // 마이크로 소프트 -> 헝가리 출신 개발자
  // number => nNumber
  // num -> fNumber
  // name -> strName
  type TUser = {};
  interface IUser {}

  const user: IUser = {};
  const user2: TUser = {};

  // 사용하지 않도록 권장하는 추세
  // 오늘날의 추세 => 식별자의 이름을 의미있게 잘 지어주는 추세
  type User = {};
  type Car = {};
  type Color = {};
}

{
  //
  interface User {
    name: String;
  }

  interface Car {
    name: string;
    speed: number;
  }

  // 구별된 유니온 타입
  const user: User = { name: "sucoding" };
  const car: Car = { name: "bmw", speed: 100 };

  function printValue(obj: User | Car) {
    if ("speed" in obj) console.log(`${obj.speed}`);
    else console.log(obj.name);
  }
  printValue(user);
  printValue(car);
}

{
  //구조적 타이핑 // 타입을 선언하는 방식이 아닌 타입 구조에 의해 판단된다.
  //타입 별칭, 인터페이스 등 타입을 다르게 선언해도 구조가 같다면 이는 같다고 판단된다.
  type Car = {
    name: string;
    speed: number;
  };

  type Vehicle = {
    name: string;
  };

  let car: Car = { name: "bmw", speed: 100 };
  let vehicle: Vehicle = car;

  // vehicle 객체에 car 객체가 할당되며 덮어 씌어진다.
  vehicle = car;
  // vehicle은 { name: "bmw", speed: 100 } 값을 가지고 있지만, Vehicle 타입이기 때문에
  // name 프로퍼티는 접근이 가능하지만 speed 프로퍼니는 접근할 수 없다.
  console.log(vehicle.name);
  //   console.log(vehicle.speed); //오류 발생

  //   function printValue(obj: Car) {
  //     console.log(`${obj.name}, ${obj.speed}`);
  //   }

  //   printValue(vehicle);
  //Car와 Vehicle은 구조가 같기 떄문에 오류가 발생하지 않는다.
}
