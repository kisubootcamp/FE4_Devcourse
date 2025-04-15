{
  type Greet = (name: string) => string;
  const greet: Greet = (name) => `Hello, ${name}`;

  type Point = [number, number];
  let point: number[] = [10, 20]; // x좌표, y좌표
  let point2: Point = [10, 20];

  type BookItem = { id: number; name: string; price: number };
  type OrderBook = {
    orderId: string;
    items: BookItem[];
  };
  
  let myOrder: OrderBook = {
    orderId: 'ord-123',
    items: [
      {
        id: 1,
        name: '코딩 자율학습 HTML+CSS+자바스크립트',
        price: 28000,
      },
      {
        id: 2,
        name: '아는 만큼 보이는 프런트엔드 개발',
        price: 28000,
      },
    ],
  };
}
