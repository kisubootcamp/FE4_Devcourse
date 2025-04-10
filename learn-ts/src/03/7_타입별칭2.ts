{
  // 인터섹션 타입으로 객체끼리 연결하기
  type User = {
    name: string;
    age: number;
  };
  type Developer = {
    skill: string;
  };

  let human: User = {
    name: 'sucoding',
    age: 20,
  };

  let developer01: User & Developer = {
    name: 'sucoding',
    age: 20,
    skill: 'TypeScript',
  };
}
