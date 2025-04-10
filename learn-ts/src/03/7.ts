{
  type Greet = (name: string) => string;
  const greet: (name: string) => string = (name) => `Hello, ${name}`;
  const greet2: Greet = (name) => `Hello, ${name}`;

  type Point = [number, number];
  let point: [number, number] = [10, 20]; //x좌표, y좌표
  let point2: Point = [10, 20];

  type BookItem = {
    readonly id: number;
    name: string;
    price: number;
    relaseDate?: Date;
  };

  type OrderBook = {
    orderId: string;
    items: BookItem[];
  };

  let aUserOrder: OrderBook = {
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

  let bUserOrder: {
    readonly orderId: string;
    items?: {
      id: number;
      name: string;
      price: number;
    }[];
  } = {
    orderId: "ord-123",
    items: [
      {
        id: 1,
        name: "코딩 자율학습 HTML+CSS+자바스크립트",
        price: 28000,
      },
    ],
  };
}
{
  //리터럴 타입 -> 값 자체를 타입으로 사용하는 것
  const num = 10;
  const str = "A";

  let num2: 5 = 5;
  num2 = 1;
  num2 = 2;
  num2 = 5;

  let bool: true = true;
  bool = true;
}
