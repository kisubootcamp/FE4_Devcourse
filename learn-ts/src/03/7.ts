{
  type Greet = (name: string) => string;
  const greet: Greet = (name) => `Hello, ${name}`;

  type Point = [number, number, number];

  let point: [number, number] = [10, 20]; // x좌표, y좌표
  let point2: number[] = [10, 20]; // x좌표, y좌표

  let point3: Point = [10, 20, 30]; // x좌표, y좌표
  let point4: Point = [10, 20, 30]; // x좌표, y좌표
  let point5: Point = [10, 20, 30]; // x좌표, y좌표
  let point6: Point = [10, 20, 30]; // x좌표, y좌표

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
