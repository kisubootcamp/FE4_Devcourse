{
  type Greet = (name: string) => string;
  const greet: Greet = (name) => `Hello, ${name}`;

  type Point = [number, number]; // x좌표, y좌표의 튜플
  let point: Point = [10, 20]; // 좀 더 좌표라는 개념이 명시됨
  let point2: number[] = [10, 20];

  type PointXYZ = [number, number, number];
  let point3: PointXYZ = [10, 20, 30];

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
  let myOrder: OrderBook = {
    orderId: "ord-123",
    items: [
      {
        id: 1,
        name: "코딩 자율학습 HTML+CSS+자바스크립트",
        price: 20000,
      },
      {
        id: 2,
        name: "워렌버핏의 경제 한 스푼",
        price: 12500,
      },
    ],
  };
}
