{
  type Greet = (name: string) => string;
  const greet: Greet = (name) => `Hello, ${name}`;

  type Point = [number, number, number];
  let point: [number, number] = [10, 20];
  let point2: number[] = [10, 20];

  let point3: Point = [10, 20, 30];
  let point4: Point = [10, 20, 30];
  point.push(30);

  type BookItem = {
    id: number;
    name: string;
    price: number;
    relaseDate?: Date;
  };
  type OrderBook = {
    orderId: string;
    items: BookItem[];
  };
  let userOrder: OrderBook = {
    orderId: "ord-123",
    items: [
      {
        id: 1,
        name: "코딩 자율학습 HTML+CSS+자바스크립트",
        price: 28000,
      },
      {
        id: 2,
        name: "아는만큼 보이는 프런트엔드 개발",
        price: 27000,
      },
    ],
  };
}
