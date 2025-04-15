{
  type Greet = (name: string) => string;
  const greet: Greet = (name) => `Hello, ${name}`;
}

{
  type Point = [number, number, number]; //가독성이 좋아짐

  let point: [number, number] = [10, 20]; // x좌표, y좌표
  let point2: number[] = [10, 20]; // x좌표, y좌표

  let point3: Point = [10, 20, 30];
  let point4: Point = [10, 20, 30];
  let point5: Point = [10, 20, 30];
}

{
  type BookItem = {
    readonly id: number; // id값 수정 x. 타입별칭이라서 사용할 수 있는거 아님. 객체타입이라면 사용 가능
    name: string;
    price: number;
    relaseDate?: Date;
  };

  type OrderBook = {
    orderId: string;
    items: BookItem[];
  };

  let aUserOrdeer: OrderBook = {
    orderId: "ord-123",
    items: [
      {
        id: 1,
        name: "코딩 자율학습 HTML+CSS+자바스크립트",
        price: 28000,
      },
      {
        id: 2,
        name: "아는 만큼 보이는 프론트엔드 개발",
        price: 28000,
      },
    ],
  };
}
