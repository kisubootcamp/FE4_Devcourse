{
  // 함수 타입 별칭
  type SumFunc = (n1: number, n2: number) => number;
  const sum: SumFunc = function sum(n1, n2) {
    return n1 + n2;
  };
}

{
  // 튜플 타입 별칭
  type Point = [number, number];
  const point: [number, number] = [10, 15];
  const point2: number[] = [10, 15];
  const point3: Point = [10, 15];
}

{
  // 인터섹션 타입 별칭
  type Nameable = {
    name: string;
  };

  type Ageable = {
    age: number;
  };
  type Person = Nameable & Ageable;

  type PersonOther = { name: string } & { age: number };
}

{
  // 키 선택 타입 별칭
  type Person = {
    name: string;
    age: number;
    gender: string;
  };

  // keyof 사용 시 객체 타입이 리터럴로 변환
  type PersonOfkeys = keyof Person; // "name" | "age" | "gender"
  const key: PersonOfkeys = 'gender';
}

{
  // 객체 선택 타입 별칭
  const user = {
    name: 'su',
    age: 20,
  };

  type User = typeof user; // typeof 타입 추출

  const user2: User = {
    name: 'a',
    age: 30,
  };
}

{
  // 재귀 타입 별칭
  type Category = {
    name: string;
    subCategory: { name: string; subCategory?: { name: string }[] }[];
  };

  type Category3 = {
    name: string;
    subCategory?: Category3[];
  };

  const category: Category = {
    name: 'Electornics',
    subCategory: [
      {
        name: 'Phones',
      },
      {
        name: 'Laptop',
        subCategory: [
          {
            name: 'Gaming Laptop',
          },
        ],
      },
    ],
  };
}
