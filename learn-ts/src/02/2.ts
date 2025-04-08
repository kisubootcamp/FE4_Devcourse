{
  // 객체
  // 객체의 키 값은 문자열, 값은 절대 올 수 없다.
  let obj: Record<string, never> = {};

  let user: { name: string; age: number } = {
    name: 'sucoding',
    age: 20,
  };
  let person: {
    name: string;
    likesFood: string[];
    address: { street: string; city: string };
    isLoggedIn: boolean;
  } = {
    name: 'John',
    likesFood: ['apple', 'banana'],
    address: {
      street: 'gang-nam',
      city: 'seoul',
    },
    isLoggedIn: false,
  };

  let peopleArr: { id: number; name: string }[] = [
    {
      id: 1,
      name: 'sucoding',
    },
    {
      id: 1,
      name: 'sucoding',
    },
  ];

  let foodArr: { id: number; foods: string[] }[] = [
    { id: 1, foods: ['apple'] },
    { id: 2, foods: ['banana'] },
  ];
}
