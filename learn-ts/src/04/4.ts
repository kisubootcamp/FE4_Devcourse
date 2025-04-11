{
  // 1.
  // 실무에서는 타입을 정의한 것과 타입을 사용하는 것은 파일이 분리될 가능성이 매우 높음.
  // 마우스를 올려보기 전까지는 타입 별칭인지 인터페이스인지 알기 어려움.
  // -> 식별자 앞에 식별자를 구분할 수 있는 prefix를 붙여주자.
  // -> 헝가리안 표기법 (헝가리 출신 개발자가 제시한 아이디어였기 때문)
  // -> 한때 유행하고 정석처럼 받아들여진 시기가 있었음.
  // -> BUT, 오늘날은 사용하지 않도록 권장하는 추세임 !

  // number -> nNumber (number)
  // num -> fNumber (float)
  // name -> strName (string)

  // User -> TUser (타입 별칭)
  // User -> IUser (인터페이스)

  type TUser = {};
  interface IUser {}

  const user: IUser = {};

  // 사용하지 않도록 권장하는 이유
  // 값이 변경되면 원래의 의미가 없어지기 때문 !!
  let strName = "yubin";
  // strName = ["yubin", "bing"];

  // 오늘날의 추세 -> 식별자의 이름을 의미있게 잘 지어주는 게 추세 !!!
  type User = {};
  type Car = {};
  type Color = {};
}

{
  // 구별된 유니온 타입
  // -> 중복되지 않는 속성값으로 타입 가드를 작성하는 것.
  // 인터페이스 뿐만 아니라 타입 별칭이어도 똑같이 가능함.
  interface User {
    name: string;
  }

  interface Car {
    name: string;
    speed: number;
  }

  const user: User = { name: "bing" };
  const car: Car = { name: "bmw", speed: 100 };

  function printValue(obj: User | Car) {
    // 타입 가드
    // 중복된 name 속성이 추가되면 타입 가드로도 구분할 수 없어서 에러가 남.
    // -> 중복되지 않은 속성으로 다시 구분해야 함 !
    // if ("name" in obj) console.log(obj.name);
    // else console.log(`${obj.speed}`);
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
    speed: number;
  }

  let car: Car = { name: "bmw", speed: 100 };
  let vehicle: Vehicle = { name: "honda", speed: 200 };

  // 구조적 타이핑
  // 타입스크립트는 타입 이름이나 선언 방식(타입 별칭, 인터페이스, 제네릭 등)이 아니라 "구조"를 보고 구분함.
  // 아래의 코드는 타입의 구조가 똑같기 때문에 허용됨.
  car = vehicle;
  vehicle = car;

  function printValue(obj: Car) {
    console.log(`${obj.name}, ${obj.speed}`);
  }
  printValue(car);
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

  // car = vehicle; // 에러

  // name 속성만 있으면 구조적으로 같다고 판단함.
  // 구조적 타이핑 -> 객체의 속성이 많은 쪽을 적은 쪽에 할당하는 건 가능함. BUT, 반대는 불가능함.
  vehicle = car;
  console.log(vehicle.name); // bmw
  // console.log(vehicle.speed); // 에러 -> 할당은 되지만 vehicle에 없는 속성인 speed는 사용할 수 없음. (값은 들어가있지만 사용할 수 없는 것임)

  function printValue(obj: Vehicle) {
    console.log(`${obj.name}`);
  }
  printValue(car); // 따라서 이것도 가능함.
  printValue(vehicle);
}
