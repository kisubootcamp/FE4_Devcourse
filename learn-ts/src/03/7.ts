{
  type Greet = (name: string) => string;
  const greet: Greet = (name) => `Hello, ${name}`;

  type Point = [number, number, number];
  let point: [number, number] = [10, 20]; // x좌표, y좌표
  let point2: number[] = [10, 20]; // x좌표, y좌표
  // 고정된 자릿수라는 걸 인지시키기 위해 튜플 형식을 사용함 (x, y 2개만 받기 위해)
  // 물론 push로 추가할 수 있지만, 처음에 호출할 때 2개만 받을 수 있음.
  // 시각적으로 Point(좌표)라는 의미로 보임.

  // 타입 별칭을 이용하면 유지보수가 쉬워진다는 장점이 있음
  let point3: Point = [10, 20, 30]; // x좌표, y좌표, z좌표

  // 별도의 타입으로 분리만 해줘도 확장성이 매우 좋아짐
  // -> 실무에서는 100% 분리해서 사용한다고 생각하면 됨 !!!
  // readonly나 옵셔널 속성(?)은 객체 타입이라면 얼마든지 사용 가능 (타입 별칭이나 인터페이스에서만 사용 가능한 게 아님)
  type BookItem = {
    readonly id: number;
    name: string;
    price: number;
    releaseDate?: Date;
  };

  type OrderBook = {
    orderId: string;
    items: BookItem[];
  };

  let myOrder: OrderBook = {
    orderId: "ord-123",
    items: [
      {
        id: 1,
        name: "코딩 자율학습 HTML+CSS+자바스크립트",
        price: 28000,
      },
      {
        id: 2,
        name: "아는 만큼 보이는 프런트엔드 개발",
        price: 28000,
      },
    ],
  };

  // const를 사용하면 굉장히 특별한 타입으로 변경이 됨.
  // const는 어차피 재할당이 안 되기 때문에 한 번 들어간 값이 바뀔 일이 없음.
  // 리터럴 타입 -> 값 자체를 타입으로 사용하는 것.
  // const는 리터럴 타입으로 추론됨. (객체나 배열 같은 참조 자료형 제외)
  // -> 객체나 배열은 재할당은 안 되지만 추가나 변경은 되므로 제외되는 것.
  const num: 10 = 10;
  const str = "A";

  let num2: 5 = 5;
  // num2 = 1; // 에러
  // num2 = 2; // 에러
  num2 = 5;

  let bool: true = true;
  bool = true;

  const obj = { name: "yubin" };
  obj.name = "yuri";
  const arr = [1, 2, 3];
}
