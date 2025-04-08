{
  const user: {
    name: string;
    age: number;
  } = {
    name: "ji",
    age: 29,
  };

  const userObj: {
    id: number;
    name: string;
    address: {
      zopCode: number;
      street: string;
    };
  } = {
    id: 1,
    name: "yoon",
    address: {
      zopCode: 15823,
      street: "Gunpo",
    },
  };
  // 변수에 할당되어 있는 코드를 그대로 복사해서 타입을 지정해주면 편하다.
}
