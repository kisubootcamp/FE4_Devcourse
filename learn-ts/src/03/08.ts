{
  type Greet = (name: string) => string;
  const greet: Greet = (name) => `Hello, ${name}`;

  type Point = [number, number];
  let point1: [number, number] = [10, 20];
  let point2: number[] = [10, 20];
  let point3: Point = [10, 20];

  //
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
  let aUserOrder: OrderBook = {
    orderId: 'ord-123',
    items: [
      {
        id: 1,
        name: '코딩자율학습',
        price: 28000,
      },
      {
        id: 2,
        name: '아는만큼 보이는',
        price: 28000,
      },
    ],
  };
}
