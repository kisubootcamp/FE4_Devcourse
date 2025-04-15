{
  const obj: {
    name: string;
    age?: number;
  } = {
    name: "a",
    age: 20,
  };

  // 옵셔널 프로퍼티가 아니면 삭제가 안된다. 물론 추가도 안된다.
  delete obj.age;

  // 범용적인 타입 지정 방법
  // 인덱스 시그니처
  const obj1: {
    // 타입이 유니온 타입으로 들어올 경우 키값이 확실한것은 적어주는게 좋음
    // 안그러면 타입 가드를 활용하여 1번 더 검증을 거쳐야 하기 떄문
    [key: string]: string | number;
  } = {
    name: "a",
    age: 20,
  };

  obj1.gender = "male";
  delete obj1.age;
}

console.log("-------------------------------------");

{
  // d인덱스 시그니처는 interface, type 를 사용가능.
  // 객체의 타입을 지정 할떄 사용
  interface ObjType {
    [key: string]: string | number;
  }

  type ObjType2 = {
    [key: string]: string | number;
  };

  const obj: ObjType | ObjType2 = {
    name: "a",
    age: 20,
  };
}

console.log("-------------------------------------");

{
  // 1.
  // MS 다닌 헝가리 출신 개발자가 아이디어를 냄
  // 타입 앞에 접두어를 붙여주자
  // 헝가리안 표기법
  // number -> nNumber
  // num -> fNumber
  // name -> strName
  // 한때 인기있었지만 지금은 지양하는 방법
  type TUser = {};
  interface IUser {}

  const user: TUser = {};
  const user1: IUser = {};

  // 요즘은 식별자의 이름을 의미있게 잘 지어주는게 추세
  // 의미있는 식별자라도 구분을 위해 I 또는 T 를 넣진 않음
  // 그냥 타입을 보기위해 직접 가서 봐라 ~ ㅋㅋ
}

console.log("-------------------------------------");

{
  // 구별된 유니온 타입
  interface User {
    name: string;
  }

  interface Car {
    name: string;
    speed: number;
  }

  const user: User = { name: "PSY" };
  const car: Car = { name: "BMW", speed: 100 };

  // 유니온 타입의 중복된 프로퍼티가 있다면 타입 가드를 활용하여 중복된 프로퍼티를 제거하고 사용
  function printValue(obj: User | Car) {
    // 타입 가드
    if ("speed" in obj) console.log(obj.speed);
    else console.log(obj.name);
  }

  printValue(user);
  printValue(car);
}

console.log("-------------------------------------");

{
  //
  type Car = {
    name: string;
    speed: number;
  };

  type Vehicle = {
    name: string;
    speed: number;
  };

  let car: Car = { name: "BMW", speed: 100 };
  let vehicle: Vehicle = { name: "honda", speed: 200 };

  // 구조적 타이핑
  // 식별자 이름만 다르고 구조가 같아서 할당 가능
  // 내가 이름을 개명한다 해서 내가 내가 아니게 되는게 아니기 때문
  car = vehicle;
  vehicle = car;

  function printValue(obj: Car) {
    console.log(`${obj.name} ${obj.speed}`);
  }

  // 구조적으로 타입이 같으므로 매개변수 전달 가능
  printValue(car);
  printValue(vehicle);
}
