{
  type Greet = (name: string) => string;
  const greet: Greet = (name) => `Hello, ${name}`;

  type Point = [number, number, number];
  let point: [number, number] = [10, 20]; //x좌표 ,y좌표 number[]보다 값 2개임을 잘 보여줌
  //point.push(30); //타입스크립트의 문법적 허용
  let point2: number[] = [10, 20];

  let point3: Point = [10, 20, 30]; //x좌표, y좌표, z좌표
  let point4: Point = [10, 20, 30];

  //readonly, ?는 타입별칭에만 사용할 수 있는게 아니라 객체타입이라면 어디서든 사용가능
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
    orderId: string;
    items: {
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
      {
        id: 2,
        name: "아는 만큼 보이는 프런트엔드 개발",
        price: 28000,
      },
    ],
  };

  let cUserOrder: {
    orderId: string;
    items: {
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
      {
        id: 2,
        name: "아는 만큼 보이는 프런트엔드 개발",
        price: 28000,
      },
    ],
  };
}
