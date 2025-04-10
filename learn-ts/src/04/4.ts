{
  //1.
  //마이크로 소프트 -> 헝가리 출신 개발자
  //헝가리안 표기법법
  //number->nNumber
  //num->fNumber
  //name->strName
  type TUser = {};
  interface IUser {}

  const user: IUser = {};
  const user2: TUser = {};

  //사용하지 않도록 권장하는 추세
  //오늘날의 추세-> 식별자의 이름을 의미있게 잘 지어주기
  type User = {};
  type Car = {};
  type Color = {};
}

{
  //
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
    if ("speed" in obj) console.log(`${obj.speed}`);
    else console.log(obj.name);
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
    // speed:number;
  };

  let car: Car = { name: "bmw", speed: 100 };
  let vehicle: Vehicle = { name: "honda" };

  //구조적 타이핑
  // car=vehicle; //에러
  vehicle = car; //{name,speed}
  console.log(vehicle); //{name:"bmw",speed:100};
  console.log(vehicle.speed); //에러, 사용 불가

  function printValue(obj: Vehicle) {
    console.log(`${obj.name}`);
  }
  printValue(car); //더 큰값을 넣는건 가능, 큰값할당된곳에 작은값넣으면 에러(부족하면 에러, 넘치면 에러x)
}
