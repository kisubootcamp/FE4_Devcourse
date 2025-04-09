{
  type Greet = (name: string) => string;
  const greet: Greet = (name) => `Hello, ${name}`;

  type Point = [number, number];
  let point1: Point = [10, 20];
  let point2: Point = [20, 20];
  let point3: Point = [50, 20];

  type BookItem = {
    id: number;
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
        name: "코딩 자유학습 HTML+CSS+자바스크립트",
        price: 28000,
      },
      {
        id: 2,
        name: "아는 만큼 보이는 프런트엔드 개발",
        price: 28000,
      },
    ],
  };
}
